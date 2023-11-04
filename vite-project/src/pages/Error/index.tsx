import { Box, Typography, CircularProgress } from "@mui/material";
import { EErrorTexts } from "../../shared/enums/EErrorTexts";

export default function Error({ errorReason }: { errorReason: string }) {
  return (
    <Box alignItems="center" justifyContent="center" columnGap={4}>
      <Typography variant="h5">Ошибка: {errorReason}</Typography>
      {errorReason !== EErrorTexts.ErrorFallback && <CircularProgress />}
    </Box>
  );
}
