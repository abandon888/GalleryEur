import { useState } from 'react'
import './modal.css'

type ModalProps = {
  title: string
  content: string
  onClose: () => void
}

function Modal({ title, content, onClose }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return (
    <>
      {/* <button onClick={open}>Open Modal</button> */}

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={close}>
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
