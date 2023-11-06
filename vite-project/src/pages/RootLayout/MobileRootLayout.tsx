import { CircularProgress, styled } from "@mui/material";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import BottomBar from "./components/BottomBar";
import { theme } from "../../app/ThemeProvider/theme";

const StyledContaner = styled("div")({
  background: theme.palette.grey[100],
  height:"93vh"
});

export default function MobileRootLayout() {
  return (
    <StyledContaner>
      <Suspense fallback={<CircularProgress />}>
        <Outlet />
      </Suspense>
      <BottomBar />
    </StyledContaner>
  );
}
