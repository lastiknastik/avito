import InputModal from "../../components/modal/input/index";
import ButtonMainModal from "../../components/modal/button-main";
import AuthWrapper from "../../components/modal/auth-wrapper";
import LayoutStack from "../../components/layouts/stack";
import {
  usePostAuthRegisterMutation,
  usePostAuthLoginMutation,
} from "../../services/skyvitoSrvcAPI";
import { useNavigate } from "react-router-dom";
import { setAccessToken, setRefreshToken } from "../../libs/auth";

export default function SignUp() {
  const navigate = useNavigate();

  const [signUp, signUpResponse] = usePostAuthRegisterMutation();
  const [signIn, signInResponse] = usePostAuthLoginMutation();

  //TODO: implement form validation

  const signUpFormOnSubmitHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const formElements = e.nativeEvent.srcElement;
    const formData = {};

    for (const el of formElements) {
      if (el.tagName === "INPUT") {
        if (el.name !== "password-reenter") formData[el.name] = el.value;
      }
    }

    signUp(formData)
      .unwrap()
      .then((payload) => {
        signIn({ email: formData.email, password: formData.password })
          .unwrap()
          .then((payload) => {
            setAccessToken(payload.access_token); //set access token
            setRefreshToken(payload.refresh_token); //set refresh token

            navigate("/profile"); //if everything is good, redirect to profile page. TODO: implement redirectURL feature
          })
          .catch((error) => console.error("rejected", error));
      })
      .catch((error) => console.error("rejected", error));
  };

  return (
    <AuthWrapper onSubmit={signUpFormOnSubmitHandler}>
      <LayoutStack>
        <InputModal
          type="text"
          name="email"
          id="login__email"
          placeholder="Email"
          required={true}
        />
        <InputModal
          type="password"
          name="password"
          id="login__password"
          placeholder="Пароль"
          required={true}
        />
        <InputModal
          type="password"
          name="password-reenter"
          id="login__password-reenter"
          placeholder="Повторите пароль"
          required={true}
        />
        <InputModal
          type="text"
          name="name"
          id="login__name"
          placeholder="Имя (необязательно)"
        />
        <InputModal
          type="text"
          name="surname"
          id="login__surname"
          placeholder="Фамилия (необязательно)"
        />
        <InputModal
          type="text"
          name="city"
          id="login__city"
          placeholder="Город (необязательно)"
        />
      </LayoutStack>
      <ButtonMainModal>{"Зарегистрироваться"}</ButtonMainModal>
    </AuthWrapper>
  );
}
