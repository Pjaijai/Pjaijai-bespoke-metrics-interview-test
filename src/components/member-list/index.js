import React, { useState } from "react"

import useSearchMembers from "../../hooks/api/useSearchMembers"

import { ActivitiesContainer, Block, Container, Filters } from "./style"
import SortMemberSelect from "../selects/sort-member"
import TextInput from "../inputs/text"
import NumberInput from "../inputs/number"
import MemberTable from "../tables/member"
import MemberForm from "../forms/members"

const MemberList = () => {
  const EDIT_MEMBER_INITIAL_VALUES = {
    id: null,
    name: null,
    rating: null,
    age: null,
    activities: null,
  }
  const [editInitialValues, setEditInitialValues] = useState(
    EDIT_MEMBER_INITIAL_VALUES
  )

  const {
    data,
    handleNameChange,
    name,
    loading,
    handleMinRatingChange,
    handleMaxRatingChange,
    maxRating,
    minRating,
    activityOptions,
    handleActivityChange,
    selectedActivities,
    handleSortingChange,
    sorting,
    refetch,
  } = useSearchMembers()

  const onCreateMemberSuccess = () => {
    refetch()
  }

  const onEditMemberSuccess = () => {
    setEditInitialValues({
      EDIT_MEMBER_INITIAL_VALUES,
    })

    refetch()
  }

  const handleEditMemberClick = (values) => {
    console.log(124, values)
    const { id, age, activities, name, rating } = values
    const activitiesString = activities.join(" ")

    setEditInitialValues({
      id,
      age,
      activities: activitiesString,
      name,
      rating,
    })
  }

  return (
    <Block>
      <h1>My Club's Members</h1>
      <MemberForm onSuccess={onCreateMemberSuccess} isEdit={false} />
      <MemberForm
        onSuccess={onEditMemberSuccess}
        isEdit={true}
        initialValues={editInitialValues}
      />
      <Filters>
        <TextInput
          placeholder={"Search for a member"}
          onChange={handleNameChange}
          value={name}
          label={"Search member name"}
        />

        <NumberInput
          placeholder={"Min"}
          onChange={handleMinRatingChange}
          value={minRating}
          label={"Min rating"}
        />

        <NumberInput
          placeholder={"Max"}
          onChange={handleMaxRatingChange}
          value={maxRating}
          label={"Max rating"}
        />
        <SortMemberSelect onChange={handleSortingChange} value={sorting} />
      </Filters>

      <ActivitiesContainer>
        {activityOptions.map((activity) => (
          <div key={activity}>
            <label>
              <input
                type="checkbox"
                checked={selectedActivities.includes(activity)}
                onChange={() => handleActivityChange(activity)}
              />
              {activity}
            </label>
          </div>
        ))}
      </ActivitiesContainer>

      <Container>
        <MemberTable
          data={data}
          loading={loading}
          onEditClick={handleEditMemberClick}
        />
      </Container>
    </Block>
  )
}

export default MemberList
