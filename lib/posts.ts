export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "callout"; title?: string; text: string };

export type Post = {
  slug: string;
  title: string;
  dek: string;
  date: string; // ISO yyyy-mm-dd
  category: string;
  readMinutes: number;
  excerpt: string;
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "hyppe-infiniti-50k-12-99",
    title:
      "Product of the Week: Hyppe Infiniti 50K Disposable Vape — Just $12.99 in Kalamazoo",
    dek: "The Hyppe Infiniti 50K is our Product of the Week at Best Puff Tobacco off 9th Street in Kalamazoo, MI — a 50,000-puff disposable at just $12.99, less than half the typical price of a 50K device.",
    date: "2026-02-15",
    category: "Product of the Week",
    readMinutes: 4,
    excerpt:
      "The Hyppe Infiniti 50K disposable vape is only $12.99 at Best Puff Tobacco this week — an aggressively low price for a 50,000-puff device. Rechargeable, pre-filled, and built to last, it’s one of the best per-puff values in the shop.",
    body: [
      {
        type: "p",
        text: "If you’re looking for a Hyppe Infiniti 50K disposable vape in Kalamazoo, this week is the time to stop by Best Puff Tobacco. For a limited time, the Hyppe Infiniti 50K is just $12.99 at our tobacco and vape shop off 9th Street in Kalamazoo, MI — one of the lowest prices you’ll find anywhere on a 50,000-puff device.",
      },
      {
        type: "p",
        text: "We proudly serve customers from Kalamazoo, Portage, Oshtemo, Texas Township, Paw Paw, Gobles, Vicksburg, and surrounding Southwest Michigan areas looking for high-quality disposable vapes at prices that actually make sense.",
      },
      { type: "h2", text: "What is the Hyppe Infiniti 50K?" },
      {
        type: "p",
        text: "The Hyppe Infiniti 50K is a high-capacity disposable vape from Hyppe — a brand vapers already know from the Hyppe Bar and Hyppe Max Flow lineup. As the name suggests, it’s rated for up to 50,000 puffs per device, putting it in the same tier as the Geek Bar Pulse X, Raz TN9000, and Foger Bit 35K.",
      },
      {
        type: "p",
        text: "Where it stands apart at Best Puff Tobacco is the price. At $12.99, the Hyppe Infiniti 50K is less than half what a comparable 50K device typically costs — a genuinely unbeatable per-puff value while supplies last.",
      },
      { type: "h3", text: "Hyppe Infiniti 50K features" },
      {
        type: "ul",
        items: [
          "Up to 50,000 puffs per device",
          "Pre-filled e-liquid — no refilling or coil changes",
          "Rechargeable via USB Type-C",
          "Adjustable airflow for a customizable draw",
          "Auto-draw activation — no buttons",
          "Compact, pocket-friendly design",
        ],
      },
      {
        type: "p",
        text: "If you’ve been searching for a Hyppe Infiniti 50K near me at a reasonable price, this is about as good as it gets in Southwest Michigan.",
      },
      { type: "h2", text: "Hyppe Infiniti 50K flavors" },
      {
        type: "p",
        text: "Hyppe is known for clean, well-mixed flavor profiles, and the Infiniti 50K carries that reputation forward. Flavor availability may vary week to week, but popular options include:",
      },
      {
        type: "ul",
        items: [
          "Blue Razz Ice",
          "Watermelon Ice",
          "Strawberry Kiwi",
          "Peach Mango",
          "Miami Mint",
          "Tropical fruit and candy-style blends",
        ],
      },
      {
        type: "callout",
        title: "Limited-time deal",
        text: "The Hyppe Infiniti 50K is $12.99 while supplies last — one of our most aggressive vape deals of the year. Stop in to see which flavors are still on the shelf today.",
      },
      { type: "h2", text: "Why buy the Hyppe Infiniti 50K at Best Puff Tobacco?" },
      {
        type: "p",
        text: "Best Puff Tobacco is a locally owned tobacco and vape shop in Kalamazoo, MI, trusted by customers searching for:",
      },
      {
        type: "ul",
        items: [
          "Hyppe Infiniti 50K Kalamazoo",
          "Hyppe Infiniti 50K $12.99 near me",
          "Cheap 50K disposable vape Portage MI",
          "Vape shop near Oshtemo and Texas Township",
          "Smoke shop near 9th Street Kalamazoo",
        ],
      },
      {
        type: "p",
        text: "Our staff can help you compare the Hyppe Infiniti 50K with other big-puff devices like the Geek Bar Pulse X, Raz TN9000, and Foger Bit 35K so you can decide which one fits your style.",
      },
      {
        type: "h2",
        text: "Buy the Hyppe Infiniti 50K near Kalamazoo — limited-time $12.99 deal",
      },
      {
        type: "p",
        text: "Whether you’re coming from Kalamazoo Township, Westwood, Eastwood, Parchment, Paw Paw, Gobles, or Vicksburg, Best Puff Tobacco makes it easy to grab a 50K disposable vape near you without paying premium-shelf pricing.",
      },
      {
        type: "p",
        text: "At $12.99, the Hyppe Infiniti 50K is the easiest recommendation we can make this week — a full 50,000-puff device for the price of a small snack run.",
      },
      {
        type: "callout",
        title: "📍 Serving Southwest Michigan",
        text: "Best Puff Tobacco is located off 9th Street in Kalamazoo, MI, proudly serving customers from Portage, Oshtemo, Texas Township, Paw Paw, Gobles, Vicksburg, Westwood, Eastwood, Parchment, and nearby ZIP codes including 49006, 49009, 49024, 49048, and 49005.",
      },
    ],
  },
  {
    slug: "dojo-sphere-30-percent-off",
    title:
      "Product of the Week: DOJO SPHERE Disposable Vape — 30% OFF in Kalamazoo",
    dek: "For a limited time, DOJO SPHERE vapes are 30% off at Best Puff Tobacco off 9th Street in Kalamazoo, MI. Smooth airflow, auto-draw, pocket-friendly — and a great value while supplies last.",
    date: "2026-02-01",
    category: "Product of the Week",
    readMinutes: 4,
    excerpt:
      "DOJO SPHERE disposable vapes are 30% off at Best Puff Tobacco for a limited time. Pre-filled, auto-draw, ergonomic — a great value while supplies last.",
    body: [
      {
        type: "p",
        text: "If you’re looking for a DOJO SPHERE disposable vape in Kalamazoo, now is the perfect time to stop by Best Puff Tobacco. For a limited time, DOJO SPHERE vapes are 30% OFF at our tobacco and vape shop off 9th Street in Kalamazoo, MI.",
      },
      {
        type: "p",
        text: "We proudly serve customers from Kalamazoo, Portage, Oshtemo, Texas Township, Paw Paw, Gobles, Vicksburg, and surrounding Southwest Michigan areas looking for high-quality disposable vapes at great prices.",
      },
      { type: "h2", text: "What is the DOJO SPHERE vape?" },
      {
        type: "p",
        text: "The DOJO SPHERE disposable vape is built for simplicity, comfort, and consistent performance. Its rounded, ergonomic design fits comfortably in hand, while the internal battery and pre-filled e-liquid deliver smooth, reliable vapor from start to finish.",
      },
      {
        type: "p",
        text: "With the current 30% OFF DOJO SPHERE vape deal in Kalamazoo, this device is an excellent option for customers who want a long-lasting disposable vape near them without paying full price.",
      },
      { type: "h3", text: "DOJO SPHERE features" },
      {
        type: "ul",
        items: [
          "High puff-count disposable vape",
          "Smooth, consistent airflow",
          "No buttons or complicated settings",
          "Pre-filled e-liquid for extended use",
          "Compact, pocket-friendly design",
          "Auto-draw activation",
        ],
      },
      {
        type: "p",
        text: "If you’re searching for a DOJO SPHERE vape near me, this is one of the best values available right now.",
      },
      { type: "h2", text: "DOJO SPHERE flavors — now 30% off" },
      {
        type: "p",
        text: "Customers visiting our vape shop near Portage and Oshtemo often choose the DOJO SPHERE for its clean flavor profiles and smooth draw. Flavor availability may vary, but popular options include:",
      },
      {
        type: "ul",
        items: [
          "Blue Razz Ice",
          "Watermelon Ice",
          "Strawberry Banana",
          "Pink Lemonade",
          "Mint and menthol blends",
          "Fruit and candy-style flavors",
        ],
      },
      {
        type: "callout",
        title: "Limited-time deal",
        text: "All DOJO SPHERE disposable vapes are currently 30% OFF while supplies last. Stop in to see what flavors are available today.",
      },
      { type: "h2", text: "Why buy the DOJO SPHERE at Best Puff Tobacco?" },
      {
        type: "p",
        text: "Best Puff Tobacco is a locally owned tobacco and vape shop in Kalamazoo, MI, trusted by customers searching for:",
      },
      {
        type: "ul",
        items: [
          "DOJO SPHERE Kalamazoo",
          "DOJO SPHERE 30% off near me",
          "Disposable vapes Portage MI",
          "Vape shop near Oshtemo and Texas Township",
          "Smoke shop near 9th Street Kalamazoo",
        ],
      },
      {
        type: "p",
        text: "Our knowledgeable staff can also help you compare the DOJO SPHERE with other popular devices like the DOJO iMate and Raz RX50K, so you can find the best disposable vape for your needs.",
      },
      { type: "h2", text: "Buy DOJO SPHERE near Kalamazoo — limited-time deal" },
      {
        type: "p",
        text: "Whether you’re coming from Kalamazoo Township, Westwood, Eastwood, Parchment, Paw Paw, Gobles, or Vicksburg, Best Puff Tobacco makes it easy to find discounted disposable vapes near you.",
      },
      {
        type: "p",
        text: "If you want a simple, flavorful disposable vape in Kalamazoo, now 30% OFF, the DOJO SPHERE is a smart pick.",
      },
      {
        type: "callout",
        title: "📍 Serving Southwest Michigan",
        text: "Best Puff Tobacco is located off 9th Street in Kalamazoo, MI, proudly serving customers from Portage, Oshtemo, Texas Township, Paw Paw, Gobles, Vicksburg, Westwood, Eastwood, Parchment, and nearby ZIP codes including 49006, 49009, 49024, 49048, and 49005.",
      },
    ],
  },
  {
    slug: "adjust-choose-your-level",
    title: "Adjust: Choose Your Level",
    dek: "The Adjust vape is one of the most unique disposable vapes on the wall right now — fine-tune flavor, sweetness, sour, and cool levels in a single 40,000-puff device.",
    date: "2026-01-20",
    category: "Device Spotlight",
    readMinutes: 4,
    excerpt:
      "The Adjust vape lets you fine-tune flavor, sweetness, sour, and cool — up to 40,000 puffs in a single disposable. Here’s why it’s standing out on the wall right now.",
    body: [
      {
        type: "p",
        text: "The Adjust vape is one of the most unique disposable vapes available right now because it gives you control over how your vape tastes and feels. Instead of being locked into a single flavor style, the Adjust vape lets you fine-tune your experience so it matches exactly what you want.",
      },
      {
        type: "p",
        text: "That makes it a great option for anyone who wants more than a standard disposable vape pen.",
      },
      { type: "h2", text: "What makes the Adjust vape different" },
      {
        type: "p",
        text: "Most disposable vapes are simple: one flavor, one level of sweetness, and one level of cooling. The Adjust vape changes that by allowing you to customize different elements of your vape.",
      },
      {
        type: "p",
        text: "The Adjust MyFlavor version lets you control how strong each flavor note is, giving you up to six different flavor balance options. You can keep things smooth and mellow or dial it up for a bolder hit.",
      },
      {
        type: "p",
        text: "The Adjust MySweet version focuses on sweetness control. It lets you choose between lighter or sweeter flavor levels, which is ideal if you enjoy fruity or candy-style vapes but don’t want them to be overpowering.",
      },
      {
        type: "p",
        text: "The Adjust MyCool version gives you control over the cooling effect. With multiple coolness levels, you can go from barely icy to a strong, refreshing chill depending on your preference.",
      },
      {
        type: "p",
        text: "There is also an Adjust MySour option that lets you choose how much sour punch you want, making it perfect for citrus and candy flavors.",
      },
      { type: "h2", text: "Long-lasting disposable vape performance" },
      {
        type: "p",
        text: "The Adjust vape is built for extended use and convenience. Each device is designed to last up to 40,000 puffs, making it a high-capacity disposable vape that doesn’t need constant replacement.",
      },
      {
        type: "p",
        text: "It comes with a rechargeable internal battery and delivers consistent vapor throughout its lifespan. There are no buttons, no refilling, and no coil changes required. It’s simple to use while still offering a premium experience.",
      },
      { type: "h2", text: "Who the Adjust vape is for" },
      {
        type: "p",
        text: "The Adjust vape is a great choice for people who want more control over their disposable vape. It’s especially popular with users who find most disposables too sweet, too icy, or not flavorful enough.",
      },
      {
        type: "p",
        text: "If you’ve used brands like Geek Bar, Lost Mary, Breeze, Raz Vape, North, or King Bar Vape, the Adjust vape offers something different by letting you personalize each hit.",
      },
      { type: "h2", text: "Find Adjust vapes at Best Puff Tobacco" },
      {
        type: "p",
        text: "If you’re looking for disposable vapes, vape pens, or premium vaping supplies, ask the team about the Adjust vape lineup at Best Puff Tobacco. With customizable flavor, sweetness, sourness, and cooling levels, it stands out as one of the most flexible disposable vapes on the market.",
      },
      {
        type: "callout",
        title: "Final thoughts",
        text: "The Adjust vape delivers customization, long-lasting performance, and convenience in a single disposable device. With up to 40,000 puffs and multiple adjustment options, it’s an excellent choice for vapers who want control without the hassle of refillable systems.",
      },
    ],
  },
];

export function getAllPosts(): Post[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatPostDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
