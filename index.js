const Discord = require('discord.js');
const client = new Discord.Client();
const exec = require('child_process').exec;
const fs = require('fs');


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({ game: { name: 'TCPGuard.com', type: 3 } });
});


client.on('message', msg =>{
    if(msg.content === '+restart'){
        msg.channel.send("** Server Restarting...Please Wait**")
        exec('qm stop 100') //any proxmox shell command + machine id on proxmox
        sleep(10*1000);
        msg.channel.send("**1 - Shutdown Completed ... Please Wait**")
        exec('qm start 100') //any proxmox shell command + machine id on proxmox
        sleep(15*1000);
        msg.channel.send("**2 - Server Started !**")

    }
})


            client.login("tokenhere");
