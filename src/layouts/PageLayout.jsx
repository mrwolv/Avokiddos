/* eslint-disable react/prop-types */
import Footer from '../components/Footer'
import Header from '../components/Navbar/Header'
import Navbar from '../components/Navbar/Navbar'

const PageLayout = ({ content }) => {
    return (
        <>
            <Header />
            <Navbar />
            <section>{content}</section>
            <Footer />
        </>
    )
}

export default PageLayout
