/**
 * One nav tree, rendered two ways. `Header` reads it for the simple desktop
 * nav today; `MegaMenu` and `MobileNav` read the same tree in Phase 4, so the
 * upgrade is additive rather than a rewrite.
 */

export interface NavLink {
  label: string;
  href: string;
  description?: string;
  /** astro-icon name, e.g. 'lucide:wrench'. */
  icon?: string;
}

export interface MegaColumn {
  heading?: string;
  links: NavLink[];
}

export interface MegaPanel {
  kind: 'mega';
  columns: MegaColumn[];
  featured?: {
    title: string;
    body: string;
    href: string;
    cta: string;
  };
}

export interface LinkListPanel {
  kind: 'links';
  links: NavLink[];
}

export interface NavItem {
  label: string;
  /** Present when the top-level item is itself a destination. */
  href?: string;
  panel?: MegaPanel | LinkListPanel;
}

export interface NavigationConfig {
  primary: NavItem[];
  /** Right-hand call to action in the header. */
  cta?: { label: string; href: string };
  footer: { heading: string; links: NavLink[] }[];
  legal: NavLink[];
}

export const navigation: NavigationConfig = {
  primary: [
    { label: 'Home', href: '/' },
    { label: 'Our Services', href: '/our-services/' },
    { label: 'About Us', href: '/about-us/' },
    { label: 'Contact Us', href: '/contact-us/' },
  ],

  cta: { label: 'Call Us: (239) 490-3631', href: 'tel:+12394903631' },

  footer: [
    {
      heading: 'Quick Links',
      links: [
        { label: 'Home', href: '/' },
        { label: 'Our Services', href: '/our-services/' },
        { label: 'About Us', href: '/about-us/' },
        { label: 'Contact Us', href: '/contact-us/' },
      ],
    },
  ],

  legal: [],
};
