const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('translater')
        .setDescription('translates'),
    async execute(interaction) {
        await interaction.reply('|| TRANSLATION ||');
    },
};
