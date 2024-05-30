import React from "react"
import Select from ".."

const SortMemberSelect = ({ onChange, value }) => {
  const options = [
    { title: "Sort By Name (A-Z)", value: "nameAsc" },
    { title: "Sort By Name (Z-A)", value: "nameDesc" },
  ]
  return (
    <Select
      options={options}
      onChange={onChange}
      label={"Sort"}
      value={value}
    />
  )
}

export default SortMemberSelect
