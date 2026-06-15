import ganeshImage from "@/assets/pooja-ganesh.jpg";
import durgaImage from "@/assets/pooja-durga.jpg";
import kaliImage from "@/assets/pooja-kali.jpg";
import fourCornerImage from "@/assets/pooja-four-corner.jpg";
import shivaImage from "@/assets/pooja-shiva.jpg";
import lakshmiImage from "@/assets/pooja-lakshmi.jpg";
import internationalImage from "@/assets/pooja-international.jpg";
import hanumanImage from "@/assets/pooja-hanuman.jpg";
import customImage from "@/assets/pooja-custom.jpg";

export const POOJA_SERVICES = [
  {
    slug: "lord-ganesh-puja",
    title: "Lord Ganesh Puja",
    desc: "Remove obstacles and invite prosperity into your life with sacred Lord Ganesh worship rituals.",
    image: ganeshImage,
    overview: "Lord Ganesh Puja invokes the blessings of Vighnaharta, the remover of obstacles. This sacred ceremony is traditionally performed before new beginnings, important decisions, business ventures, marriage, education, and other auspicious occasions.",
    benefits: ["Removes obstacles and delays", "Blesses new beginnings", "Supports wisdom and success", "Invites peace and prosperity"],
  },
  {
    slug: "goddess-durga-matha-puja",
    title: "Goddess Durga Matha Puja",
    desc: "Seek the divine blessings of Goddess Durga for strength, protection, and victory over negativity.",
    image: durgaImage,
    overview: "Goddess Durga Matha Puja is a devotional ceremony for courage, protection, and inner strength. Mantras and sacred offerings are performed with care to seek the Mother's grace and overcome difficult influences.",
    benefits: ["Strengthens courage and confidence", "Offers spiritual protection", "Helps overcome negativity", "Promotes family well-being"],
  },
  {
    slug: "goddess-kali-matha-puja",
    title: "Goddess Kali Matha Puja",
    desc: "Powerful rituals dedicated to Goddess Kali to destroy evil forces and spiritual blockages.",
    image: kaliImage,
    overview: "Goddess Kali Matha Puja seeks the fierce and compassionate protection of the Divine Mother. The ritual is performed with devotion to clear fear, harmful influences, and deep spiritual blockages.",
    benefits: ["Clears spiritual blockages", "Builds inner fearlessness", "Protects against harmful influences", "Supports personal transformation"],
  },
  {
    slug: "four-corner-prayer",
    title: "Four Corner Prayer",
    desc: "Comprehensive spiritual ceremony performed at all four corners to cleanse and protect your space.",
    image: fourCornerImage,
    overview: "Four Corner Prayer is a focused space-cleansing ceremony performed around the boundaries of a home, office, or property. Prayers and sacred practices are used to establish harmony and spiritual protection throughout the space.",
    benefits: ["Cleanses the energy of a property", "Creates a protective spiritual boundary", "Restores calm and harmony", "Suitable for homes and businesses"],
  },
  {
    slug: "lord-shiva-puja",
    title: "Lord Shiva Puja",
    desc: "Attain peace, health, and spiritual enlightenment through divine Lord Shiva worship.",
    image: shivaImage,
    overview: "Lord Shiva Puja is performed for peace, healing, transformation, and spiritual growth. Traditional prayers, offerings, and mantra recitations honor Mahadev and encourage clarity, balance, and devotion.",
    benefits: ["Encourages peace of mind", "Supports health and healing intentions", "Deepens spiritual awareness", "Helps release past burdens"],
  },
  {
    slug: "goddess-lakshmi-puja",
    title: "Goddess Lakshmi Puja",
    desc: "Invoke the goddess of wealth and abundance for financial prosperity and business success.",
    image: lakshmiImage,
    overview: "Goddess Lakshmi Puja welcomes the blessings of abundance, fortune, and harmony. It is especially meaningful for families, professionals, and business owners seeking steady growth and positive opportunities.",
    benefits: ["Invites prosperity and abundance", "Supports business growth", "Promotes household harmony", "Encourages positive opportunities"],
  },
  {
    slug: "international-prayers",
    title: "International Prayers",
    desc: "Remote prayer services available worldwide. Distance is no barrier to divine blessings.",
    image: internationalImage,
    overview: "International Prayers make devotional services accessible to devotees across the world. After discussing your intentions, the appropriate prayer is performed remotely with the same sincerity and traditional care.",
    benefits: ["Available to devotees worldwide", "Personalized to your intention", "Convenient remote participation", "Guidance before and after the prayer"],
  },
  {
    slug: "lord-hanuman-puja",
    title: "Lord Hanuman",
    desc: "Gain courage, devotion, and protection through powerful Lord Hanuman rituals and prayers.",
    image: hanumanImage,
    overview: "Lord Hanuman Puja honors the embodiment of courage, loyalty, and devotion. Sacred recitations and offerings seek strength during challenging periods and protection from fear and negative influences.",
    benefits: ["Builds courage and determination", "Offers spiritual protection", "Strengthens devotion and discipline", "Helps overcome fear and difficulty"],
  },
  {
    slug: "other-pooja-prayers",
    title: "Others",
    desc: "Custom pooja and prayer ceremonies tailored to your specific spiritual needs and intentions.",
    image: customImage,
    overview: "Every spiritual need is unique. We can recommend and arrange a suitable pooja or prayer after understanding your concern, family tradition, occasion, and desired intention.",
    benefits: ["Personalized ceremony selection", "Suitable for special occasions", "Traditional guidance", "In-person and remote options"],
  },
] as const;