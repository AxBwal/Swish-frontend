import swishlogo from "../../assets/logo.png"
import { Button } from "@/Components/ui/button"

function Herosection() {
    return (
        <div>
            <div className="flex justify-between px-8">
               <div className="flex flex-col gap-5 mt-20 poppins">
                <div className="rounded-full bg-[#34C363]/10 px-4 py-2 text-sm text-[#34C363] w-fit"> More than Faster 🚀</div>
               <div className="text-6xl leading-tight font-bold drop-shadow-lg"><div>Be The Fastest </div><div>In Delivering Your </div><span className="text-[#34C363]">Food</span></div>
                <div className="text-gray-600 text-md font-bold">Our job is filling your tummy with delicious food and with fast and free delivery</div>
                <div className="flex items-center gap-4">
                    <Button className="bg-[#34C363] rounded-full text-md text-white hover:bg-[#2ba352] py-5">Get Started</Button>
                    <Button variant="outline" className="border-[#34C363] text-md rounded-full py-5 text-[#34C363]"  >Watch Video</Button>
                </div>
               </div>
                <div className="flex items-center mt-10">
                    <img width={"500px"} src={swishlogo} alt="girleating" />
                </div>
            </div>
        </div>
    )
}

export default Herosection