import { useState } from 'react'
import './modal.css'

type ModalProps = {
  title: string
  content: string
  onClose: () => void
  isOpen: boolean
}

function Modal({ title, content, onClose, isOpen }: ModalProps) {
  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span
              className="close"
              //onClick={close}
            >
              &times;
            </span>
            <h1>{title}</h1>
            <p>{content}</p>
            <button onClick={onClose}>Confirm</button>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
