var roleFarm = require('roleFarm');

//respawn unité
var cptNinja = _.filter(Game.creeps,(monCreep)=>monCreep.memory.role=='farm');
if(cptNinja.length<2)
{
    var nom = 'Genin'+Game.time;
    Game.spawns['Konoha'].spawnCreep([WORK,WORK,CARRY,MOVE], nom,{memory: {role: 'farm'}});
}

if(Game.spawns['Konoha'].spawning)
{
    Game.spawns['Konoha'].room.text("Spawn de "+Game.spawns['Konoha'].spawning.name.toString,33,26,{backgroundColor : '#f442cb'});
}
    
// action
for(var i in Game.creeps)
{
    var monCreep=Game.creeps[i];
    roleFarm.run(monCreep);
}

