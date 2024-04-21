import styled from "styled-components";

export const MobileSideBar = styled.div`
  display: none;
  height: 100vh;

  @media (max-width: ${({ theme }) => theme.breakPoints.small}) {
    /* display: grid !important; */
    /* grid-template-columns: 20% 80% !important; */
    display: ${({ showSideBar }) =>
      showSideBar ? "block" : "none"} !important;
    position: fixed !important;
    z-index: 22 !important;
    top: 0 !important;
    height: 100vh !important;
  }
`;
