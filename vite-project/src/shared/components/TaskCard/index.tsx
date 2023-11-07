import Stack from "@mui/material/Stack";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { theme } from "../../../app/ThemeProvider/theme";
import CommentIcon from "../Icons/CommentIcon";
import { StyledButtonMobile } from "../../../pages/Login/MobileLogin";

interface TaskCardProps {
  title: string;
  address: string;
  time: string;
  priority: string;
  comment?: string;
  openTaskList?: () => void;
  taskNumber?: number;
}


const TaskCard = ({
  time,
  title,
  priority,
  address,
  comment,
  openTaskList,
  taskNumber,
}: TaskCardProps) => {
  return (
    <Stack>
      {taskNumber ? (
        <Typography
          variant="h4"
          marginBottom={"1rem"}
        >{`Задача № ${taskNumber}`}</Typography>
      ) : null}
      <Stack direction="row">
        <Stack direction="row">
          <Stack
            direction="row"
            alignItems={"center"}
            sx={{
              color: theme.palette.primary.dark,
              padding: "0.5rem",
              background: "#FDE9E9E5",
              borderRadius: " 1.25rem",
              fontWeight: 600,
            }}
          >
            <FiberManualRecordRoundedIcon sx={{ fontSize: "0.8rem" }} />
            <Typography sx={{ marginLeft: "0.3rem", fontWeight: 500 }}>
              {priority}
            </Typography>
          </Stack>
          <Box
            sx={{
              padding: "0.5rem",
              borderRadius: "1.25rem",
              border: "1px solid  #E0E0E0",
              ml: "0.25rem",
            }}
          >
            {time}
          </Box>
        </Stack>

        {openTaskList && (
          <Typography
            sx={{
              marginLeft: "auto",
              textDecoration: "none",
              color: theme.palette.secondary.main,
              paddingTop: "0.5rem",
            }}
            onClick={openTaskList}
          >
            Список задач
          </Typography>
        )}
      </Stack>
      <Typography
        sx={{ fontWeight: 500, fontSize: "1.5rem", marginTop: "0.5rem" }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: "0.875rem",
          marginTop: "0.5rem",
          marginBottom: "1rem",
        }}
      >
        {address}
      </Typography>
      {comment ?? (
        <Stack
          direction="row"
          sx={{
            background: theme.palette.grey[300],
            padding: "0.5rem",
            borderRadius: " 0.5rem",
          }}
        >
          <CommentIcon />
          <Typography sx={{ marginLeft: "0.5rem" }}>{comment}</Typography>
        </Stack>
      )}
      <Link
        style={{
          textDecoration: "none",
          color: theme.palette.secondary.main,
          marginTop: "0.5rem",
        }}
        to={"/chats"}
      >
        Чат с менеджером
      </Link>
      {!taskNumber ? (
        <StyledButtonMobile sx={{mt:"1rem"}} variant="outlined">Начать</StyledButtonMobile>
      ) : null}
    </Stack>
  );
};

export default TaskCard;
