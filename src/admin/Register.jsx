import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { authStart } from "../redux/slice/authSlice";
import AuthServise from "../redux/api/auth";
import { Toast } from "../utils/SweetAlert";

function Register() {
    const { isLoading } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [auth, setAuth] = useState({
        fName: "",
        lName: "",
        email: "",
        password: "",
        avatar: "example.png",
        isAdmin: "true",
    });

    const clear = () => {
        setAuth({
            fName: "",
            lName: "",
            email: "",
            password: "",
            avatar: "example.png",
            isAdmin: "true",
        });
    };

    const getInputValue = (e) => {
        setAuth({
            ...auth,
            [e.target.name]: e.target.value
        });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        dispatch(authStart());
        try {
            const { data } = await AuthServise.register(auth);
            clear();
            navigate("/admin-panel");
            await Toast.fire({
                icon: "success",
                title: data.message
            });
        } catch (error) {
            await Toast.fire({
                icon: "error",
                title: error.message
            });
        }
    };

    return (
        <div className="w-full h-screen fixed top-0 bg-white">
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create your account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6">
                        <div className="flex justify-between">
                            <div>
                                <label htmlFor="fName" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
                                <div className="mt-2">
                                    <input onChange={(e) => getInputValue(e)} value={auth.fName} id="fName" name="fName" type="fName" autoComplete="fName" required className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="lName" className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                                <div className="mt-2">
                                    <input onChange={(e) => getInputValue(e)} value={auth.lName} id="lName" name="lName" type="lName" autoComplete="lName" required className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div className="mt-2">
                                <input onChange={(e) => getInputValue(e)} value={auth.email} id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            </div>
                            <div className="mt-2">
                                <input onChange={(e) => getInputValue(e)} value={auth.password} id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <button onClick={(e) => handleRegister(e)} type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 p-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{isLoading ? "Loading..." : "Register"}</button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already have an account?
                        <NavLink to="/admin-panel" className="font-semibold ml-2 leading-6 text-indigo-600 hover:text-indigo-500">Log in here...</NavLink>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Register