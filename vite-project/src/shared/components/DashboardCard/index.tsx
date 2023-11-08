import Stack from "@mui/material/Stack";
import { theme } from "../../../app/ThemeProvider/theme";
import Box from "@mui/material/Box";
import { typographyDesktop } from "../../config/typography";
import Typography from "@mui/material/Typography";

interface DasboardCardProps {
  title: string;
  count: number;
  color?: string;
  date: string;
}

export const DashboardCard = ({
  title,
  color,
  count,
  date,
}: DasboardCardProps) => {
  return (
    <Stack
      direction="row"
      sx={{
        background: theme.palette.background.paper,
        padding: "1.25rem",
        borderRadius: "1.25rem",
        marginRight:"1.25rem"
      }}
    >
      <Box>
        <Typography
          sx={{
            ...typographyDesktop.h1,
            color: color ?? theme.palette.common.black,
          }}
        >
          {count}
        </Typography>
        <Typography sx={{ ...typographyDesktop.body1, marginTop: "0.62rem" }}>
          {title}
        </Typography>
      </Box>
      <Typography
        sx={{
          ...typographyDesktop.caption,
          color: "#BDBDBD",
          marginLeft: "2.13rem",
        }}
      >
        {date}
      </Typography>
    </Stack>
  );
};
