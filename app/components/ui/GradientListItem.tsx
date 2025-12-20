'use client'

const GradientListItem = ({
  listKey,
  name,
  activeKey,
  updateKey,
}: {
  listKey: number
  name: string
  activeKey: number
  updateKey: (key: number) => void
}) => {
  const isActive = activeKey === listKey
  return (
    <li
      onClick={() => updateKey(listKey)}
      key={listKey}
      className={`
        text-3xl
        transition-all
        select-none font-semibold
        ${
          isActive
            ? 'bg-linear-to-r  from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent'
            : 'text-white'
        }
        duration-300 hover:scale-105 hover:bg-linear-to-r hover:from-emerald-400 hover:via-teal-400 hover:to-cyan-400 hover:bg-clip-text hover:text-transparent
      `}
    >
      {name}
    </li>
  )
}

export default GradientListItem;
