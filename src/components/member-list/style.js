import styled from "styled-components"

const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  padding: 0 5rem;
`

const Filters = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  width: 80%;
  margin: 1rem 0;
`

const ActivitiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
`

export { Block, Filters, ActivitiesContainer }
