import styled from "styled-components";
import { device } from "../../constants";
import ButtonMain from "../../components/button-main";
import InputWithLabel from "../../components/input-with-label";

//TODO: вынести в компонент. используется в article
export const MainContainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 10px 79px;

  @media ${device.tablet} {
    padding: 85px 0px 84px;
  }

  @media ${device.mobile} {
    padding: 85px 0px 84px;
  }
`;

//TODO: вынести в компонент. используется в article
export const MainCenterBlock = styled.div`
  @media ${device.mobile} {
    margin: 0 auto;
    padding: 0 20px;
  }

  @media ${device.tablet} {
    margin: 0 auto;
    padding: 0 20px;
  }
`;

export const MainProfile = styled.div`
  width: 100%;
  padding: 0 0 70px;
  @media ${device.mobile} {
    width: 100%;
    padding: 0 0 40px;
  }
`;

export const ProfileContent = styled.div`
  max-width: 834px;
  @media ${device.tablet} {
    max-width: 834px;
    width: 100%;
  }
`;

export const ProfileSettings = styled.div`
  display: flex;
  align-items: top;
  justify-content: center;

  @media ${device.tablet} {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
`;

export const SettingsLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 43px;

  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 0;
  }
`;

export const SettingsRight = styled.div`
  width: 630px;
  @media ${device.mobile} {
    width: 100%;
  }
`;

export const SettingsForm = styled.form`
  width: 630px;
  display: flex;
  flex-wrap: wrap;

  @media ${device.mobile} {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const InputWithLabelShort = styled(InputWithLabel)`
  & input {
    width: 300px;
  }

  @media ${device.mobile} {
    & input {
      width: 100%;
    }
  }
`;

export const InputWithLabelLong = styled(InputWithLabel)`
  & input {
    width: 614px;
  }

  @media ${device.mobile} {
    & input {
      width: 100%;
    }
  }
`;

export const ProfileSaveBtn = styled(ButtonMain)`
  font-size: 16px;
  line-height: 1;
  color: #ffffff;
  width: 154px;
  height: 50px;
  margin: 10px 7px 0;

  @media ${device.mobile} {
    font-size: 16px;
    line-height: 1;
    width: 100%;
    height: 46px;
    margin: 8px 0px 0;
  }
`;
