import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import { styled } from "styled-components";

function Modal({ children, close }) {
  const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--color-gre-300);
    backdrop-filter: blur(4px);
    transition: all 0.5s;
    z-index: 100;
  `;

  const StyledModal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--color-grey-0);
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-lg);
    padding: 3.2rem 4rem;
    transition: all 0.5s;
  `;

  const Button = styled.button`
    background: none;
    border: none;
    padding: 0.4rem;
    border-radius: var(--border-radius-sm);
    transform: translateX(0.8rem);
    transition: all 0.2s;
    position: absolute;
    top: 1.2rem;
    right: 1.9rem;

    &:hover {
      background-color: var(--color-grey-100);
    }

    & svg {
      width: 2.4rem;
      height: 2.4rem;
      /* Sometimes we need both */
      /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
      color: var(--color-grey-500);
    }
  `;

  return createPortal(
    <Overlay>
      <StyledModal>
        <Button onClick={close}>
          <HiXMark />
        </Button>
        <div>{children}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

export default Modal;
