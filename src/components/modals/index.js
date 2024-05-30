import React from "react"
import { CloseButton, ModalContainer, ModalOverlay } from "./style"

const Modal = ({ isOpen, children, onClose }) => {
  if (!isOpen) return null
  return (
    <ModalOverlay>
      <ModalContainer>
        {onClose && typeof onClose === "function" && (
          <CloseButton onClick={onClose}>X</CloseButton>
        )}

        {children}
      </ModalContainer>
    </ModalOverlay>
  )
}

export default Modal
