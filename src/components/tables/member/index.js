import React, { memo } from "react"
import { TH, Table, Thead } from "./style"
import { Row } from "../row"

const MemberTable = memo(({ loading, data, onEditClick }) => {
  return (
    <Table>
      <Thead>
        <tr>
          <TH>Name</TH>
          <TH>Age</TH>
          <TH>Member Rating</TH>
          <TH>Activities</TH>
          <TH />
        </tr>
      </Thead>
      {!loading && data && (
        <tbody>
          {data.map((member) => (
            <Row {...member} key={member.id} handleClick={onEditClick} />
          ))}
        </tbody>
      )}

      {loading && "Loading please wait"}

      {loading && !data.length > 0 && "Cannot found member"}
    </Table>
  )
})

export default MemberTable
