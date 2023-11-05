import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../home/Home";
import SignIn from "../auth/SignIn";
import Register from "../auth/Register";
import ErrorPage from "../shared/errorPage/ErrorPage";
import JobDetails from "../home/jobs/JobDetails";
import AddJobs from "../home/jobs/AddJobs";

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
            {
                path: "/add-job",
                element: <AddJobs />,
            },
            {
                path: "/job/:id",
                element: <JobDetails />,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/job/${params.id}`),
            },
        ],
    },
]);
export default router;
