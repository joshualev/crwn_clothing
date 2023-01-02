import styled, { css } from "styled-components";

const subColor = "#778a9d";
const mainColor = "#b8cbdf";

const shrinkLabelStyles = css`
  top: -14px;

  font-size: 10px;
  color: ${mainColor};
`;

type FormInputLabelProps = {
  shrink?: boolean;
};

export const FormInputLabel = styled.label<FormInputLabelProps>`
  color: ${subColor};
  font-size: 14px;
  font-family: "Seymour One", sans-serif;

  font-weight: normal;
  position: absolute;
  pointer-events: none;

  top: 5px;
  transition: 300ms ease all;
  ${({ shrink }) => shrink && shrinkLabelStyles};
`;

export const Input = styled.input`
  position: relative;

  right: 30px;
  background: none;

  color: ${subColor};
  font-size: 10px;
  padding: 10px 10px 10px 50px;
  display: block;
  width: 100%;
  border: none;

  border-bottom: 1px solid ${subColor};

  margin: 5px 0;
  margin-left: 30px;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles};
  }
`;

export const Group = styled.div`
  position: relative;
  margin: 45px 0;

  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;
