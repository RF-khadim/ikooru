import styled from "styled-components";

export const Header = styled.div`
  position: fixed;
  width: ${({ searchSlide }) => (searchSlide ? "100%" : "100%")};
  top: 0;
  z-index: 2;
  @media (max-width: ${({ theme }) => theme.breakPoints.small}) {
    width: 100% !important;
  }
`;
