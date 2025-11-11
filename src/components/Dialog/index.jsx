import { useEffect, useRef } from "react";
import "./dialog.style.css";
import { IconClose } from "../icons";

export function Dialog({ isOpen, onClose, children }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      openDialog();
    } else {
      closeDialog();
    }
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current
    dialog?.addEventListener('close', onClose)
    return () => {
      dialog?.removeEventListener('close', onClose)
    }
  }, [onClose])

  const openDialog = () => {
    // "Show the dialog" button opens the dialog modally
    dialogRef.current.showModal();
  };

  const closeDialog = () => {
    // "Close" button closes the dialog
    dialogRef.current.close();
  };

  return (
    <>
      <dialog ref={dialogRef} className="dialog">
        <div className="btn-close-wrapper">
          <button autofocus onClick={onClose} className="btn-close">
            <IconClose />
          </button>
        </div>
            <p>{children}</p>
      </dialog>
    </>
  );
}
