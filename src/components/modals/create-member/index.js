import React from "react"
import Modal from ".."
import MemberForm from "../../forms/members"

const CreateMemberModal = ({ isOpen, onSuccess, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <MemberForm onSuccess={onSuccess} isEdit={false} />
    </Modal>
  )
}

export default CreateMemberModal
