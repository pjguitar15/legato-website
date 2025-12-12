import Background from '../components/ui/Background'
import stripes from '@/public/backgrounds/stripes.png'
import {
  bookingFlow,
  contact,
  locations,
  brand,
  services,
  socialMedia,
} from '../constants/businessInfo'

export default function BookPage() {
  const facebookLink = socialMedia.facebookPage.url || '#'

  return (
    <div className='relative min-h-screen'>
      <Background imageUrl={stripes}>
        <div className='max-w-5xl mx-auto px-6 pt-52 pb-24 flex flex-col gap-14'>
          <header className='flex flex-col gap-3'>
            <p className='text-sm uppercase tracking-[0.3em] text-white/70'>
              Message us on Facebook
            </p>
            <h1 className='text-4xl md:text-5xl font-semibold text-white'>
              Bookings go through the Facebook Page
            </h1>
            <p className='text-lg text-white/80 max-w-3xl'>
              {brand.descriptionShort} Send the basics below via Facebook or Messenger and we will
              recommend the right setup and quote. Mas mabilis kung may venue at event date agad.
            </p>
            <div>
              <a
                href={facebookLink}
                className='inline-flex items-center justify-center rounded-full bg-[#B83838] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-[#B83838]/30 transition hover:-translate-y-0.5 hover:shadow-xl'
              >
                Message Legato on Facebook
              </a>
            </div>
          </header>

          <section className='grid md:grid-cols-2 gap-8'>
            <div className='rounded-2xl border border-white/10 bg-black/60 backdrop-blur p-7 flex flex-col gap-4 shadow-2xl shadow-black/30'>
              <h2 className='text-xl font-semibold text-white'>Quick inquiry checklist</h2>
              <p className='text-sm text-white/80'>
                Drop these details so we can send a solid rec:
              </p>
              <ul className='space-y-2 text-sm text-white/80'>
                {bookingFlow.inquiryFormFields.map((field) => (
                  <li
                    key={field}
                    className='rounded-lg bg-white/5 border border-white/10 px-3 py-2'
                  >
                    {field}
                  </li>
                ))}
              </ul>
            </div>

            <div className='rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-7 flex flex-col gap-4'>
              <h2 className='text-xl font-semibold text-white'>How booking works</h2>
              <ol className='space-y-3 text-sm text-white/80 list-decimal list-inside'>
                {bookingFlow.steps.map((step) => (
                  <li key={step} className='pl-1 leading-6'>
                    {step}
                  </li>
                ))}
              </ol>
              <p className='text-xs text-white/70'>
                Tip: Mention if may live band or performers para ma-ready namin ang inputs,
                monitors, at lights.
              </p>
            </div>
          </section>

          <section className='rounded-2xl border border-white/10 bg-black/70 backdrop-blur p-7 flex flex-col gap-5'>
            <div className='flex flex-col gap-2'>
              <p className='text-xs uppercase tracking-[0.25em] text-white/70'>
                Coverage
              </p>
              <h3 className='text-xl font-semibold text-white'>Cavite-based, mobile crew</h3>
              <p className='text-white/75'>
                Base: {locations.city}. Primary area: Cavite. Nearby South Luzon and select Metro Manila
                dates are possible with travel fees.
              </p>
            </div>
            <div className='flex flex-wrap gap-2'>
              {locations.serviceAreas.map((area) => (
                <span
                  key={area}
                  className='rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80'
                >
                  {area}
                </span>
              ))}
            </div>
            <p className='text-xs text-white/60'>{locations.travelNotes}</p>
          </section>

          <section className='rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-7 flex flex-col gap-4'>
            <h3 className='text-xl font-semibold text-white'>Contact channels</h3>
            <div className='grid md:grid-cols-2 gap-4 text-sm text-white/80'>
              <div className='rounded-lg border border-white/10 bg-black/50 p-4 flex flex-col gap-2'>
                <p className='text-xs uppercase tracking-[0.2em] text-white/60'>Socials</p>
                <p>Facebook Page: {socialMedia.facebookPage.url}</p>
                <p>Instagram: {socialMedia.instagram.handle}</p>
                <p>Messenger: {contact.messengerLink}</p>
                <p className='text-xs text-white/60'>
                  {contact.preferredContactNote}
                </p>
              </div>
              <div className='rounded-lg border border-white/10 bg-black/50 p-4 flex flex-col gap-2'>
                <p className='text-xs uppercase tracking-[0.2em] text-white/60'>Direct</p>
                <p>Phone: {contact.phoneNumbers.join(', ')}</p>
                <p>Email: {contact.email}</p>
                <p>Viber: {contact.otherChannels.find((c) => c.type === 'Viber')?.value}</p>
              </div>
            </div>
            <p className='text-xs text-white/70'>
              (Replace TODOs with your live links and numbers when ready.)
            </p>
          </section>

          <section className='rounded-2xl border border-[#B83838]/30 bg-[#B83838]/15 px-6 py-6 flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <p className='text-xs uppercase tracking-[0.25em] text-white/70'>Packages</p>
              <h4 className='text-lg font-semibold text-white'>Popular choices</h4>
              <p className='text-sm text-white/80'>
                Quick glance at what most clients book; full details on the Services page.
              </p>
            </div>
            <div className='grid sm:grid-cols-2 gap-3 text-sm text-white/80'>
              {services.slice(0, 2).map((service) => (
                <div
                  key={service.id}
                  className='rounded-lg border border-white/15 bg-black/40 px-4 py-3 flex flex-col gap-1'
                >
                  <p className='text-xs uppercase tracking-[0.2em] text-white/60'>
                    {service.type}
                  </p>
                  <p className='font-semibold text-white'>{service.name}</p>
                  <p className='text-white/75 text-sm'>{service.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </Background>
    </div>
  )
}
