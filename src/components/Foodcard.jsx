
export default function Foodcard({ images, name, price }) {
    return (
        <div className='text-center text-lg text-white'>
            <div className='  flex-col justify-center items-center bg-slate-500 mx-2 rounded-2xl hover:bg-orange-500  hover:text-black'>
                <img src={images} alt='image' className=' w-80 rounded-3xl shadow-orange-200 ml-3 pt-3'></img>
                <h1>{name}</h1>
                <h2>price: <span className=' font-bold'>${price}</span> </h2>
                <button className=' bg-orange-400 px-5 py-3 rounded-xl hover:bg-orange-300 mt-5 mb-5'>Order Now</button>
            </div>

        </div>
    )
}
