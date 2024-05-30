import styled from "styled-components"

const Table = styled.table`
  width: calc(100% - 10rem);
  padding: 0 5rem;
  max-width: 100%;
  background: #fff;
  border-radius: 5px;
  border-collapse: collapse;
  box-shadow: 0px 1px 5px 2px #d3d1d1;
`

const Thead = styled.thead`
  background: lightgrey;
`

const TH = styled.th`
  padding: 0.5rem;
  text-align: center;
`

const Cell = styled.td`
  padding: 0.5rem;
  text-align: center;
`
export { Table, Thead, TH, Cell }
