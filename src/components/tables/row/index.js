import { memo } from "react"
import { Cell } from "./style"

export const Row = memo(
  ({ id, age, name, activities, rating, handleClick }) => (
    <tr key={id}>
      <Cell>{name}</Cell>
      <Cell>{age}</Cell>
      <Cell>{rating}</Cell>
      <Cell>
        {activities.map((activity, i) => (
          <div key={i}>{activity}</div>
        ))}
      </Cell>

      <Cell>
        <button
          onClick={() => handleClick({ id, age, name, activities, rating })}
        >
          edit
        </button>
      </Cell>
    </tr>
  )
)
