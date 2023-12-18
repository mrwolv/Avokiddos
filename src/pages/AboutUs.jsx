
import Banner from '../components/Banner/Banner'

const AboutUs = () => {
   

    return (
        <main>
            <Banner  />
            {/* About Details */}
            <div className='flex flex-col'>
                <div className='mt-4 flex flex-col md:flex-row  md:items-center justify-between gap-6  md:gap-44 p-[7%] '>
                    <div>
                        <img
                            src='/DSC02318_result-scaled.jpg'
                            alt='About Us Image'
                            className='object-contain w-full'
                        />
                    </div>
                    <p className='flex flex-col  text-[.9rem]  text-[#6c7175] md:text-[1rem] px-3'>
                        <span className='pb-5'>
                            Kiddos today love to wear cool stuff which is
                            comfortable enough to savour the spirit and spright
                            of their bouncy life and flaunt a style statement as
                            well. Their young doting mamas and papas who are
                            ready to go to any extent to please their cherubs
                            are always seen browsing for something exceptionally
                            good.
                        </span>
                        <span className='pb-5'>
                            We offer the young avocado generation, an assortment
                            that would immediately resonate with the parents and
                            woo their munchkins.
                        </span>
                        <span className='pb-5'>
                            Most reasonably priced yet haute couture in appeal,
                            Avokiddos debuts ‘kids wear redefined’. The apparels
                            have the swag of chic and style and are made of pure
                            and soothing high quality cotton material. The
                            select choice of soft prints and pastel colours is
                            sure to make the Avokiddos experience most
                            invigorating.
                        </span>
                    </p>
                </div>
                <div className=' flex flex-col md:flex-row-reverse  justify-between gap-6  md:gap-40 px-[7%] '>
                    <div>
                        <img
                            src='/DSC02779_result-scaled.jpg'
                            alt='About Us Image'
                            className='object-cover w-full '
                        />
                    </div>
                    <p className='flex flex-col  text-[.9rem]  text-[#6c7175] md:text-[1rem] pl-3'>
                        <span className='pb-5'>
                            Avokiddos wear was born with the desire of a
                            compassionate and creative young brigade to
                            rehabilitate the skilled workforce which had lost
                            its livelihood due to pandemic. The idea was to fill
                            the huge gap of availability of right clothing for
                            little children as well as generate employment.
                        </span>
                        <span className='pb-5'>
                            Each and every dress is a masterpiece designed and
                            crafted by a team which cares. Understanding the
                            importance of hygiene, we usher for the first-time
                            sanitized garments which your baby can drape as soon
                            as the parcel reaches your doorstep.
                        </span>
                        <span className='pb-5'>
                            Also keeping in mind the social objective that every
                            enterprise should fulfil, an amount from the
                            proceeds is donated for animal welfare.
                        </span>
                        <span className='pb-5'>
                            When an Avokiddo is in your hands, you will surely
                            have a smile of satisfaction and exclaim “This is
                            just what I wanted!”
                        </span>
                    </p>
                </div>
            </div>

            <div className='flex flex-col items-center justify-between mt-4 mb-8 '>
                <h1 className='md:text-[2.3rem] text-[2.1rem] font-lovesunshine'>Our Moto</h1>
                <p className='md:px-[25%] px-6 text-[1rem] text-[#6c7175] text-center '>
                    We believe in maintaining excellence in quality in order to
                    garner optimum client satisfaction. Children have the power
                    to make everyone happy with their presence. We love a child,
                    that’s why we love to see them happy along with their
                    parents. Our mission is to keep manufacturing high-quality
                    apparel at reasonable prices, so that most families can
                    afford to make their child wear quality apparel.
                </p>
            </div>
        </main>
    )
}

export default AboutUs
