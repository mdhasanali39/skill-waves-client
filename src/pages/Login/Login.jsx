/* eslint-disable react/no-unescaped-entities */
import { FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn, googleSign } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      toast.error("Password should at least 6 characters");
      return;
    }
    if (!/(?=.*?[A-Z])/.test(password)) {
      toast.error("Password should at least one capital letter");
      return;
    }
    if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      toast.error("Password should at least one special character");
      return;
    }
    // create user
    signIn(email, password)
      .then((result) => {
        if (result.user.email) {
          toast.success("Your login successful");
        }
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err.message);
        if (
          err.message === "Firebase: Error (auth/invalid-login-credentials)."
        ) {
          toast.error("email or password does not matched");
          return;
        }
        toast.error(err.message.split(" ")[2].split("/")[1].slice(0, -2));
      });

    console.log(email, password);
  };

  // easy login with google 
  const handleGoogleLogin = () => {
    googleSign()
      .then((result) => {
        toast.success("Login with google Successful")
        console.log(result.user);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <div className="w-1/2 mx-auto min-h-[86vh] my-14">
      <div className="shadow-lg rounded-lg p-8 border">
        <h2 className="text-center font-semibold text-3xl text-gray-600">
          Log in to new account
        </h2>
        {/* easy login  */}
        <div className="flex justify-center my-4">
          <button
          onClick={handleGoogleLogin}
           className="flex gap-3 items-center border rounded-md p-3">
            <span className="text-action-primary-clr text-2xl">
              <FaGoogle />
            </span>
            <span>Continue with Google </span>
          </button>
        </div>
        {/* separator  */}
        <div className="flex gap-3 items-center justify-center pb-8">
          <span className="border w-[100px] h-[5px] bg-action-primary-clr"></span>
          <span className="text-3xl font-bold text-gray-600">Or</span>
          <span className="border w-[100px] h-[5px] bg-action-primary-clr"></span>
        </div>

      {/* form  */}
      <form onSubmit={handleLogin}>
        <div className="space-y-4 ">
          {/* user email  */}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-lg text-gray-600 font-semibold "
            >
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              required
              className=" outline-none border placeholder-black px-3 py-4 rounded-md"
            />
          </div>
          {/* user password  */}
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-lg text-gray-600 font-semibold "
            >
              Your Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your Password"
              required
              className=" outline-none border placeholder-black px-3 py-4 rounded-md"
            />
          </div>
          {/* login button  */}
          <div className="text-center py-7">
            <button
              type="submit"
              className="text-lg text-white font-semibold px-7 py-2 rounded-lg bg-action-primary-clr border hover:bg-white hover:text-action-primary-clr hover:border-action-primary-clr transition ease-linear duration-300"
            >
              Login
            </button>
          </div>
          {/* already have an account */}
          <p className="text-center text-gray-600 text-lg">
            Don't have an account ?{" "}
            <Link
              to={"/register"}
              className="text-action-primary-clr hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Login;
