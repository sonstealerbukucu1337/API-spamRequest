// ne kadar webhook açarsan o kadar api urlye key spam atar

const axios = require('axios');

const api_url = "http://20.151.152.98:1337";
const webhooks = ['https://discord.com/api/webhooks/1301204228081057864/mNBwwbKgViQ41GpM9uYYXQYa35WSh06llLRLpGGOequPiX60sZEftPzBUGlt5PMVTLHb'];

function generateRandomKey(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomKey = '';
    for (let i = 0; i < length; i++) {
        randomKey += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomKey;
}

async function createAndSendKey(webhook) {
    const generatedKey = generateRandomKey(16);
    const data = { key: generatedKey, webhook };

    try {
        const response = await axios.post(`${api_url}/key/add`, data);
        
        if (response.data.success) {
           
            const embedWebhookMessage = { content: `@everyone kahpelere kar yagiyor ${generatedKey}` };
            await axios.post(`${webhook}`, embedWebhookMessage);

            console.log(`key gönderildi: ${generatedKey}`);
        }
    } catch (error) {
        console.error("Hata:", error.message);
    }
}

setInterval(() => {
    webhooks.forEach(webhook => {
        createAndSendKey(webhook);
    });
}, 1000);
