import { Suspense } from "react";
import Box from "@mui/material/Box";
import { CircularProgress } from "@mui/material";
import { Outlet } from "react-router-dom";
import useMediaSize from "../../shared/hooks/useMediaSize";

export default function RootLayout() {
    const mediaSize = useMediaSize();
  return (
    <>
      <Box className="drawer" />
      <Box className="content">
        <Suspense fallback={<CircularProgress />}>
          <Outlet />
        </Suspense>
      </Box>
      <div>
      {mediaSize.isMobile} {mediaSize.size}
    </div>
    </>
  );
}
