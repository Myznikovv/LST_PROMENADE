import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";

import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";

import { typographyMobile } from "../../shared/config/typography";
import { palette } from "../../shared/config/palette";

import { StyledFormControl, StyledFormHelperText } from ".";
import SovcomBankLogo from "../../shared/components/Icons/SovcomBankLogo";

const LoginLayoutMobile = styled("div")({
  background: palette.background.tertiary,
  height: "100%"
});

const LoginFormMobile = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const SovcomBankLogoMobile = styled(SovcomBankLogo)({
  width: "2.5rem",
  borderRadius: "50%",
  height: "2.5rem",
  marginLeft: "10px",
  transform: "translateY(20%)",
});

const TypographyH1Mobile = styled("h1")({
  ...typographyMobile.h1,
  marginBottom: "1.5rem",
  width: "22.5rem",
});

const StyledInputMobile = styled(OutlinedInput)({
  width: "22.5rem",
  borderRadius: "0.625rem",
  background: palette.monochrome.white,
});

export const StyledButtonMobile = styled(Button)({
  ...typographyMobile.button,
  borderRadius: "6.25rem",
  background: palette.button.default,
  color: palette.monochrome.white,
  width: "97.5%",
  marginTop: "0.5rem",
  padding: "0.9375rem",
  ":hover": {
    background: palette.button.hover,
  },
});

export default function MobileLogin() {
  const navigate = useNavigate();
  const [error, setError] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleEnterClick = () => {
    navigate("/tasks");
  };
  return (
    <LoginLayoutMobile>
      <LoginFormMobile>
        <TypographyH1Mobile>
          Вход в Совкомком Визитер
          <SovcomBankLogoMobile />
        </TypographyH1Mobile>
        <StyledFormControl error={error}>
          {/* FIXME: border */}
          <StyledInputMobile 
            value={email}
            onChange={handleEmailChange}
            placeholder="Корпоративная почта"
          />
          {error ? (
            <StyledFormHelperText id="my-helper-text">
              Введена неверная почта
            </StyledFormHelperText>
          ) : null}
        </StyledFormControl>
        <StyledFormControl error={error}>
          <StyledInputMobile
            value={password}
            type="password"
            onChange={handlePasswordChange}
            placeholder="Пароль"
          />
          {error ? (
            <StyledFormHelperText id="my-helper-text">
              Введён неверный пароль
            </StyledFormHelperText>
          ) : null}
        </StyledFormControl>
        <StyledButtonMobile onClick={handleEnterClick}>
          Войти
        </StyledButtonMobile>
        {/*Пока что здесь будет заглушка и переход сразу на стартовую страницу */}
      </LoginFormMobile>
    </LoginLayoutMobile>
  );
}
