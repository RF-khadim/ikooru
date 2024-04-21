import styled from "styled-components";

export const SidePanel = styled.div`
  padding: ${({ searchSlide }) => (searchSlide ? "30px 10px" : "30px")};
  width: 100%;
  margin: 0;
  height: calc(50vh - 50px); // focus this
  border: 2px solid ${({ theme }) => theme.colors.darkGrey};
  overflow-y: auto;
  border-bottom: none;
  background-color: ${({ theme }) => theme.colors.lightGrey1};
  .new-project {
    border: none;
    padding: 15px 20px;
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
    position: relative;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.colors.orange};
    margin-bottom: 40px;
  }
  .new-project span {
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    font-size: 15px;
  }
  .side-btn {
    border: none;
    width: 100%;
    padding: 15px 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 20px;
    position: relative;
    border-radius: 30px;
    background-color: transparent;
  }
  .side-btn-active {
    background-color: ${({ theme }) => theme.colors.white} !important;
  }
  .side-btn span {
    color: ${({ theme }) => theme.colors.blackishGrey};
    font-weight: bold;
    font-size: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.small}) {
    display: none !important;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.medium}) {
    .side-btn span {
      display: none !important;
    }
    .new-project span {
      display: none !important;
    }

    .side-btn {
      padding: 20px !important;
      justify-content: center !important;
    }
    .new-project {
      padding: 20px !important;
      justify-content: center !important;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.middle}) {
    .side-btn {
      padding: 20px !important;
      justify-content: center !important;
    }
    .new-project {
      padding: 20px !important;
      justify-content: center !important;
    }
    .side-btn span {
      display: none !important;
    }
    .new-project span {
      display: none !important;
    }
    /* .icon {
      top: 50% !important;
      left: 50% !important;
      transform: translate(-50%, -50%) !important;
    } */
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.large}) {
    .side-btn {
      padding: 20px !important;
      justify-content: center !important;
    }
    .new-project {
      padding: 20px !important;
      justify-content: center !important;
    }
    .side-btn span {
      display: none !important;
    }
    .new-project span {
      display: none !important;
    }
    /* .icon {
      top: 50% !important;
      left: 50% !important;
      transform: translate(-50%, -50%) !important;
    } */
  }
`;
