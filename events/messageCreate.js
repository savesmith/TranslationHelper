const { Events } = require("discord.js");
const { translate } = require("../translator")


module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
        if (message.author.bot) return;

        try {
            const content = message.toString();
            const thread = await message.startThread({
                name: content.substring(0, 100),
            });
            const translation = await translate(message.content, 'ja', 'en-US');
            thread.send(`|| ${translation.responseData.translatedText} ||`);
        } catch (e) {
            console.error(e);
        }
    },
};