import { Suspense } from "react";
import Box from "@mui/material/Box";
import { CircularProgress } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <Box className="drawer" />
      <Box className="content">
        <Suspense fallback={<CircularProgress />}>
          <Outlet />
        </Suspense>
      </Box>
    </>
  );
}
