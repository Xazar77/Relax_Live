

const menu = () => {

    const menuBtn = document.querySelector('.menu');
    const popupMenu = document.querySelector('.popup-dialog-menu');
    const popupClose = popupMenu.querySelector('.close-menu');
   
    menuBtn.addEventListener('click', () => {
        popupMenu.classList.toggle('popup-dialog-menu-active');
    });
    popupClose.addEventListener('click', () => {
        popupMenu.classList.remove('popup-dialog-menu-active');
    });

   
};
export default menu;