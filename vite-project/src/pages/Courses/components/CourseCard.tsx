import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { palette } from "../../../shared/config/palette";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";
import { typographyMobile } from "../../../shared/config/typography";
import { Link } from "react-router-dom";
import BadgeStyled from "../../../shared/components/BadgeStyled";
import { ICourse } from "../../../shared/interfaces/ICourse";

const TypographyTitleCard = styled(Typography)({
  ...typographyMobile.h6,
  marginBottom: "1.75rem",
  maxWidth: "20rem",
  minHeight: "3.75rem",
});

const TypographyTitleCaption = styled(Typography)({
  ...typographyMobile.caption,
  color: "#BDBDBD",
});

const LinkStyled = styled(Link)({
  textDecoration: "none",
  color: "black",
});

export default function CourseCard({
  cardBgColor,
  imageSrc,
  course,
}: {
  cardBgColor: string;
  imageSrc: string;
  course: ICourse;
}) {
  return (
    <LinkStyled to={`/courses/${course.courseId}`}>
      <Box
        width={"22.5rem"}
        height={"16.25rem"}
        bgcolor={palette.monochrome.white}
        borderRadius={"1rem"}
      >
        <Box
          width={"22.5rem"}
          height={"7.5rem"}
          borderRadius="1rem 1rem 0rem 0rem"
          bgcolor={cardBgColor}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Chip
              label={course.courseLevel}
              variant="outlined"
              sx={{ backgroundColor: "white", marginLeft: "1rem" }}
            />
            <Box
              component={"img"}
              src={imageSrc}
              marginTop="2.25rem"
              marginRight="1rem"
            />
          </Box>
        </Box>
        <Box margin={"1rem 0 0 1rem"}>
          <TypographyTitleCard>Курс «{course.courseTitle}»</TypographyTitleCard>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            marginRight="1rem"
          >
            <TypographyTitleCaption>
              {course.courseLength} уроков
            </TypographyTitleCaption>
            <BadgeStyled
              badgeContent={`${course.courseCompleteness || 0}%`}
              status={
                course.courseCompleteness < 50
                  ? "white"
                  : course.courseCompleteness < 75
                  ? "warning"
                  : "success"
              }
            />
          </Box>
        </Box>
      </Box>
    </LinkStyled>
  );
}
