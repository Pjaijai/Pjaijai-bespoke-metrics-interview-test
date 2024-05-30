import Input from ".."

const TextInput = ({ onChange, value, placeholder, label }) => (
  <Input
    type="text"
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    label={label}
  />
)

export default TextInput
