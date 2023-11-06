import { createBrowserRouter } from "react-router-dom";
import { EErrorTexts } from "../../shared/enums/EErrorTexts";

import LoginPage from "../../pages/Login";
import Tasks from "../../pages/Tasks";
import Chat from "../../pages/Chat";
import Courses from "../../pages/Courses";
import RootLayout from "../../pages/RootLayout";
import Error from "../../pages/Error";
import Profile from "../../pages/Profile";
import DialogChat from "../../pages/Chat/DialogChat.tsx";

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
        element: <DialogChat/>,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
    errorElement: <Error errorReason={EErrorTexts.Error404} />,
  },
]);
