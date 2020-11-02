(() => {
    const menuBtnRef = document.querySelector('[menu-button]');
    const mobileMenuRef = document.querySelector('[modal-menu]');
    
    menuBtnRef.addEventListener('click', () => {
        const expanded =
            menuBtnRef.getAttribute('aria-expanded') == true || false;
        
        menuBtnRef.setAttribute('aria-expanded', !expanded);

        mobileMenuRef.classList.toggle('is-open');
    });
})();