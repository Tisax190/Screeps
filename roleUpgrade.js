/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('roleUpgrade');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
    run: function(monCreep)
    {
        if(monCreep.carry.energy == 0 && monCreep.memory.mission)
        {
            monCreep.memory.mission=false;
        }
        if(monCreep.carry.energy == monCreep.carryCapacity && !monCreep.memory.mission)
        {
            monCreep.memory.mission=true;
        }
        if(monCreep.memory.mission)
        {
            if(monCreep.upgradeController(monCreep.room.controller)==ERR_NOT_IN_RANGE)
            {
                monCreep.moveTo(monCreep.room.controller,{visualizePathStyle: {stroke: '#ff871e'}});
            }
        }
        else
        {
            let source = monCreep.pos.findClosestByRange(FIND_SOURCES);
            if(monCreep.harvest(source)==ERR_NOT_IN_RANGE)
            {
                monCreep.moveTo(source,{visualizePathStyle: {stroke : '#ff871e'}});
            }
        }
    }
};