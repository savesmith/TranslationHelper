const { Events } = require("discord.js");
const { translate } = require("../translator")


module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
        if (message.author.bot) return;
        try {
            const content = message.toString();
            const thread = await message.startThread({
                name: '>'
            });
            const translation = await translate(message.content, 'ja', 'en-US');
            console.log(translation);
            thread.send(`|| ${translation.responseData.translatedText} ||`);
        } catch (e) {
            console.error(e);
        }
    },
};