import { forwardRef, useImperativeHandle, useRef } from 'react'

import './Dialog.css'

const DeleteInvoiceDialog = forwardRef((props, ref) => {
  const deleteDialogRef = useRef()

  useImperativeHandle(ref, () => ({
    openDialog: () => {
      deleteDialogRef.current.showModal()

      deleteDialogRef.current.animate(
        [
          { transform: 'translateY(20px)', 
            opacity: '0' 
          },
          { transform: 'translateY(0px)', 
            opacity: '1' 
          },
        ],
        {
          duration: 100,
          iterations: 1,
        }
      )
    }
  }))

  const closeDialog = () => {
    deleteDialogRef.current.animate(
      [
        { transform: 'translateY(0px)', 
          opacity: '1' 
        },
        { transform: 'translateY(20px)', 
          opacity: '0' 
        },
      ],
      {
        duration: 100,
        iterations: 1,
      }
    )

    setTimeout(() => deleteDialogRef.current.close(), 100)
  }

  return (
    <dialog className='flow' ref={deleteDialogRef}>
      <h4 className='fw-bold fs-400'>Confirm Deletion</h4>

      <p className='fs-200 text-secondary'>Are you sure you want to delete invoice #XM9141? This action cannot be undone.</p>

      <div className='flex align-center justify-end'>
        <button className='button button--draft' onClick={closeDialog}>Cancel</button>
        <button className='button button--delete'>Delete</button>
      </div>
    </dialog>
  )
})

DeleteInvoiceDialog.displayName = 'DeleteInvoiceDialog'

export default DeleteInvoiceDialog