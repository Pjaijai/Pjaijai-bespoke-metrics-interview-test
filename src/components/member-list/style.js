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

const AddButton = styled.button`
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 5px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding: 1rem;
`

const Header = styled.div`
  display: flex;
  width: 80%;
  justify-content: flex-end;
  margin-bottom: 1rem;
`

export { Block, Filters, ActivitiesContainer, AddButton, Container, Header }
