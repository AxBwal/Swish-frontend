import Whatweserve from '@/Components/Homepage/Whatweserve'
import Herosection from '../Components/Homepage/Herosection'
import Navbar from '../Components/Homepage/Navbar'
import Footer from '@/Components/Homepage/Footer'



function Home() {
  return (
    <div>
        <Navbar/>
        <Herosection/>
        <Whatweserve/>
        <Footer/>
    </div>
  )
}

export default Home