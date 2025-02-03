const venom = require('venom-bot');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;  // A porta será configurada pelo Render

venom.create().then(client => start(client));

function start(client) {
  client.onMessage((message) => {
    if (message.body.toLowerCase() === 'oi') {
      client.sendText(message.from, 'Olá! Como posso ajudar?');
    }
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
