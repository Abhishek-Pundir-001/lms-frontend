// import '.././'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
function Footer() {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <div className='flex h-[10vh] py-2 px-4  bg-slate-600 justify-between items-center relative w-full left-0 bottom-0'>

            <div>
                <p className='text-yellow-50 text-sm tracking-wide font-serif'>Copyright {year}| All rights are reserved</p>
            </div>
            <div className='flex gap-4'>
                <a href=''>
                    <BsFacebook size={20}/>
                </a>
                <a href=''>
                    <BsInstagram size={20}/>
                </a>
                <a href=''>
                    <BsLinkedin size={20}/>
                </a>
                <a href=''>
                    <BsTwitter size={20}/>
                </a>
            </div>
        </div >
    )
}
export default Footer;