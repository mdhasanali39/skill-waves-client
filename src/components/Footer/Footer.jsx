import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mb-14 py-6 ">
      {/* footer top  */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 border-b border-t py-6">
        {/* Categories */}
        <div>
          <h2 className="text-lg text-gray-600 font-bold">Categories</h2>
          <ul className="space-y-2 mt-2">
            <li className="text-lg font-medium text-gray-600 hover:underline hover:text-action-primary-clr">
              web development
            </li>
            <li className="text-lg font-medium text-gray-600 hover:underline hover:text-action-primary-clr">
              digital marketing
            </li>
            <li className="text-lg font-medium text-gray-600 hover:underline hover:text-action-primary-clr">
              graphics design
            </li>
          </ul>
        </div>
        {/* terms */}
        <div>
          <h2 className="text-lg text-gray-600 font-bold">Terms</h2>
          <ul className="space-y-2 mt-2">
            <li className="text-lg font-medium text-gray-600">
              <a
                href="#"
                className="hover:underline hover:text-action-primary-clr"
              >
                Privacy Policy
              </a>
            </li>
            <li className="text-lg font-medium text-gray-600">
              <a
                href="#"
                className="hover:underline hover:text-action-primary-clr"
              >
                Terms and Conditions
              </a>
            </li>
            <li className="text-lg font-medium text-gray-600">
              <a
                href="#"
                className="hover:underline hover:text-action-primary-clr"
              >
                Copyright Policy
              </a>
            </li>
            <li className="text-lg font-medium text-gray-600">
              <a
                href="#"
                className="hover:underline hover:text-action-primary-clr"
              >
                Code of Conduct
              </a>
            </li>
            <li className="text-lg font-medium text-gray-600">
              <a
                href="#"
                className="hover:underline hover:text-action-primary-clr"
              >
                Fees and Charges
              </a>
            </li>
          </ul>
        </div>
        {/* contact info */}
        <div className="text-gray-600">
          <h2 className="text-lg  font-bold">Contact Info</h2>
          <div className="space-y-2 mt-2">
            <address className="text-lg">1571 Weekley Street . USA</address>
            <p className="flex items-center gap-2 text-lg">
              
              <span>
                <FaEnvelope />
              </span>
              contact.skillwaves@gmail.com
            </p>
            <p className="flex items-center gap-2 text-lg">
              
              <span>
                <FaPhone />
              </span>
              +1 210-***-****
            </p>
          </div>
        </div>
        {/* social links */}
        <div>
          <h2 className="text-lg text-gray-600 font-bold">Social Links</h2>
          <div className="flex gap-2 mt-2 text-gray-600">
            <span className="text-2xl border rounded-full p-2 hover:bg-action-primary-clr transition ease-linear duration-300 hover:text-white">
              <FaFacebookF />
            </span>
            <span className="text-2xl border rounded-full p-2 hover:bg-action-primary-clr transition ease-linear duration-300 hover:text-white">
              <FaTwitter />
            </span>
            <span className="text-2xl border rounded-full p-2 hover:bg-action-primary-clr transition ease-linear duration-300 hover:text-white">
              <FaYoutube />
            </span>
            <span className="text-2xl border rounded-full p-2 hover:bg-action-primary-clr transition ease-linear duration-300 hover:text-white">
              <FaInstagram />
            </span>
          </div>
        </div>
      </div>
      {/* footer bottom  */}
      <div className="flex flex-wrap items-center justify-between text-lg pt-6 ">
        {/* logo  */}
        <div>
          <Link to={'/'}>
            <img
              className=""
              src="https://i.ibb.co/GRCTkJc/waves-1.png"
              alt="skill wave logo"
            />
          </Link>
        </div>
        {/* total job posted  */}
        <div className="text-lg font-medium text-gray-600">
          <p>1200</p>
          <p>Total job posted</p>
        </div>
        {/* Copyright text  */}
        <p>
          &copy;{" "}
          <a
            href="#"
            className="hover:underline text-lg mr-[2apx] font-medium text-gray-600"
          >
            skillwaves.com
          </a>
          | 2023
        </p>
      </div>
    </div>
  );
};

export default Footer;
