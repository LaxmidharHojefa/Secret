import { useState, useCallback } from 'react'

export function useIntro() {
  const [introDone, setIntroDone] = useState(false)

  const completeIntro = useCallback(() => {
    setIntroDone(true)
  }, [])

  return { introDone, completeIntro }
}
