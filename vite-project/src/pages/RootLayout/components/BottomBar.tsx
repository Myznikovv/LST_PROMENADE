import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import FormatListNumberedRoundedIcon from "@mui/icons-material/FormatListNumberedRounded";
import AccountIcon from "../../../shared/components/Icons/AccountIcon";
import styled from "@mui/material/styles/styled";

const StyledBottomNavigation = styled(BottomNavigation)({
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  paddingBottom:"2rem"
});

const BottomBar = () => {
  return (
    <div>
      <StyledBottomNavigation
        showLabels
        // value={value}
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
      >
        <BottomNavigationAction  label="Курсы" icon={<SchoolRoundedIcon />} />
        <BottomNavigationAction
          label="Задачи"
          icon={<FormatListNumberedRoundedIcon />}
        />
        <BottomNavigationAction label="Профиль" icon={<AccountIcon />} />
      </StyledBottomNavigation>
    </div>
  );
};

export default BottomBar;
