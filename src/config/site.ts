/**
 * Per-project configuration. This and `navigation.ts` are the two files that
 * must be filled in for every new site. Blank optional values ship nothing —
 * an empty analytics ID means that vendor's script is never emitted.
 */

export interface AnalyticsConfig {
  /** LogDash website ID (`data-website-id`). Blank skips the script. */
  logdash: string;
  ga4: string;
  gtm: string;
  metaPixel: string;
  bingUet: string;
  clarity: string;
}

export type SchemaBusinessType =
  | 'LocalBusiness'
  | 'ProfessionalService'
  | 'HomeAndConstructionBusiness'
  | 'Plumber'
  | 'Electrician'
  | 'RoofingContractor'
  | 'GeneralContractor'
  | 'Dentist'
  | 'Physician'
  | 'Attorney'
  | 'AccountingService'
  | 'InsuranceAgency'
  | 'RealEstateAgent';

export interface SiteConfig {
  /**
   * Absolute origin, no trailing slash. Taken from astro.config `site`
   * (`SITE_URL` at build time, production origin as the local fallback).
   */
  url: string;
  name: string;
  legalName?: string;
  tagline: string;
  description: string;
  locale: string;

  business: {
    schemaType: SchemaBusinessType;
    phone: string;
    /** Digits only, E.164 — used for tel: links. */
    phoneHref: string;
    email: string;
    address: {
      street: string;
      locality: string;
      region: string;
      postalCode: string;
      country: string;
    };
    /** Omit entirely for service-area businesses with no walk-in location. */
    geo?: { latitude: number; longitude: number };
    /** schema.org openingHours strings, e.g. 'Mo-Fr 08:00-17:00'. */
    hours: string[];
    /** Human-readable hours for the footer and contact sidebar. */
    hoursLabel?: string;
    priceRange?: string;
  };

  /** Optional line above the header. */
  announcement?: string;

  /** Google Maps place URL for the public location. */
  mapsUrl?: string;

  /** Designer or agency credit in the footer. */
  credit?: { label: string; href: string };

  /** Places named in copy, used for areaServed schema. */
  areaServed?: { type: 'City' | 'AdministrativeArea'; name: string }[];

  /** Services offered, used for hasOfferCatalog schema. */
  offers?: { name: string; description: string }[];

  social: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    x?: string;
    youtube?: string;
    tiktok?: string;
  };

  /** Absolute or site-relative path to the fallback Open Graph image. */
  defaultOgImage: string;
  /** Alt text for the default Open Graph image. */
  defaultOgImageAlt?: string;

  /** Relative path to the PHP form handler. Blank disables all forms. */
  formEndpoint: string;

  /**
   * Google reCAPTCHA v3 site key (public). Blank skips the widget. The matching
   * secret is configured server-side in ~/private/site-mail.php.
   */
  recaptchaSiteKey: string;

  analytics: AnalyticsConfig;

  verification: {
    google: string;
    bing: string;
    meta: string;
  };

  /** 'none' is correct for US-only clients. Switch to 'banner' only when required. */
  consent: 'none' | 'banner';
}

const PRODUCTION_ORIGIN = 'https://markletile.com';

export const site: SiteConfig = {
  url: (import.meta.env.SITE ?? PRODUCTION_ORIGIN).replace(/\/$/, ''),
  name: 'Markle Tile',
  legalName: 'Markle Tile & Renovation',
  tagline: 'Tile and renovation done right',
  description:
    'Licensed Fort Myers general contractor for tile installation, kitchen and bathroom remodels, windows, doors, and trim. Free estimates. Call (239) 490-3631.',
  locale: 'en-US',

  announcement: 'Servicing the Fort Myers area for over 20 years',

  mapsUrl: 'https://www.google.com/maps/place/Markle+renovations/@26.5813972,-81.8538347,17z',

  credit: {
    label: 'Site Designed By WEB PRO INT',
    href: 'https://www.webpro.com/',
  },

  areaServed: [
    { type: 'City', name: 'Fort Myers' },
    { type: 'City', name: 'Cape Coral' },
    { type: 'City', name: 'Bonita Springs' },
    { type: 'City', name: 'Estero' },
    { type: 'City', name: 'Naples' },
    { type: 'City', name: 'Lehigh Acres' },
    { type: 'AdministrativeArea', name: 'Lee County' },
  ],

  offers: [
    {
      name: 'Tile Installation',
      description:
        'Ceramic, porcelain, and natural stone tile installation for floors, walls, backsplashes, and more.',
    },
    {
      name: 'Kitchen Remodels',
      description:
        'Kitchen updates and full overhauls, from backsplashes and floor tile to complete rebuilds.',
    },
    {
      name: 'Bathroom Remodels',
      description: 'Bathroom renovations of any size, built for Southwest Florida’s climate.',
    },
    {
      name: 'Windows & Doors',
      description: 'Window and door replacement for energy efficiency and curb appeal.',
    },
    {
      name: 'Trim & Molding',
      description: 'Baseboard, crown molding, and trim installation for a finished look.',
    },
    {
      name: 'Ledgestone & Brick Veneer',
      description: 'Exterior stacked ledgestone and brick veneer installation.',
    },
  ],

  business: {
    schemaType: 'GeneralContractor',
    phone: '(239) 490-3631',
    phoneHref: '+12394903631',
    email: '',
    address: {
      street: '11000 Metro Parkway, Unit 24',
      locality: 'Fort Myers',
      region: 'FL',
      postalCode: '33966',
      country: 'US',
    },
    geo: { latitude: 26.5813972, longitude: -81.8538347 },
    hours: ['Mo-Fr 09:00-17:00'],
    hoursLabel: 'Mon–Fri, 9am–5pm',
  },

  social: {},

  defaultOgImage: '/og-default.webp',
  defaultOgImageAlt: 'Markle Tile installation work in Fort Myers, Florida',

  formEndpoint: '/api/submit.php',
  recaptchaSiteKey: '6LchRtotAAAAACifw7UhK1BH7lanjRpEW6saq14Q',

  analytics: {
    logdash: '442002d1-571c-4f44-be8e-c15271e739a8',
    ga4: '',
    gtm: '',
    metaPixel: '',
    bingUet: '',
    clarity: '',
  },

  verification: {
    google: '',
    bing: '',
    meta: '',
  },

  consent: 'none',
};

export const formattedAddress = [
  site.business.address.street,
  `${site.business.address.locality}, ${site.business.address.region} ${site.business.address.postalCode}`,
].join(', ');

/** LogDash site ID for LogDash.astro (`data-website-id`). Blank skips the script. */
export const logdashWebsiteId = site.analytics.logdash;

/** No configured third-party ID means the ad-tag bundle is never mounted. */
export const hasAnalytics = Object.entries(site.analytics).some(
  ([key, value]) => key !== 'logdash' && Boolean(value),
);

/** Staging builds must not be indexed or emit analytics tags. */
export const allowIndexing = import.meta.env.PUBLIC_ALLOW_INDEXING === 'true';
