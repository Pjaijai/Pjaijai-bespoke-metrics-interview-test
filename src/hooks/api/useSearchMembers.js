import { useCallback, useEffect, useMemo, useState } from "react"
import useGetMembers from "./useGetMembers"

const useSearchMembers = () => {
  const [name, setName] = useState("")

  const [members, setMembers] = useState()
  const [activities, setActivities] = useState("")
  const [minRating, setMinRaring] = useState(0)
  const [maxRating, setMaxRaring] = useState(5)
  const [selectedActivities, setSelectedActivities] = useState([])
  const [sorting, setSorting] = useState("nameAsc")

  const onSuccess = useCallback((data) => {
    setMembers(data)
  }, [])

  const { data, error, loading } = useGetMembers({
    name,
    onSuccess,
  })

  const filterMemberByRaring = (members, min, max) => {
    return members.filter(
      (member) => member.rating >= min && member.rating <= max
    )
  }

  const handleActivitiesChange = (e) => {
    setActivities(e.target.value)
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleMinRatingChange = (e) => {
    const minValue = e.target.value
    if (minValue > maxRating || minValue < 0) return
    setMinRaring(e.target.value)

    setMembers(filterMemberByRaring(data, e.target.value, maxRating))
  }

  const handleMaxRatingChange = (e) => {
    const maxValue = e.target.value
    if (maxValue < minRating || maxValue > 5) return
    setMaxRaring(e.target.value)

    setMembers(filterMemberByRaring(data, minRating, e.target.value))
  }

  const handleActivityChange = (activity) => {
    if (selectedActivities.includes(activity)) {
      setSelectedActivities(
        selectedActivities.filter((item) => item !== activity)
      )
    } else {
      setSelectedActivities([...selectedActivities, activity])
    }
  }

  const activityOptions = useMemo(() => {
    const activitySet = new Set()

    if (members) {
      members.forEach((member) => {
        member.activities.forEach((activity) => {
          activitySet.add(activity)
        })
      })
    }

    const activitiesArray = Array.from(activitySet)
    setSelectedActivities(Array.from(activitiesArray))
    return Array.from(activitiesArray)
  }, [members])

  const handleSortingChange = (e) => {
    setSorting(e.target.value)
  }

  const sortByName = (array, ascending = true) => {
    return array.slice().sort((a, b) => {
      const nameA = a.name.toLowerCase() // Convert names to lowercase for case-insensitive comparison
      const nameB = b.name.toLowerCase()
      if (ascending) {
        return nameA.localeCompare(nameB)
      } else {
        return nameB.localeCompare(nameA)
      }
    })
  }

  const filteredMembers = useMemo(() => {
    if (!members) return []

    // filter activities
    const filteredActivities = members.filter((member) =>
      selectedActivities.some((activity) =>
        member.activities.includes(activity)
      )
    )

    // filter rating
    const filteredRating = filterMemberByRaring(
      filteredActivities,
      minRating,
      maxRating
    )

    // Sort by Name
    let sortedMembers
    if (sorting === "nameAsc") {
      sortedMembers = sortByName(filteredRating)
    } else {
      sortedMembers = sortByName(filteredRating, false)
    }
    return sortedMembers
  }, [maxRating, members, minRating, selectedActivities, sorting])

  return {
    data: filteredMembers,
    error,
    loading,
    handleNameChange,
    name,
    handleMinRatingChange,
    handleMaxRatingChange,
    maxRating,
    minRating,
    handleActivitiesChange,
    activities,
    activityOptions,
    handleActivityChange,
    selectedActivities,
    handleSortingChange,
    sorting,
  }
}

export default useSearchMembers
