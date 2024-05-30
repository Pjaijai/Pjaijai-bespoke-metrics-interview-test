import { useState, useEffect, useCallback } from "react"
import { getMembers } from "../../api"

const useGetMembers = ({ name, onSuccess, onError, onSettle }) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  if (onSuccess && typeof onSuccess !== "function")
    new Error("useGetMembers onSuccess is not an function")
  if (onError && typeof onError !== "function")
    new Error("useGetMembers onSettle is not an function")
  if (onSettle && typeof onSettle !== "function")
    new Error("useGetMembers onSettle is not an function")

  const fetchData = useCallback(async () => {
    setLoading(true)
    try {
      const result = await getMembers(name)

      setData(result)

      if (onSuccess) {
        onSuccess(result)
      }
    } catch (error) {
      if (onError) {
        onError(error)
      }
      setError(error)
    } finally {
      setLoading(false)
      if (onSettle) {
        onSettle()
      }
    }
  }, [name, onError, onSettle, onSuccess])

  useEffect(() => {
    fetchData()
  }, [fetchData, name])

  return { data, error, loading }
}

export default useGetMembers
