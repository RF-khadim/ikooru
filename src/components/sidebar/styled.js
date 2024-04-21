import styled from "styled-components";

export const Sidebar = styled.div`
  height: 100vh;
  position: fixed;
  overflow-y: auto;
  left: 0;
  top: 100px;
  padding: 20px 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme }) => theme.colors.lightGrey1};
  .sidebar-icon {
    width: 50px;
    height: 50px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.white};
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.middle}) {
    transform: scaleX(0) !important;
  }
`;
