import { useState, useRef } from "react";
import { styled } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { theme } from "../../../app/ThemeProvider/theme";
import DropListIcon from "../Icons/DragbleDropDownIcon";

import TaskCorusel from "../TasksCorusel";
import { StyledButtonMobile } from "../../../pages/Login/MobileLogin";

const StyledDrawer = styled(Drawer)({
  marginTop: "450px",
  height: "200%",
  width: "100%",
  transition: "transform 0.5s",
  transform: "translateY(0%)",
  background: theme.palette.common.white,
  zIndex: 0,
  borderRadius: "10px",
});

const StyledButtonOpen = styled(StyledButtonMobile)({
  position: "absolute",
  bottom: "80px",
  left: "30px",
});

function BottomSheet({ openTaskList }: { openTaskList: () => void }) {
  const [open, setOpen] = useState(false);
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  const handleTouchStart = (e: any) => {
    setStartY(e.touches[0].clientY);
    setCurrentY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: any) => {
    setCurrentY(e.touches[0].clientY);
    const deltaY = currentY - startY;

    if (deltaY > 0 || deltaY < -100) {
      return;
    }
    if (drawerRef.current) {
      drawerRef.current.style.transform = `translateY(${deltaY}px)`;
    }
  };

  const handleTouchEnd = () => {
    if (currentY - startY > 100) {
      setOpen(false);
      if (drawerRef.current) {
        drawerRef.current.style.transform = "translateY(0)";
      }
    }
  };

  return (
    <div>
      <StyledDrawer
        anchor="bottom"
        open={open}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        ref={drawerRef}
      >
        <div
          style={{
            padding: "0 1rem ",
            height: "2000px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <DropListIcon />
          <TaskCorusel openTaskList={openTaskList} />
        </div>
      </StyledDrawer>

      <StyledButtonOpen onClick={() => setOpen(true)}>
        Открыть задачи
      </StyledButtonOpen>
    </div>
  );
}

export default BottomSheet;
