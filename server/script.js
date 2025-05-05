document.addEventListener('DOMContentLoaded', function () {
    const paymentMethod = document.getElementById('paymentMethod');
    const humoFields = document.getElementById('humoFields');
    const uzcardFields = document.getElementById('uzcardFields');
    const visaFields = document.getElementById('visaFields');

    paymentMethod.addEventListener('change', function () {
        humoFields.style.display = 'none';
        uzcardFields.style.display = 'none';
        visaFields.style.display = 'none';

        if (paymentMethod.value === 'Humo') {
            humoFields.style.display = 'block';
        } else if (paymentMethod.value === 'UzCard') {
            uzcardFields.style.display = 'block';
        } else if (paymentMethod.value === 'Visa') {
            visaFields.style.display = 'block';
        }
    });
});
