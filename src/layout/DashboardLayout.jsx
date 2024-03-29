import { NavLink, Outlet } from "react-router-dom";



const DashboardLayout = () => {

    

    return (
        <div>

            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-64 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li>
                            <NavLink to="/dashboard/profile">Profile</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/create-tasks">Create Tasks</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/previous-tasks">Previous Tasks</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/todo-list">Todo List</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/ongoing-list">Ongoing List</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/completed-list">Completed List</NavLink>
                        </li>

                        <div className="divider"></div> 

                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;