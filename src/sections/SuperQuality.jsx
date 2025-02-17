import { shoe8 } from "../assets/images"
import Buttons from "../components/Buttons"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
      
      <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
        We Provide You
        <span className="text-coral-red inline-block ml-3 mt-3 "> Super</span>
        <span className="text-coral-red inline-block mr-3 mt-3 ">Quality</span> Shoes
      </h2>
      <p className="mt-4 lg:max-lg info-text text-justify">
      Discover a world of premium products crafted to exceed your expectations. 
      Here, every item is handpicked for its superior quality, ensuring you enjoy
      nothing but the best. With exceptional durability and unmatched performance,
      our collection guarantees a shopping experience like no other. 
      Elevate your lifestyle with products designed to impress!
      </p>
      <p className="mt-6 lg:max-w-lg info-text">Our dedication to detail and excellence ensures your satisfaction</p>
      <div className="mt-11 ">
      <Buttons label="View Details" />
      </div>
      </div>
      
      <div className="flex flex-1 justify-center items-center ">
       <img src={shoe8} alt="shoe8"
       width={570} height={522}
       className="object-contain" />
      </div>
    </section>
  )
}

export default SuperQuality