import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CourseCard from "./components/CourseCard";
import { typographyMobile } from "../../shared/config/typography";
import { styled } from "@mui/material";
import { palette } from "../../shared/config/palette";
import { useState, useEffect } from "react";

import Bank from "./../../shared/assets/bank.png";
import Card from "./../../shared/assets/card.png";
import Person from "./../../shared/assets/person.png";

import { ICourse } from "../../shared/interfaces/ICourse";
import { Link } from "react-router-dom";
import { coursesDummy } from "../../shared/coursesDummy";

const TypographyH1Mobile = styled(Typography)({
  ...typographyMobile.h1,
  marginBottom: "1rem",
  width: "13.9375rem",
});

const LinkStyled = styled(Link)({
  textDecoration: "none",
  color: "black",
});

export default function MobileCourses() {
  const [courseData, setCourseData] = useState<ICourse[]>();

  useEffect(() => {
    setCourseData(coursesDummy);
  }, []);

  console.log(courseData);

  return (
    <Box
      marginTop="1rem"
      marginLeft="1rem"
      bgcolor={palette.background.tertiary}
    >
      <Box marginBottom="2rem">
        <TypographyH1Mobile>Продолжить обучение</TypographyH1Mobile>
        {courseData && (
          <LinkStyled to={`/courses/${courseData[0].courseId}`}>
            <CourseCard
              cardSize={"small"}
              course={courseData[0]}
              cardBgColor="#40CBE0"
              imageSrc={Bank}
            />
          </LinkStyled>
        )}
      </Box>
      <Box marginBottom="2rem">
        <TypographyH1Mobile>Все курсы</TypographyH1Mobile>
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"0.5rem"}
          marginBottom={"6rem"}
        >
          {courseData &&
            courseData.slice(1).map((course) => {
              return (
                <LinkStyled
                  to={`/courses/${course.courseId}`}
                  key={course.courseId}
                >
                  <CourseCard
                    cardSize={"small"}
                    course={course}
                    cardBgColor="#34C759"
                    imageSrc={Card}
                  />
                </LinkStyled>
              );
            })}
        </Box>
      </Box>
    </Box>
  );
}
