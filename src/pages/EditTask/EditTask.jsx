import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";


const EditTask = () => {
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

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const handleEditTask = (data) => {
        console.log(data);

        const taskInfo = {
            email: data.email,
            deadlines: data.deadlines,
            description: data.description,
            priority: data.priority,
            title: data.title
        }

        // console.log(taskInfo);
        // console.log(data);
        // console.log(data._id);

        axios.put(`http://localhost:5000/tasks/${id}`, taskInfo)
            .then(res => {
                console.log(res);
                if (res.data.modifiedCount > 0) {
                    reset();
                    Swal.fire({
                        title: "Tasks edited",
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

            <h1 className="text-center font-bold text-2xl">Edit Task</h1>
            <br />
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form
                    onSubmit={handleSubmit(handleEditTask)}
                    className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email*</span>
                        </label>
                        <input
                            type="email"
                            {...register("email", { required: true })}
                            name="email"
                            defaultValue={editTask.email}
                            placeholder="Your email address..."
                            className="input input-bordered" />
                        {errors.email && <span className="text-red-500 font-bold">This field is necessary</span>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title*</span>
                        </label>
                        <input
                            type="text"
                            {...register("title", { required: true })}
                            name="title"
                            defaultValue={editTask.title}
                            placeholder="Task title..."
                            className="input input-bordered" />
                        {errors.title && <span className="text-red-500 font-bold">This field is necessary</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description*</span>
                        </label>
                        <input
                            type="text"
                            {...register("description", { required: true })}
                            name="description"
                            defaultValue={editTask.description}
                            placeholder="Task description..."
                            className="input input-bordered" />
                        {errors.description && <span className="text-red-500 font-bold">This field is necessary</span>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Deadlines*</span>
                        </label>
                        <input
                            type="text"
                            {...register("deadlines", { required: true })}
                            name="deadlines"
                            defaultValue={editTask.deadlines}
                            placeholder="Task deadlines..."
                            className="input input-bordered" />
                        {errors.deadlines && <span className="text-red-500 font-bold">This field is necessary</span>}
                    </div>


                    <div className="flex justify-between gap-5">
                        <label className="label">
                            <span className="label-text font-semibold text-lg">Priority*:</span>
                        </label>
                        <select {...register("priority", { required: true })}>
                            <option value="low">low</option>
                            <option value="moderate">moderate</option>
                            <option value="high">high</option>
                        </select>
                        {errors.priority && <span className="text-red-500 font-bold">This field is necessary</span>}
                    </div>
                    <div className="form-control mt-6">
                        <button
                            // onClick={() => handleEditTask(editTask._id)}
                            className="btn btn-neutral text-white font-bold">
                            Edit
                        </button>
                    </div>

                </form>

            </div>

        </div>
    );
};

export default EditTask;