import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.imgur.com/exExyx3.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-white text-5xl font-bold">Welcome</h1>
                        <p className="mb-5 text-white font-semibold">Task management is an important skill now a days. This website works as task manager for you. To improve your work efficiency you can use the features of this website.</p>
                        <Link to="/dashboard">
                            <button className="btn btn-neutral text-white font-bold">Let’s Explore</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;