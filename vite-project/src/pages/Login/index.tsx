import { palette } from "../../shared/config/palette";
//пока что не понял как полность кастомизировать палитру из-за этого пока что так оставил
import SovcomBankLogo from "../../shared/components/icons/SovcomBankLogo";
import { OutlinedInput, styled } from "@mui/material";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { theme } from "../../app/ThemeProvider/theme";

const LoginLayout = styled("div")({
  background: palette.background.tertiary,
  verticalAlign: "center",
  height: "100vh",
  display: "flex",
  alignItems: "center",
});

const LoginForm = styled("div")({
  background: theme.palette.common.white,
  textAlign: "center",
  width: "38.125rem",
  height: "27.5rem",
  borderRadius: "1.25rem",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const TypographyH1 = styled("h1")({
  fontFamily: "Inter",
  fontSize: "2rem",
  fontStyle: "normal",
  fontWeight: "700",
  marginBottom: "2.5rem",
});

const StyledInput = styled(OutlinedInput)({
  width: " 24.75rem",
  borderRadius: " 0.625rem",
  border: ` 1px solid ${palette.secondary.borderGrey}`,
  background: palette.monochrome.white,
});

const StyledButton = styled(Button)({
  borderRadius: " 2rem",
  fontFamily: "Inter",
  fontSize: "1.25rem",
  fontStyle: "normal",
  fontWeight: "600",
  background: palette.button.default,
  color: palette.monochrome.white,
  width: " 24.75rem",
  padding: "0.9375rem",
  marginTop: "1.25rem",
  ":hover": {
    background: palette.button.hover,
  },
});

const StyledFormHelperText = styled(FormHelperText)({
  margin: "0.31rem 0 0 0",
  fontSize: "0.875rem",
  fontFamily: "Inter",
});

const StyledFormControl = styled(FormControl)({
  marginBottom: "0.61rem",
});

const LoginPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<boolean>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordlChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
  };

  const handleEnterClick = () => {
    navigate("/tasks");
  };
  return (
    <LoginLayout>
      <LoginForm>
        <SovcomBankLogo />
        <TypographyH1>Вход в Совкомком Визитер</TypographyH1>
        <StyledFormControl error={error}>
          <StyledInput
            value={email}
            onChange={handleEmailChange}
            placeholder="Корпоративная почта"
          ></StyledInput>
          {error ? (
            <StyledFormHelperText id="my-helper-text">
              Введена неверная почта
            </StyledFormHelperText>
          ) : null}
        </StyledFormControl>
        <StyledFormControl error={error}>
          <StyledInput
            value={password}
            onChange={handlePasswordlChange}
            placeholder="Пароль"
          ></StyledInput>
          {error ? (
            <StyledFormHelperText id="my-helper-text">
              Введён неверный пароль
            </StyledFormHelperText>
          ) : null}
        </StyledFormControl>
        <StyledButton onClick={handleEnterClick}>Войти</StyledButton>{" "}
        {/*Пока что здесь будет заглушка и переход сразу на стартовую страницу */}
      </LoginForm>
    </LoginLayout>
  );
};

export default LoginPage;
