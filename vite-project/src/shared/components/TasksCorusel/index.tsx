import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import TaskCard from "../TaskCard";
import { useState } from "react";
import MobileStepper from "@mui/material/MobileStepper";
import { theme } from "../../../app/ThemeProvider/theme";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { ITaskCard } from "../../interfaces/ITaskCard";

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
  },
  {
    id: 2,
    taskNumber: 2,
    priority: "Низкий",
    time: "12:30-15:30 ",
    title: "Доставка карт и материалов",
    address: "ул. Восточно-Кругликовская, д. 64/2",
    comment: "",
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
  },
] as ITaskCard[];

const TaskCorusel = ({ openTaskList }: { openTaskList: () => void }) => {
  const [activeStep, setActiveStep] = useState(0);

  const maxSteps = tasks.length;

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <>
      {tasks.length > 0 ? (
        <>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            backButton={undefined}
            nextButton={undefined}
            style={{ padding: "1rem 0" }}
          />
          <Box width={"100%"}>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {tasks.map((step, index) => (
                <div key={step.id}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <TaskCard
                      title={step.title}
                      address={step.address}
                      time={step.time}
                      priority={step.priority}
                      comment={step.comment}
                      openTaskList={openTaskList}
                    />
                  ) : null}
                </div>
              ))}
            </SwipeableViews>
          </Box>
        </>
      ) : (
        <Box>
          <Typography marginTop="1.5rem" variant="h4">
            Задач сейчас нет
          </Typography>
          <Typography marginTop="0.5rem">
            Мы пришлём уведомление, когда появятся новая
          </Typography>
          <Link
            style={{
              textDecoration: "none",
              color: theme.palette.secondary.main,
              marginTop: " 1.5rem",
            }}
            to={"/chat"}
          >
            Чат с менеджером
          </Link>
        </Box>
      )}
    </>
  );
};

export default TaskCorusel;
