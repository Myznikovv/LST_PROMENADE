import { Button, Typography, styled } from "@mui/material";
import Box from "@mui/material/Box";
import { typographyDesktop } from "../../config/typography";
import { ITableDataAddresses } from "./components/TableData";
import BadgeStyled from "../BadgeStyled";

import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TypographyCaption = styled(Typography)({
  ...typographyDesktop.caption,
  color: "#616161",
});

const StyledButton = styled(Button)({
  background: "none",
  padding: "0",
  width: "fit-content",
  height: "fit-content",
});

export default function TableDepartments({
  columns,
  additionalDepartments,
  onEdit,
}: {
  columns: string[];
  additionalDepartments: ITableDataAddresses[];
  onEdit: (value: string) => void;
}) {
  const [departmentList, setDepartmentList] = useState<ITableDataAddresses[]>(
    additionalDepartments
  );

  const navigate = useNavigate();

  const handleDeleteRow = (id: string) => {
    const departments = additionalDepartments.filter((task) => {
      return task.number !== id;
    });
    setDepartmentList(departments);
  };

  const handleEditDepartment = (departmentId: string) => {
    navigate({
      search: `?editDepartment=${departmentId}`,
    });
    onEdit(`?editDepartment=${departmentId}`);
  };

  return (
    <Box
      display={"grid"}
      gridTemplateColumns={`
        0.25fr
        1fr
        0.5fr
        0.5fr
        1fr
        0.5fr
        0.5fr
        0.5fr
      `}
      bgcolor={"#FFF"}
      paddingX={"1.5rem"}
      paddingY={"1.25rem"}
      borderRadius={"0.625rem"}
      gap="1.5rem"
    >
      {columns.map((column) => (
        <TypographyCaption>{column}</TypographyCaption>
      ))}
      {departmentList.map((department) => (
        <>
          <Typography>{department.number}</Typography>
          <Typography>{department.address}</Typography>
          <Box>
            <BadgeStyled
              status={department.date === "Давно" ? "info" : "warning"}
              badgeContent={department.date}
              isIcon={true}
            />
          </Box>
          <Box>
            <BadgeStyled
              status={department.isDelivered === "Да" ? "success" : "danger"}
              badgeContent={department.isDelivered}
              isIcon={true}
            />
          </Box>
          <Typography>{department.amountDays}</Typography>
          <Typography>{department.amountApproved}</Typography>
          <Typography>{department.amountCards}</Typography>
          <Box display="flex">
            <StyledButton onClick={() => handleDeleteRow(department.number)}>
              <DeleteOutlinedIcon />
            </StyledButton>
            <StyledButton
              onClick={() => handleEditDepartment(department.number)}
              style={{ color: "#3657CD" }}
            >
              <EditOutlinedIcon />
            </StyledButton>
          </Box>
        </>
      ))}
    </Box>
  );
}
