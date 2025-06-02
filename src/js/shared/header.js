export class Header {
  constructor() {
    this.menuToggle = document.querySelector('.header__menu-toggle');
    this.headerActions = document.querySelector('.header__actions');
    
    if (this.menuToggle && this.headerActions) {
      this.init();
    }
  }

  init() {
    this.menuToggle.addEventListener('click', () => this.toggleMenu());
    
    // Fechar menu ao clicar em links (mantido como útil)
    document.querySelectorAll('.header__nav-link').forEach(link => {
      link.addEventListener('click', () => this.closeMenu());
    });
  }

  toggleMenu() {
    const isOpen = this.menuToggle.getAttribute('aria-expanded') === 'true';
    this.menuToggle.setAttribute('aria-expanded', !isOpen);
    this.headerActions.setAttribute('data-visible', !isOpen);
    document.body.style.overflow = isOpen ? '' : 'hidden';
  }

  closeMenu() {
    this.menuToggle.setAttribute('aria-expanded', 'false');
    this.headerActions.setAttribute('data-visible', 'false');
    document.body.style.overflow = '';
  }
}