import { WhatsApp } from "@mui/icons-material";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Luana DEV",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Computer Vision",
      href: "/blog",
    },
    {
      label: "Keras",
      href: "/blog",
    },
    {
      label: "Network",
      href: "/blog",
    },
  ],
  navMenuItems: [
    {
      label: "Computer Vision",
      href: "/blog",
    },
    {
      label: "Keras",
      href: "/blog",
    },
    {
      label: "Network",
      href: "/blog",
    },
  ],
  links: {
    github: "https://github.com/luana00gomes",
    linkedin: "https://www.linkedin.com/in/luana-g/",
    whatsApp: "https://w.app/f8iQ3s",
    sponsor: "https://patreon.com/jrgarciadev",
    ufsc: "https://en.ufsc.br/"
  },
};
