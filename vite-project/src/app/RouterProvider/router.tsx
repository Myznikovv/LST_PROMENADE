import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../../pages/RootLayout";
import Error from "../../pages/Error";
import { EErrorTexts } from "../../shared/enums/EErrorTexts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{}],
    errorElement: <Error errorReason={EErrorTexts.Error404} />,
  },
]);
