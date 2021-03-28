import { useState, useEffect, Dispatch, SetStateAction } from 'react'

type Response<T> = [
  T,
  Dispatch<SetStateAction<T>>,
]

function usePersistedState<T>(key: string, initialState: T): Response<T> {
  const [mounted, setMounted] = useState(false)
  const [state, setState] = useState(() => {
    if (!mounted) return initialState

    const storedValue = localStorage.getItem(key)

    if (storedValue) setState(JSON.parse(storedValue))
  })



  useEffect(() => {
    setMounted(true)
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}

export default usePersistedState
