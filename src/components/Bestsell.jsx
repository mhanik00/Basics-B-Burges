import img3 from "../assets/shopping5.webp";
import img1 from "../assets/shopping2.webp";
import img2 from "../assets/shopping3.webp";
import img4 from "../assets/shopping6.webp";
import Foodcard from "./Foodcard";
const imageFour = img3;
const imageTwo = img1;
const imageThree = img2;
const imageFive = img4;
export default function Bestsell() {
  return (
    <div className=" bg-lime-300 py-6">
      <h1 className="text-center text-4xl  my-8 text-orange-500 font-mono hover:underline  cursor-pointer ">
        Today's Best Sell
      </h1>
      <div className="grid grid-cols-4 gap-5 mt-10 mb-10" >
        <Foodcard name="Portobello mushroom burger" price="200" images={imageTwo} />
        <Foodcard name="Veggie burger" price="200" images={imageThree} />
        <Foodcard name="Wild salmon burger" price="200" images={imageFour} />
        <Foodcard name="Chori burger" price="200" images={imageFive} />
      </div>
    </div>
  )
}
