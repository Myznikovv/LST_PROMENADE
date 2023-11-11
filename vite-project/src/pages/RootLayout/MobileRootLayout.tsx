import CircularProgress from "@mui/material/CircularProgress";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import BottomBar from "./components/BottomBar";
import MobileDummy from "../Dummies/MobileDummy";

const permissionRole = "visitor" as string; //это временная заглушка по пермиссии для пользователя

export default function MobileRootLayout() {
  return (
    <>
      {permissionRole === "visitor" ? (
        <>
          <Suspense fallback={<CircularProgress />}>
            <Outlet />
          </Suspense>
          <BottomBar />
        </>
      ) : (
        <MobileDummy />
      )}
    </>
  );
}
