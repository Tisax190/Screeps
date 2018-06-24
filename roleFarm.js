/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('roleFarm');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
    run: function(monCreep){
        if(monCreep.carryCapacity>monCreep.carry.energy)
        {
            var resource = monCreep.pos.findClosestByRange(FIND_SOURCES);
            if(monCreep.harvest(resource)==ERR_NOT_IN_RANGE)
            {
                monCreep.moveTo(resource,{visualizePathStyle: {stroke: '#fff'}});
            }
        }
        else
        {
            if(monCreep.transfer(Game.spawns['Konoha'],RESOURCE_ENERGY)==ERR_NOT_IN_RANGE)
            {
                monCreep.moveTo(Game.spawns['Konoha']);
            }
        }
        if(monCreep.ticksToLive<50)
        {
            monCreep.moveTo(Game.spawns['Konoha']);
            Game.spawns['Konoha'].renewCreep(monCreep);
        }
    }
};