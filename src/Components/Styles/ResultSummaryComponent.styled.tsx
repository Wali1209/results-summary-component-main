import styled from "styled-components";

interface ListProps {
  color: string;
}
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;

  > div {
    width: 700px;
    min-height: 500px;
    display: flex;
    justify-content: stretch;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

export const Section1 = styled.section`
  width: 50%;
  height: 100%;
  text-align: center;
  background: linear-gradient(to top, #3e00d8, #6326f8);

  border-radius: 30px;
  h3:first-child {
    color: hsl(241, 100%, 89%);
    font-size: 1.5rem;
    font-weight: 700;
    margin: 40px 0;
  }
  div {
    width: 200px;
    height: 200px;
    margin: auto;
    background: #4a00d7;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 5rem;
      color: hsl(0, 0%, 100%);
    }
    span {
      font-size: 18px;
      color: hsl(241, 100%, 89%);
      opacity: 0.6;
      margin-top: -20px;
    }
  }
  div + h3 {
    font-size: 30px;
    color: hsl(0, 0%, 100%);
    margin: 20px 0;
  }
  p {
    font-size: 18px;
    opacity: 0.6;
    text-align: center;
    width: 250px;
    color: white;
    margin: 15px auto 40px auto;
    text-align: center;
  }
`;

export const Section2 = styled.section`
  width: 50%;
  height: 100%;

  h3 {
    color: #000;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 40px;
  }
  > div {
    width: 80%;
    height: 100%;
    margin: 0 auto;
  }
  button {
    width: 100%;
    border: none;
    background-color: #373b58;
    color: #fff;
    font-size: 18px;
    letter-spacing: 1.5px;
    padding: 20px 0;
    border-radius: 30px;
    cursor: pointer;
  }
  button:hover {
    background: linear-gradient(to top, #3e00d8, #6326f8);
  }
`;

export const SummaryList = styled.div<ListProps>`
  width: 100%;
  margin: 40px 25px;
  font-size: 18px;
  position: relative;
  cursor: pointer;
  > span {
    margin-left: 8px;
    color: ${(Props) => Props.color};
  }
  b {
    position: absolute;
    right: 30px;
    span {
      font-weight: 400;
      opacity: 0.6;
    }
  }
`;
