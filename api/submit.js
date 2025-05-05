const express = require("express");
const router = express.Router();

// POST so‘rovni qabul qilish
router.post("/", (req, res) => {
    const { ism, familiya, sinf, telefon } = req.body;

    if (!ism || !familiya || !sinf || !telefon) {
        return res.status(400).json({ message: "Barcha maydonlar to‘ldirilishi kerak" });
    }

    console.log("Yangi o‘quvchi:");
    console.log(`Ism: ${ism}`);
    console.log(`Familiya: ${familiya}`);
    console.log(`Sinf: ${sinf}`);
    console.log(`Telefon: ${telefon}`);

    res.status(200).json({ message: "Ma'lumotlar muvaffaqiyatli qabul qilindi!" });
});

module.exports = router;