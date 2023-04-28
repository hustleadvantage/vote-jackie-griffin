export const config = {
  navigation: {
    links: [
      { text: 'Home', href: '/' },
      { text: 'Issues', href: '/issues' },
      { text: 'Events', href: '/events' },
      { text: 'Volunteer', href: '/volunteer' },
      { text: 'About', href: '/about' },
      { text: 'Contact', href: '/contact' },
    ],
    actions: {
      donate: { url: import.meta.env.PUBLIC_DONATE_URL, text: 'Donate' },
    },
  },
};
