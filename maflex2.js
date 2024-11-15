// basit embed post api urlye boş veri gönderiyor basit işler bunlar cocuklar sevinsin

const axios = require('axios');
const key = "jefflemaflex";
const api_url = "http://89.45.45.77:3000";
async function sendMessage(counter) {
    const embed = {content: `@everyone kahpelere kar yagiyor ${counter}`};
    try {await axios.post(`${api_url}/webhooks/${key}`, embed);} catch (error) {}}
let counter = 1;
setInterval(() => {
    sendMessage(counter);
    counter++;
}, 1);
