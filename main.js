    var roleFarm = require('roleFarm');
    var roleUpgrade = require('roleUpgrade');
    var roleBuilder = require('roleBuilder');
    var buildExtension = require('buildExtension');
    
    for(var name in Memory.creeps) {
            if(!Game.creeps[name]) {
                delete Memory.creeps[name];
            }
    }
    //respawn unité
    var cptNinja = _.filter(Game.creeps,(monCreep)=>monCreep.memory.role=='farm');
    if(cptNinja.length<2)
    {
        let nom = 'Genin'+Game.time;
        Game.spawns['Konoha'].spawnCreep([WORK,WORK,CARRY,MOVE], nom,{memory: {role: 'farm'}});
    }
    
    cptNinja = _.filter(Game.creeps,(monCreep)=>monCreep.memory.role=='upg');
    if(cptNinja.length<2)
    {
        let nom = 'Chûnin'+Game.time;
        Game.spawns['Konoha'].spawnCreep([WORK,WORK,CARRY,MOVE], nom,{memory: {role: 'upg'}});
    }
    
    cptNinja = _.filter(Game.creeps,(monCreep)=>monCreep.memory.role=='build');
    if(cptNinja.length<2)
    {
        let nom = 'Jônin'+Game.time;
        Game.spawns['Konoha'].spawnCreep([WORK,WORK,CARRY,MOVE], nom,{memory: {role: 'build'}});
    }
    
    if(Game.spawns['Konoha'].spawning)
    {
        Game.spawns['Konoha'].room.visual.text("Spawn de "+Game.spawns['Konoha'].spawning.name,15,15,{backgroundColor : '#f442cb'});
    }
        
    // action
    for(let i in Game.creeps)
    {
        let monCreep=Game.creeps[i];
        if(monCreep.ticksToLive<50)
            {
                monCreep.moveTo(Game.spawns['Konoha']);
                Game.spawns['Konoha'].renewCreep(monCreep);
            }
        if(monCreep.memory.role=='farm')
        roleFarm.run(monCreep);
        if(monCreep.memory.role=='upg')
        roleUpgrade.run(monCreep);
        if(monCreep.memory.role=='build')
        {buildExtension.buildExtension(monCreep);
        roleBuilder.run(monCreep);}
    }

