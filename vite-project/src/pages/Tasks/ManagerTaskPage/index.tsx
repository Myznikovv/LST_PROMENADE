import { Box } from "@mui/material";
import ManagerTasks from "./components/ManagerTasks";
import { useSearchParams } from "react-router-dom";
import ManagerCreateTask from "./components/ManagerCreateTask";
import { useState } from "react";

const ManagerTaskPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [tasks, setTasks] = useState<object[]>([]);

  console.log(tasks);

  return (
    <Box>
      {searchParams.get("create") === "true" ? (
        <ManagerCreateTask
          onSubmitForm={(newTask) =>
            setTasks((prevTask) => [...prevTask, newTask])
          }
        />
      ) : (
        <ManagerTasks
          onCreate={(value) => setSearchParams(value)}
          additionalTasks={tasks}
        />
      )}
    </Box>
  );
};

export default ManagerTaskPage;
