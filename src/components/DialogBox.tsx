import React from "react";

interface DialogBoxProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

const DialogBox: React.FC<DialogBoxProps> = ({ isOpen, onClose, message }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center overflow-x-hidden overflow-y-auto">
      <div className="bg-black opacity-50 fixed inset-0"></div>

      <div className="relative bg-yellow-500 p-6 rounded-lg shadow-xl h-100 ">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Sucessful!</h2>
          <button
            onClick={onClose}
            className="text-black-500 hover:text-gray-700 focus:outline-none"
          >
            Close
          </button>
        </div>

        <div className="modal-content ">
          <p className="text-gray-800">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
