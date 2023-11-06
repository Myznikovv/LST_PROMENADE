import { CircularProgress, Typography, styled } from "@mui/material";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import BottomBar from "./components/BottomBar";

export default function MobileRootLayout() {
  return (
    <div>
      <Suspense fallback={<CircularProgress />}>
        <Outlet />
      </Suspense>
      <BottomBar />
    </div>
  );
}
