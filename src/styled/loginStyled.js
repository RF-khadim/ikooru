import styled from "styled-components";

export const Login = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.grey3};

  .login-card {
    background: ${({ theme }) => theme.colors.white} 0% 0% no-repeat padding-box;
    padding: 20px 30px;
    border-radius: 20px;
    text-align: center;
    width: 360px;
  }
  .login-card p {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.black};
    font-weight: bold;
  }

  .form-group {
    margin: 15px 0px;
  }

  .form-group input {
    background-color: ${({ theme }) => theme.colors.darkGrey};
    width: 100%;
    color: ${({ theme }) => theme.colors.lightGrey};
    border-radius: 18px;
  }
  .form-group input {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.lightGrey};
    padding: 10px 15px;
  }

  .progress {
    display: flex;
    gap: 5px;
    padding: 5px 30px;
    align-items: center;
  }

  .progress > div {
    width: 40px;
    height: 4px;
    background: ${({ theme }) => theme.colors.grey1} 0% 0% no-repeat padding-box;
  }

  .progress span {
    font-size: small;
    color: ${({ theme }) => theme.colors.grey2};
  }

  .note {
    color: ${({ theme }) => theme.colors.grey2};
  }
  .note a {
    color: ${({ theme }) => theme.colors.darkBlue};
    text-decoration: none;
  }

  .register {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    padding: 10px 20px;
    cursor: pointer;
    text-align: center;
    border: none;
    color: ${({ theme }) => theme.colors.white};
    border-radius: 20px;
  }

  .google-btn {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.white} 0% 0% no-repeat padding-box;
    border: 1px solid ${({ theme }) => theme.colors.white1};
    border-radius: 20px;
    width: 100%;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.small}) {
    .login-card {
      width: 100%;
    }
  }
`;
