// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck TODO
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Stack, styled } from "@mui/material";
import { typographyDesktop } from "../../shared/config/typography";
import { DashboardCard } from "../../shared/components/DashboardCard";

import { BarChart } from "@mui/x-charts/BarChart";
import { theme } from "../../app/ThemeProvider/theme";

import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";

const StyledTypography = styled(Typography)({
  ...typographyDesktop.h1,
});

const DashboardContent = styled(Box)({
  marginTop: "2.5rem",
});

const DashboardPage = () => {
  return (
    <Box>
      <Stack direction="row" justifyContent={"space-between"}>
        <StyledTypography>Дашборд</StyledTypography>{" "}
        <Button
          sx={{
            background: theme.palette.primary.main,
            color: theme.palette.common.white,
            borderRadius: "4.6875rem",
            boxShadow: " 0px 4px 3px 0px rgba(0, 0, 0, 0.02)",
            padding: "0.625rem 0.9375rem",
          }}
        >
          Запустить алгоритм
        </Button>
      </Stack>
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
        <Stack direction="row">
          <Box
            padding={"1.25rem"}
            sx={{
              background: theme.palette.background.paper,
              width: "42rem",
              marginTop: "1.25rem",
              borderRadius: "1.25rem",
              marginRight: "1.25px",
            }}
          >
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"flex-start"}
            >
              <Box>
                <Typography sx={{ ...typographyDesktop.caption }}>
                  Соотношение
                </Typography>
                <Typography
                  sx={{ ...typographyDesktop.h1, fontSize: "1.75rem" }}
                >
                  KPI за ноябрь
                </Typography>
              </Box>
              <Stack direction={"row"}>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  marginRight={"0.5rem"}
                >
                  <FiberManualRecordRoundedIcon
                    sx={{
                      color: "#FC5055",
                      fontSize: "0.8rem",
                      marginRight: "0.25rem",
                    }}
                  />
                  <Typography>KPI</Typography>
                </Stack>
                <Stack direction={"row"} alignItems={"center"}>
                  <FiberManualRecordRoundedIcon
                    sx={{
                      color: "#003790",
                      fontSize: "0.8rem",
                      marginRight: "0.25rem",
                    }}
                  />
                  <Typography>Задачи</Typography>
                </Stack>
              </Stack>
            </Stack>

            <BarChart
              xAxis={[
                {
                  scaleType: "band",
                  data: [
                    "Дерягин Н.В.",
                    "Евдокимов Д.Т.",
                    "Николаев А.П.",
                    "Петрошев В.П.",
                    "Андреев Г.Д.",
                    "Мызников В.А.",
                  ],
                  categoryGapRatio: 0.5,
                  barGapRatio: 0.1,
                  tickLabelStyle: {
                    fontSize: 10,
                    color: theme.palette.common.black,
                  },
                  borderRadius: "4px",
                },
              ]}
              series={[
                {
                  data: [100, 90, 125, 125, 125, 125],
                  color: "#FC5055",
                  // label: "KPI",
                },
                {
                  data: [75, 40, 100, 100, 100, 120],
                  color: "#003790",
                  // label: "Задачи",
                },
              ]}
              width={700}
              height={300}
            />
          </Box>
          <Box
            padding={"1.25rem"}
            sx={{
              background: theme.palette.background.paper,
              width: "20.6rem",
              marginTop: "1.25rem",
              marginLeft: "1.25rem",
              borderRadius: "1.25rem",
            }}
          >
            <Typography sx={{ ...typographyDesktop.caption }}>
              Количество
            </Typography>
            <Typography sx={{ ...typographyDesktop.h1, fontSize: "1.75rem" }}>
              Задач за ноябрь
            </Typography>
          </Box>
        </Stack>
      </DashboardContent>
    </Box>
  );
};

export default DashboardPage;
