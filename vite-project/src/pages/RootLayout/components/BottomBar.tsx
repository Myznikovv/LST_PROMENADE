import { useState, SyntheticEvent } from "react";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import SchoolOutlined from "@mui/icons-material/SchoolOutlined";
import FormatListNumberedRoundedIcon from "@mui/icons-material/FormatListNumberedRounded";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";

import styled from "@mui/material/styles/styled";
import { useNavigate } from "react-router-dom";

const StyledBottomNavigation = styled(BottomNavigation)({
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  padding: "2rem 0",
  zIndex:2
});

type TBottomNavigationValue = "courses" | "tasks" | "profile" | "chat";

const BottomBar = () => {
  const [bottomNavigationValue, setBottomNavigationValue] =
    useState<TBottomNavigationValue>("tasks");

  const navigate = useNavigate();

  const handleBottomNavigationChange = (
    _: SyntheticEvent,
    newValue: TBottomNavigationValue
  ) => {
    setBottomNavigationValue(newValue);
    navigate(newValue);
  };

  return (
    <div>
      <StyledBottomNavigation
        showLabels
        value={bottomNavigationValue}
        onChange={handleBottomNavigationChange}
      >
        <BottomNavigationAction
          label="Задачи"
          value="tasks"
          icon={<FormatListNumberedRoundedIcon />}
        />
        <BottomNavigationAction
          label="Чаты"
          value="chat"
          icon={<ChatOutlinedIcon />}
        />
        <BottomNavigationAction
          label="Курсы"
          value="courses"
          icon={<SchoolOutlined />}
        />
        <BottomNavigationAction
          label="Профиль"
          value="profile"
          icon={<PersonOutlinedIcon />}
        />
      </StyledBottomNavigation>
    </div>
  );
};

export default BottomBar;
