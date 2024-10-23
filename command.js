const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'create',
    description: 'Creates a new short URL',
  },
];

const rest = new REST({ version: '10' }).setToken("MTI5ODY4ODI2NjgxMTQ3Mzk0MQ.GF11JZ.oG-RFzil0AlI5gSBEurxDicBAN4RrUzZ_O23zU");

async function registerCommands() {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands("1298688266811473941"), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
}

registerCommands();
