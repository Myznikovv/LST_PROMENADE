import { useState } from "react";
import {
  ITableDataAddresses,
  tableDataAddresses,
} from "../../shared/components/Table/components/TableData";
import { useSearchParams } from "react-router-dom";
import Departments from "./components/Departments";
import DepartmentChangeForm from "./components/DepartmentChangeForm";

const DepartmentsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [departmentList, setDepartmentList] =
    useState<ITableDataAddresses[]>(tableDataAddresses);

  const handleAddNewAddress = (values: ITableDataAddresses) => {
    setDepartmentList((prevValues) => [...prevValues, values]);
  };

  return (
    <>
      {searchParams.get("create") === "true" ||
      searchParams.get("editDepartment") ? (
        <DepartmentChangeForm
          onSubmitForm={handleAddNewAddress}
          type={searchParams.get("editDepartment") ? "edit" : "create"}
          department={departmentList.find(
            (department) =>
              department.number === searchParams.get("editDepartment")
          )}
        />
      ) : (
        <Departments
          departmentList={departmentList}
          onCreate={(searchParam) => setSearchParams(searchParam)}
        />
      )}
    </>
  );
};

export default DepartmentsPage;
