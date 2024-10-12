import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Buttons from "../components/Buttons"
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
       <div className="flex-1">
        <img src={offer} 
        width={773} height={687} className="object-contain w-full"/>
       </div>
       <div className="flex flex-1 flex-col">
      
      <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
        
        <span className="text-coral-red inline-block ml-3 mt-3 "> Special</span> Offer
      </h2>
      <p className="mt-4 lg:max-lg info-text text-justify">
      Step into incredible savings with our exclusive special offers! For a limited time,
      enjoy unbeatable discounts on the latest styles and top-quality shoes. Whether you're
      looking for comfort, performance, or fashion, we've got the perfect pair at an irresistible price.
      Don't miss out—grab your favorites before they're gone!
      </p>
      <p className="mt-6 lg:max-w-lg info-text text-justify">
      Ready to elevate your shoe game? Click the button below to explore
      our exclusive special offers and discover amazing deals waiting for
      you. Whether you're after trendy styles or classic favorites, we've
      got something for everyone. Don't miss your chance—your perfect pair is just a click away!
      </p>
      <div className="mt-11 flex flex-1 flex-wrap gap-4 ">
      <Buttons label="Shop Now" iconURl={arrowRight}/>
       <Buttons 
        label="Learn More"
        backgroundColor="bg-white"
        borderColor="border-slate-gray"
        textColor="text-slate-gray"
       />
      </div>
      </div>
    </section>
  )
}

export default SpecialOffer