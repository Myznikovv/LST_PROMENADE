import { Button, Stack, Typography } from "@mui/material";

import { typographyDesktop } from "../../shared/config/typography";

const DepartmentsPage = () => {
  return (
    <div>
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography sx={{ ...typographyDesktop.h1 }}>Отделения</Typography>
        <Stack direction="row">
          <Button>Скачать в Excel</Button>
          <Button>Создать отделение</Button>
        </Stack>
      </Stack>
    </div>
  );
};

export default DepartmentsPage;
