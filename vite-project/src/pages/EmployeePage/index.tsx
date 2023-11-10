
import { typographyDesktop } from "../../shared/config/typography";
import Typography from "@mui/material/Typography";

const EmployeePage = () => {
  return (
    <div>
      <Typography sx={{ ...typographyDesktop.h1 }}>Сотрудники</Typography>
    </div>
  );
};

export default EmployeePage;
