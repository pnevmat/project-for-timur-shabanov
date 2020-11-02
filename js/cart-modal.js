(() => {
    const menuBtnRef = document.querySelector('[cart-button]');
    const mobileMenuRef = document.querySelector('[cart-modal-menu]');
    
    menuBtnRef.addEventListener('click', () => {
        const expanded =
            menuBtnRef.getAttribute('aria-expanded') == true || false;
        
        menuBtnRef.setAttribute('aria-expanded', !expanded);

        mobileMenuRef.classList.toggle('is-open');
    });
})();