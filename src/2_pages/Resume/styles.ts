import styled from "@emotion/styled";

export const ResumeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  height: 100vh;
  margin: 50px;

  @media (max-width: 767px) {
    margin: 25px;
  }
`;

export const ResumeBasicInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-column-gap: 10px;
  margin-bottom: 50px;
`;

export const ResumeChartWrapper = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`;

export const ResumeChartMobileWrapper = styled.div`
  display: none;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const ResumeNameText = styled.p`
  font-size: 18px;
`;

export const ResumeGithubCardsWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
