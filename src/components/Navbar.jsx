import img from '../assets/burgerLogo.jpg'


const image = img;


export default function Navbar() {
    return (
        // main navigation div
        <div className='flex bg-red-50 justify-between items-center' >
            <div className='flex items-center  mx-2 '>
                <img src={image} alt='logo' className='h-20' />
                <h1 className='px-3 font-bold text-base'> Basic B Burgers</h1>
            </div>
            <ul className='flex font-mono'>
                <li className='px-3 hover:underline cursor-pointer'>Home</li>
                <li className='px-3 hover:underline cursor-pointer'>About</li>
                <li className='px-3 hover:underline cursor-pointer'>Menu</li>
                <li className='px-3 hover:underline cursor-pointer'>Contact</li>
            </ul>
        </div>
    )
}
