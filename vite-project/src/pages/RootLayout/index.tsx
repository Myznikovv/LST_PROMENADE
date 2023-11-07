import { useEffect } from "react";
import { useNavigate } from "react-router";

import useMediaSize from "../../shared/hooks/useMediaSize";
import DesktopRootLayout from "./DesktopRootLayout";
import MobileRootLayout from "./MobileRootLayout";

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
