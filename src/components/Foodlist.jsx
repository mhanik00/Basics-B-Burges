import Foodcard from "./Foodcard";
import img from "../assets/shopping.webp";
import img1 from "../assets/shopping2.webp";
import img2 from "../assets/shopping3.webp";
import img3 from "../assets/shopping5.webp";
import img4 from "../assets/shopping6.webp";
import img5 from "../assets/shopping7.webp";
const imageOne = img;
const imageTwo = img1;
const imageThree = img2;
const imageFour = img3;
const imageFive = img4;
const imageSix = img5;


export default function Foodlist() {
  return (
    <div className="min-h-screen  bg-amber-200 py-6">
      <h1 className="text-center text-4xl   my-8 text-orange-500 font-mono hover:underline  cursor-pointer ">
        Available Items
      </h1>
      <div className="grid grid-cols-4 gap-5">
        <Foodcard name="Turkey burger" price="200" images={imageOne} />
        <Foodcard name="Portobello mushroom burger" price="200" images={imageTwo} />
        <Foodcard name="Veggie burger" price="200" images={imageThree} />
        <Foodcard name="Wild salmon burger" price="200" images={imageFour} />
      </div>
      <div className="grid grid-cols-4 gap-5 mt-10 mb-10" >
        <Foodcard name="Bean burger" price="200" images={imageThree} />
        <Foodcard name="Cheeseburger." price="200" images={imageFive} />
        <Foodcard name="Chili burger" price="200" images={imageSix} />
        <Foodcard name="Chori burger" price="200" images={imageFive} />

      </div>

    </div>
  )
}
