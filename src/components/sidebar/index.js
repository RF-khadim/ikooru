import theme from "@/globalStyles/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import * as S from "./styled";
const Sidebar = ({
  modalIsOpen,
  setIsOpen,
  sidebarButtons,
  handleClick,
  sideBarActive: active,
}) => {
  return (
    <S.Sidebar>
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
        }}
        className="sidebar-icon"
      >
        <FontAwesomeIcon color={theme.colors.grey} icon={faPlusCircle} />
      </div>
    </S.Sidebar>
  );
};

export default Sidebar;
