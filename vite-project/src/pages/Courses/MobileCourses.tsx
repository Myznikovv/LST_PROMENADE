import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CourseCard from "./components/CourseCard";
import { typographyMobile } from "../../shared/config/typography";
import { styled } from "@mui/material";
import { palette } from "../../shared/config/palette";

import Bank from "./../../shared/assets/bank.png";
import Card from "./../../shared/assets/card.png";
import Person from "./../../shared/assets/person.png";

const TypographyH1Mobile = styled(Typography)({
  ...typographyMobile.h1,
  marginBottom: "1rem",
  width: "13.9375rem",
});

export default function MobileCourses() {
  return (
    <Box
      marginTop="1rem"
      marginLeft="1rem"
      bgcolor={palette.background.tertiary}
    >
      <Box marginBottom="2rem">
        <TypographyH1Mobile>Продолжить обучение</TypographyH1Mobile>
        <CourseCard
          cardBgColor="#40CBE0"
          chipLabel="Продвинутым"
          imageSrc={Bank}
        />
      </Box>
      <Box marginBottom="2rem">
        <TypographyH1Mobile>Все курсы</TypographyH1Mobile>
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"0.5rem"}
          marginBottom={"6rem"}
        >
          <CourseCard
            cardBgColor="#34C759"
            chipLabel="Продвинутым"
            imageSrc={Card}
          />
          <CourseCard
            cardBgColor="#007AFF"
            chipLabel="Начинающим"
            imageSrc={Person}
          />
        </Box>
      </Box>
    </Box>
  );
}
