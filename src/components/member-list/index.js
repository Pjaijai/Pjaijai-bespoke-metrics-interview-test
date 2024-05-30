import React from "react"

import useSearchMembers from "../../hooks/api/useSearchMembers"

import { ActivitiesContainer, Block, Filters } from "./style"
import SortMemberSelect from "../selects/sort-member"
import TextInput from "../inputs/text"
import NumberInput from "../inputs/number"
import MemberTable from "../tables/member"

const MemberList = () => {
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
  } = useSearchMembers()

  return (
    <Block>
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

      <MemberTable data={data} loading={loading} />
    </Block>
  )
}

export default MemberList
