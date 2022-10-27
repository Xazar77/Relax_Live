
const getPhoneNumber = () => {
    const phoneBtn = document.querySelector('.header-contacts__arrow');
    const phoneNumberBlock = document.querySelector('.header-contacts__phone-number-accord');
    const phoneNumber = document.querySelector('.header-contacts__phone-number-accord > a');

    phoneBtn.addEventListener('click', () => {
        phoneNumberBlock.classList.toggle('active');
        phoneNumber.classList.toggle('active');
    });
};

export default getPhoneNumber