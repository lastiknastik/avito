import * as S from "./style";
import LogoModal from "../../components/modal/logo/index";
import InputModal from "../../components/modal/input/index";
import ButtonMainModal from "../../components/modal/button-main";
import ButtonSecondaryModal from "../../components/modal/button-secondary";

export default function SignIn() {
  return (
    <S.Wrapper>
      <S.ConteinerEnter>
        <S.ModalBlock>
          <S.SignInForm>
            <LogoModal />
            <S.FormInputsWrapper>
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
            </S.FormInputsWrapper>
            <ButtonMainModal>{"Войти"}</ButtonMainModal>
            <ButtonSecondaryModal>{"Зарегистрироваться"}</ButtonSecondaryModal>
          </S.SignInForm>
        </S.ModalBlock>
      </S.ConteinerEnter>
    </S.Wrapper>
  );
}
