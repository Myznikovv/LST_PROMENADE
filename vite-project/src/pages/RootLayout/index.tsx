import { useEffect } from "react";
import { useNavigate } from "react-router";

import useMediaSize from "../../shared/hooks/useMediaSize";
import DesktopRootLayout from "./DesktopRootLayout";
import MobileRootLayout from "./MobileRootLayout";

export default function RootLayout() {
  const mediaSize = useMediaSize();
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/tasks");
  }, [navigate]);

  return (
    <>
      <>{mediaSize.isMobile ? <MobileRootLayout /> : <DesktopRootLayout />}</>
    </>
  );
}
