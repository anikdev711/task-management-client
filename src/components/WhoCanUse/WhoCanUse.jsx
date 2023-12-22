

const WhoCanUse = () => {
    return (
        <div>
            <h1 className="text-center font-bold text-2xl mt-10">Who can use?</h1>
            <br />
            <p className="text-center text-lg max-w-2xl mx-auto">This personalize web based task management is suitable for students, web developers, app developers. The user can create task, edit task, delete task. When user start a task, there is a ongoing feature. If the task is completed user can find the task in completed list from the dashboard.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 max-w-lg mx-auto mt-5 mb-5">
                <div>
                    <div className="card border border-black">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Students</h2>
                            <p>Personalize task management</p>
                            
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card border border-black">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Developers</h2>
                            <p>Personalize task management</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoCanUse;