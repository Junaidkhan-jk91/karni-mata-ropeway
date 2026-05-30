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
  { label: 'FAQ', href: '#faq' },
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
    'The Karni Mata Ropeway is one of the highlights during a visit to Udaipur, the so-called \u201cCity of Lakes\u201d in Rajasthan, India. This ropeway will take you to the top of Machhala Hill, where you will find the Manshapurn Karni Mata Temple as well as a spectacular view over Udaipur.',
    'Udaipur is a city filled with spectacular landmarks and amazing viewpoints. A ride on this ropeway connects Deendayal Upadhyay Park to the revered temple atop Machala Hill \u2014 transforming what was once an arduous climb into a five-minute flight over the shimmering lakes and royal skyline. It holds the distinction of being Rajasthan\u2019s first gondola ropeway, blending modern engineering with centuries of devotion.',
    'This quick guide includes everything you need to know if you\u2019re planning on taking the Karni Mata Ropeway in Udaipur\u2014including how to get there, what to expect, operational hours, tickets, and insider travel tips.',
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
  // Curated First Mix (9 Items)
  { src: GALLERY_IMAGES_SRC.views[0], alt: 'Scenic Udaipur overview Lake Pichola from top', category: 'views', tag: 'City views', label: 'Spectacular sunset view of Lake Pichola and the City Palace from the top ropeway platform.' },
  { src: GALLERY_IMAGES_SRC.ropeway[0], alt: 'Gondola cabin and lake view', category: 'ropeway', tag: 'Ropeway', label: 'Vibrant gondola cabin soaring above the scenic foothills.' },
  { src: GALLERY_IMAGES_SRC.temple[0], alt: 'Shri Manshapurn Karni Mata Temple Udaipur', category: 'temple', tag: 'Temple', label: 'Shri Manshapurn Karni Mata Temple standing proudly against the clear sky at the hill summit.' },
  { src: GALLERY_IMAGES_SRC.views[3], alt: 'Lake Pichola Palace layout', category: 'views', tag: 'City views', label: 'Stunning overhead city perspective focusing on Taj Lake Palace and historical domes.' },
  { src: GALLERY_IMAGES_SRC.ropeway[4], alt: 'Detailed view of ropeway cabin', category: 'ropeway', tag: 'Ropeway', label: 'Close-up detail of the modern, robust red enclosed cabin design climbing the peaks.' },
  { src: GALLERY_IMAGES_SRC.temple[1], alt: 'Karni Mata Temple atop Machala Hill', category: 'temple', tag: 'Temple', label: 'Hilltop temple courtyard platform offering a quiet space for pilgrims.' },
  { src: GALLERY_IMAGES_SRC.views[2], alt: 'Birdseye view of Lake Pichola and Udaipur skyline', category: 'views', tag: 'City views', label: 'Panoramic aerial view of a gondola passenger cabin gliding over Doodh Talai Lake and the base gardens.' },
  { src: GALLERY_IMAGES_SRC.ropeway[1], alt: 'Ropeway cable lines and cabins', category: 'ropeway', tag: 'Ropeway', label: 'Gondola passenger cabin gliding smoothly along the robust double-cable path.' },
  { src: GALLERY_IMAGES_SRC.temple[4], alt: 'Hilltop temple sunset pilgrims', category: 'temple', tag: 'Temple', label: 'Pilgrim assemblies gathering around the hilltop sacred complex in the soft evening light.' },

  // Remaining Items (14 Items)
  { src: GALLERY_IMAGES_SRC.ropeway[2], alt: 'Aerial ropeway cabins passing', category: 'ropeway', tag: 'Ropeway', label: 'Passenger cabins passing each other mid-flight over the green valleys.' },
  { src: GALLERY_IMAGES_SRC.ropeway[3], alt: 'Ascending hilltop terminal', category: 'ropeway', tag: 'Ropeway', label: 'Mountaintop perspective of the gondolas ascending towards the Machala Hill summit station.' },
  { src: GALLERY_IMAGES_SRC.ropeway[5], alt: 'Gondola flight over Udaipur', category: 'ropeway', tag: 'Ropeway', label: 'Clean passenger cabin glide presenting standard heights over the foothill pathways.' },
  { src: GALLERY_IMAGES_SRC.ropeway[6], alt: 'Ropeway terminal cabins', category: 'ropeway', tag: 'Ropeway', label: 'Enclosed cable cabins arriving at the hilltop terminal station platforms.' },
  { src: GALLERY_IMAGES_SRC.ropeway[7], alt: 'Cable car under sky', category: 'ropeway', tag: 'Ropeway', label: 'A single red gondola cabin climbing through the blue sky against the hill crest.' },
  { src: GALLERY_IMAGES_SRC.temple[2], alt: 'Aravalli Hills view from temple', category: 'temple', tag: 'Temple', label: 'Lush green slopes of the ancient Aravalli Range seen from the hilltop courtyard.' },
  { src: GALLERY_IMAGES_SRC.temple[3], alt: 'White marble shrine Karni Mata', category: 'temple', tag: 'Temple', label: 'Peaceful white marble architecture and holy archways of the temple complex.' },
  { src: GALLERY_IMAGES_SRC.views[1], alt: 'Waterfront City Palace ghats Lake Pichola', category: 'views', tag: 'City views', label: 'Sunset reflections kissing the water along the waterfront ghats and Aravalli horizons.' },
  { src: GALLERY_IMAGES_SRC.views[4], alt: 'Aravalli horizon sun ray', category: 'views', tag: 'City views', label: 'Glistening water waves of Lake Pichola reflection under the fading afternoon sun rays.' },
  { src: GALLERY_IMAGES_SRC.views[5], alt: 'Udaipur white city panoramic rooftops', category: 'views', tag: 'City views', label: 'White architectural rooftops and heritage blocks outlining the historic City Palace perimeter.' },
  { src: GALLERY_IMAGES_SRC.views[6], alt: 'Lake Pichola wide shoreline view', category: 'views', tag: 'City views', label: 'Wide scenic overlook focusing on the pristine blue waters of Lake Pichola and remote hills.' },
  { src: GALLERY_IMAGES_SRC.views[7], alt: 'Sajjangarh Monsoon Palace view', category: 'views', tag: 'City views', label: 'Distant view of Sajjangarh Monsoon Palace sitting atop Aravalli peaks under golden clouds.' },
  { src: GALLERY_IMAGES_SRC.views[8], alt: 'Old city rooftops close view', category: 'views', tag: 'City views', label: 'Fascinating details of old city structural networks and whitewashed domes.' },
  { src: GALLERY_IMAGES_SRC.views[9], alt: 'Sunset water palace reflection', category: 'views', tag: 'City views', label: 'Romantic sunset glow kissing the water palaces and mountain ridges in the distance.' },
];

/* ─── Tickets ─── */
export const TICKETS = [
  { category: 'Indian National', type: 'Adult Ticket', price: 117, note: 'Above 110 cm height limit' },
  { category: 'Indian National', type: 'Child Ticket', price: 55, note: 'Height limit up to 110 cm' },
  { category: 'Foreign National', type: 'Adult Ticket', price: 300, note: 'Round trip, per person' },
  { category: 'Foreign National', type: 'Child Ticket', price: 150, note: 'Round trip, per child' },
];

export const TICKET_SUBTITLE = 'All fares are round trip. Indian tickets require height verification; Foreign national pricing includes international tourist rates.';

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
  '✦ Operational Tip: Best visited around 5:30 PM to catch the spectacular sunset over Lake Pichola, but buy your tickets early to secure your queue number and avoid long sunset waits!';

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
    icon: '🛺',
    label: 'Location & Taxi Options',
    value: 'The ropeway starts at Manikyalal Verma Park, located just 1.5 km (0.9 mi) from the City Palace. Easily reach it by auto-rickshaw or scooter. We recommend downloading the Ola app for instant, fair taxi and rickshaw pricing!',
  },
  {
    icon: '🥾',
    label: 'Scenic Walking Path',
    value: 'For an active alternative to the 5-minute gondola ride, there is a scenic trail starting at Pandit Deendayal Upadhyay Park (Deen Dayal Park) that reaches the hilltop in 15–20 minutes.',
  },
  {
    icon: '🪜',
    label: 'Hilltop Stair Climb',
    value: 'After the gondola drops you at the top station, it is a short, few-minute walk up stone steps to reach the main shrine and the magnificent sunset viewing terraces.',
  },
  {
    icon: '🌅',
    label: 'Views & Precautions',
    value: 'Witness spectacular panoramas of Lake Pichola, the City Palace, and Aravalli Hills from the top. Be mindful of active local monkeys—keep snacks and shiny items zipped in your bag!',
  },
];

/* ─── Footer ─── */
export const FOOTER = {
  logoText: 'Manshapurn Karni Mata Ropeway',
  address: ['Deen Dayal Park, Doodh Talai', 'Udaipur, Rajasthan 313001', 'India'],
  enquiryLabel: 'For enquiries',
  phone: '98294 66365',
  phoneHref: EXTERNAL_LINKS.phone,
  hours: 'Mon–Sun · 9:00 AM – 9:00 PM',
  mapsUrl: EXTERNAL_LINKS.googleMaps,
  copyright:
    '© 2026 Manshapurn Karni Mata Ropeway Pvt. Ltd. · Rajasthan\u2019s first gondola ropeway, est. 2008',
};

/* ─── Frequently Asked Questions (SEO FAQs) ─── */
export const FAQS = [
  {
    question: 'Where is the Manshapurn Karni Mata Mandir located?',
    answer: 'The temple is located atop the Machala Magra Hill in Udaipur, Rajasthan. The base ropeway station starts from Deendayal Upadhyay Park (Dudh Talai), which is approximately 1.5 to 2 km from the historic Udaipur City Palace.',
  },
  {
    question: 'What are the timings for the Manshapurn Karni Mata Ropeway?',
    answer: 'The ropeway cable car operations run daily from 9:00 AM to 9:00 PM. The hilltop Karni Mata Temple itself is open for pilgrims and visitors from 4:00 AM to 10:00 PM daily.',
  },
  {
    question: 'Can I climb the hill instead of taking the ropeway?',
    answer: 'Yes! For an active alternative to the 5-minute ropeway ride, you can hike up the scenic stone stair path starting near Deen Dayal Park, which takes about 15 to 20 minutes to reach the temple summit.',
  },
  {
    question: 'What makes the Manshapurn Karni Mata Temple famous?',
    answer: 'Founded in the 1620s by Maharana Karan Singh, this sacred temple is dedicated to Karni Mata. It is famous both as a place of deep devotion and for offering the most spectacular, uninterrupted 360-degree sunset views of Udaipur and Lake Pichola.',
  },
  {
    question: 'Is parking available at the base ropeway station?',
    answer: 'Yes, public parking for two-wheelers and four-wheelers is available near Deendayal Upadhyay Park (Dudh Talai). During peak tourist hours and sunset, spaces can fill up quickly, so taking a local auto-rickshaw or taxi is highly recommended for a hassle-free arrival.',
  },
];
