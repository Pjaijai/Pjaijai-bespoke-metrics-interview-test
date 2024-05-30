import { StyledInput } from "./style"

const Input = ({ onChange, value, placeholder, type, label }) => (
  <div>
    {label && <label>{label}</label>}
    <StyledInput
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  </div>
)

export default Input
