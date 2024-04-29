import img from '../assets/headerImg.png';
const headerImg = img;
export default function Header() {
    return (
        <div className=" min-h-[220px]  bg-gray-400 text-white">
            <div className='flex justify-evenly mx-20 pt-12'>
                <h1 className=' mt-20 text-4xl'>
                    Welcome to <br /> <span className=' text-amber-300 text-5xl '> Basic  B Burgers</span> <br />
                    <span className=' text-sm'>Order Your Favorite Delicious Burgers Now</span> <br />
                    <button className=' bg-amber-300 px-10 py-1 rounded-lg mt-12 text-lg text-black hover:bg-amber-600 hover:shadow-md'>Order Now</button>
                </h1>
                <img src={headerImg} alt="burger image" className=' h-96' />
            </div>
        </div>
    )
}
