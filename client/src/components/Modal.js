import React from 'react'
import ReactDom from 'react-dom'

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

export default function Modal({ open, onClose, children, updateCategory }) {
  if (!open) return null;

  const handleUpdate = () => {
    const inputElement = document.getElementById('category_name');
    console.log(inputElement);
  }

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <input id="category_name" type="text" defaultValue={children} />
        <button onClick={handleUpdate}>OK</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </>,
    document.getElementById('portal')
  )
}