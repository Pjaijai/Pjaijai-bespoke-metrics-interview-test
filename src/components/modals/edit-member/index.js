import React from "react"
import Modal from ".."
import MemberForm from "../../forms/members"

const EditMemberModal = ({ isOpen, onSuccess, initialValues, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <MemberForm
        onSuccess={onSuccess}
        isEdit={true}
        initialValues={initialValues}
      />
    </Modal>
  )
}

export default EditMemberModal
