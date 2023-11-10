import Box from "@mui/material/Box";
import {
  YMaps,
  Map,
  GeolocationControl,
  ZoomControl,
} from "@pbe/react-yandex-maps";

import { Divider, Typography, styled } from "@mui/material";
import { theme } from "../../app/providers/ThemeProvider/theme";
import { Tabs } from "@mui/base/Tabs";
import { typographyMobile } from "../../shared/config/typography";

import BottomSheet from "../../shared/components/BottomSheet";
import { useState } from "react";

import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { palette } from "../../shared/config/palette";
import { ITaskCard } from "../../shared/interfaces/ITaskCard";
import TaskCard from "../../shared/components/TaskCard";
import { TabsList } from "../../shared/components/Tabs/TabList";
import { Tab } from "../../shared/components/Tabs/Tab";

const tasks = [
  {
    id: 1,
    taskNumber: 1,
    priority: "Высокий",
    time: "09:00-12:00",
    title: "Выезд на точку для стимулирования выдач",
    address: "ул. им. Героя Аверкиева А.А., д. 8/1 к. мая, кв. 268",
    comment:
      "Необходимо связаться с digital-отделом после выполнения задачи для проверки нового функционала",
    employee: "Евдокимов Д.Т.",
  },
  {
    id: 2,
    taskNumber: 2,
    priority: "Низкий",
    time: "12:30-15:30 ",
    title: "Доставка карт и материалов",
    address: "ул. Восточно-Кругликовская, д. 64/2",
    comment: "",
    employee: "Евдокимов Д.Т.",
  },
  {
    id: 3,
    taskNumber: 3,
    priority: "Высокий",
    time: "09:00-12:00",
    title: "Выезд на точку для стимулирования выдач",
    address: "ул. им. Героя Аверкиева А.А., д. 8/1 к. мая, кв. 268",
    comment:
      "Необходимо связаться с digital-отделом после выполнения задачи для проверки нового функционала",
    employee: "Евдокимов Д.Т.",
  },
  {
    id: 4,
    taskNumber: 4,
    priority: "Высокий",
    time: "09:00-12:00",
    title: "Выезд на точку для стимулирования выдач",
    address: "ул. им. Героя Аверкиева А.А., д. 8/1 к. мая, кв. 268",
    comment:
      "Необходимо связаться с digital-отделом после выполнения задачи для проверки нового функционала",
    employee: "Евдокимов Д.Т.",
  },
] as ITaskCard[];

const StyledButtonGroup = styled(Box)({
  position: "absolute",
  top: 25,
  left: 16,
});

const TypographyH1Mobile = styled(Typography)({
  ...typographyMobile.h1,
  marginBottom: "1rem",
  width: "13.9375rem",
});

const ModalStyles = styled(Box)({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: palette.background.tertiary,
  display: "flex",
  flexDirection: "column",
  zIndex: 999,
});

const BottomBlock = styled(Box)({
  position: "absolute",
  overflow: "scroll",
  bottom: 0,
  left: 0,
  right: 0,
  width: "100%",
  height: "41.375rem",
  background: theme.palette.common.white,
  padding: "1rem 1rem 0 1rem ",
  borderRadius: "1rem 1rem 0rem 0rem",
  boxShadow: "0px 0px 4px 0px rgba(68, 68, 68, 0.16)",
});

export default function Tasks() {
  const [isOpenTasksList, setIsOpenTasksList] = useState(false);

  const openModal = () => {
    setIsOpenTasksList(true);
  };

  const closeModal = () => {
    setIsOpenTasksList(false);
  };

  return (
    <>
      <Box>
        <div>
          <YMaps>
            <Map
              defaultState={{ center: [55.75, 37.57], zoom: 13 }}
              width={"100%"}
              height={"100vh"}
            >
              <GeolocationControl
                options={{ position: { bottom: 180, right: 20 } }}
              />
              <ZoomControl options={{ position: { right: 20, bottom: 300 } }} />
            </Map>
          </YMaps>
        </div>
        <StyledButtonGroup>
          <Tabs defaultValue={1}>
            <TabsList>
              <Tab value={1}>Сегодня, 4 ноября</Tab>
              <Tab value={2}>Завтра, 5 ноября</Tab>
            </TabsList>
          </Tabs>
        </StyledButtonGroup>
        <BottomSheet openTaskList={openModal} />
      </Box>

      {isOpenTasksList && (
        <ModalStyles>
          <Box padding={"1rem 1rem 0 1rem"}>
            <Box>
              <ArrowBackIosNewRoundedIcon
                onClick={closeModal}
                sx={{
                  marginBottom: "0.5rem",
                }}
              />

              <TypographyH1Mobile>Задачи</TypographyH1Mobile>

              <Tabs style={{ marginBottom: "2rem" }} defaultValue={1}>
                <TabsList>
                  <Tab value={1}>Сегодня, 4 ноября</Tab>
                  <Tab value={2}>Завтра, 5 ноября</Tab>
                </TabsList>
              </Tabs>
            </Box>

            <BottomBlock>
              {tasks.map((step) => (
                <Box key={step.id} sx={{ padding: "0.5rem" }}>
                  <TaskCard
                    title={step.title}
                    address={step.address}
                    time={step.time}
                    priority={step.priority}
                    comment={step.comment}
                    taskNumber={step.taskNumber}
                  />
                  <Divider sx={{ marginTop: "0.5rem" }} />
                </Box>
              ))}
            </BottomBlock>
          </Box>
        </ModalStyles>
      )}
    </>
  );
}
