import Header from "@/components/header";

import * as S from "../styled/layoutStyled";
const Layout = ({
  children,
  setSearchSlide,
  searchSlide,
  showMobileSideBar,
  setShowMobileSideBar,
}) => {
  return (
    <S.Layout>
      <Header
        showMobileSideBar={showMobileSideBar}
        setShowMobileSideBar={setShowMobileSideBar}
        setSearchSlide={setSearchSlide}
        searchSlide={searchSlide}
      />
      <div className="children">{children}</div>
    </S.Layout>
  );
};

export default Layout;
