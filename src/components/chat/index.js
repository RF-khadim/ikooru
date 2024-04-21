import Image from "next/image";
import User from "@/assets/images/32.jpg";
import * as S from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faPhone,
  faImage,
  faPaperPlane,
  faEllipsisV,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
import theme from "@/globalStyles/theme";
const Chat = ({ setSearchSlide, searchSlide }) => {
  return (
    <S.Chat>
      <div className="chat-header">
        <div className="profile">
          <Image className="profile-pic" src={User} alt="user" />
          <div className="detail">
            <p className="name">Candy Bosley</p>
            <p className="last-seen">Last seen yesterday 02:30 PM</p>
          </div>
        </div>
        <div
          className="chat-controls"
          onClick={() => setSearchSlide(!searchSlide)}
        >
          <div className="search">
            <FontAwesomeIcon
              size="lg"
              color={theme.colors.grey6}
              icon={faSearch}
            />
          </div>
          <div className="call">
            <FontAwesomeIcon
              size="lg"
              color={theme.colors.grey6}
              icon={faPhone}
            />
          </div>
          <div className="dots">
            <FontAwesomeIcon
              size="lg"
              color={theme.colors.grey6}
              icon={faEllipsisV}
            />
          </div>
        </div>
      </div>

      <div className="chat-content"></div>
      <div className="chat-footer">
        <div className="widgets">
          <div className="file">
            <FontAwesomeIcon
              size="lg"
              color={theme.colors.grey6}
              icon={faPaperclip}
            />
          </div>
          <div className="image">
            <FontAwesomeIcon
              size="lg"
              color={theme.colors.grey6}
              icon={faImage}
            />
          </div>
          <div className="message">
            <input type="text" placeholder="Type Message" />
          </div>
        </div>
        <div className="widget-controls">
          <div className="send">
            <FontAwesomeIcon
              size="lg"
              color={theme.colors.blue}
              icon={faPaperPlane}
            />
          </div>
        </div>
      </div>
    </S.Chat>
  );
};

export default Chat;
