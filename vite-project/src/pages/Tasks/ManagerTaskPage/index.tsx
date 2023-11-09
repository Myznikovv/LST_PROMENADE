import { Box, Typography } from "@mui/material";
import { Tabs } from "@mui/base/Tabs";
import { Tab } from "@mui/base/Tab";
import { TabsList } from "@mui/base/TabsList";
import Button from "@mui/material/Button";
import { DashboardCard } from "../../../shared/components/DashboardCard";
import { typographyDesktop } from "../../../shared/config/typography";
import { styled } from "@mui/material";
import { useEffect, useState } from "react";
import { theme } from "../../../app/ThemeProvider/theme";
import TaskTab from "./components/TaskTab";
import BadgeStyled from "../../../shared/components/BadgeStyled";
import ManagerTaskCard from "./components/ManagerTaskCard";
import { tasks } from "../../../shared/tasksDummy";

const DashboardContent = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  rowGap: "1rem",
  columnGap: "2rem",
  marginTop: "2.5rem",
  marginBottom: "2.5rem",
});

const StyledTab = styled(Tab)({
  background: "none",
  border: "none",
});

const StyledButton = styled(Button)({
  background: theme.palette.primary.main,
  color: theme.palette.common.white,
  borderRadius: "4.6875rem",
  boxShadow: " 0px 4px 3px 0px rgba(0, 0, 0, 0.02)",
  padding: "0.625rem 0.9375rem",
});

const ManagerTaskPage = () => {
  const [tabIndex, setTabIndex] = useState<number | string>(1);
  const [dates, setDates] = useState<{
    tomorrow: string;
    nextDay: string;
  }>({
    tomorrow: "00/00",
    nextDay: "00/01",
  });

  useEffect(() => {
    const day = new Date(Date.now());

    const tomorrow = new Date(day);
    tomorrow.setDate(day.getDate() + 1);
    const nextDay = tomorrow;
    tomorrow.setDate(day.getDate() + 1);
    setDates({
      tomorrow: 
    });
  }, []);

  return (
    <Box>
      <Typography sx={{ ...typographyDesktop.h1 }}>Задачи</Typography>
      <DashboardContent>
        <DashboardCard title="Задач запланировано" count={7} date="07.11.23" />
        <DashboardCard
          title="Задачи выполнено"
          count={2}
          date="08.11.23"
          color="#2F9461"
        />
        <DashboardCard
          title="Задач не выполнено"
          count={5}
          date="07.11.23"
          color="#CD3636"
        />
      </DashboardContent>
      <Box style={{ marginBottom: "2rem" }}>
        <Tabs
          defaultValue={1}
          value={tabIndex}
          onChange={(_, value) => {
            if (value) setTabIndex(value);
          }}
        >
          <Box display={"flex"} justifyContent={"space-between"}>
            <TabsList
              style={{ marginBottom: "1.5rem", display: "flex", gap: "1.5rem" }}
            >
              {tabIndex === 1 ? (
                <StyledTab
                  value={1}
                  sx={{
                    borderBottom: "2px solid #FC5055",
                    paddingBottom: "0.5rem",
                  }}
                >
                  Задачи на сегодня
                </StyledTab>
              ) : (
                <StyledTab
                  value={1}
                  sx={{
                    paddingBottom: "0.5rem",
                  }}
                >
                  Задачи на сегодня
                </StyledTab>
              )}
              {tabIndex === 2 ? (
                <StyledTab
                  value={2}
                  sx={{
                    borderBottom: "2px solid #FC5055",
                    paddingBottom: "0.5rem",
                  }}
                >
                  Запланированные задачи
                </StyledTab>
              ) : (
                <StyledTab
                  value={2}
                  sx={{
                    paddingBottom: "0.5rem",
                  }}
                >
                  Запланированные задачи
                </StyledTab>
              )}
              {tabIndex === 3 ? (
                <StyledTab
                  value={3}
                  sx={{
                    borderBottom: "2px solid #FC5055",
                    paddingBottom: "0.5rem",
                  }}
                >
                  Типы задач
                </StyledTab>
              ) : (
                <StyledTab
                  value={3}
                  sx={{
                    paddingBottom: "0.5rem",
                  }}
                >
                  Типы задач
                </StyledTab>
              )}
            </TabsList>
            <StyledButton>Запустить алгоритм</StyledButton>
          </Box>
          <TaskTab value={1}>
            <Box>
              <Box
                marginBottom="1.25rem"
                display={"grid"}
                columnGap="1.5rem"
                gridTemplateColumns={"repeat(2, 1fr)"}
              >
                <BadgeStyled
                  badgeContent="Выполнено"
                  status="success"
                  isIcon={true}
                />
                <BadgeStyled
                  badgeContent="Не выполнено"
                  status="danger"
                  isIcon={true}
                />
              </Box>
              <Box
                display="flex"
                flexDirection={"row"}
                gap="1.25rem"
                justifyContent={"space-between"}
              >
                <ManagerTaskCard task={tasks[0]} size="big" />
                <Box display="flex" flexDirection="column">
                  {tasks.slice(1).map((task) => (
                    <ManagerTaskCard task={task} size="small" />
                  ))}
                </Box>
              </Box>
            </Box>
          </TaskTab>
          <TaskTab value={2}>
            <Box marginBottom="1.25rem">
              <Box
                marginBottom="1.25rem"
                display={"grid"}
                columnGap="1.5rem"
                gridTemplateColumns={"repeat(2, 1fr)"}
              >
                <Box
                  sx={{
                    padding: "0.375rem",
                    borderRadius: "1.25rem",
                    border: "1px solid #E0E0E0",
                    width: "fit-content",
                  }}
                >
                  <Typography
                    fontSize="0.875rem"
                    color="#000"
                    fontWeight={"500"}
                  >
                    {dates.tomorrow}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    padding: "0.375rem",
                    borderRadius: "1.25rem",
                    border: "1px solid #E0E0E0",
                    width: "fit-content",
                  }}
                >
                  <Typography
                    fontSize="0.875rem"
                    color="#000"
                    fontWeight={"500"}
                  >
                    {dates.nextDay}
                  </Typography>
                </Box>
              </Box>
              <Box
                display="flex"
                flexDirection={"row"}
                gap="1.25rem"
                justifyContent={"space-between"}
              >
                <ManagerTaskCard size="big" task={tasks[3]} />
                <Box display="flex" flexDirection="column">
                  <ManagerTaskCard size="small" task={tasks[2]} />
                </Box>
              </Box>
            </Box>
          </TaskTab>
          <TaskTab value={3}>
            <Box marginBottom="1.25rem">test</Box>
          </TaskTab>
        </Tabs>
      </Box>
    </Box>
  );
};

export default ManagerTaskPage;
