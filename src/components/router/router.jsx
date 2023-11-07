import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../home/Home";
import SignIn from "../auth/SignIn";
import Register from "../auth/Register";
import ErrorPage from "../shared/errorPage/ErrorPage";
import JobDetails from "../home/jobs/JobDetails";
import AddJobs from "../home/jobs/AddJobs";
import MyBids from "../home/bits/MyBids";
import PrivateRoute from "../shared/privateRoute/PrivateRoute";
import PostedJobs from "../home/jobs/PostedJobs";
import BidRequested from "../home/bits/BidRequested";

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
                element: (
                    <PrivateRoute>
                        <AddJobs />
                    </PrivateRoute>
                ),
            },
            {
                path: "/my-bids",
                element: (
                    <PrivateRoute>
                        <MyBids />
                    </PrivateRoute>
                ),
            },
            {
                path: "/bid-requests",
                element: (
                    <PrivateRoute>
                        <BidRequested />
                    </PrivateRoute>
                ),
            },
            {
                path: "/posted-jobs",
                element: (
                    <PrivateRoute>
                        <PostedJobs />
                    </PrivateRoute>
                ),
            },
            {
                path: "/job/:id",
                element: (
                    <PrivateRoute>
                        <JobDetails />
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/job/${params.id}`),
            },
        ],
    },
]);
export default router;
