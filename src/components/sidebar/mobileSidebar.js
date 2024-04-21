import theme from "@/globalStyles/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import * as S from "./mobileStyled";

const MobileSidebar = ({
  modalIsOpen,
  setShowMobileSideBar,
  setIsOpen,
  showMobileSideBar,
  handleClick,
  sidebarButtons,
  sideBarActive: active,
}) => {
  return (
    <S.SidebarMobile showSideBar>
      {Array.isArray(sidebarButtons) &&
        sidebarButtons.length > 0 &&
        sidebarButtons.map((item, index) => (
          <div
            onClick={() => handleClick(index)}
            key={index}
            className="sidebar-icon"
          >
            {item?.icon(index === active)}
          </div>
        ))}
      <div
        onClick={() => {
          setIsOpen(!modalIsOpen);
          setShowMobileSideBar(!showMobileSideBar);
        }}
        className="sidebar-icon"
      >
        <FontAwesomeIcon color={theme.colors.grey} icon={faPlusCircle} />
      </div>
    </S.SidebarMobile>
  );
};

export default MobileSidebar;
