import CourseCard from "../components/CourseCard";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";

import Bank from "../../../shared/assets/bank.png";
import { coursesDummy } from "../../../shared/coursesDummy";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import CourseStep from "./components/CourseStep";

export default function Course() {
  const navigate = useNavigate();
  const { courseId } = useParams();

  return (
    <Box marginTop="1rem">
      <Button
        style={{ padding: 0, marginBottom: "1rem" }}
        color="inherit"
        onClick={() => navigate("/courses")}
      >
        <ChevronLeftRoundedIcon />
      </Button>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        {courseId && (
          <CourseCard
            course={coursesDummy[parseInt(courseId)]}
            cardBgColor="#40CBE0"
            imageSrc={Bank}
            cardSize="big"
          />
        )}
        {courseId &&
          coursesDummy[parseInt(courseId)].courseSteps.map((step) => (
            <CourseStep step={step} />
          ))}
      </Box>
    </Box>
  );
}
