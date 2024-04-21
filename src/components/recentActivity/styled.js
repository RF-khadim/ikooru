const { default: styled } = require("styled-components");

export const RecentActivity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(50vh - 50px); // focus this
  overflow-y: auto;
  overflow-x: auto;
  background-color: ${({ theme }) => theme.colors.lightGrey1};
  padding: 0 10px;
  .recent-text {
    padding: 0 20px;
    align-self: flex-start;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.blackishGrey};
    font-weight: bold;
  }

  .project {
    cursor: pointer;
    margin-top: 20px;
    display: flex;
    gap: 15px;
  }

  .project p {
    color: ${({ theme }) => theme.colors.blackishGrey};
    font-weight: bolder;
    font-size: 15px;
  }
  .controls {
    display: flex;
    gap: 10px;
  }
  .controls > * {
    cursor: pointer;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.small}) {
    display: none !important;
  }
`;
