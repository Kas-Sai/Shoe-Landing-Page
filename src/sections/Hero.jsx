import { arrowRight } from "../assets/icons"
import Buttons from "../components/Buttons"
import { shoes, statistics } from "../constants"
import { bigShoe1 } from "../assets/images"
import ShoeCard from "../components/ShoeCard" 
import { useState } from "react"

const Hero = () => {
  const [bigShoeImg , setBigShoeImg] = useState(bigShoe1);
  return (
    <section
     id="Home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen
     gap-10 max-container">
     <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
      <p className="tex-xl font-montserrat text-coral-red">All Season Shooes Collection</p>
      <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] mx-sm:leading-[82px] font-bold">
        <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
          The New Arrival
          </span>
        <br />
        <span className="text-coral-red inline-block mr-3 mt-3 text-[5rem]">Branded</span>
        <span className="text-[4.7rem]">Shoes</span>
      </h1>
      <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14">
      Unveil the latest in stylish branded shoes—where quality,
      comfort, and innovation meet to elevate your active lifestyle!
      </p>
      <Buttons label="shop Now" iconURl={arrowRight}/>
      <div className="flex justify-start items-start 
      flex-wrap w-full mt-20 gap-16">
       {statistics.map((stat,index) => {
        return(
          <div key={stat.label}>
          <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
          <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
        </div>
        )
       })}
      </div>
     </div>

     <div className="relative flex-1 flex justify-center items-center xl:min-h-screen maz-xl:py-80 bg-primary bg-hero bg-cover bg-center">
      <img src={bigShoeImg} alt="shoe collection"
       width={610} height={500} className="object-contain relative z-10" />

       <div className="flex sm:gap-6 gap-4 absolute -bottom-[6%] sm:left-[10%] max-sm:px-6">
        {shoes.map((shoe) => 
          (
            <div key={shoe}>
              <ShoeCard imgURL={shoe}
               changeBigImage={(shoe)=> setBigShoeImg(shoe)}
               bigShoeImg={bigShoeImg}
              />
            </div>
          )
        )}
       </div>
     </div>
    </section>
  )
}

export default Hero