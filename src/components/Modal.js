import React from "react";

const Modal = ({ selectedImg }) => {
  return (
    <div className="backdrop">
      <img src={selectedImg} alt="full size" />
    </div>
  );
};
export default Modal;
