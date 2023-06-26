interface ModalProps {
  isOpen?: boolean
  onClose: () => void
  onSubmit: () => void
  title?: string
  body?: React.ReactElement
  footer?: React.ReactElement
  actionLable: string
  disable?: boolean
  secondaryAction?: () => void
  secondaryActionLabel?: string

}

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
  return ( 
    <div>

    </div>
   );
}
 
export default Modal;