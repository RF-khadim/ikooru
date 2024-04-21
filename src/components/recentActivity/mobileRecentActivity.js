import theme from "@/globalStyles/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTag,
  faFile,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import * as S from "./mobileStyled";
const RecentActivity = ({
  projects,
  setActive,
  showMobileSideBar,
  setShowMobileSideBar,
}) => {
  return (
    <S.MobileRecentActivity>
      <p className="recent-text">Recent Activity</p>
      {Array.isArray(projects) &&
        projects?.length > 0 &&
        projects.map((p, index) => (
          <div
            key={index}
            onClick={() => {
              setActive(-1);
              setShowMobileSideBar(!showMobileSideBar);
            }}
            className="project"
          >
            <FontAwesomeIcon color={theme.colors.blue} icon={faTag} size="lg" />
            <p className="project-text">{p?.title}</p>
            <div className="controls">
              <FontAwesomeIcon
                color={theme.colors.grey}
                icon={faFile}
                size="lg"
              />
              <FontAwesomeIcon
                color={theme.colors.grey}
                icon={faPen}
                size="lg"
              />
              <FontAwesomeIcon
                color={theme.colors.grey}
                icon={faTrash}
                size="lg"
              />
            </div>
          </div>
        ))}
    </S.MobileRecentActivity>
  );
};

export default RecentActivity;
