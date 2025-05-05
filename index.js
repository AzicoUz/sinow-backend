// Express va kerakli kutubxonalarni chaqirish
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// CORSni yoqish
app.use(cors());

// URL-encoded va JSON formatlarini qabul qilish
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// POST so'rovini qabul qilish
app.post('/submit', (req, res) => {
    // Frontenddan kelgan ma'lumotlarni konsolga chiqarish
    console.log(req.body);

    // Javob yuborish
    res.send('Ma\'lumotlar muvaffaqiyatli qabul qilindi!');
});

// Serverni ishga tushurish
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server ${PORT}-portda ishlayapti`);
});

