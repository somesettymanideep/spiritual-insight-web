import { asset } from "./utils";

export const SITE = {
  name: "Sri Durga Matha Astrology",
  phone: "9000999664",
  phoneHref: "tel:+919000999664",
  whatsapp: "https://wa.me/919000999664",
  email: "vooralakshmibhavani703@gmail.com",
  address: "2-149 Jangalapeta Block, Pedavegi, Sanivarapupeta, Eluru, Andhra Pradesh – 534003",
};

const s = (n: string) => asset(`services-uploaded/${n}.png`);

export const SERVICES = [
  { slug: "black-magic-removal", title: "Black Magic Removal", desc: "Powerful remedies to remove black magic effects and restore peace in your life.", image: s("black-magic-removal") },
  { slug: "get-your-love-back", title: "Get Your Love Back", desc: "Reunite with your lost love through tested astrological solutions.", image: s("get-your-love-back") },
  { slug: "stop-separation-divorce", title: "Stop Separation & Divorce", desc: "Save your marriage and prevent separation with spiritual guidance.", image: s("stop-separation-divorce") },
  { slug: "palm-reading", title: "Palm Reading", desc: "Discover your destiny through ancient palmistry insights.", image: s("palm-reading") },
  { slug: "psychic-astrology", title: "Psychic Astrology", desc: "Deep psychic readings revealing your past, present and future.", image: s("psychic-astrology") },
  { slug: "love-marriage-specialist", title: "Love Marriage Specialist", desc: "Resolve obstacles in love marriage and unite with your soulmate.", image: s("love-marriage-specialist") },
  { slug: "astrologer-near-me", title: "Astrologer Near Me", desc: "Trusted local astrologer providing in-person and online consultations.", image: s("astrologer-near-me") },
  { slug: "evil-spirits-removal", title: "Evil Spirits Removal", desc: "Free yourself from negative entities and dark spiritual forces.", image: s("evil-spirits-removal") },
  { slug: "vashikaran-specialist", title: "Vashikaran Specialist", desc: "Authentic vashikaran mantras to attract desired outcomes.", image: s("vashikaran-specialist") },
  { slug: "spiritual-reading", title: "Spiritual Reading", desc: "Connect with your higher self through profound spiritual sessions.", image: s("spiritual-reading") },
  { slug: "tarot-reading", title: "Tarot Reading", desc: "Insightful tarot card readings for clarity on life's questions.", image: s("tarot-reading") },
  { slug: "love-spell", title: "Love Spell", desc: "Genuine love spells to bring harmony and passion to relationships.", image: s("love-spell") },
  { slug: "ex-love-back", title: "Ex Love Back Specialist", desc: "Bring your ex-partner back with proven mystical remedies.", image: s("ex-love-back-specialist") },
  { slug: "black-magic-specialist", title: "Black Magic Specialist", desc: "Expert in identifying and neutralizing black magic curses.", image: s("black-magic-specialist") },
  { slug: "negative-energy-removal", title: "Negative Energy Removal", desc: "Cleanse your aura and home from harmful negative vibrations.", image: s("negative-energy-removal") },
  { slug: "psychic-near-me", title: "Psychic Near Me", desc: "Reliable psychic readings available near you and online.", image: s("psychic-near-me") },
  { slug: "dark-magic", title: "Dark Magic", desc: "Protection and reversal of dark magic affecting your life.", image: s("dark-magic") },
  { slug: "white-magic", title: "White Magic", desc: "Positive white magic rituals for healing, love and prosperity.", image: s("white-magic") },
];

export const TESTIMONIALS = [
  { name: "Priya Sharma", role: "Hyderabad", rating: 5, text: "Guruji's predictions were spot on. My marriage issues are now resolved and our home is peaceful again. Forever grateful." },
  { name: "Rajesh Kumar", role: "Vijayawada", rating: 5, text: "I got my love back within weeks of following the remedies. The most genuine astrologer I have consulted in years." },
  { name: "Anjali Reddy", role: "Eluru", rating: 5, text: "Guruji removed the negative energy affecting my career. I received a major promotion in just two months." },
  { name: "Suresh Babu", role: "Visakhapatnam", rating: 5, text: "Black magic removal session was life-changing. My family is healthy and happy again. Highly recommended." },
  { name: "Lakshmi Devi", role: "Guntur", rating: 5, text: "Accurate palm reading and trustworthy guidance. Sri Durga Matha Astrology truly cares about every client." },
];
