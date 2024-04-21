import Image from "next/image";
import * as S from "./styled";
import Logo from "@/assets/images/iKooru.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faBell,
  faBars,
  faGreaterThan,
} from "@fortawesome/free-solid-svg-icons";
import theme from "@/globalStyles/theme";

const Navbar = ({
  setShowSideBar,
  showSideBar,
  showMobileSideBar,
  setShowMobileSideBar,
}) => {
  return (
    <S.Navbar>
      <div className="hamburger-menu">
        <div
          className="hamburger"
          onClick={() => {
            setShowSideBar(!showSideBar);
            setShowMobileSideBar(!showMobileSideBar);
          }}
        >
          <FontAwesomeIcon color={theme.colors.grey} icon={faBars} size="lg" />
        </div>
        <Image src={Logo} width={200} alt="logo" />
      </div>
      <div className="search">
        <FontAwesomeIcon
          color={theme.colors.grey}
          className="search-icon"
          icon={faSearch}
        />
        <input type="text" placeholder="Search" />
        <FontAwesomeIcon
          color={theme.colors.grey}
          className="greater-than-icon"
          icon={faGreaterThan}
        />
      </div>
      <div className="account-and-notifcation">
        <div className="account">
          <FontAwesomeIcon color={theme.colors.grey} icon={faUser} />
          <p>Clayton Santos</p>
        </div>

        <div className="notification">
          <FontAwesomeIcon color={theme.colors.grey} icon={faBell} />
        </div>
      </div>
    </S.Navbar>
  );
};

export default Navbar;
