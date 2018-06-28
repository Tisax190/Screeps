/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('roleBuilder');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
    run: function (monCreep)
    {
        if(monCreep.memory.mission && monCreep.carry.energy==0)
        {
            monCreep.memory.mission=false;
        }
        if(!monCreep.memory.mission && monCreep.carryCapacity==monCreep.carry.energy)
        {
            monCreep.memory.mission=true;
        }
        
        if(monCreep.memory.mission)
        {
            let source=monCreep.room.find(FIND_CONSTRUCTION_SITES);
            if(source.length)
            {
                if(monCreep.build(source[0])==ERR_NOT_IN_RANGE)
                {
                    monCreep.moveTo(source[0],{visualizePathStyle: {stroke: '#e8f442'}});
                }
            }
        }
        else
        {
            let source=monCreep.room.find(FIND_SOURCES);
            if(monCreep.harvest(source[0])==ERR_NOT_IN_RANGE)
            {
                monCreep.moveTo(source[0],{visualizePathStyle: {stroke: '#e8f442'}});
            }
        }
    }
};