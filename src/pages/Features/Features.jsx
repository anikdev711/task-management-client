import { FaEdit, FaTasks } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";

const Features = () => {
    return (
        <div>
            <h1 className="text-center font-bold text-2xl mt-10">Features</h1>
            <br />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-2xl mx-auto h-screen">

                <div>
                    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
                        <div className="p-6">

                            <FaTasks />

                            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 mt-5">
                                Create tasks
                            </h5>
                            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                Create your tasks from your dashboard. Break down the task into small and perform it perfectly.
                            </p>
                        </div>

                    </div>
                </div>


                <div>
                    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
                        <div className="p-6">

                            <FaEdit />

                            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 mt-5">
                                Edit task
                            </h5>
                            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                If you need to change or modify your task then you can edit from your dashboard.
                            </p>
                        </div>

                    </div>
                </div>

                <div>
                    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
                        <div className="p-6">

                            <GoProjectRoadmap />

                            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 mt-5">
                                Organize project
                            </h5>
                            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                Break down the project into small parts. Create tasks for each parts and complete the tasks.
                            </p>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default Features;