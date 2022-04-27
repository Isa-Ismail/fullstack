import Layout from '../components/Layout'
import Banner from '../components/Banner'
import Testimonial from '../components/Testimonial'

const Home = ({coffeeStores}) => {
    
    return(
        <>
        <Layout description="Home page practice" title="we are the champions of the world">
            
            <main className='flex flex-col'>
                
                <Banner />
                
                <div className='h-[100vh] w-[100%] px-[8rem] bg-gradient-to-r from-purple-500 to-pink-500'>
                    <Testimonial />
                </div>

            </main>
        </Layout>
        </>
    )
}

export default Home