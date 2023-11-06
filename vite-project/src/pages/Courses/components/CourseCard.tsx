import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { palette } from "../../../shared/config/palette";

export default function CourseCard({
  cardBgColor,
  chipLabel,
  imageSrc,
}: {
  cardBgColor: string;
  chipLabel: "Продвинутым" | "Начинающим";
  imageSrc: string;
}) {
  return (
    <Box
      width={"22.5rem"}
      height={"16.25rem"}
      bgcolor={palette.monochrome.white}
      borderRadius={"1rem"}
    >
      <Box
        position={"absolute"}
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
            label={chipLabel}
            variant="outlined"
            sx={{ backgroundColor: "white", margin: "1rem 0 0 1rem" }}
          />
          <Box component={"img"} src={imageSrc} marginTop="2.25rem" marginRight="1rem" />
        </Box>
      </Box>
    </Box>
  );
}
