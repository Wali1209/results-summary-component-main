import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;

  > div {
    width: 45rem;
    min-height: 30rem;
    display: flex;

    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

    /* Media Queries */
    @media screen and (max-width: 540px) {
      width: 100%;
      flex-direction: column;
    }
  }
`;
