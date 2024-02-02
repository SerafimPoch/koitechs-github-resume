import styled from "@emotion/styled";

export const HomeContainer = styled.div`
  margin: 50px;

  @media (max-width: 767px) {
    margin: 25px;
  }
`;

export const HomeImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
`;

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const HomeTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 48px;

  @media (max-width: 767px) {
    font-size: 36px;
  }
`;

export const HomeDescription = styled.p`
  text-align: center;
  font-size: 18px;

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const HomeFormWrapper = styled.div`
  display: grid;
  justify-content: center;
  /* grid-template-rows: 40px; */
`;

export const HomeErrorText = styled.p`
  color: red;
  font-size: 12px;
  grid-row: 2;
`;
