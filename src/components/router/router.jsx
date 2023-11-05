import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../home/Home";
import SignIn from "../auth/SignIn";
import Register from "../auth/Register";
import ErrorPage from "../shared/errorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/sign-in",
                element: <SignIn />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
]);
export default router;
