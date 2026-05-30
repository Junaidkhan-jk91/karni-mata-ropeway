/**
 * @file All hardcoded site content extracted into structured JS objects.
 * Client: Edit text, prices, timings, and contact details here.
 */

import { GALLERY_IMAGES_SRC, EXTERNAL_LINKS } from './assets';

/* ─── Navigation ─── */
export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Tickets', href: '#tickets' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Timings', href: '#timings' },
  { label: 'Contact', href: '#contact' },
];

export const NAV_PHONE = {
  label: '📞 98294 66365',
  href: EXTERNAL_LINKS.phone,
};

/* ─── Stats bar ─── */
export const STATS = [
  { value: '387', unit: 'm', label: 'Cable length' },
  { value: '5', unit: 'min', label: 'Journey duration' },
  { value: '1620', unit: 'AD', label: 'Temple founded' },
  { value: '4+', unit: '', label: 'Gondolas daily' },
];

/* ─── About section ─── */
export const ABOUT = {
  eyebrow: 'Our story',
  title: 'A journey of',
  titleEmphasis: 'faith & wonder',
  paragraphs: [
    'The Mansapurna Karni Mata Ropeway connects Deendayal Upadhyay Park to the revered Karni Mata Temple perched atop Machala Hill — transforming what was once an arduous climb into a five-minute flight over Udaipur\u2019s shimmering lakes and royal skyline.',
    'Built in 2008 under the vision of founder Kailash Khandelwal in collaboration with UIT, it holds the distinction of being Rajasthan\u2019s first gondola ropeway, blending modern engineering with centuries of devotion.',
  ],
  cards: [
    {
      title: 'The temple',
      text: 'Built by Maharana Karan Singh between 1620\u20131628 AD, the Karni Mata Temple is dedicated to Goddess Durga and sits atop Machala Magra Hill, overlooking Dudh Talai Lake.',
    },
    {
      title: 'The view',
      text: 'As your gondola ascends, panoramic vistas of Lake Pichola, City Palace, Sajjangarh Fort, and Fatehsagar Lake unfold around you \u2014 a vista unlike any other in Rajasthan.',
    },
  ],
};

/* ─── Highlights section ─── */
export const HIGHLIGHTS = [
  {
    icon: '🚡',
    title: 'Gondola ride',
    description:
      'Glide silently above the city in comfortable gondola cabins, admiring the interplay of lakes, hills, and palaces from the sky.',
  },
  {
    icon: '🏛️',
    title: 'Temple darshan',
    description:
      'Seek blessings at the ancient Karni Mata Temple, a place of deep spiritual energy and tranquil devotion above the city\u2019s bustle.',
  },
  {
    icon: '🌅',
    title: 'Sunset panoramas',
    description:
      'Watch the sun set over Lake Pichola and the Aravalli hills \u2014 a golden spectacle best witnessed from the hilltop platform.',
  },
];

/* ─── Gallery ─── */
export const GALLERY_CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'ropeway', label: 'Ropeway' },
  { key: 'temple', label: 'Temple' },
  { key: 'views', label: 'City views' },
];

export const GALLERY_ITEMS = [
  { src: GALLERY_IMAGES_SRC.ropeway[0], alt: 'Karni Mata Ropeway gondola Udaipur', category: 'ropeway', tag: 'Ropeway', label: 'Gondola gliding over Udaipur', tall: true },
  { src: GALLERY_IMAGES_SRC.ropeway[1], alt: 'Karni Mata cable car Udaipur', category: 'ropeway', tag: 'Ropeway', label: 'Cable car above the city' },
  { src: GALLERY_IMAGES_SRC.ropeway[2], alt: 'Mansapurna Karni Mata Ropeway scenic ride', category: 'ropeway', tag: 'Ropeway', label: 'Scenic aerial ride' },
  { src: GALLERY_IMAGES_SRC.temple[0], alt: 'Karni Mata Temple entrance Udaipur', category: 'temple', tag: 'Temple', label: 'Karni Mata Temple entrance' },
  { src: GALLERY_IMAGES_SRC.temple[1], alt: 'Karni Mata Temple atop Machala Hill', category: 'temple', tag: 'Temple', label: 'Sacred shrine atop Machala Hill', tall: true },
  { src: GALLERY_IMAGES_SRC.temple[2], alt: 'Karni Mata Temple premises Udaipur', category: 'temple', tag: 'Temple', label: 'Temple premises and views' },
  { src: GALLERY_IMAGES_SRC.views[0], alt: 'Lake Pichola Udaipur panorama', category: 'views', tag: 'City views', label: 'Lake Pichola from above' },
  { src: GALLERY_IMAGES_SRC.views[1], alt: 'City Palace from Lake Pichola Udaipur', category: 'views', tag: 'City views', label: 'City Palace & Lake Pichola' },
  { src: GALLERY_IMAGES_SRC.views[2], alt: 'Udaipur Lake Pichola golden sunset', category: 'views', tag: 'City views', label: 'Golden sunset over the lake' },
];

/* ─── Tickets ─── */
export const TICKETS = [
  { category: 'Round Trip', type: 'Adult Ticket', price: 117, note: 'Above 110 cm height limit' },
  { category: 'Round Trip', type: 'Child Ticket', price: 55, note: 'Height limit up to 110 cm' },
];

export const TICKET_SUBTITLE = 'Fares are per person, round trip. Children above 110 cm are charged the adult rate.';

export const CABIN_NOTE = {
  label: 'Full cabin booking:',
  text: '₹400 per cabin — ideal for families or groups seeking a private ride.',
};

/* ─── Timings ─── */
export const TIMINGS = [
  {
    place: 'Ropeway',
    name: 'Cable car operations',
    rows: [
      { label: 'Daily:', value: '9:00 AM – 9:00 PM' },
      { label: 'Gondolas:', value: '4 cabins (6 on festivals)' },
      { label: 'Ride duration:', value: '~5 minutes' },
    ],
  },
  {
    place: 'Temple',
    name: 'Karni Mata Temple',
    rows: [
      { label: 'Opens:', value: '4:00 AM · Closes: 10:00 PM' },
      { label: 'Morning darshan:', value: '4:30 – 7:00 AM' },
      { label: 'Afternoon:', value: '10:30 AM – 1:30 PM' },
      { label: 'Evening:', value: '5:00 – 7:30 PM' },
    ],
  },
];

export const TIMING_TIP =
  '✦ Best time: Early morning for serenity, or evening for magical sunset views over Lake Pichola.';

/* ─── Contact ─── */
export const CONTACT = {
  phone: {
    number: '98294 66365',
    href: EXTERNAL_LINKS.phone,
    availability: 'Available during ropeway operating hours',
    hours: '9:00 AM – 9:00 PM daily',
  },
  address: {
    line1: 'Deen Dayal Park',
    line2: 'Doodh Talai, Udaipur',
    state: 'Rajasthan 313001, India',
    distance: '3 km from Udaipur City Railway Station',
    mapsUrl: EXTERNAL_LINKS.googleMaps,
  },
  mapsBanner: {
    title: 'Find us on Google Maps',
    subtitle:
      'Manshapurn Karni Mata Ropeway Udaipur — verified listing with directions, photos & reviews',
    url: EXTERNAL_LINKS.googleMaps,
  },
};

/* ─── Getting Here ─── */
export const GETTING_HERE = [
  {
    icon: '📍',
    label: 'Starting point',
    value: 'Deen Dayal Park, Doodh Talai, Udaipur — 3 km from City Railway Station',
  },
  {
    icon: '🏔️',
    label: 'Destination',
    value: 'Karni Mata Temple, Machala Magra Hilltop, above Dudh Talai Lake',
  },
  {
    icon: '🚗',
    label: 'Nearby',
    value:
      'Short auto-rickshaw or cab ride from Udaipur\u2019s main ghats, City Palace, and Lake Pichola',
  },
  {
    icon: '🪜',
    label: 'Alternate route',
    value:
      'Staircase access via Manik Lal Verma Park (15–20 min climb) for those who prefer to walk',
  },
];

/* ─── Footer ─── */
export const FOOTER = {
  logoText: 'Mansapurna Karni Mata Ropeway',
  address: ['Deen Dayal Park, Doodh Talai', 'Udaipur, Rajasthan 313001', 'India'],
  enquiryLabel: 'For enquiries',
  phone: '98294 66365',
  phoneHref: EXTERNAL_LINKS.phone,
  hours: 'Mon–Sun · 9:00 AM – 9:00 PM',
  mapsUrl: EXTERNAL_LINKS.googleMaps,
  copyright:
    '© 2025 Mansapurna Karni Mata Ropeway Pvt. Ltd. · Rajasthan\u2019s first gondola ropeway, est. 2008',
};
