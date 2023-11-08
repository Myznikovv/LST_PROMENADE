import { Box, Stack, Typography } from "@mui/material";
import { DashboardCard } from "../../../shared/components/DashboardCard";
import { typographyDesktop } from "../../../shared/config/typography";
import { styled } from "@mui/material";

const DashboardContent = styled(Box)({
  marginTop: "2.5rem",
});

const ManagerTaskPage = () => {
  return (
    <Box>
      <Typography sx={{ ...typographyDesktop.h1 }}>Задачи</Typography>
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

export default ManagerTaskPage;
