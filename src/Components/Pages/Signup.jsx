import { useState} from "react";
import { BsPerson } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { newAccount } from "../../Redux/Slices/authSlice";
function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [previewImage, setPreviewImage] = useState('');
    const [signupData, setSignupData] = useState({
        name: "",
        email: "",
        password: ""
    });

    function handleInput(e) {
        const { name, value } = e.target
        setSignupData({
            ...signupData, [name]: value
        })
    }
    async function createAccount(event) {
        event.preventDefault()
        if (!signupData.email || !signupData.name || !signupData.password) {
            toast.error("All fields are mandatory")
            return
        }
        if (signupData.name.length < 5) {
            toast.error("Name should contain at least five character")
            return
        }
        if (!signupData.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            toast.error("Invalid email")
            return
        }
        if (!signupData.password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)) {
            toast.error("password must contain at least one special character or a number and length from6 to 16 character")
            return
        }

        const response = await dispatch(newAccount(signupData))
        if (response.payload.success)
            navigate("/")
        setSignupData({
            name: "",
            email: "",
            password: ""
        })
    }
    return (
        <div className="h-screen flex justify-center items-center bg-slate-700">
            <form className="flex flex-col h-auto items-center space-y-3 shadow-[0_35px_60px_-15px_rgba(0,0,0,10)] px-4 py-4 rounded-lg border-2 border-white md:w-1/4">
                <h1 className="md:text-2xl text-white font-semibold">Registration form</h1>
                <div className="text-center bg-white rounded-full">
                    <label htmlFor="avatar">
                        {previewImage ? (<img src={previewImage} className="rounded-full size-20" alt="profile-img" />) :
                            <BsPerson className="rounded-full md:size-20 m-3" />
                        }

                        <input
                            type="file"
                            id="avatar"
                            name="avatar"
                            hidden

                        />
                    </label>
                </div>
                <div className="w-full">
                    <label htmlFor="fullname"></label>
                    <input
                        type="text"
                        id="fullname"
                        name="name"
                        placeholder="Name"
                        className="w-full py-2 px-1 rounded-md"
                        onChange={handleInput}
                    />
                </div>
                <div className="w-full">
                    <label htmlFor="email"></label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="email"
                        className="w-full py-2 px-1 rounded-md"
                        onChange={handleInput}
                    />
                </div>
                <div className="w-full">
                    <label htmlFor="password"></label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="password"
                        className="w-full py-2 px-1 rounded-md"
                        onChange={handleInput}
                    />
                </div>
                <div className="space-x-2 w-full">
                    <button onClick={createAccount} className="px-4 py-2 w-full bg-orange-600 text-white rounded-lg">Signup</button>
                </div>
                <span className="text-sm text-white">Already have an account? <Link className="text-blue-400" to="/login">Login</Link></span>
            </form>
        </div>
    )
}
export default Signup;