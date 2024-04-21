const { default: styled } = require("styled-components");

export const Chat = styled.div`
  width: 100%;
  height: calc(100vh - 100px) !important;
  position: relative;
  .chat-header {
    display: flex;
    justify-content: space-between;
    padding: 20px 30px;
    background-color: ${({ theme }) => theme.colors.lightGrey1};
  }
  .profile {
    display: flex;
    gap: 20px;
    align-items: center;
  }
  .detail {
    display: flex;
    gap: 5px;
    flex-direction: column;
  }
  .detail .last-seen {
    color: ${({ theme }) => theme.colors.grey4};
    font-size: 14px;
  }
  .detail .name {
    color: ${({ theme }) => theme.colors.black};
    font-size: 16px;
    font-weight: bold;
  }
  .profile-pic {
    border-radius: 50%;
    width: 45px;
    height: 45px;
  }
  .chat-controls {
    display: flex;
    gap: 20px;
    align-self: center;
    justify-content: space-between;
  }
  .chat-controls > div {
    width: 30px;
    padding: 20px;
    height: 30px;
    background: ${({ theme }) => theme.colors.grey5} 0% 0% no-repeat padding-box;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .chat-footer {
    height: 70px;
    width: 100%;
    display: grid;
    grid-template-columns: 98% 2%;
    align-items: center;
    position: absolute;
    bottom: 0px;
    padding: 0px 20px;
    background-color: ${({ theme }) => theme.colors.lightGrey1};
  }
  .widgets {
    display: flex;
    gap: 30px;
    align-items: center;
  }

  .message {
    width: 100%;
    justify-self: flex-end;
  }
  .message input {
    width: 100%;
    color: ${({ theme }) => theme.colors.blackishGrey};
    font-weight: bold;
    padding: 20px 10px;
    background-color: ${({ theme }) => theme.colors.lightGrey1};
    border: none;
    outline: none;
    height: 100%;
  }
`;
