const venom = require('venom-bot');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

venom.create().then(client => start(client));

function start(client) {
  client.onMessage((message) => {
    if (message.body.toLowerCase() === 'oi') {
      client.sendText(message.from, 'Olá! Como posso ajudar?');
    }
  });

  // Adicionando um monitoramento do estado para gerar o QR Code
  client.onStateChange((state) => {
    console.log('State change: ', state);
    if (state === 'QR_CODE') {
      console.log('QR Code gerado. Escaneie com o WhatsApp!');
    }
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
