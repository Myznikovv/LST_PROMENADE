import Box from "@mui/material/Box";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import Button from "@mui/material/Button";
import {
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
  styled,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { typographyDesktop } from "../../../../shared/config/typography";
import { useFormik } from "formik";

const StyledButton = styled(Button)({
  color: "black",
  position: "absolute",
  top: "1.5rem",
  ":hover": {
    backgroundColor: "#F6F7F8",
    boxShadow: "none",
  },
});

const StyledSaveButton = styled(Button)({
  ...typographyDesktop.button,
  fontWeight: "400",
  padding: "1rem 0",
  boxShadow: "none",
  borderRadius: "6.25rem",
  textTransform: "none",
  ":hover": {
    boxShadow: "none",
  },
});

const TypographyH1Desktop = styled(Typography)({
  ...typographyDesktop.h1,
});

export default function ManagerCreateTask({
  onSubmitForm,
}: {
  onSubmitForm: (value: object) => void;
}) {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      number: "",
      name: "",
      priority: "Средний",
      level: "",
      firstCondition: "",
      secondCondition: "",
      time: "",
    },
    onSubmit: (values, { resetForm }) => {
      onSubmitForm(values);
      alert(JSON.stringify(values, null, 2));
      navigate("/manager/tasks");
      resetForm();
    },
  });

  return (
    <Box>
      <StyledButton onClick={() => navigate("/manager/tasks")}>
        <ChevronLeftRoundedIcon />
      </StyledButton>
      <TypographyH1Desktop
        marginTop={"1rem"}
        marginBottom={"3rem"}
        textAlign={"center"}
      >
        Создание типа задачи
      </TypographyH1Desktop>
      <form onSubmit={formik.handleSubmit}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"1.25rem"}
          paddingX="25rem"
        >
          <Box
            display={"grid"}
            gap={"1.25rem"}
            gridTemplateColumns={"1fr 2fr"}
            width={"100%"}
          >
            <OutlinedInput
              id="number"
              name="number"
              value={formik.values.number}
              onChange={formik.handleChange}
              sx={{ borderRadius: "0.625rem" }}
              placeholder="Номер"
            />
            <OutlinedInput
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              sx={{ borderRadius: "0.625rem" }}
              placeholder="Название"
            />
          </Box>
          <Box
            display={"grid"}
            gap={"1.25rem"}
            gridTemplateColumns={"2fr 1fr"}
            width={"100%"}
          >
            <Select
              sx={{ borderRadius: "0.625rem" }}
              placeholder="Приоритет"
              id="priority"
              name="priority"
              value={formik.values.priority}
              onChange={formik.handleChange}
            >
              <MenuItem value="Высокий">Высокий</MenuItem>
              <MenuItem value="Средний">Средний</MenuItem>
              <MenuItem value="Низкий">Низкий</MenuItem>
            </Select>
            <OutlinedInput
              sx={{ borderRadius: "0.625rem" }}
              placeholder="Уровень сотрудника"
              id="level"
              name="level"
              value={formik.values.level}
              onChange={formik.handleChange}
            />
          </Box>
          <Box
            display={"grid"}
            gap={"1.25rem"}
            width={"100%"}
            gridTemplateColumns={"1fr"}
          >
            <OutlinedInput
              sx={{ borderRadius: "0.625rem" }}
              placeholder="Условие назначения 1"
              id="firstCondition"
              name="firstCondition"
              value={formik.values.firstCondition}
              onChange={formik.handleChange}
            />
          </Box>
          <Box
            display={"grid"}
            gap={"1.25rem"}
            width={"100%"}
            gridTemplateColumns={"2fr 1fr"}
          >
            <OutlinedInput
              sx={{ borderRadius: "0.625rem" }}
              placeholder="Условие назначения 2"
              id="secondCondition"
              name="secondCondition"
              value={formik.values.secondCondition}
              onChange={formik.handleChange}
            />
            <OutlinedInput
              sx={{ borderRadius: "0.625rem" }}
              placeholder="Время выполнения"
              id="time"
              name="time"
              value={formik.values.time}
              onChange={formik.handleChange}
            />
          </Box>
          <Box display={"grid"} gridTemplateColumns={"1fr"} width={"100%"}>
            <StyledSaveButton variant="contained" type="submit">
              Создать тип задачи
            </StyledSaveButton>
          </Box>
        </Box>
      </form>
    </Box>
  );
}
