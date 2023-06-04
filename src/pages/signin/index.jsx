import InputModal from "../../components/modal/input/index";
import ButtonMainModal from "../../components/modal/button-main";
import ButtonSecondaryModal from "../../components/modal/button-secondary";
import AuthWrapper from "../../components/modal/auth-wrapper";
import LayoutStack from "../../components/layouts/stack";

export default function SignIn() {
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
      </LayoutStack>
      <ButtonMainModal>{"Войти"}</ButtonMainModal>
      <ButtonSecondaryModal>{"Зарегистрироваться"}</ButtonSecondaryModal>
    </AuthWrapper>
  );
}
