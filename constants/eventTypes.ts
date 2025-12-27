export type EventTypes =
  | 'full-band'
  | 'basic'
  | 'corporate'
  | 'wedding'
  | 'simple-corporate'
  | 'backline'
  | 'full-band-setup'

export const coverImages: Record<EventTypes, string> = {
  'full-band': '/backgrounds/about-bg.png',
  basic: '/event-types/simple-corporate.jpg',
  corporate: '/event-types/corporate.jpg',
  wedding: '/event-types/simple-wedding.jpg',
  'simple-corporate': '/event-types/simple-corporate.jpg',
  backline: '/event-types/backline.jpg',
  'full-band-setup': '/backgrounds/band-bg-ngis.jpg',
}