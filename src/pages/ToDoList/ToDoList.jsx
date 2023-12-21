import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const ToDoList = () => {
    const { user } = useContext(AuthContext);

    const [toDoTasks, setToDoTasks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/tasks')
            .then(res => {
                const filteredTasks = res.data.filter(item => item.email === user?.email);
                // console.log(filteredTasks);
                setToDoTasks(filteredTasks)
            })
    }, [user?.email])

    // console.log(toDoTasks);

    //delete task

    const handleDeleteTask = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`http://localhost:5000/tasks/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        const otherTasks = res.data.filter(task => task._id !== id);
                        setToDoTasks(otherTasks);
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        });

    }


    return (
        <div>
            <h1 className="text-center font-bold text-2xl">To do list</h1>
            <br />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mx-auto">
                {
                    toDoTasks.map(task => (
                        <div key={task._id}>
                            <div className="card bg-base-100 shadow-xl">

                                <div className="card-body">
                                    <h2 className="card-title">
                                        {task.title}
                                        <div className="badge badge-secondary">{task.priority}</div>
                                    </h2>
                                    <p>{task.description}</p>
                                    <p>{task.deadlines}</p>
                                    <div className="card-actions justify-start">
                                        <Link to={`/dashboard/ongoing-task/${task._id}`}>
                                            <div className="badge badge-outline cursor-pointer">ongoing</div>
                                        </Link>

                                        <Link to={`/dashboard/complete-task/${task._id}`}>
                                            <div className="badge badge-outline cursor-pointer">completed</div>
                                        </Link>

                                        <Link to={`/dashboard/edit-task/${task._id}`}>
                                            <div className="badge badge-outline cursor-pointer">edit</div>
                                        </Link>

                                        <div
                                            onClick={() => handleDeleteTask(task._id)}
                                            className="badge badge-outline cursor-pointer">delete</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default ToDoList;