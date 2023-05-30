import styled from "styled-components";
import { device } from "../../constants";
import ButtonMain from "../../components/button-main";
import InputWithLabel from "../../components/input-with-label";

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

export const MainMenu = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: start;
  padding: 11px 0;
  width: 100%;
  padding: 31px 10px 64px;

  @media ${device.mobile} {
    display: none;
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
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: top;
  -ms-flex-align: top;
  align-items: top;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;

  @media ${device.tablet} {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
`;

export const SettingsLeft = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-right: 43px;

  @media ${device.mobile} {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
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
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;

  & input {
    background-color: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    padding: 13px 19px;
  }

  & input::-webkit-input-placeholder,
  & input:-ms-input-placeholder,
  & input::placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  & label {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: #c4c4c4;
    margin-bottom: 4px;
    display: block;
  }

  @media ${device.mobile} {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;

    & input {
      border-radius: 30px;
      padding: 9px 17px;
    }

    & input::-webkit-input-placeholder,
    & input:-ms-input-placeholder,
    & input::-ms-input-placeholder,
    & input::placeholder {
      font-size: 14px;
      line-height: 21px;
    }
    & label {
      font-size: 14px;
      line-height: 21px;
      color: #c4c4c4;
      margin-bottom: 6px;
    }
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
  background-color: #009ee4;
  border-radius: 6px;
  border: 1px solid #009ee4;

  @media ${device.mobile} {
    font-size: 16px;
    line-height: 1;
    width: 100%;
    height: 46px;
    margin: 8px 0px 0;
  }
`;
