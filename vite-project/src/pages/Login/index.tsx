import { palette } from "../../shared/config/palette";
import SovcomBankLogo from "../../shared/components/Icons/SovcomBankLogo";
import { styled } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const LoginLayout = styled("div")({
  background: palette.background.tertiary,
  verticalAlign: "center",
  height: "100vh",
  display: "flex",
  alignItems: "center",
});

const LoginForm = styled("div")({
  background: palette.monochrome.white,
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
  fontSize: "1.5rem",
  fontStyle: "normal",
  fontWeight: "700",
  marginBottom: "2.5rem",
});

const Input = styled(TextField)({
  width: " 18.75rem",
  borderRadius: " 0.625rem",
  border: ` 1px solid ${palette.secondary.borderGrey}`,
  background: palette.monochrome.white,
  marginBottom: "0.63rem",
});

const StyledButton = styled(Button)({
  borderRadius: " 2rem",
  fontFamily: "Inter",
  fontSize: "1.25rem",
  fontStyle: "normal",
  fontWeight: "500",
  background: palette.button.default,
  color: palette.monochrome.white,
  width: " 18.75rem",
  padding: "0.9375rem",
  marginTop: "0.75rem",
  ":hover": {
    background: palette.button.hover,
  },
});

const LoginPage = () => {
  return (
    <LoginLayout>
      <LoginForm>
        <SovcomBankLogo />
        <TypographyH1>Вход в Совкомком Визитер</TypographyH1>
        <Input placeholder="Корпоративная почта"></Input>
        <Input placeholder="Пароль"></Input>
        <StyledButton>Войти</StyledButton>
      </LoginForm>
    </LoginLayout>
  );
};

export default LoginPage;
