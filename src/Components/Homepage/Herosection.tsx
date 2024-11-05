import girleating from "../../assets/girleating.png"
import { Button } from "@/Components/ui/button"

function Herosection() {
    return (
        <div>
            <div className="flex justify-between items-center px-8">
               <div>
               <div>Be The Fastest In Delivering Your Food</div>
                <div>Our job is filling your tummy with delicious food and with fast and free delivery</div>
                <div className="flex items-center gap-4">
                    <Button className="bg-[#34C363] text-white hover:bg-[#2ba352]">Get Started</Button>
                    <Button variant="outline" className="border-[#34C363] text-[#34C363]"  >Watch Video</Button>
                </div>
               </div>
                <div>
                    <img src={girleating} alt="girleating" />
                </div>
            </div>
        </div>
    )
}

export default Herosection