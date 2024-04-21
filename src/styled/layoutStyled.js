const { default: styled } = require("styled-components");

export const Layout = styled.div`
  .children {
    margin-left: 112px;
    padding-top: 100px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.middle}) {
    .children {
      margin-left: 0 !important;
    }
  }
`;
