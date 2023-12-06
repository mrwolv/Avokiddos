
import ImageSlider from '../components/Slider/ImageSlider'
import HeadlineSecton from '../components/HeadlineSecton'
import BoxContainer from '../components/BoxContainer'
import ShoppingCards from '../components/Shopping/ShoppingCards'
import AboutUs from '../components/AboutUs'
import Testimonials from '../components/Testimonial/Testimonials'
import NewsLater from '../components/NewsLater'


const HomeLayout = () => {
    return (
        <>
            <ImageSlider />
            <HeadlineSecton />
            <BoxContainer />
            <ShoppingCards 
            title='Shop Our New Arrivals' 
            btnTitle="Add to cart"
            
            />
            <AboutUs />
            <Testimonials />
            <ShoppingCards 
            title='Shop Our Bestsellers'
            btnTitle='Select Options'
            />
            <NewsLater />
        </>
    )
}

export default HomeLayout
