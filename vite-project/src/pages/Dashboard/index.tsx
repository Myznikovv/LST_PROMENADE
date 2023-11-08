import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Stack, styled } from "@mui/material";
import { typographyDesktop } from "../../shared/config/typography";
import { DashboardCard } from "../../shared/components/DashboardCard";

const StyledTypography = styled(Typography)({
  ...typographyDesktop.h1,
});

const DashboardContent = styled(Box)({
  marginTop: "2.5rem",
});

const DashboardPage = () => {
  return (
    <Box>
      <StyledTypography>Дашборд</StyledTypography>
      <DashboardContent>
        <Stack direction="row">
          <DashboardCard
            title="Задач запланировано"
            count={7}
            date="07.11.23"
          />
          <DashboardCard
            title="Задачи выполнено"
            count={2}
            date="08.11.23"
            color="#CD3636"
          />
          <DashboardCard
            title="Задач не выполнено"
            count={5}
            date="07.11.23"
            color="#2F9461"
          />
        </Stack>
      </DashboardContent>
    </Box>
  );
};

export default DashboardPage;
