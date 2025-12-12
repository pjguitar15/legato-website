import Background from '../components/ui/Background'
import stripes from '@/public/backgrounds/stripes.png'
import Link from 'next/link'
import {
  samplePortfolio,
  eventTypes,
  brand,
  socialMedia,
  portfolioImagePlaceholders,
} from '../constants/businessInfo'

export default function PortfolioPage() {
  const facebookLink = socialMedia.facebookPage.url || '#'

  return (
    <div className='relative min-h-screen'>
      <Background imageUrl={stripes}>
        <div className='max-w-5xl mx-auto px-6 pt-52 pb-24 flex flex-col gap-14'>
          <header className='flex flex-col gap-3'>
            <p className='text-sm uppercase tracking-[0.3em] text-white/70'>
              Portfolio
            </p>
            <h1 className='text-4xl md:text-5xl font-semibold text-white'>
              Snapshots from our Cavite gigs
            </h1>
            <p className='text-lg text-white/80 max-w-3xl'>
              {brand.descriptionShort} Here are some of the events we enjoyed mixing,
              lighting, and telling stories about.
            </p>
            <p className='text-sm text-white/70'>
              Want your event here? Message us on Facebook to book.
            </p>
          </header>

          <section className='rounded-2xl border border-white/10 bg-black/70 backdrop-blur p-8 flex flex-col gap-4 shadow-2xl shadow-black/30'>
            <div className='flex flex-col gap-2'>
              <p className='text-xs uppercase tracking-[0.25em] text-white/70'>Image placeholders</p>
              <h3 className='text-xl font-semibold text-white'>Drop your photos here later</h3>
              <p className='text-white/70'>
                Replace these boxes with your favorite gig shots, BTS frames, and crowd moments.
              </p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-3'>
              {portfolioImagePlaceholders.map((ph) => (
                <div
                  key={ph.id}
                  className='rounded-xl border border-white/10 bg-white/10 px-4 py-5 flex flex-col gap-3 h-36 justify-between'
                >
                  <span className='text-white/80 font-semibold text-sm'>{ph.label}</span>
                  <span className='text-xs text-white/60 uppercase tracking-[0.2em]'>
                    Image placeholder
                  </span>
                </div>
              ))}
            </div>
          </section>

          <div className='grid md:grid-cols-2 gap-8'>
            {samplePortfolio.map((item) => (
              <article
                key={item.title}
                className='rounded-2xl border border-white/10 bg-black/60 backdrop-blur p-7 flex flex-col gap-4 shadow-2xl shadow-black/30'
              >
                <div className='flex flex-col gap-1'>
                  <p className='text-xs uppercase tracking-[0.25em] text-white/60'>
                    {item.eventType}
                  </p>
                  <h2 className='text-xl font-semibold text-white'>{item.title}</h2>
                  <p className='text-sm text-white/70'>{item.location}</p>
                </div>
                <p className='text-white/80 text-sm leading-6'>{item.description}</p>
                <div className='rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-xs text-white/70'>
                  {item.notes}
                </div>
              </article>
            ))}
          </div>

          <section className='rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8 flex flex-col gap-5'>
            <div className='flex flex-col gap-2'>
              <p className='text-xs uppercase tracking-[0.25em] text-white/70'>
                Events we love
              </p>
              <h3 className='text-xl font-semibold text-white'>
                We are down for these kinds of shows
              </h3>
              <p className='text-white/70 max-w-3xl'>
                From chill cafe sets to campus hype events, we adapt the rig to fit the
                vibe, venue size, and timeline.
              </p>
            </div>
            <div className='flex flex-wrap gap-2'>
              {eventTypes.map((event) => (
                <span
                  key={event}
                  className='rounded-full border border-white/15 bg-black/50 px-4 py-2 text-sm text-white/80'
                >
                  {event}
                </span>
              ))}
            </div>
          </section>

          <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4 rounded-2xl border border-[#B83838]/30 bg-[#B83838]/15 px-6 py-5'>
            <div className='flex flex-col gap-1'>
              <h4 className='text-lg font-semibold text-white'>Need this kind of setup?</h4>
              <p className='text-sm text-white/80'>
                Tell us the date, venue, and program flow on Facebook. We will match you to the right package.
              </p>
            </div>
            <Link
              href={facebookLink}
              className='inline-flex items-center justify-center rounded-full bg-[#B83838] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-[#B83838]/30 transition hover:-translate-y-0.5 hover:shadow-xl'
            >
              Message on Facebook
            </Link>
          </div>
        </div>
      </Background>
    </div>
  )
}
