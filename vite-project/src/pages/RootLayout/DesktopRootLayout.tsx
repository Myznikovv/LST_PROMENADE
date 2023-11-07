import CircularProgress from "@mui/material/CircularProgress";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import DesktopDummy from "../Dummies/DesktopDummy";

export default function DesktopRootLayout() {
  const permission = "visitor"; //это временная заглушка по пермиссии для пользователя

  return (
    <div>
      {permission !== "visitor" ? (
        <Suspense fallback={<CircularProgress />}>
          <Outlet />
        </Suspense>
      ) : (
        <DesktopDummy />
      )}
    </div>
  );
}
