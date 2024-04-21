import theme from "@/globalStyles/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faClose } from "@fortawesome/free-solid-svg-icons";
import * as S from "./mobileStyled";
import MobileRecentActivity from "../recentActivity/mobileRecentActivity";

const MobileSidePanel = (props) => {
  const handleAddNewProject = () => {
    props?.setProjects([
      ...props?.projects,
      {
        title: `New Project ${props?.projects?.length}`,
      },
    ]);
  };

  return (
    <div className="mobile-container">
      <S.MobileSidePanel searchSlide>
        <FontAwesomeIcon
          color={theme.colors.grey6}
          icon={faClose}
          size="xl"
          onClick={() => props?.setShowMobileSideBar(!props?.showMobileSideBar)}
          className="mobile-close-icon"
        />
        <button onClick={handleAddNewProject} className="new-project mb-20">
          <FontAwesomeIcon
            color={theme.colors.lightishGrey}
            className="icon"
            icon={faEnvelope}
            size="lg"
          />
          <span>New Project</span>
        </button>
        {props?.sidePanelButtons.map((item, index) => (
          <>
            <button
              key={index}
              onClick={() => {
                props?.handleAdd(index);
                props?.setShowMobileSideBar(!props?.showMobileSideBar);
              }}
              className={`side-btn ${
                props?.active === index ? "side-btn-active" : ""
              } mb-20`}
            >
              {item?.icon}
              <span>{item?.title}</span>
            </button>
          </>
        ))}
      </S.MobileSidePanel>
      <MobileRecentActivity
        setActive={props?.setActive}
        setShowMobileSideBar={props?.setShowMobileSideBar}
        showMobileSideBar={props?.showMobileSideBar}
        projects={props?.projects}
      />
    </div>
  );
};

export default MobileSidePanel;
