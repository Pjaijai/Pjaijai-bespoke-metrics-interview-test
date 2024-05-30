import React from "react"

import { StyledSelect, StyledSelectContainer } from "./style"

const Select = ({ options, onChange, label, value }) => {
  return (
    <StyledSelectContainer>
      {label && <label>{label}</label>}
      <StyledSelect onChange={onChange} value={value}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.title}
          </option>
        ))}
      </StyledSelect>
    </StyledSelectContainer>
  )
}

export default Select
