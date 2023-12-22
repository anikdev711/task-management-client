import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";


const CompletedList = () => {
    const { user } = useContext(AuthContext);

    const [toDoTasks, setToDoTasks] = useState([]);

    useEffect(() => {
        axios.get('https://task-management-server-jet.vercel.app/completetasks')
            .then(res => {
                const filteredTasks = res.data.filter(item => item.email === user?.email);
                // console.log(filteredTasks);
                setToDoTasks(filteredTasks)
            })
    }, [user?.email])
    return (
        <div>
            <h1 className="text-center font-bold text-2xl">Completed tasks list</h1>
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
                                    
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default CompletedList;