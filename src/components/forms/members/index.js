import React, { useState } from "react"

import { createMember, editMember } from "../../../api"
import TextInput from "../../inputs/text"
import NumberInput from "../../inputs/number"

const MemberForm = ({ isEdit, onSuccess, initialValues }) => {
  if (isEdit && !initialValues) throw Error("should provide initial values")

  const [name, setName] = useState(isEdit ? initialValues.name : "")
  const [age, setAge] = useState(isEdit ? initialValues.age : "")
  const [rating, setRating] = useState(isEdit ? initialValues.rating : "")
  const [activities, setActivities] = useState(
    isEdit ? initialValues.activities : ""
  )
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      setIsSubmitting(true)

      const splittedActivitiesArray = activities.split(/\s+/)

      if (!name) return alert("Name is required")
      if (!age) return alert("Age is required")
      if (!rating) return alert("Rating is required")
      if (!activities) return alert("Activities is required")

      const data = {
        name,
        rating,
        age,
        activities: splittedActivitiesArray,
      }

      if (isEdit) {
        const edit_res = await editMember(data, initialValues.id)
      } else {
        const create_res = await createMember(data)
      }

      if (onSuccess) {
        onSuccess()
      }
      setName("")
      setAge("")
      setRating("")
      setActivities("")
    } catch (err) {
      alert(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleNameChange = (e) => {
    setName(e.target.value.trim())
  }

  const handleRatingChange = (e) => {
    const value = e.target.value
    if (value < 0 || value > 5) return
    if (!isNaN(value)) {
      setRating(value)
    }
  }

  const handleAgeChange = (e) => {
    const value = e.target.value
    if (value < 0) return
    if (!isNaN(value)) {
      setAge(value)
    }
  }

  const handleActivitiesChange = (e) => {
    setActivities(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        placeholder={"Name"}
        value={name}
        onChange={handleNameChange}
      />
      <NumberInput placeholder={"Age"} value={age} onChange={handleAgeChange} />
      <NumberInput
        placeholder={"Rating"}
        value={rating}
        onChange={handleRatingChange}
      />
      <TextInput
        placeholder={"Activities (use whitespace to separate)"}
        value={activities}
        onChange={handleActivitiesChange}
      />
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  )
}

export default MemberForm
