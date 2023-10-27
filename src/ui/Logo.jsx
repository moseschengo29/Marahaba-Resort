import { styled } from "styled-components";

function Logo() {
  const Logo = styled.h1`
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 200;
    letter-spacing: 3px;
    color: var(--color-grey-400);

    span {
      font-weight: 800;
      color: var(--color-grey-900);
    }
  `;
  return (
    <Logo>
      Marahaba <span>Resort</span>
    </Logo>
  );
}

export default Logo;
