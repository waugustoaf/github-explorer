import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;

  @media screen and (max-width: 480px) {
    font-size: 38px;
  }
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;

    ${(props) =>
      props.hasError &&
      css`
        border: 2px solid #c53030;
        border-right: 0;
      `}

    &::placeholder {
      color: #a8a8b3;
    }

    @media screen and (max-width: 540px) {
      width: 100%;
      min-height: 70px;
      border-radius: 5px;

      ${(props) =>
        props.hasError &&
        css`
          border: 2px solid #c53030;
        `}
    }
  }

  button {
    width: 210px;
    height: 70px;

    background: #04d361;
    border-radius: 0 5px 5px 0;

    color: #ffffff;
    font-weight: bold;

    transition: background-color 0.2s;

    @media screen and (max-width: 540px) {
      width: 100%;
      margin-top: 10px;
      border-radius: 5px;
    }

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }

  @media screen and (max-width: 540px) {
    flex-direction: column;
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;

  @media screen and (max-width: 540px) {
    text-align: center;
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #ffffff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;

    transition: transform 0.2s;

    & + a {
      margin-top: 10px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcdb6;
    }
  }
`;
