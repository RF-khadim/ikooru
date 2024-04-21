const { default: styled } = require("styled-components");

export const Search = styled.div`
  width: 100%;
  transform: ${({ searchSlide }) => (searchSlide ? "scale(1)" : "scale(0)")};
  .search-container {
    background-color: ${({ theme }) => theme.colors.lightGrey1};
    padding: 20px 30px;
    height: calc(100vh - 100px);
    position: relative;
  }

  .close-icon {
    display: none;
  }
  .search-input {
    width: 100%;
    position: relative;
    margin-bottom: 30px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.grey8};
  }

  .search-input input {
    border: none;
    outline: none;
    width: 100%;
    padding: 20px 35px;
    background-color: ${({ theme }) => theme.colors.lightGrey1};
  }

  .search-icon {
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translate(0, -50%);
  }

  .contact-container {
    display: flex;
    justify-content: space-between;
  }

  .contact {
    width: 100%;
    display: flex;
    gap: 30px;
  }
  .detail .name {
    color: ${({ theme }) => theme.colors.black2};
    font-size: 12px;
  }
  .detail .online {
    color: ${({ theme }) => theme.colors.grey7};
    font-size: 12px;
    font-weight: bold;
  }
  .profile-pic {
    width: 45px;
    height: 45px;
    position: relative;
  }
  .profile-pic img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
  .green-online-sign {
    position: absolute;
    width: 10px;
    height: 10px;
    right: 0;
    border-radius: 50%;
    top: 0;
    box-shadow: 0px 2px 5px ${({ theme }) => theme.colors.whiteBox};
    border: 2px solid ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.green} 0% 0% no-repeat padding-box;
  }
  .controls {
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.colors.white2} 0% 0% no-repeat
      padding-box;
    border-radius: 30px;
  }
  .chat-bottom {
    position: absolute;
    padding: 20px 30px;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  .bottom-controls {
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.small}) {
    width: 100% !important;
    position: fixed !important;
    top: 0 !important;
    z-index: 33 !important;
    .search-container {
      position: static !important;
      height: calc(100vh);
    }
    .close-icon {
      display: block !important;
      cursor: pointer;
      position: absolute !important;
      right: 20px !important;
      z-index: 33 !important;
      top: 15px !important;
    }
    .search-input input {
      width: 100% !important;
    }
  }
`;
