import { useState } from "react";
import Navbar from "../navbar";
import * as S from "./styled";

const Header = ({
  searchSlide,
  setSearchSlide,
  showMobileSideBar,
  setShowMobileSideBar,
}) => {
  const [showSideBar, setShowSideBar] = useState(true);
  return (
    <div>
      <S.Header setSearchSlide={setSearchSlide} searchSlide={searchSlide}>
        <Navbar
          showMobileSideBar={showMobileSideBar}
          setShowMobileSideBar={setShowMobileSideBar}
          setShowSideBar={setShowSideBar}
          showSideBar={showSideBar}
        />
      </S.Header>
    </div>
  );
};

export default Header;
