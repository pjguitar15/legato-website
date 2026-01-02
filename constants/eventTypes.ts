export type EventTypes =
  | 'full-band'
  | 'basic'
  | 'corporate'
  | 'wedding'
  | 'simple-corporate'
  | 'backline'
  | 'full-band-setup'
  | 'resto-bar-setup'
  | 'school-full-band'
  | 'church-anniversary'
  | 'cozy-cove-style'
  | 'gymnasium-events'
  | 'barangay-gymnasium-events'

export const coverImages: Record<EventTypes, string> = {
  'full-band': '/backgrounds/about-bg.png',
  basic: '/event-types/simple-corporate.jpg',
  corporate: '/event-types/corporate.jpg',
  wedding: '/event-types/simple-wedding.jpg',
  'simple-corporate': '/event-types/simple-corporate.jpg',
  backline: '/event-types/backline.jpg',
  'full-band-setup': '/backgrounds/band-bg-ngis.jpg',
  'resto-bar-setup': '/event-types/resto-bar.jpg',
  'school-full-band': '/event-types/school-full-band.jpg',
  'church-anniversary': '/event-types/church-anniversary.jpg',
  'cozy-cove-style': '/event-types/cozy-cove.jpg',
  'gymnasium-events': '/event-types/gymnasium.jpg',
  'barangay-gymnasium-events': '/event-types/brgy-gymnasiums.jpg',
}