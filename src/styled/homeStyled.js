const { default: styled } = require("styled-components");

export const Home = styled.div`
  height: 20vh;
  height: calc(100vh - 100px);
  display: ${({ searchSlide }) => (searchSlide ? "flex" : "block")};
  .root-dashboard {
    flex-grow: 1;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.small}) {
    display: block !important;
  }
`;
