import styled, { css } from "styled-components";

export default styled.div`
  width: 100px;
  height: 100px;
  background-color: green;
  margin: 2rem;

  ${(props) =>
    props.$isBlack &&
    css`
      background-color: black;
    `}

  &:hover {
    background-color: red;
  }
`;
