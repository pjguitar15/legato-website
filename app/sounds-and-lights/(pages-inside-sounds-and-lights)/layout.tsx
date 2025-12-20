'use client'

import ScrollSection from "@/app/components/layout/ScrollSection"
import { useRouter } from "next/navigation"
import { IoArrowBack } from "react-icons/io5"

export default function SoundsAndLightsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  return (
    <ScrollSection>
      <div className="w-full">
        <button
          className='flex items-center gap-2 cursor-pointer text-xs text-zinc-200 hover:text-white animation duration-200'
          onClick={() => router.back()}
        >
          <IoArrowBack /> Back
        </button>
      </div>
      {children}
    </ScrollSection>
  )
}
