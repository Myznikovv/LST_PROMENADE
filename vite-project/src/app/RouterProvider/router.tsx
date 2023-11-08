import { createBrowserRouter } from "react-router-dom";
import { EErrorTexts } from "../../shared/enums/EErrorTexts";

import LoginPage from "../../pages/Login";
import Tasks from "../../pages/Tasks";
import Chat from "../../pages/Chat";
import Courses from "../../pages/Courses";
import RootLayout from "../../pages/RootLayout";
import Error from "../../pages/Error";
import Profile from "../../pages/Profile";
import DashboardPage from "../../pages/Dashboard/index.tsx";
import ManagerChatPage from "../../pages/Chat/ManagerChatPage/index.tsx";
import DepartmentsPage from "../../pages/DepartmentPage/index.tsx";
import EmployeePage from "../../pages/EmployeePage/index.tsx";
import ManagerTaskPage from "../../pages/Tasks/ManagerTaskPage/index.tsx";

import DialogChat from "../../pages/Chat/DialogChat.tsx";
import Course from "../../pages/Courses/Course/index.tsx";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        path: "/tasks",
        element: <Tasks />,
      },

      {
        path: "/chats",
        element: <Chat />,
      },
      {
        path: "/chats/:chatId",
        element: <DialogChat />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/courses/:courseId",
        element: <Course />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/manager/dashboard",
        element: <DashboardPage />,
      },
      {
        path: "/manager/tasks",
        element: <ManagerTaskPage />,
      },
      {
        path: "/manager/chat",
        element: <ManagerChatPage />,
      },
      {
        path: "/manager/deparments",
        element: <DepartmentsPage />,
      },
      {
        path: "/manager/employees",
        element: <EmployeePage />,
      },
    ],
    errorElement: <Error errorReason={EErrorTexts.Error404} />,
  },
  { path: "*", element: <Error errorReason={EErrorTexts.Error404} /> },
]);
