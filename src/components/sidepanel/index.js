import theme from "@/globalStyles/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import * as S from "./styled";
import RecentActivity from "../recentActivity";

const SidePanel = (props) => {
  const handleAddNewProject = () => {
    props?.setProjects([
      ...props?.projects,
      {
        title: `New Project ${props?.projects?.length}`,
      },
    ]);
  };
  return (
    <div className="container">
      <S.SidePanel searchSlide>
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
              onClick={() => props?.handleAdd(index)}
              className={`side-btn ${
                props?.active === index ? "side-btn-active" : ""
              } mb-20`}
            >
              {item?.icon}
              <span>{item?.title}</span>
            </button>
          </>
        ))}
      </S.SidePanel>
      <RecentActivity setActive={props?.setActive} projects={props?.projects} />
    </div>
  );
};

export default SidePanel;
