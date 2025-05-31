'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import LoadingBar, { LoadingBarRef } from 'react-top-loading-bar'

export function NavigationProgress() {
  const ref = useRef<LoadingBarRef>(null)
  const pathname = usePathname()

  useEffect(() => {
    ref.current?.continuousStart()

    const timer = setTimeout(() => {
      ref.current?.complete()
    }, 500) // delay biar animasi kelihatan

    return () => clearTimeout(timer)
  }, [pathname]) // jalan tiap kali route berubah

  return (
    <LoadingBar
      color="var(--muted-foreground)"
      ref={ref}
      shadow
      height={2}
    />
  )
}
