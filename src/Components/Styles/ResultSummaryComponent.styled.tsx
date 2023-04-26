import styled from "styled-components";

interface ListProps {
  color: string;
}

export const Section1 = styled.section`
  width: 50%;
  height: 100%;
  text-align: center;
  background: linear-gradient(to top, #3e00d8, #6326f8);
  border-radius: 30px;
  padding: 2rem;
  cursor: default;

  h3:first-child {
    color: hsl(241, 100%, 89%);
    font-size: 1.5rem;
    font-weight: 700;
  }
  div {
    width: 12.5rem;
    height: 12.5rem;
    margin: 1.5rem auto;
    background: #4a00d7;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 4rem;
      color: hsl(0, 0%, 100%);
    }
    span {
      font-size: 1.125rem;
      color: hsl(241, 100%, 89%);
      opacity: 0.6;
      margin-top: -1.125rem;
    }
  }
  div + h3 {
    font-size: 2rem;
    color: hsl(0, 0%, 100%);
  }
  p {
    font-size: 1.125rem;
    opacity: 0.6;
    text-align: center;
    width: 250px;
    color: white;
    margin: 1rem auto;
    text-align: center;
  }

  /* Media Queries */
  @media screen and (max-width: 540px) {
    width: 100%;
  }
`;

export const Section2 = styled.section`
  width: 50%;
  height: 100%;
  padding: 2rem;

  h3 {
    color: #000;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }
  > div {
    width: 100%;
    button {
      width: 100%;
      border: none;
      background-color: #373b58;
      color: #fff;
      font-size: 1.125remc;
      letter-spacing: 1.5px;
      padding: 1.25rem 0;
      border-radius: 30px;
      cursor: pointer;
    }
    button:hover {
      background: linear-gradient(to top, #3e00d8, #6326f8);
    }
    button:focus {
      background: linear-gradient(to top, #3e00d8, #6326f8);
    }
  }

  /* Media Queries */
  @media screen and (max-width: 540px) {
    width: 100%;
  }
`;

export const SummaryList = styled.div<ListProps>`
  width: 100%;
  display: flex;
  font-size: 1.125rem;
  margin-left: 1rem;
  margin-bottom: 3rem;
  cursor: pointer;

  img {
    display: inline-block;
    margin-right: 1rem;
  }
  > span {
    color: ${(Props) => Props.color};
  }
  b {
    text-align: end;
    flex-grow: 1;
    span {
      font-weight: 400;
      opacity: 0.6;
    }
  }
`;
