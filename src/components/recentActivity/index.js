import theme from "@/globalStyles/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTag,
  faFile,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import * as S from "./styled";
const RecentActivity = ({ projects, setActive }) => {
  return (
    <S.RecentActivity>
      <p className="recent-text">Recent Activity</p>
      {Array.isArray(projects) &&
        projects?.length > 0 &&
        projects.map((p, index) => (
          <div key={index} onClick={() => setActive(-1)} className="project">
            <FontAwesomeIcon color={theme.colors.blue} icon={faTag} size="lg" />
            <p className="project-text">{p?.title}</p>
            <div className="controls">
              <FontAwesomeIcon
                color={theme.colors.grey}
                icon={faFile}
                size="sm"
              />
              <FontAwesomeIcon
                color={theme.colors.grey}
                icon={faPen}
                size="sm"
              />
              <FontAwesomeIcon
                color={theme.colors.grey}
                icon={faTrash}
                size="sm"
              />
            </div>
          </div>
        ))}
    </S.RecentActivity>
  );
};

export default RecentActivity;
