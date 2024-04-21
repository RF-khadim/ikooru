import SidePanel from "@/components/sidepanel";
import MobileSidePanel from "@/components/sidepanel/mobileSidePanel";
import SidePanelHeader from "@/components/sidePanelHeader";
import Layout from "../layout";
import * as S from "../../styled/dashboardStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTasks,
  faComputerMouse,
  faCalendar,
  faTimeline,
  faArrowUp,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
import { faImage, faClock, faClose } from "@fortawesome/free-solid-svg-icons";
import theme from "@/globalStyles/theme";
import Chat from "../../components/chat/index";
import Sidebar from "@/components/sidebar";
import MobileSidebar from "@/components/sidebar/mobileSidebar";
import Search from "@/components/search";
import { useState } from "react";
import ModalComponent from "@/components/modal";

const sidePanelButtons = [
  {
    title: "Dashboard",
    icon: (
      <FontAwesomeIcon
        color={theme.colors.grey}
        className="icon"
        icon={faImage}
        size="lg"
      />
    ),
    tablist: [
      {
        title: (toggle) => (
          <span
            style={{
              color: `${toggle ? theme.colors.black1 : theme.colors.darkBlue}`,
            }}
          >
            {" "}
            New Products
          </span>
        ),
        icon: (toggle) => (
          <FontAwesomeIcon
            color={toggle ? theme.colors.grey : theme.colors.darkBlue}
            icon={faTasks}
          />
        ),
      },
    ],
  },
  {
    title: "Test Products",
    icon: (
      <FontAwesomeIcon
        color={theme.colors.grey}
        className="icon"
        icon={faClock}
        size="lg"
      />
    ),
    tablist: [
      {
        title: (toggle) => (
          <span
            style={{
              color: `${toggle ? theme.colors.black1 : theme.colors.darkBlue}`,
            }}
          >
            {" "}
            Metrics
          </span>
        ),
        icon: (toggle) => (
          <FontAwesomeIcon
            color={toggle ? theme.colors.grey : theme.colors.darkBlue}
            icon={faTasks}
          />
        ),
      },
      {
        title: (toggle) => (
          <span
            style={{
              color: `${toggle ? theme.colors.black1 : theme.colors.darkBlue}`,
            }}
          >
            {" "}
            Boards
          </span>
        ),
        icon: (toggle) => (
          <FontAwesomeIcon
            color={toggle ? theme.colors.grey : theme.colors.darkBlue}
            icon={faComputerMouse}
          />
        ),
      },
      {
        title: (toggle) => (
          <span
            style={{
              color: `${toggle ? theme.colors.black1 : theme.colors.darkBlue}`,
            }}
          >
            {" "}
            Calendar
          </span>
        ),
        icon: (toggle) => (
          <FontAwesomeIcon
            color={toggle ? theme.colors.grey : theme.colors.darkBlue}
            icon={faCalendar}
          />
        ),
      },
      {
        title: (toggle) => (
          <span
            style={{
              color: `${toggle ? theme.colors.black1 : theme.colors.darkBlue}`,
            }}
          >
            List Tasks
          </span>
        ),
        icon: (toggle) => (
          <FontAwesomeIcon
            color={toggle ? theme.colors.grey : theme.colors.darkBlue}
            icon={faTasks}
          />
        ),
      },
      {
        title: (toggle) => (
          <span
            style={{
              color: `${toggle ? theme.colors.black1 : theme.colors.darkBlue}`,
            }}
          >
            Timiline
          </span>
        ),
        icon: (toggle) => (
          <FontAwesomeIcon
            color={toggle ? theme.colors.grey : theme.colors.darkBlue}
            icon={faTimeline}
          />
        ),
      },
      {
        title: (toggle) => (
          <span
            style={{
              color: `${toggle ? theme.colors.black1 : theme.colors.darkBlue}`,
            }}
          >
            Activity
          </span>
        ),
        icon: (toggle) => (
          <FontAwesomeIcon
            color={toggle ? theme.colors.grey : theme.colors.darkBlue}
            icon={faArrowUp}
          />
        ),
      },
    ],
  },
];

const Dashboard = ({
  projects,
  active,
  setActive,
  handleAdd,
  setProjects,
  setSearchSlide,
  searchSlide,
  showMobileSideBar,
  setShowMobileSideBar,
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [sidebarButtons, setSidebarButtons] = useState([]);
  const [sideBarActive, setSideBarActive] = useState(0);
  const handleClick = (index) => {
    setSideBarActive(index);
  };
  const handleAddSibeBar = () => {
    const arr = [...sidebarButtons];
    arr.push({
      icon: (toggle) => (
        <FontAwesomeIcon
          color={toggle ? theme.colors.darkBlue : theme.colors.grey}
          icon={faLocation}
        />
      ),
    });
    setSidebarButtons(arr);
    setSideBarActive(arr.length - 1);
  };

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <Layout
      showMobileSideBar={showMobileSideBar}
      setShowMobileSideBar={setShowMobileSideBar}
      setSearchSlide={setSearchSlide}
      searchSlide={searchSlide}
    >
      <S.Dashboard
        showMobileSideBar={showMobileSideBar}
        setShowMobileSideBar={setShowMobileSideBar}
        searchSlide={searchSlide}
      >
        <Sidebar
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
          sidebarButtons={sidebarButtons}
          sideBarActive={sideBarActive}
          handleClick={handleClick}
        />
        <SidePanel
          sidePanelButtons={sidePanelButtons}
          active={active}
          projects={projects}
          searchSlide={searchSlide}
          setProjects={setProjects}
          setActive={setActive}
          handleAdd={handleAdd}
        />

        <div className="side-nav-for-mobile">
          <MobileSidebar
            modalIsOpen={modalIsOpen}
            setIsOpen={setIsOpen}
            sidebarButtons={sidebarButtons}
            sideBarActive={sideBarActive}
            handleClick={handleClick}
            showMobileSideBar={showMobileSideBar}
            setShowMobileSideBar={setShowMobileSideBar}
          />
          <MobileSidePanel
            sidePanelButtons={sidePanelButtons}
            active={active}
            showMobileSideBar={showMobileSideBar}
            setShowMobileSideBar={setShowMobileSideBar}
            projects={projects}
            searchSlide={searchSlide}
            setProjects={setProjects}
            setActive={setActive}
            handleAdd={handleAdd}
          />
        </div>
        {active >= 0 ? (
          <SidePanelHeader
            setActive={setActive}
            setSearchSlide={setSearchSlide}
            tablist={
              sidePanelButtons?.find((_, index) => index === active) || []
            }
          />
        ) : (
          projects?.length > 0 && (
            <Chat setSearchSlide={setSearchSlide} searchSlide={searchSlide} />
          )
        )}
        <Search searchSlide={searchSlide} setSearchSlide={setSearchSlide} />
      </S.Dashboard>
      <ModalComponent
        projects={projects}
        setActive={setActive}
        setProjects={setProjects}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        handleAdd={handleAddSibeBar}
      />
    </Layout>
  );
};

export default Dashboard;
