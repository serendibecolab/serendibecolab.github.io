import I18nKeys from "./src/locales/keys";
import type { Configuration } from "./src/types/config";

const SiteConfig: Configuration = {
  title: "Serendib eco lab",
  subTitle: "Sri Lanka's Ecological Research Laboratory",
  brandTitle: "Serendib eco lab",

  description:
    "Serendib Eco Lab is a research organisation dedicated to studying and conserving Sri Lanka's extraordinary biodiversity and ecosystems.",

  site: "https://serendibecolab.github.io",

  locale: "en",

  navigators: [
    {
      nameKey: I18nKeys.nav_bar_home,
      href: "/",
    },
    {
      nameKey: I18nKeys.nav_bar_blog,
      href: "/blog",
    },
    {
      nameKey: I18nKeys.nav_bar_archive,
      href: "/archive",
    },
    {
      nameKey: I18nKeys.nav_bar_about,
      href: "/about",
    },
  ],

  username: "Serendib Eco Lab",
  sign: "Exploring Sri Lanka's Biodiversity",
  avatarUrl: "/images/IMG_8817.webp",
  socialLinks: [
    {
      icon: "line-md:github-loop",
      link: "https://github.com/serendibecolab",
    },
    {
      icon: "mdi:instagram",
      link: "https://instagram.com/serendibecolab",
    },
    {
      icon: "mdi:email-outline",
      link: "mailto:info@serendibecolab.com",
    },
  ],

  // Booking configuration: makes the booking list and contact email configurable site-wide.
  // - contactEmail: email used across booking pages / widgets
  // - showBookingList: whether to display a bookings list widget by default
  // - bookingListSource: optional path or key to source booking entries (can be a content collection or API key)
  // - bookingListTitle: title displayed for booking list widgets
  // - bookingDefaults: defaults (e.g., visibility, initial items) that the UI may read from
  booking: {
    contactEmail: "info@serendibecolab.com",
    showBookingList: false,
    bookingListSource: "", // e.g. 'content/bookings' or leave empty to manage manually
    bookingListTitle: "Bookings",
    bookingDefaults: {
      // Example structure for initial/default bookings (kept empty by default)
      items: [] as any[],
    },
  },

  maxSidebarCategoryChip: 6,
  maxSidebarTagChip: 12,
  maxFooterCategoryChip: 6,
  maxFooterTagChip: 24,

  banners: [
    {
      src: "/images/IMG-20251109-WA0004.jpg",
      focalPoint: "center",
      textLines: [
        "Serendib Eco Lab",
        "Dedicated to the study and",
        "conservation of Sri Lanka's",
        "extraordinary biodiversity",
      ],
    },
    {
      src: "/images/IMG-20251109-WA0005.jpg",
      focalPoint: "center",
      textLines: [
        "Rainforest Expeditions",
        "Venturing into the heart of",
        "Sri Lanka's tropical forests",
        "to document hidden species",
      ],
    },
    {
      src: "/images/IMG-20251109-WA0006.jpg",
      focalPoint: "center",
      textLines: [
        "Field Research",
        "Our scientists conduct",
        "rigorous ecological surveys",
        "across diverse ecosystems",
      ],
    },
    {
      src: "/images/IMG-20251109-WA0007.jpg",
      focalPoint: "center",
      textLines: [
        "Wildlife Monitoring",
        "Tracking endemic species",
        "and their populations",
        "throughout the island",
      ],
    },
    {
      src: "/images/IMG-20251109-WA0008.jpg",
      focalPoint: "center",
      textLines: [
        "Wetland Conservation",
        "Protecting Sri Lanka's",
        "vital wetland habitats",
        "and their rich ecosystems",
      ],
    },
    {
      src: "/images/IMG-20251109-WA0009.jpg",
      focalPoint: "center",
      textLines: [
        "Coastal Ecology",
        "Studying the rich biodiversity",
        "of Sri Lanka's coastal",
        "and marine environments",
      ],
    },
    {
      src: "/images/IMG_7461.webp",
      focalPoint: "center",
      textLines: [
        "Flora Documentation",
        "Recording Sri Lanka's",
        "extraordinary plant diversity",
        "for future generations",
      ],
    },
    {
      src: "/images/IMG_9468.webp",
      focalPoint: "center",
      textLines: [
        "Fauna Research",
        "Understanding the behaviour",
        "and ecology of Sri Lanka's",
        "endemic animal species",
      ],
    },
    {
      src: "/images/IMG_9499.webp",
      focalPoint: "center",
      textLines: [
        "Community Science",
        "Engaging local communities",
        "in conservation efforts",
        "and citizen science programs",
      ],
    },
    {
      src: "/images/IMG_9516.webp",
      focalPoint: "center",
      textLines: [
        "Environmental Education",
        "Inspiring the next generation",
        "of Sri Lankan",
        "environmental stewards",
      ],
    },
  ],

  secondBanners: [
    {
      src: "/images/IMG_9530.webp",
      focalPoint: "center",
      textLines: [
        "Our Research",
        "Advancing knowledge of",
        "Sri Lanka's ecosystems",
        "through rigorous science",
      ],
    },
    {
      src: "/images/IMG_9542.webp",
      focalPoint: "center",
      textLines: [
        "Join Our Mission",
        "Partner with us to protect",
        "and preserve the natural",
        "heritage of Serendib",
      ],
    },
  ],

  slugMode: "HASH",

  license: {
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },

  bannerStyle: "LOOP",

  homepageGridItems: [
    {
      src: "/images/IMG_8938.webp",
      alt: "Rainforest Survey",
      title: "Rainforest Survey",
      description: "Canopy biodiversity studies in Sinharaja Forest Reserve",
      href: "/grid-items/example-1",
      size: "small",
    },
    {
      src: "/images/IMG_9763.webp",
      alt: "Elephant Corridors",
      title: "Elephant Corridors",
      description:
        "Mapping safe wildlife corridors for Asian elephants across central Sri Lanka",
      href: "/grid-items/example-2",
      size: "medium",
    },
    {
      src: "/images/IMG_7115.webp",
      alt: "Coral Reef Monitoring",
      title: "Coral Reef Monitoring",
      description:
        "Health assessments and species mapping of Sri Lanka's coral reef systems",
      href: "/grid-items/example-3",
      size: "large",
    },
    {
      src: "/images/IMG_9537.webp",
      alt: "Wetland Birds",
      title: "Wetland Birds",
      description:
        "Documenting migratory and endemic bird species in northern wetlands",
      href: "/grid-items/example-4",
      size: "small",
    },
    {
      src: "/images/IMG_9498.webp",
      alt: "Endemic Flora",
      title: "Endemic Flora",
      description:
        "Cataloguing Sri Lanka's unique flowering plant species and their habitats",
      href: "/grid-items/example-5",
      size: "medium",
    },
    {
      src: "/images/IMG_9069.webp",
      alt: "Leopard Studies",
      title: "Leopard Studies",
      description: "Population monitoring of the iconic Sri Lankan Leopard",
      href: "/grid-items/example-6",
      size: "small",
    },
  ],

  homepageServiceCards: [
    {
      title: "Ecological Field Surveys",
      description:
        "Comprehensive biodiversity surveys across Sri Lanka's diverse forest and wetland ecosystems.",
      coverImage: "/images/IMG-20251109-WA0004.jpg",
      href: "/services/ecological-surveys",
    },
    {
      title: "Biodiversity Assessment",
      description:
        "Scientific assessment of species richness, ecosystem health, and population dynamics.",
      coverImage: "/images/IMG-20251109-WA0005.jpg",
      href: "/services/biodiversity-assessment",
    },
    {
      title: "Environmental Impact Studies",
      description:
        "Rigorous environmental impact assessments for infrastructure and development projects.",
      coverImage: "/images/IMG-20251109-WA0006.jpg",
      href: "/services/environmental-impact",
    },
    {
      title: "Conservation Planning",
      description:
        "Evidence-based strategies and action plans to protect Sri Lanka's critical natural habitats.",
      coverImage: "/images/IMG-20251109-WA0007.jpg",
      href: "/services/conservation-planning",
    },
    {
      title: "Community Education",
      description:
        "Outreach programmes that engage local communities in conservation and sustainable practices.",
      coverImage: "/images/IMG-20251109-WA0008.jpg",
      href: "/services/community-education",
    },
    {
      title: "Research & Data Analysis",
      description:
        "Data-driven insights from field research to support science-based conservation decisions.",
      coverImage: "/images/IMG-20251109-WA0009.jpg",
      href: "/services/research-analytics",
    },
  ],
};

export default SiteConfig;
