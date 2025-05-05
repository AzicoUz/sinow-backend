// api/submit.js

const axios = require('axios');

module.exports = async(req, res) => {
    if (req.method === 'POST') {
        const { name, fatherName, birthYear, passport, phoneCode, phone, payment } = req.body;

        const message = `O‘quvchi Ma’lumotlari:\nIsm: ${name}\nOtasining Ismi: ${fatherName}\nTug‘ilgan Yil: ${birthYear}\nPassport: ${passport}\nTelefon: ${phoneCode} ${phone}\nTo‘lov Karta: ${payment}`;

        try {
            await axios.post(`https://api.telegram.org/bot7594079987:AAFtnDxMMHKoeE4Z64FrLVcGv3zSi0znyTY/sendMessage`, {
                chat_id: 6361991111,
                text: message
            });
            res.status(200).json({ message: 'Ma\'lumot yuborildi!' });
        } catch (error) {
            res.status(500).json({ message: 'Xato yuz berdi!' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
};