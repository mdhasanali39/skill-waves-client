import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import MyBids from "../pages/MyBids/MyBids";
import BidRequests from "../pages/BidRequests/BidRequests";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import JobDetails from "../pages/JobDetails/JobDetails";
import UpdateJob from "../pages/UpdateJob/UpdateJob";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: 'add-job',
                element: <PrivateRoute>
                    <AddJob></AddJob>
                </PrivateRoute>
            },
            {
                path: 'update-job/:id',
                element: <UpdateJob></UpdateJob>,
                loader: ({params})=> fetch(`https://skill-waves-server.vercel.app/api/v1/job/${params.id}`, {credentials: 'include'})
            },
            {
                path: 'my-posted-jobs',
                element: <PrivateRoute>
                    <MyPostedJobs></MyPostedJobs>
                </PrivateRoute>
            },
            {
                path: 'my-bids',
                element: <PrivateRoute>
                    <MyBids></MyBids>
                </PrivateRoute>
            },
            {
                path: 'bid-requests',
                element: <PrivateRoute>
                    <BidRequests></BidRequests>
                </PrivateRoute>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'job/:id',
                element: <PrivateRoute>
                    <JobDetails></JobDetails>
                </PrivateRoute>,
                loader: ({params})=> fetch(`https://skill-waves-server.vercel.app/api/v1/job/${params.id}`,{credentials:'include'})
            }
        ]
    }
])

export default router;