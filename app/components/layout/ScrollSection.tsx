const ScrollSection = ({ children }: { children: React.ReactNode }) => (
  <div
    className='
      scrollbar-modern
      px-16 py-12
      flex flex-col gap-7 items-center
      w-full max-h-screen
      overflow-y-auto overflow-x-hidden
    '
  >
    {children}
  </div>
)

export default ScrollSection