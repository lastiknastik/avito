import InputModal from "../../components/modal/input/index";
import ButtonMainModal from "../../components/modal/button-main";
import ButtonSecondaryModal from "../../components/modal/button-secondary";
import AuthWrapper from "../../components/modal/auth-wrapper";
import LayoutStack from "../../components/layouts/stack";
import { useNavigate } from "react-router-dom";
import { usePostAuthLoginMutation } from "../../services/skyvitoSrvcAPI";
import { setAccessToken, setRefreshToken } from "../../libs/auth";

/*
import {
  setAccessToken,
  setRefreshToken,
} from "../../store/actions/creators/creators";
*/

export default function SignIn() {
  const navigate = useNavigate();

  const [signIn] = usePostAuthLoginMutation();

  const signInFormOnSubmitHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const formElements = e.nativeEvent.srcElement;
    const formData = {};

    for (const el of formElements) {
      if (el.tagName === "INPUT") {
        if (el.name !== "password-reenter") formData[el.name] = el.value;
      }
    }

    signIn({ email: formData.login, password: formData.password })
      .unwrap()
      .then((payload) => {
        setAccessToken(payload.access_token); //set access token
        setRefreshToken(payload.refresh_token); //set refresh token

        //navigate("/profile"); //this did not work somewhy
        window.location.href = "/profile"; //navigate did not work
      })
      .catch((error) => console.error("rejected", error));
  };

  const onSignUpButtonnClickHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    navigate("/signup");
  };

  return (
    <AuthWrapper onSubmit={signInFormOnSubmitHandler}>
      <LayoutStack>
        <InputModal
          type="text"
          name="login"
          id="login__login"
          placeholder="Email"
        />
        <InputModal
          type="password"
          name="password"
          id="login__password"
          placeholder="Пароль"
        />
      </LayoutStack>
      <ButtonMainModal>{"Войти"}</ButtonMainModal>
      <ButtonSecondaryModal onClick={onSignUpButtonnClickHandler}>
        {"Зарегистрироваться"}
      </ButtonSecondaryModal>
    </AuthWrapper>
  );
}
