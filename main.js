var roleFarm = require('roleFarm');
var roleUpgrade = require('roleUpgrade');

//respawn unité
var cptNinja = _.filter(Game.creeps,(monCreep)=>monCreep.memory.role=='farm');
if(cptNinja.length<2)
{
    let nom = 'Genin'+Game.time;
    Game.spawns['Konoha'].spawnCreep([WORK,WORK,CARRY,MOVE], nom,{memory: {role: 'farm'}});
}

if(Game.spawns['Konoha'].spawning)
{
    Game.spawns['Konoha'].room.visual.text("Spawn de "+Game.spawns['Konoha'].spawning.name.toString,15,15,{backgroundColor : '#f442cb'});
}
    
// action
for(var i in Game.creeps)
{
    let monCreep=Game.creeps[i];
    if(monCreep.memory.role=='farm')
    roleFarm.run(monCreep);
    if(monCreep.memory.role=='upg')
    roleUpgrade.run(monCreep);
}

