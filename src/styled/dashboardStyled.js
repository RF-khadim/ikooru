import styled from "styled-components";

export const Dashboard = styled.div`
  width: 100%;
  display: grid;
  height: calc(100vh - 100px);
  grid-template-columns: ${({ searchSlide }) => {
    return searchSlide ? "15% 65% 20%" : "15% 85%";
  }};
  .side-nav-for-mobile {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.small}) {
    /* justify-items: center !important; */
    grid-template-columns: 1fr !important;

    .side-nav-for-mobile {
      width: 100% !important;
      display: ${({ showMobileSideBar }) =>
        showMobileSideBar ? "grid" : "none"} !important;
      grid-template-columns: 20% 80% !important;
      position: fixed !important;
      height: 100vh !important;
      top: 0 !important;
      left: 0 !important;
      z-index: 22 !important;
      width: 100% !important;
    }
    .container {
      display: none !important;
    }
  }
`;
