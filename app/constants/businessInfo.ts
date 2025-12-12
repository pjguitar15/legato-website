export const businessName = 'Legato Sounds & Lights'

export const brand = {
  tagline:
    'Professional sounds and lights for weddings, events, and live gigs in Cavite.',
  descriptionShort:
    'Cavite-based events tech team providing clean audio and flattering lights for weddings, school events, corporate functions, and live gigs.',
  descriptionLong:
    "Legato Sounds & Lights started as a passion project by drummer and business management graduate Philcob Suzuki. Combining his experience in music, events, and audio engineering, Legato has grown into a reliable sounds and lights provider for weddings, school events, church gatherings, and live band performances around Cavite. From basic packages for intimate weddings to full-band setups with professional wireless mics and digital mixing, Legato focuses on clarity, reliability, and a smooth experience for both clients and performers.",
  founder: 'Philcob Suzuki',
  foundedYear: 'TODO',
  tone: ['friendly', 'real talk', 'modern', 'professional'],
  languages: ['Tagalog', 'Taglish', 'English'],
}

export const locations = {
  baseLocation: 'Cavite, Philippines',
  city: 'Dasmarinas (primary base)',
  serviceAreas: [
    'Cavite (Dasmarinas, Imus, General Trias, Trece Martires, etc.)',
    'Nearby areas in South Luzon (on request)',
    'Metro Manila (case-to-case basis)',
  ],
  travelNotes:
    'Additional travel fees may apply for events outside Cavite or for very early/late call times.',
}

export const fullBandPackage = {
  id: 'full_band_main',
  name: 'Full Band Setup (Main Package)',
  description:
    'All-in sounds, lights, and backline for live bands, campus shows, and touring acts. Configurable per venue size and rider.',
  includesSummary: [
    'FOH with subs scaled to venue',
    'Digital mixer with multitrack and scene recall',
    'Vocal wireless sets plus wired instrument mics',
    'Floor wedges or in-ear monitor sends',
    'Stage wash + effects lighting for band and crowd',
    'Backline options (drums, guitar/bass amps, keys) on request',
  ],
  gear: {
    frontOfHouse: [
      'RCF ART mains with optional subs',
      'Allen & Heath SQ5 digital mixer',
      'Multitrack recording/virtual soundcheck ready',
    ],
    monitors: [
      '2-4 floor wedges or IEM sends (configurable)',
      'Separate mixes for vocals, instruments, and drummer',
    ],
    wirelessMics: [
      'Mipro ACT 311B wireless systems (vocals/host)',
      'Spare handheld for backup or host',
    ],
    wiredMics: [
      'Dynamic vocal mics',
      'Instrument mics for amps and drums',
      'DI boxes for acoustic guitars/keys/tracks',
    ],
    lights: [
      'Front wash (white/amber for skin tones)',
      'Backdrop/effects lights for depth',
      'Movement/wash lights scaled to stage size',
    ],
    backline: {
      drums: [
        '5-piece kit with snare, toms, cymbals',
        'Hardware with drum rug',
      ],
      guitars: [
        'Guitar amp (clean headroom + drive)',
        'Spare amp or DI re-amp option',
      ],
      bass: [
        'Bass head/cab or combo',
        'DI feed to FOH',
      ],
      keys: [
        'Stage keyboard stand',
        'DI for stereo keys or tracks',
      ],
      stageEssentials: [
        'Mic stands (boom and straight)',
        'Power distribution and extension runs',
        'Cable management and spares',
      ],
    },
  },
  notes:
    'We can scale the PA, monitors, and backline depending on venue size, band rider, and call time.',
}

export const services = [
  {
    id: fullBandPackage.id,
    name: fullBandPackage.name,
    type: 'Live Band / Performance',
    description: fullBandPackage.description,
    includes: fullBandPackage.includesSummary,
    startingPricePHP: 'Request a quote',
    notes: fullBandPackage.notes,
  },
  {
    id: 'wedding_premium',
    name: 'Premium Wedding Package',
    type: 'Wedding',
    description:
      'Upgraded sounds and lights for larger venues or more complex programs, including additional lighting and mic options.',
    includes: [
      '4x main speakers or additional fills (depending on venue)',
      'Subwoofer options (if required, venue-dependent)',
      'Digital mixer with multichannel support (Allen & Heath SQ5)',
      '2-4 wireless microphones',
      'Stage monitors (if needed for performers)',
      'Front lighting (amber/white for better skin tone and photos)',
      'Backdrop and dancefloor lighting',
      '1-2 audio tech crew, depending on setup complexity',
    ],
    startingPricePHP: 'Request a quote',
    notes:
      'Recommended for medium to large venues, programs with multiple performers, or events with a band.',
  },
  {
    id: 'wedding_basic',
    name: 'Basic Wedding Package',
    type: 'Wedding',
    description:
      'A clean, reliable basic setup for intimate weddings, ideal for garden or covered venues.',
    includes: [
      '2x main speakers (RCF ART 745-A or equivalent)',
      'Digital mixer (Allen & Heath SQ5 or equivalent)',
      '2x wireless microphones (Mipro ACT 311B or equivalent)',
      'Front lighting for couple and host',
      'Basic backlight / backdrop lights',
      '1x audio tech crew',
      'Standard setup and pack-down',
    ],
    startingPricePHP: 7000,
    notes:
      'Good for smaller venues and basic program flow. Ideal for simple wedding receptions and civil weddings.',
  },
  {
    id: 'school_corporate',
    name: 'School / Corporate Event Package',
    type: 'School / Corporate',
    description:
      'AV setup designed for school programs, corporate events, orientations, and seminars.',
    includes: [
      'Main speakers for speech and background music',
      'Wireless microphones for host and speakers',
      'Digital mixer',
      'Podium mic (optional, if available)',
      'Basic stage lighting',
      'Tech crew for the full program',
    ],
    startingPricePHP: 'Request a quote',
    notes:
      'Suitable for events like university programs, recognition days, and small corporate functions.',
  },
]

export const equipmentHighlights = {
  speakers: [
    'RCF ART 745-A mains: clear vocals and reliable output',
  ],
  mixers: ['Allen & Heath SQ5 digital mixer: clean preamps and flexible routing'],
  wirelessMics: ['Mipro ACT 311B wireless system: stable RF and good tone'],
  lights: [
    'Front lights (often amber/white for flattering skin tones)',
    'Backdrop and effect lights',
    'Moving/colour wash lights depending on package',
  ],
  notes:
    'We prioritize reliable, mid-to-high quality gear to avoid dropouts and muddy mixes.',
}

export const eventTypes = [
  'Weddings',
  'Debuts / Birthdays',
  'Corporate events',
  'School / university events (e.g., CvSU functions)',
  'Church / community gatherings (e.g., Feast events)',
  'Live band gigs',
  'Cafe / bar performances',
]

export const samplePortfolio = [
  {
    title: 'Simple Wedding Setup - Brgy. Conchu',
    eventType: 'Wedding',
    location: 'Brgy. Conchu, Cavite',
    description:
      'Basic wedding package with RCF mains, SQ5 mixer, Mipro wireless mics, and clean front/back lighting for a simple yet elegant reception.',
    notes:
      'Crew split into two teams to cover another event in Salawag, Dasmarinas on the same day.',
  },
  {
    title: 'CvSU Return - Event Setup at Cavite State University',
    eventType: 'School Event',
    location: 'CvSU Main Campus, Indang, Cavite',
    description:
      "A nostalgic return to Philcob's alma mater, providing sounds and lights for a campus event, applying both his business and music background.",
    notes: 'Content often used for Legato vlogs to share the story of coming back as a supplier.',
  },
  {
    title: 'Live Band Performance - Cafe Event',
    eventType: 'Live Band',
    location: 'Cafe Agapita, Cavite',
    description:
      'Live performance of "O Kay Tamis" by It All Started In May, mixed and powered by Legato\'s sounds and lights setup.',
    notes: 'Featured in a Legato social media reel.',
  },
]

export const serviceImagePlaceholders = [
  { id: 'stage_wide', label: 'Stage wide shot / crowd view' },
  { id: 'front_of_house', label: 'Front of house stack and subs' },
  { id: 'lighting_rig', label: 'Lighting rig and backdrop wash' },
  { id: 'wireless_mics', label: 'Wireless mic table / frequency check' },
  { id: 'drum_riser', label: 'Drum kit and riser closeup' },
  { id: 'monitor_world', label: 'Monitor world / wedge layout' },
  { id: 'guitar_amp', label: 'Guitar/bass amp corner' },
  { id: 'keys_station', label: 'Keys and tracks station' },
]

export const portfolioImagePlaceholders = [
  { id: 'wedding_stage', label: 'Wedding stage look' },
  { id: 'reception_walk', label: 'Couple walk-in lighting' },
  { id: 'campus_show', label: 'Campus show / pep rally' },
  { id: 'live_band', label: 'Full band crowd shot' },
  { id: 'corporate', label: 'Corporate/AV podium look' },
  { id: 'church', label: 'Church/community gathering rig' },
  { id: 'coffee_shop', label: 'Cafe/bar acoustic night' },
  { id: 'bts', label: 'Behind the scenes / setup' },
]

export const socialMedia = {
  facebookPage: { name: 'Legato Sounds & Lights', url: 'TODO' },
  instagram: { handle: 'TODO', url: 'TODO' },
  tiktok: { handle: 'TODO', url: 'TODO' },
  youtube: { channelName: 'TODO', url: 'TODO' },
}

export const contact = {
  phoneNumbers: ['TODO'],
  email: 'TODO',
  messengerLink: 'TODO',
  otherChannels: [{ type: 'Viber', value: 'TODO' }],
  preferredContactNote:
    'Best to message via Facebook Page or Messenger for faster response.',
}

export const bookingFlow = {
  steps: [
    'Client sends date, venue, and event type.',
    'Legato confirms availability and asks for details (headcount, program type, band or no band).',
    'Philcob sends recommended package and price estimate.',
    'Client confirms and sends reservation fee (if applicable).',
    'Final coordination a few days before the event (timeline, special requests).',
  ],
  inquiryFormFields: [
    'Full name',
    'Email',
    'Phone',
    'Event type',
    'Event date',
    'Venue name',
    'Venue location',
    'Estimated guests',
    'Band or no band',
    'Message / special notes',
  ],
}
