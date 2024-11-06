import Whatweserve from '@/Components/Homepage/Whatweserve'
import Herosection from '../Components/Homepage/Herosection'
import Navbar from '../Components/Homepage/Navbar'



function Home() {
  return (
    <div>
        <Navbar/>
        <Herosection/>
        <Whatweserve/>
    </div>
  )
}

export default Home