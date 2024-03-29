import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Features from "../pages/Features/Features";
// import Dashboard from "../pages/Dashboard/Dashboard";
// import ContactUs from "../pages/Contact/ContactUs";
import UserProfile from "../pages/UserProfile/UserProfile";
import CreateTasks from "../pages/CreateTasks/CreateTasks";
import PreviousTasks from "../pages/PreviousTasks/PreviousTasks";
import ToDoList from "../pages/ToDoList/ToDoList";
import OnGoingList from "../pages/OnGoingList/OnGoingList";
import CompletedList from "../pages/CompletedList/CompletedList";
import DashboardLayout from "../layout/DashboardLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import EditTask from "../pages/EditTask/EditTask";
import OnGoingTask from "../pages/OnGoingTask/OnGoingTask";
import CompleteTask from "../pages/CompleteTask/CompleteTask";
import PrivateRoute from "./PrivateRoute";
import Pricing from "../pages/Pricing/Pricing";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/features",
                element: <Features></Features>
            },
            {
                path: "/pricing",
                element: <Pricing></Pricing>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute>
            <DashboardLayout></DashboardLayout>
        </PrivateRoute>,
        children: [
            {
                path: "profile",
                element: <UserProfile></UserProfile>
            },
            {
                path: "create-tasks",
                element: <CreateTasks></CreateTasks>
            },
            {
                path: "previous-tasks",
                element: <PreviousTasks></PreviousTasks>
            },
            {
                path: "todo-list",
                element: <ToDoList></ToDoList>
            },
            {
                path: "ongoing-list",
                element: <OnGoingList></OnGoingList>
            },
            {
                path: "completed-list",
                element: <CompletedList></CompletedList>
            },
            {
                path: "edit-task/:id",
                element: <EditTask></EditTask>
            },
            {
                path: "ongoing-task/:id",
                element: <OnGoingTask></OnGoingTask>
            },
            {
                path: "complete-task/:id",
                element: <CompleteTask></CompleteTask>
            }
        ]
    },
]);

export default router;