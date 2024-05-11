import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

function Modal({ children, open, onClose, className }) {
  const dialog = useRef();

  // 간혹 dialog.current가 클린업 함수와
  // 그 위의 함수 실행 사이에
  // 바뀌는 경우가 발생해서
  // 임시 상수에 값을 할당하는 것이 유용

  // esc로 모달을 닫으면 open값이 바뀌지 않아
  // 다시 cart 버튼을 틀릭해도 모달이 열리지 않음
  // open값의 변화가 없어 밑의 코드 블록이 재실행되지 않기 때문

  useEffect(() => {
    const modal = dialog.current
    if (open) {
      modal.showModal();
    } 

    return () => modal.close();
  }, [open]);

  console.log(open);

  return createPortal(
    <dialog className={`modal ${className}`} ref={dialog} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
}

export default Modal;
