import styled from "styled-components";

export const MobileSidePanel = styled.div`
  padding: ${({ searchSlide }) => (searchSlide ? "30px 10px" : "30px")};
  padding-top: 80px;
  position: relative;
  margin: 0;
  height: 50vh; // focus this
  overflow-y: auto;

  border: 2px solid ${({ theme }) => theme.colors.darkGrey};
  border-bottom: none;
  background-color: ${({ theme }) => theme.colors.lightGrey1};
  .mobile-close-icon {
    position: absolute;
    top: 20px;
    cursor: pointer;
    right: 20px;
    z-index: 657;
  }
  .new-project {
    border: none;
    padding: 15px 30px;
    cursor: pointer;
    width: 100%;
    position: relative;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.colors.orange};
  }
  .new-project span {
    color: ${({ theme }) => theme.colors.white};
  }
  .side-btn {
    border: none;
    width: 100%;
    padding: 15px 5px;
    cursor: pointer;
    position: relative;
    border-radius: 30px;
    background-color: transparent;
  }
  .side-btn-active {
    background-color: ${({ theme }) => theme.colors.white} !important;
  }
  .side-btn span {
    color: ${({ theme }) => theme.colors.blackishGrey};
  }
  .icon {
    position: absolute;
    left: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.small}) {
    /* .container {
      display: none !important;
    } */
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.medium}) {
    .side-btn span {
      display: none !important;
    }
    .new-project span {
      display: none !important;
    }
    .icon {
      top: 50% !important;
      left: 50% !important;
      transform: translate(-50%, -50%) !important;
    }
    .side-btn {
      padding: 20px !important;
    }
    .new-project {
      padding: 20px !important;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.middle}) {
    .side-btn {
      padding: 20px !important;
    }
    .new-project {
      padding: 20px !important;
    }
    .side-btn span {
      display: none !important;
    }
    .new-project span {
      display: none !important;
    }
    .icon {
      top: 50% !important;
      left: 50% !important;
      transform: translate(-50%, -50%) !important;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.large}) {
    .side-btn {
      padding: 20px !important;
    }
    .new-project {
      padding: 20px !important;
    }
    .side-btn span {
      display: none !important;
    }
    .new-project span {
      display: none !important;
    }
    .icon {
      top: 50% !important;
      left: 50% !important;
      transform: translate(-50%, -50%) !important;
    }
  }
`;
