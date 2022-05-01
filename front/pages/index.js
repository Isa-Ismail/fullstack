import Layout from '../components/Layout'
import Banner from '../components/Banner'
import Testimonial from '../components/Testimonial'
import { APP_NAME } from '../config'

const Home = ({coffeeStores}) => {
    
    return(
        <>
        <Layout description="Home page practice" title={APP_NAME}>
            
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