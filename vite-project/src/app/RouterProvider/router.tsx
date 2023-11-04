import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../../pages/RootLayout";
import Error from "../../pages/Error";
import { EErrorTexts } from "../../shared/enums/EErrorTexts";
import Box from "@mui/material/Box";
import LoginPage from "../../pages/Login";

export const router = createBrowserRouter([
  {
    path:"/login",
    element:<LoginPage/>,

  },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Box>Test</Box>,
      },
    ],
    errorElement: <Error errorReason={EErrorTexts.Error404} />,
  },
]);
