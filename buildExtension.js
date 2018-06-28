/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('buildExtension');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
    buildExtension: function(monCreep)
    {
        let xSpawn=Game.spawns['Konoha'].pos.x;
        let ySpawn=Game.spawns['Konoha'].pos.y;
        let arrayEx=[[xSpawn-1,ySpawn-1],[xSpawn,ySpawn-1],[xSpawn+1,ySpawn-1],
                  [xSpawn-1,ySpawn],[xSpawn+1,ySpawn]];
                  //[xSpawn-1,ySpawn+1],[xSpawn,ySpawn+1],[xSpawn+1,ySpawn+1]];
        arrayEx.forEach(function (item,index,arr){
            monCreep.room.createConstructionSite(item[0],item[1],STRUCTURE_EXTENSION);
            }
        )
    }
};