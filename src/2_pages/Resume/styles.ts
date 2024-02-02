import styled from "@emotion/styled";

export const ResumeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  height: 100vh;
  margin: 50px;
`;

export const ResumeBasicInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-column-gap: 10px;
`;

export const ResumeNameText = styled.p`
  font-size: 18px;
`;
