import Image from "next/image";
import Modal from "react-modal";
import * as S from "./styled";
import Logo from "@/assets/images/iKooru.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import theme from "@/globalStyles/theme";
import { useState } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    borderRadius: "10px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    backgroundColor: "#FAFBFC",
    padding: "50px 300px",
    opacity: 1,
    border: "none",
    boxShadow: "0px 60px 120px #26334D0D",
  },
  overlay: {
    zIndex: 2,
    background: "rgba(228, 231, 240,0.7)",
  },
};

export default function ModalComponent({
  modalIsOpen,
  closeModal,
  handleAdd,
  setActive,
}) {
  const [businessName, setBusinessName] = useState("");
  const handleAddBusiness = () => {
    closeModal();
    setActive(-1);
    handleAdd();
  };

  return (
    <S.Modal>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{ ...customStyles }}
        ariaHideApp={false}
        contentLabel="onRequestClose Example"
      >
        <Image src={Logo} width=" 137px" height="41px" alt="logo" />
        <p
          style={{ color: "#4D5E80", fontSize: "39px", fontWeight: "bold" }}
          className="mt-30"
        >
          Let&apos;s Add Your Business
        </p>
        <div
          className="mt-100"
          style={{
            position: "relative",
          }}
        >
          <input
            style={{
              background: "#ffffff 0% 0% no-repeat padding-box",
              boxShadow: "0px 2px 5px #26334d08",
              color: "#4D5E80",
              fontWeight: "bold",
              borderRadius: "10px",
              outline: "none",
              border: "none",
              width: "100%",
              padding: "23px 40px 23px 20px",
            }}
            onChange={(e) => setBusinessName(e.target.value)}
            type="text"
            placeholder="Name Your Business"
          />
          <FontAwesomeIcon
            color={theme.colors.grey6}
            icon={faQuestionCircle}
            size="lg"
            style={{
              position: "absolute",
              right: "15px",
              top: "50%",
              transform: "translate(0,-50%)",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            gap: "30px",
            alignItems: "center",
            marginTop: "50px",
            marginBottom: "80px",
          }}
        >
          <button
            style={{
              background: theme.colors.orange,
              border: "none",
              color: theme.colors.white,
              borderRadius: "30px",
              padding: "20px 30px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onClick={handleAddBusiness}
          >
            Add Business
          </button>
          <p style={{ color: "#ADB8CC", fontSize: "13px" }}>
            You can change it later
          </p>
        </div>
      </Modal>
    </S.Modal>
  );
}
