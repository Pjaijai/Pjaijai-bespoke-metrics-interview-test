import styled from "styled-components"
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`

const ModalContainer = styled.div`
  position: relative;
  background: #fff;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  z-index: 300;
  padding: 4rem;
`

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  background: none;
  border: none;
  color: #000;
  cursor: pointer;
`

export { ModalContainer, ModalOverlay, CloseButton }
