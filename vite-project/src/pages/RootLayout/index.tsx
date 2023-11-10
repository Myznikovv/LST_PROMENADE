import { useEffect } from "react";
import useMediaSize from "../../shared/hooks/useMediaSize";
import DesktopRootLayout from "./DesktopRootLayout";
import MobileRootLayout from "./MobileRootLayout";

// import { TPath } from "../../shared/types/TPath";

import { useNavigate } from "react-router-dom";
import React from "react";

export default function RootLayout() {
  const mediaSize = useMediaSize();
  const navigate = useNavigate();

  const permissionRole = "manager" as string; //это временная заглушка по пермиссии для пользователя

  useEffect(() => {
    permissionRole === "visitor"
      ? navigate("/tasks")
      : navigate("/manager/dashboard");
  }, []);

  return (
    <>
      <>{mediaSize.isMobile ? <MobileRootLayout /> : <DesktopRootLayout />}</>
    </>
  );
}
