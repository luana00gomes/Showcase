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
      href: "/pricing",
    },
    {
      label: "Keras",
      href: "/blog",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    linkedin: "https://www.linkedin.com/in/luana-g/",
    whatsApp: "https://w.app/f8iQ3s",
    sponsor: "https://patreon.com/jrgarciadev",
    ufsc: "https://en.ufsc.br/"
  },
};
