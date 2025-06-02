export class Header {
  constructor() {
    this.menuToggle = document.querySelector('.header__menu-toggle');
    this.headerActions = document.querySelector('.header__actions');
    this.alert = document.querySelector('.alert-emergencias-ativas');
    this.header = document.querySelector('.header');
    this.lastScrollPosition = 0;

    if (this.menuToggle && this.headerActions) {
      this.init();
    }
  }

  init() {
    this.menuToggle.addEventListener('click', () => this.toggleMenu());
    
    document.querySelectorAll('.header__nav-link').forEach(link => {
      link.addEventListener('click', () => this.closeMenu());
    });

    if (window.innerWidth <= 768) {
      this.setupScrollBehavior();
    }
    
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 768) {
        this.setupScrollBehavior();
      } else {
        this.removeScrollBehavior();
      }
    });
  }

  setupScrollBehavior() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
    this.header.classList.add('with-alert');
  }

  removeScrollBehavior() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
    this.alert.classList.remove('hidden');
    this.header.classList.remove('with-alert');
  }

  handleScroll() {
    const currentScrollPosition = window.scrollY;
    
    if (currentScrollPosition > this.lastScrollPosition) {
      if (currentScrollPosition > 50) {
        this.alert.classList.add('hidden');
        this.header.classList.remove('with-alert');
      }
    } else {
      if (currentScrollPosition < 10) {
        this.alert.classList.remove('hidden');
        this.header.classList.add('with-alert');
      }
    }
    
    this.lastScrollPosition = currentScrollPosition;
  }

  toggleMenu() {
    const isExpanded = this.menuToggle.getAttribute('aria-expanded') === 'true';
    this.menuToggle.setAttribute('aria-expanded', !isExpanded);
    this.headerActions.setAttribute('data-visible', !isExpanded);
    document.body.style.overflow = isExpanded ? '' : 'hidden';
  }

  closeMenu() {
    this.menuToggle.setAttribute('aria-expanded', 'false');
    this.headerActions.setAttribute('data-visible', 'false');
    document.body.style.overflow = '';
  }
}