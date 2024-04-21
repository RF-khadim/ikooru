const { default: styled } = require("styled-components");

export const MobileRecentActivity = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50vh;
  overflow-y: auto;

  background-color: ${({ theme }) => theme.colors.lightGrey1};
  padding: 0 10px;
  .recent-text {
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
    font-weight: bold;
    font-size: 15px;
  }
  .controls {
    display: flex;
    gap: 10px;
  }
  .controls > * {
    cursor: pointer;
  }
`;
