import styled from "styled-components";

export const Navbar = styled.div`
  display: flex;
  padding: 20px 30px;
  width: 100%;
  height: 0% !important;
  align-items: center;
  justify-content: space-between;
  border: 2px solid ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme }) => theme.colors.lightGrey1};
  .hamburger-menu {
    display: flex;
    cursor: pointer;
    align-items: center;
  }

  .search {
    position: relative;
    color: ${({ theme }) => theme.colors.grey};
    align-self: center;
  }
  .search-icon {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translate(0, -50%);
  }
  .greater-than-icon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translate(0, -50%);
  }
  .go-icon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translate(0, -50%);
  }
  .search input {
    width: 430px;
    height: 50px;
    border: none;
    outline: none;
    border-radius: 30px;
    padding: 10px 40px;
  }
  .account-and-notifcation {
    display: flex;
    gap: 20px;
    align-self: center;
  }

  .account-and-notifcation p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .account {
    align-self: center;
    display: flex;
    gap: 10px;
  }

  .account p {
    color: ${({ theme }) => theme.colors.blackishGrey};

    font-size: 15px;
    font-weight: bold;
  }

  .notification {
    width: 50px;
    height: 50px;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.white};
  }

  .hamburger {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.small}) {
    padding: 20px 10px !important;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.medium}) {
    .hamburger-menu img {
      width: 100% !important;
      object-fit: contain !important;
    }
    .search input {
      width: 100% !important;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.middle}) {
    .hamburger-menu img {
      width: 100% !important;
      object-fit: contain !important;
    }

    .search input {
      width: 100% !important;
    }
  }
`;
