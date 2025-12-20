const arr = [
  { title: "School Full Band", imgSrc: "/event-types/school-full-band.jpg" },
  {
    title: "Church Anniversary",
    imgSrc: "/event-types/church-anniversary.jpg",
  },
  { title: "Corporate", imgSrc: "/event-types/corporate.jpg" },
  { title: "Cozy Cove Style", imgSrc: "/event-types/cozy-cove.jpg" },
  { title: "Restobar Band Setup", imgSrc: "/event-types/resto-bar.jpg" },
  { title: "Gymnasium", imgSrc: "/event-types/gymnasium.jpg" },
];

const GalleryCards = () => {
  return (
    <div
      className='
        grid grid-cols-3
      '
    >
      {arr.map((item, i) => (
        <div
          key={i}
          className='
            overflow-hidden
            w-full h-75
            cursor-pointer
            saturate-60 brightness-90 hover:brightness-100 hover:saturate-150 transition duration-300 relative group
          '
        >
          <img
            src={item.imgSrc}
            alt=''
            className='
              object-cover
              w-full h-full
            '
          />

          <h6
            className='
              text-start text-lg font-semibold
              absolute group-hover:bottom-4 inset-x-3 z-10
            '
          >
            {item.title}
          </h6>
          <div
            className='
              h-50
              bg-linear-to-t from-black/80 via-black/40 to-transparent
              opacity-0 transition-opacity
              absolute inset-x-0 bottom-0 group-hover:opacity-100 duration-300
            '
          />
        </div>
      ))}
    </div>
  )
};

export default GalleryCards;
