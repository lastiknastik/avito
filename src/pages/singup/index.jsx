import InputModal from "../../components/modal/input/index";
import ButtonMainModal from "../../components/modal/button-main";
import AuthWrapper from "../../components/modal/auth-wrapper";
import LayoutStack from "../../components/layouts/stack";

export default function SignUp() {
  return (
    <AuthWrapper>
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
        <InputModal
          type="password"
          name="password-reenter"
          id="login__password-reenter"
          placeholder="Повторите пароль"
        />
        <InputModal
          type="text"
          name="first-name"
          id="login__firts-name"
          placeholder="Имя (необязательно)"
        />
        <InputModal
          type="text"
          name="second-name"
          id="login__second-name"
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
