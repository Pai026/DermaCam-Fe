
import { navigate } from 'hookrouter';
import React,{useState} from 'react';
import { useDispatch } from "react-redux"
import { postRegister } from "../Redux/actions";
import * as Notficiation from "../util/Notifications";
const Signup = () => {
    const initForm = {
      "firstName": "",
      "lastName": "",
      "email": "",
      "lat": "10.027760",
      "long": "76.275047",
      "password": "",
      "confirmPassword": ""
     
};
const dispatch = useDispatch();
const [formLoading, setFormLoading] = useState(false);
const [form, setForm] = useState(initForm);
const [formError, setFormError] = useState(false);
const handleChange = (e) => {
  const { value, name } = e.target;
  const fieldValue = { ...form };

  // error handling needed
  fieldValue[name] = value;

  setForm(fieldValue);
};

function validateInputs() {
  let err = "";
  let formValid = true;
  if (form.email === "" || form.password === "") {
      err = "email id. / Password is empty";
      formValid = false;
  }
  if (form.password !== form.confirmPassword)
  {
    err = "Password and confirm Password do not match";
    formValid= false;
  }
  setFormError(err);
  return formValid;
}

const handleSubmit = (e) => {
  e.preventDefault();
  // error handling required
  const valid = validateInputs();
  if (valid && !formLoading) {
      setFormLoading(true);

      dispatch(postRegister(form))
          .then((resp) => {
              const { data: res } = resp;
              const { status: statusCode } = resp;

              if (res) {
                  navigate('/login')
                  window.location.reload();
              }
            
          })
          .catch((err) => {
              Notficiation.Error({
                  msg: "Check network connection and try again",}
              );
          });
  }
};
return(
    <div className="container mx-auto">
    <div className="flex justify-center px-6 my-12">
      
      <div className="flex w-full xl:w-3/4 lg:w-">
        <div
          className="hidden w-full h-auto bg-gray-400 bg-cover rounded-l-lg lg:block lg:w-1/2"
          style={{backgroundImage: "url('https://source.unsplash.com/Ne4ndPUwe08/600x800')"}}></div>
        <div className="w-full p-5 bg-white bg-gray-400 rounded-lg lg:w-1/2 lg:rounded-l-none">
          <h3 className="pt-4 text-2xl text-center">Welcome To DermaCam!</h3>
          <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-4 bg-white bg-gray-400 rounded">

          <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                Firstname
              </label>
              <input
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="FirstName"
                name="firstName"
                type="text"
                placeholder="FirstName"
                value={form.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                Lastname
              </label>
              <input
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="LastName"
                name="lastName"
                type="text"
                placeholder="lastName"
                value={form.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="text"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                Password
              </label>
              <input
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" //border-red-500 for error
                id="password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="******************"
              />
              <p className="text-xs italic text-red-500">{formError}</p>
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                RetypePassword
              </label>
              <input
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" //border-red-500 for error
                id="password"
                name="confirmPassword"
                type="password"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="******************"
              />
              <p className="text-xs italic text-red-500">{formError}</p>
            </div>
            
            <div className="mb-6 text-center">
            <button
                            type="submit"
                            className={`flex items-center ${
                                formLoading
                                    ? "bg-gray-600"
                                    : "bg-red-700 hover:bg-red-800"
                            } text-white font-bold py-2 px-4 sm:px-3 rounded focus:outline-none focus:shadow-outline`}>
                            <svg
                                className={`h-5 w-5 ${
                                    formLoading
                                        ? "text-gray-400"
                                        : "text-red-600"
                                } transition ease-in-out duration-150 mr-1`}
                                fill="currentColor"
                                viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Sign Up
                        </button>
            </div>
            <hr className="mb-6 border-t" />
            <div className="text-center">
              <a
                className="inline-block text-sm align-baseline text-black-500 hover:text-blue-800"
                href="./register.html"
              >
                Login to Account!
              </a>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  </div>
  )

}
export default Signup;