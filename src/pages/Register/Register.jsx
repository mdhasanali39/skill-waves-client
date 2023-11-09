import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser, googleSign } = useAuth();
  const [password, setPassword] = useState("");
  const [pageLoad, setPageLoad] = useState(true)


  // for false the page load 
  useEffect(()=>{
    setTimeout(() => {
      setPageLoad(false)
    }, 1500);
  },[])


  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form["photo-url"].value;

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
    createUser(email, password)
      .then((result) => {
        // update profile
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            {
              pageLoad ? "": window.location.reload()
            }
            console.log("profile updated successful");
          })
          .catch((err) => {
            console.error(err.message);
          });
        if (result.user.email) {
          toast.success("Account created successfully");
        }
        
        console.log(result.user);
      })
      .catch((err) => {
        toast.error(err.message.split(" ")[2].split("/")[1].slice(0, -2));
      });

    console.log(name, email, photo, password);
  };

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
          Create a new account
        </h2>
        {/* easy login  */}
        <div className="flex justify-center my-4">
          <button
            onClick={handleGoogleLogin}
            className="flex gap-3 items-center border rounded-md p-3"
          >
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

        <form onSubmit={handleRegister}>
          <div className="space-y-4">
            {/* user name  */}
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-lg text-gray-600 font-semibold "
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                required
                className=" outline-none border placeholder-black px-3 py-4 rounded-md"
              />
            </div>
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
                onChange={(e) => setPassword(e.target.value)}
                className=" outline-none border placeholder-black px-3 py-4 rounded-md"
              />
            </div>
            {/* user photo url  */}
            <div className="flex flex-col">
              <label
                htmlFor="photo-url"
                className="text-lg text-gray-600 font-semibold "
              >
                Your Photo Url
              </label>
              <input
                type="url"
                name="photo-url"
                id="photo-url"
                placeholder="Your Photo Url"
                required
                className=" outline-none border placeholder-black px-3 py-4 rounded-md"
              />
            </div>
            {/* register button  */}
            <div className="text-center py-7">
              <button
                type="submit"
                className="text-lg text-white font-semibold px-7 py-2 rounded-lg bg-action-primary-clr border hover:bg-white hover:text-action-primary-clr hover:border-action-primary-clr transition ease-linear duration-300"
              >
                Register
              </button>
            </div>
            {/* already have an account */}
            <p className="text-center text-gray-600 text-lg">
              Already have an account ?{" "}
              <Link
                to={"/login"}
                className="text-action-primary-clr hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
