import CircularProgress from "@mui/material/CircularProgress";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function DesktopRootLayout() {
  return (
    <div>
      <Suspense fallback={<CircularProgress />}>
        <Outlet />
      </Suspense>
      DesktopRootLayout
    </div>
  );
}
