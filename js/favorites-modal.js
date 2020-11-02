(() => {
    const menuBtnRef = document.querySelector('[favorites-button]');
    const mobileMenuRef = document.querySelector('[favorites-modal-menu]');
    
    menuBtnRef.addEventListener('click', () => {
        const expanded =
            menuBtnRef.getAttribute('aria-expanded') == true || false;
        
        menuBtnRef.setAttribute('aria-expanded', !expanded);

        mobileMenuRef.classList.toggle('is-open');
    });
})();