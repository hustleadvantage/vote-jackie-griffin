const DONATE_URL = import.meta.env.PUBLIC_DONATE_URL;

export const config = {
  links: {
    donate: DONATE_URL,
    facebook: import.meta.env.PUBLIC_FACEBOOK_URL,
    yardSign: import.meta.env.PUBLIC_YARD_SIGN_URL,
  },
  navigation: {
    links: [
      { text: 'Home', href: '/' },
      { text: 'Issues', href: '/issues' },
      { text: 'Events', href: '/events' },
      { text: 'Get Involved', href: '/get-involved' },
      { text: 'About', href: '/about' },
      { text: 'Contact', href: '/contact' },
    ],
    actions: {
      donate: { url: DONATE_URL, text: 'Donate' },
    },
  },
};
