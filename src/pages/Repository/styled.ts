import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;

    text-decoration: none;
    color: #a8a7b3;

    transition: color 0.2s;
    &:hover {
      color: #666666;
    }
  }

  svg {
    margin-right: 4px;
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 60px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;

      @media screen and (max-width: 540px) {
        width: 80px;
        height: 80px;
      }
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }

      @media screen and (max-width: 540px) {
        strong {
          font-size: 28px;
        }
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }

  @media screen and (max-width: 540px) {
    ul {
      justify-content: center;

      li {
        text-align: center;
        & + li {
          margin-left: 40px;
        }
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

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

export const Load = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: calc(100vh - 80px);
`;

export const Dot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 10px;
  display: inline-block;
  background-color: #6869bb;
  transform: scale(0.2);
  animation: animacao 1.2s infinite;

  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
  &:nth-child(4) {
    animation-delay: 0.7s;
  }
  &:nth-child(5) {
    animation-delay: 1s;
  }
  &:nth-child(6) {
    animation-delay: 1.2s;
  }

  @keyframes animacao {
    0%,
    100% {
      transform: scale(0.2);
    }
    50% {
      transform: scale(1);
    }
  }
`;
