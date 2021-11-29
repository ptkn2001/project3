import React , { useState }  from 'react'
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
  const [categoryName, setCategoryName] = useState(''); 

  const handleUpdate = () => {
    updateCategory(categoryName);
    onClose();
  }

  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <input type="text" value={children} onChange={(event) => setCategoryName(event.target.value)} />
        <button onClick={handleUpdate}>OK</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </>,
    document.getElementById('portal')
  )
}