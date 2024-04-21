import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import * as S from "./styled";
import { useEffect, useState } from "react";

const CustomTab = ({ children, icon, title, handleClick, ...otherProps }) => (
  <Tab onClick={handleClick} className="tab" {...otherProps}>
    {icon}
    {title}
  </Tab>
);

CustomTab.tabsRole = "Tab";

const SidePanelHeader = ({ tablist: { tablist: tabList }, setSearchSlide }) => {
  const [active, setActive] = useState(0);
  const handleClick = (index) => {
    setActive(index);
  };

  useEffect(() => {
    setActive(0);
    setSearchSlide(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabList]);

  return (
    <S.SidePanelHeader>
      <Tabs selectedTabClassName="tab-active">
        <TabList className="tabs">
          {tabList?.map((item, index) => (
            <CustomTab
              key={index}
              handleClick={() => handleClick(index)}
              icon={item?.icon(index !== active)}
              title={item?.title(index !== active)}
            />
          ))}
        </TabList>
        <TabPanel></TabPanel>
      </Tabs>
    </S.SidePanelHeader>
  );
};
export default SidePanelHeader;
