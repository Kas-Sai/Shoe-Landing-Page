import{ Hero, CustomerReviews, Footer, PopularProducts, Subscribe, SuperQuality, Services, SpecialOffer} from './sections';
import Nav from './components/Nav'
//import Hero from './sections/Hero'
//import PopuplarProducts from './sections/'
const App = () => (

<main className="relative">
<Nav/>

<section className="xl:padding-1 wide:padding-r padding r">
<Hero/>        
</section>
<section className="padding">
 <PopularProducts/>  
</section>
<section className="padding">
 <SuperQuality/>
</section>
<section className="padding">
 <Services/> 
</section>
<section className="padding-x py-10">
 <SpecialOffer/>
</section>
<section className="bg-pale-blue padding">
 <CustomerReviews/>
</section>
<section className="padding-x sm:py-32 py-16 w-full">
 <Subscribe/>
</section>
<section className="bg-black padding-x padding-t pb-8">
 <Footer/>
</section>

</main>
);

export default App;