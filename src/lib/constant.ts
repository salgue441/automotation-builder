export const clients = [...new Array(10)].map((client, index) => ({
  href: `/${index + 1}.png`,
  alt: `Client ${index + 1}`,
}))

export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "/p1.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "/p2.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "/p3.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "/p4.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: "/p5.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/p6.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: "/p1.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: "/p2.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: "/p3.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail: "/p4.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail: "/p5.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail: "/p6.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail: "/p1.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail: "/p2.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail: "/p3.png",
  },
]

export const pricingData = [
  {
    title: "Hobby",
    price: 0,
    description:
      "Get a glimpse of what our software is capable of. Just a heads up you'll never leave us after this!",
    features: ["3 Free automations", "100 tasks per month", "Two-step Actions"],
  },
  {
    title: "Pro Plan",
    price: 29,
    description:
      "Get a glimpse of what our software is capable of. Just a heads up you'll never leave us after this!",
    features: ["3 Free automations", "100 tasks per month", "Two-step Actions"],
    isHighlighted: true,
  },
  {
    title: "Unlimited",
    price: 99,
    description:
      "Get a glimpse of what our software is capable of. Just a heads up you'll never leave us after this!",
    features: ["3 Free automations", "100 tasks per month", "Two-step Actions"],
  },
]
