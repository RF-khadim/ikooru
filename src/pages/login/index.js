import Link from "next/link";
import * as S from "../../styled/loginStyled";
import { useRouter } from "next/router";
import Logo from "@/assets/images/iKooru.png";
import Image from "next/image";
import GoogleLogo from "@/assets/images/google.png";

const Login = () => {
  const router = useRouter();

  const handleRegister = () => {
    router.push("/");
  };

  return (
    <S.Login>
      <Image
        src={Logo}
        width=" 137px"
        height="41px"
        alt="logo"
        className="mb-20"
      />
      <div className="login-card">
        <p className="mb-34">Sign Up to your account</p>
        <div className="form-group mt-30">
          <input type="text" placeholder="Your email" />
        </div>
        <div className="form-group mt-30">
          <input type="text" placeholder="Your name" />
        </div>

        <div className="form-group mt-30">
          <input type="password" placeholder="Your password" />
        </div>

        <div className="progress">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <span>None</span>
        </div>

        <div className="note mt-10">
          <small>
            By signing up, you confirm that you&apos;ve read and accepted our
            <Link href="#"> User Notice </Link>
            and
            <Link href="#"> Privacy Policy</Link>
          </small>
        </div>

        <button className="register mt-20" onClick={handleRegister}>
          Register
        </button>
        <p style={{ marginTop: "10px", fontSize: "small", color: "#92929d" }}>
          OR
        </p>

        <button className="google-btn mt-10">
          <Image src={GoogleLogo} width={30} height={30} alt="google" />
          Continue with google
        </button>
      </div>
      <Link href="#" className="mt-30">
        Already have a pretelan account? Log in
      </Link>
    </S.Login>
  );
};

export default Login;
