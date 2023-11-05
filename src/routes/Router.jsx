import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import MyBids from "../pages/MyBids/MyBids";
import BidRequests from "../pages/BidRequests/BidRequests";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <h2>page not found</h2>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: 'add-job',
                element: <AddJob></AddJob>
            },
            {
                path: 'my-posted-jobs',
                element: <MyPostedJobs></MyPostedJobs>
            },
            {
                path: 'my-bids',
                element: <MyBids></MyBids>
            },
            {
                path: 'bid-requests',
                element: <BidRequests></BidRequests>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;