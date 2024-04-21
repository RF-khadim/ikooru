import theme from "@/globalStyles/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faEllipsisV,
  faPeopleGroup,
  faPhone,
  faCog,
  faClose,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import * as S from "./styled";
import Image from "next/image";
import User from "@/assets/images/32.jpg";

const Search = ({ searchSlide, setSearchSlide }) => {
  return (
    <S.Search searchSlide={searchSlide} setSearchSlide={setSearchSlide}>
      <div className="search-container">
        <FontAwesomeIcon
          className="close-icon"
          color={theme.colors.grey6}
          icon={faClose}
          size="xl"
          onClick={() => setSearchSlide(!searchSlide)}
        />
        <div className="search-input mb-20">
          <FontAwesomeIcon
            className="search-icon"
            color={theme.colors.grey6}
            icon={faSearch}
            size="lg"
          />
          <input type="text" placeholder="Search in Contacts" />
        </div>
        <div className="contact-container">
          <div className="contact">
            <div className="profile-pic">
              <Image src={User} alt="user" />
              <div className="green-online-sign"></div>
            </div>
            <div className="detail">
              <p className="online">Online</p>
              <p className="name">Candy Bosley</p>
            </div>
          </div>
          <div className="controls">
            <FontAwesomeIcon
              size="lg"
              color={theme.colors.grey6}
              icon={faEllipsisV}
            />
          </div>
          <div className="chat-bottom">
            <div className="bottom-controls">
              <FontAwesomeIcon
                color={theme.colors.grey6}
                icon={faPeopleGroup}
                size="lg"
              />
              <FontAwesomeIcon
                color={theme.colors.grey6}
                icon={faMessage}
                size="lg"
              />
              <FontAwesomeIcon
                color={theme.colors.grey6}
                icon={faPhone}
                size="lg"
              />
              <FontAwesomeIcon
                color={theme.colors.grey6}
                icon={faCog}
                size="lg"
              />
            </div>
          </div>
        </div>
      </div>
    </S.Search>
  );
};

export default Search;
