module.exports = {
    run: function(monCreep){
        if(monCreep.carryCapacity>monCreep.carry.energy)
        {
            let resource = monCreep.pos.findClosestByRange(FIND_SOURCES);
            if(monCreep.harvest(resource)==ERR_NOT_IN_RANGE)
            {
                monCreep.moveTo(resource,{visualizePathStyle: {stroke: '#fff'}});
            }
        }
        else
        {
            let source = monCreep.room.find(FIND_STRUCTURES,{filter : (structure)=>{return (structure.structureType==STRUCTURE_EXTENSION || structure.structureType==STRUCTURE_SPAWN || structure.structureType==STRUCTURE_TOWER)&& structure.energy<structure.energyCapacity}});
            if(source.length>0)
            {
                if(monCreep.transfer(source[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    monCreep.moveTo(source[0], {visualizePathStyle: {stroke: '#fff'}});
                }
            }
        }
    }
};