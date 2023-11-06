import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible, AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import useAuthContext from "../Hoocks/useAuthContext";

const Login = () => {
    const { signIn, signIngWithGoogle, signInWithGithub,user } = useAuthContext()
    console.log(user)
    const location = useLocation()
    const navigate = useNavigate()
    const [passwordShow, setPasswordShow] = useState(false)
    const [loginError, setLoginError] = useState('')

    const loginHandle = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signIn(email, password)
            .then(() => {
                setLoginError('')
                toast.success('Successfully login!')
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                setLoginError('Email OR Password is not correct!!!')
                console.log(error.message)
            })
    }

    const googleSigninHandle = () => {
        signIngWithGoogle()
            .then(() => {
                toast.success('Successfully login!')
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => console.log(error.message))
    }

    const gitHubSignInHandle = () => {
        signInWithGithub()
            .then(() => {
                toast.success('Successfully login!')
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => console.log(error.message))
    }
    return (
        <div className="">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col w-full md:w-4/6 lg:w-1/3">

                    <div className=" flex-shrink-0 w-full max-w-sm bg-teal-100 shadow-xl ">
                        <form onSubmit={loginHandle} className=" px-6 pt-4 pb-6 text-sm ">
                            <h1 className="text-4xl font-bold text-teal-600 pt-3 text-center mb-4">Login now</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className=" py-[10px] px-3 border drop-shadow  " required />
                            </div>

                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={passwordShow ? 'text' : 'password'} name="password" placeholder="password" className=" py-[10px] px-3 border drop-shadow  " required />
                                <span className="text-xl absolute right-3 top-12" onClick={() => setPasswordShow(!passwordShow)}>
                                    {
                                        passwordShow ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>
                                    }
                                </span>
                            </div>
                            <div>
                                {
                                    loginError && <p className="text-red-600 mt-3">{loginError}</p>
                                }
                            </div>
                            <div className="mt-3">
                                <p>New user? Please <Link className="text-blue-700" to='/signup'>Register</Link></p>
                            </div>
                            <div className="form-control mt-4">
                                <button type="submit" className="py-3 text-white font-bold bg-teal-600 rounded">Login</button>
                            </div>
                            <div className="text-center border-t border-slate-600 my-6 pt-3 flex gap-4 justify-center">
                                <FcGoogle onClick={googleSigninHandle} className="text-3xl cursor-pointer "></FcGoogle>
                                <AiFillGithub onClick={gitHubSignInHandle} className="text-3xl cursor-pointer "></AiFillGithub>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;