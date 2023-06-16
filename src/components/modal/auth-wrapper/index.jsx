import * as S from "./style";
import LogoModal from "../logo";

export default function AuthWrapper({ children, className, onSubmit }) {
  return (
    <S.Wrapper>
      <S.ConteinerEnter>
        <S.ModalBlock>
          <S.SignInForm onSubmit={onSubmit}>
            <LogoModal />
            {children}
          </S.SignInForm>
        </S.ModalBlock>
      </S.ConteinerEnter>
    </S.Wrapper>
  );
}
