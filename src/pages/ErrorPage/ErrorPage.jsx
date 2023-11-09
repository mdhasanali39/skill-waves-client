import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div>
      <img className="w-2/4 mx-auto" src="https://i.ibb.co/t3KCFVj/404.jpg" />
      </div>
      {/* go back to home button  */}
      <div>
        <Link to='/'>
          <button className="text-lg text-white font-semibold px-3 py-2 rounded-lg bg-gray-600 border hover:bg-white hover:text-action-primary-clr hover:border-action-primary-clr transition ease-linear duration-300">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
