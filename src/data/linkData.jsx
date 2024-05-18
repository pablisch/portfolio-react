export const linkData = [
  {
    // GITHUB
    name: 'github',
    url: 'https://github.com/pablisch',
    class: ['nav-btn', 'github-link-btn'],
    // class: 'nav-btn github-link-btn',
    burgerClass: ['burger-btn', 'github-link-btn', 'external-burger-btn'],
    avatarClass: 'avatar-hovered-github-link',
    img: {
      src: 'github-logo.png',
      alt: 'GitHub logo',
      id: 'github-logo',
      class: ['github-logo'],
      avatarClass: '',
    },
  },
  {
    // LINKEDIN
    name: 'linkedIn',
    url: 'https://www.linkedin.com/in/pablo-joyce/',
    class: ['nav-btn', 'linkedin-link-btn'],
    burgerClass: ['burger-btn', 'linkedin-link-btn', 'linkedin-burger-btn'],
    avatarClass: 'avatar-hovered-github-link',
    img: {
      src: 'linkedin-trans.png',
      alt: 'LinkedIn logo',
      id: 'linkedin-logo',
      class: ['linkedin-logo'],
      avatarClass: 'avatar-hovered-linkedin-logo',
    },
  }
];

export default linkData;