import React, { useState } from "react"

import useSearchMembers from "../../hooks/api/useSearchMembers"

import CreateMemberModal from "../modals/create-member"
import EditMemberModal from "../modals/edit-member"

import {
  ActivitiesContainer,
  AddButton,
  Block,
  Container,
  Filters,
  Header,
} from "./style"
import SortMemberSelect from "../selects/sort-member"
import TextInput from "../inputs/text"
import NumberInput from "../inputs/number"
import MemberTable from "../tables/member"

const MemberList = () => {
  const EDIT_MEMBER_INITIAL_VALUES = {
    id: null,
    name: null,
    rating: null,
    age: null,
    activities: null,
  }
  const [isCreateMemberModalOpen, setIsCreateMemberModalOpen] = useState(false)
  const [isEditMemberModalOpen, setIsEditMemberModalOpen] = useState(false)
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
    refetch,
    handleSortingChange,
    sorting,
  } = useSearchMembers()

  // Create member
  const handleCreateMemberClick = () => {
    setIsCreateMemberModalOpen(true)
  }

  const onCreateMemberSuccess = () => {
    setIsCreateMemberModalOpen(false)
    refetch()
  }

  const onCreateMemberModelClose = () => {
    setIsCreateMemberModalOpen(false)
  }

  // Edit member
  const handleEditMemberClick = (values) => {
    const { id, age, activities, name, rating } = values
    const activitiesString = activities.join(" ")

    setEditInitialValues({
      id,
      age,
      activities: activitiesString,
      name,
      rating,
    })
    setIsEditMemberModalOpen(true)
  }

  const onEditMemberSuccess = () => {
    setIsCreateMemberModalOpen(false)
    setEditInitialValues({
      EDIT_MEMBER_INITIAL_VALUES,
    })

    refetch()
    setIsEditMemberModalOpen(false)
  }

  const onEditMemberModelClose = () => {
    setIsEditMemberModalOpen(false)
  }

  return (
    <Block>
      <CreateMemberModal
        isOpen={isCreateMemberModalOpen}
        onSuccess={onCreateMemberSuccess}
        onClose={onCreateMemberModelClose}
      />
      <EditMemberModal
        isOpen={isEditMemberModalOpen}
        onSuccess={onEditMemberSuccess}
        initialValues={editInitialValues}
        onClose={onEditMemberModelClose}
      />
      <h1>My Club's Members</h1>

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
        <Header>
          <AddButton onClick={handleCreateMemberClick}>+ member</AddButton>
        </Header>
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
