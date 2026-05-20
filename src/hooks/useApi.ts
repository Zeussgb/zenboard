import { useState, useCallback } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

/**
 * Custom hook para gestionar los tres estados de una petición a la API
 * loading, success y error
 */
function useApi<T>() {
  const [data, setData] = useState<T | null>(null)
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string | null>(null)

  // useCallback evita que la función se recree en cada render
  const execute = useCallback(async (apiCall: () => Promise<T>) => {
    setStatus('loading')
    setError(null)
    try {
      const result = await apiCall()
      setData(result)
      setStatus('success')
      return result
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Error desconocido'
      setError(message)
      setStatus('error')
      return null
    }
  }, [])

  return {
    data,
    status,
    error,
    isLoading: status === 'loading',
    isError: status === 'error',
    isSuccess: status === 'success',
    execute
  }
}

export default useApi