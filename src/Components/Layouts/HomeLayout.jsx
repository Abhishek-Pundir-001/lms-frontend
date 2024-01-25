import { FaBars } from 'react-icons/fa'
import { AiFillCloseCircle } from 'react-icons/ai'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Footer from '../Footer'
import { useDispatch, useSelector } from 'react-redux'

function HomeLayout({ children }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // determing the wheather user is logged in or not
    const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn)

    //determing the role

    const role = useSelector((state) => state?.auth?.role)

    function changeWidth() {
        let sideDrawer = document.getElementsByClassName('drawer-side');
        // sideDrawer.classList.add('w-fit');
        sideDrawer[0].style.width = 'auto'
    }
    function hideDrawer() {
        let sideDrawer = document.getElementsByClassName('drawer-side');
        let element = document.getElementsByClassName('drawer-toggle')
        element[0].checked = false
        // sideDrawer.classList.remove('w-fit');
        sideDrawer[0].style.width = '0';
    }
    return (
        <div className='min-h-[90vh]'>
            <div className="drawer absolute left-0 z-50">
                <input className="drawer-toggle" id="my-drawer" type="checkbox" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer" className="cursor-pointer relative">
                        <FaBars
                            onClick={changeWidth}
                            className='font-bold m-4 text-white'
                            size={'32px'}
                        />
                    </label>

                </div>
                <div className='drawer-side w-0'>
                    <label htmlFor="my-drawer" className='drawer-overlay'></label>
                    <ul className='menu p-4 w-48 h-[90vh]  sm:w-80 bg-base-100 text-base-content relative'>
                        <li className="w-fit absolute right-2 z-50">
                            <button onClick={hideDrawer}>
                                <AiFillCloseCircle size={24} />
                            </button>
                        </li>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        {(role === 'admin') &&
                            <li>
                                <Link to="/admin/dashboard">Admin Dashboard</Link>
                            </li>
                        }

                        <li>
                            <Link to='/courses'>Courses</Link>
                        </li><li>
                            <Link to='/contact'>contact</Link>
                        </li><li>
                            <Link to={`/about`}>About</Link>
                        </li>
                        {
                            (!isLoggedIn &&
                                (<li className='w-[90%] absolute bottom-2'>
                                    <div className='flex gap-4  w-[90%] justify-center items-center'>
                                        <button className='btn-primary hover:outline  bg-blue-800 px-4 py-1 rounded-md font-semibold'><Link to="/login">Login</Link></button>
                                        <button className='btn-secondary hover:outline  bg-purple-800  px-4 py-1 rounded-md font-semibold '><Link to='/signup'>signUp</Link></button>

                                    </div>
                                </li>))
                        }
                        {
                            (isLoggedIn &&
                                (<li className='w-[90%] absolute bottom-2'>
                                    <div className='flex  w-[90%] justify-center items-center absolute'>
                                        <button className='btn-primary px-4 py-1 rounded-md font-semibold w-full'>Logout</button>
                                        <button className='btn-primary px-4 py-1 rounded-md font-semibold w-full'>Profile</button>
                                    </div>
                                </li>))
                        }


                    </ul>


                </div>
            </div>
            {children}
            <Footer />
        </div>

    )
}
export default HomeLayout