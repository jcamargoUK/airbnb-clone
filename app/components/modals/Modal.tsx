"use client";

import { useCallback, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import Button from "../Button";

// Compare this snippet from app/components/modals/RegisterModal.tsx:
interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLable: string;
  disable?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel: string;
}
// define the Modal component
const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLable,
  disable,
  secondaryAction,
  secondaryActionLabel,
}) => {
  // define the state for the modal
  const [showModal, setShowModal] = useState(isOpen);

  // define the useEffect hook to update the state of the modal
  useEffect(() => {
    // if the modal is open, set the state to true
    setShowModal(isOpen);
  }, [isOpen]);

  // define the useCallback hook to handle the close event
  const handleClose = useCallback(() => {
    // if the modal is disabled, return
    if (disable) {
      return;
    }
    // set the state to false
    setShowModal(false);
    // set a timeout to close the modal
    setTimeout(() => {
    // call the onClose function
      onClose();
    }, 300);
  }, [disable, onClose]);

  // define the useCallback hook to handle the submit event
  const handleOnSubmit = useCallback(() => {
    // if the modal is disabled, return
    if (disable) {
      return;
    }
    // call the onSubmit function
    onSubmit();
  }, [disable, onSubmit]);

  // define the useCallback hook to handle the secondary action event
  const handleOnSecondaryAction = useCallback(() => {
    // if the modal is disabled or there is no secondary action, return
    if (disable || !secondaryAction) {
      return;
    }
    // call the secondaryAction function
    secondaryAction();
  }, [disable, secondaryAction]);

  // if the modal is not open, return null
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="
          justify-center
          items-center
          flex
          overflow-x-hidden
          overflow-y-auto
          fixed
          inset-0
          z-50
          outline-none
          focus:outline-none
          bg-neutral-800/70
        "
      >
        <div
          className="
            relative
            w-full
            md:w-4/6
            lg:w-3/6
            xl:w-2/5
            my-6
            mx-auto
            h-full
            lg:h-auto
            md:h-auto
          "
        >
          {/*content*/}
          <div
            className={`
             translate
             duration-300
             h-full
             ${showModal ? "opacity-100" : "opacity-0"}
             ${showModal ? "translate-y-0" : "-translate-y-full"}
            `}
          >
            <div
              className="
                  translate
                  h-full
                  lg;h-auto
                  md:h-auto
                  border-0
                  rounded-lg
                  shadow-lg
                  relative
                  flex
                  flex-col
                  w-full
                  bg-white
                  outline-none
                  focus:outline-none
                "
            >
              {/*header*/}
              <div
                className="
                    flex
                    items-center
                    p-6
                    rounded-t
                    justify-center
                    relative
                    border-b
                  "
              >
                <button
                  onClick={handleClose}
                  className="
                        p-1
                        border-0
                        hover:opacity-70
                        transition
                        absolute
                        left-9
                        "
                >
                  <IoClose size={18} />
                </button>
                <div className="text-lg font-semibold">{title}</div>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto">{body}</div>
              {/*footer*/}
              <div className="flex flex-col gap-2 p-6">
                <div
                  className="
                    flex
                    flex-row
                    items-center
                    gap-4
                    w-full
                  "
                >
                  {secondaryAction && secondaryActionLabel && (   
                  <Button
                    outline
                    disabled={disable}
                    label={secondaryActionLabel}
                    onClick={handleOnSecondaryAction}
                  />
                  )}
                  <Button
                    disabled={disable}
                    label={actionLable}
                    onClick={handleOnSubmit}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
