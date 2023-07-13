const base_url = "https://api.mymemory.translated.net";
const { request } = require('undici');
require('dotenv').config();

const token = process.env.DISCORD_TOKEN

const translate = async (message, source, dest) => {
    console.log('translating', {
        message,
        source,
        dest
    });

    const url = encodeURI(`${base_url}/get?q=${message}&langpair=${source}|${dest}`);
    const response = await request(url);
    return response.body.json();
}

module.exports = {
    translate
};
