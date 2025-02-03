const venom = require('venom-bot');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;  // A porta será configurada pelo Render

// Inicia o venom-bot e faz o processamento de mensagens
venom.create().then(client => start(client)).catch(err => console.log(err));

function start(client) {
  client.onMessage((message) => {
    if (message.body.toLowerCase() === 'oi') {
      client.sendText(message.from, 'Olá! Como posso ajudar?');
    }
  });

  // Ao iniciar, gera o QR Code para autenticação
  client.onStateChange((state) => {
    if (state === 'QR_CODE') {
      console.log('QR Code gerado: ', client.getQrCode());
    }
  });
}

// Configura o servidor Express
app.get('/', (req, res) => {
  res.send('Bot do WhatsApp está rodando!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
