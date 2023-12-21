import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";


const CompleteTask = () => {
    const [editTask, setEditTask] = useState({});
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        axios.get('http://localhost:5000/tasks')
            .then(res => {
                const specificTask = res.data.find(task => task._id === id);
                setEditTask(specificTask);
            })
    }, [id])

    // console.log(editTask);

    // const {
    //     register,
    //     handleSubmit,
    //     reset,
    //     formState: { errors }
    // } = useForm();

    const handleEditTask = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const deadlines = form.deadlines.value;
        const description = form.description.value;
        const priority = form.priority.value;
        const title = form.title.value;

        // const taskInfo = {
        //     email: data.email,
        //     deadlines: data.deadlines,
        //     description: data.description,
        //     priority: data.priority,
        //     title: data.title
        // }
        const taskInfo = {
            email,
            deadlines,
            description,
            priority,
            title
        }



        axios.post('http://localhost:5000/completetasks', taskInfo)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Task completed",
                        showClass: {
                            popup: `
                                        animate__animated
                                        animate__fadeInUp
                                        animate__faster
                                      `
                        },
                        hideClass: {
                            popup: `
                                        animate__animated
                                        animate__fadeOutDown
                                        animate__faster
                                      `
                        }
                    });
                }
            })
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <div>
            <h1 className="text-center font-bold text-2xl">Complete Task</h1>
            <br />
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form
                    onSubmit={handleEditTask}
                    className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email*</span>
                        </label>
                        <input
                            defaultValue={editTask.email}
                            type="email"
                            name="email"
                            placeholder="Your email address..."
                            className="input input-bordered" />
                        {/* {errors.email && <span className="text-red-500 font-bold">This field is necessary</span>} */}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title*</span>
                        </label>
                        <input
                            defaultValue={editTask.title}
                            type="text"
                            name="title"
                            placeholder="Task title..."
                            className="input input-bordered" />
                        {/* {errors.title && <span className="text-red-500 font-bold">This field is necessary</span>} */}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description*</span>
                        </label>
                        <input
                            defaultValue={editTask.description}
                            type="text"
                            name="description"
                            placeholder="Task description..."
                            className="input input-bordered" />
                        {/* {errors.description && <span className="text-red-500 font-bold">This field is necessary</span>} */}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Deadlines*</span>
                        </label>
                        <input
                            defaultValue={editTask.deadlines}
                            type="text"
                            name="deadlines"
                            placeholder="Task deadlines..."
                            className="input input-bordered" />
                        {/* {errors.deadlines && <span className="text-red-500 font-bold">This field is necessary</span>} */}
                    </div>


                    <div className="flex justify-between gap-5">
                        <label className="label">
                            <span className="label-text font-semibold text-lg">Priority*:</span>
                        </label>
                        <select name="priority">

                            <option value={editTask.priority}>{editTask.priority}</option>
                            {/* <option value="low">low</option>
                            <option value="moderate">moderate</option>
                            <option value="high">high</option> */}
                        </select>
                        {/* {errors.priority && <span className="text-red-500 font-bold">This field is necessary</span>} */}
                    </div>
                    <div className="form-control mt-6">
                        <button
                            // onClick={() => handleEditTask(editTask._id)}
                            className="btn btn-neutral text-white font-bold">
                            Complete 
                        </button>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default CompleteTask;