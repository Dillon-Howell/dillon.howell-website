import "./modal.css";
import React, { useState } from "react";
export const IntroModal = ({modalToggle, handleFocus}) => {
  const [showModal, setShowModal] = useState(modalToggle);

    const handleModal = () => {
        setShowModal(false);
        handleFocus();
    }

  return ( <>
  {showModal ?
   <div className="modal">
   <div className="modal-content">
       <div className="modal-header">
           <h4 className="modal-title">Hello, and welcome!</h4>
       </div>
       <div className="modal-body">
           <p>
               You've landed on my personal website, a React-based terminal emulator. I'm constantly adding features and improving its look and feel. It's my ongoing project.
           </p>
           <p>
               If you need help, type 'help' to see available commands. The terminal here mirrors bash command functionality to navigate through the site.
           </p>
           <p>
If you find yourself unable to type, either refresh the page or click left of the blinking cursor           </p>
       </div>
       <div className="modal-footer">
       </div>
       <button className="modal-close" onClick={handleModal}>Close</button>
   </div>
</div>

    : null}
    </>)
}