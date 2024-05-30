import Input from ".."

const NumberInput = ({ onChange, value, placeholder, label }) => (
  <Input
    type="number"
    placeholder={placeholder}
    onChange={onChange}
    label={label}
    value={value}
  />
)

export default NumberInput
