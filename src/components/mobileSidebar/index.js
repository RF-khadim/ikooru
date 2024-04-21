import * as S from "./styled";

const MobileSideBar = ({ children,
    showSideBar
}) => {
  return <S.MobileSideBar showSideBar>{children}</S.MobileSideBar>;
};

export default MobileSideBar;
