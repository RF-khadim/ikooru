import styled from "styled-components";

export const SidePanelHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey1};
  height: 50px;
  padding: 40px 15px;
  width: 100% !important;
  display: flex;
  .tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    width: 100%;
  }
  .tab {
    display: flex;
    gap: 10px;
    padding: 0 25px;
    cursor: pointer;
    font-weight: bold;
  }
  .tab-active {
    position: relative;
    border: none;
  }
  .tab-active::after {
    content: "";
    position: absolute;
    bottom: -23px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.darkBlue};
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.small}) {
    height: fit-content !important;
    padding: auto !important;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.medium}) {
    padding: auto !important;
    height: fit-content !important;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.large}) {
    height: fit-content !important;
    padding: auto !important;
  }
`;
