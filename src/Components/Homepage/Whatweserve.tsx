import serv1 from "../../assets/serve/serv1.png"
import serv2 from "../../assets/serve/serv2.png"
import serv3 from "../../assets/serve/serv3.png"

function Whatweserve() {
    return (
        <div className="mt-20">
            <div>
                <div className="text-center text-3xl  text-[#34C363] font-semibold">What we Serve</div>
                <div  className="text-center text-gray-600 font-semibold text-xl">Your Favorite Food Delivery Partner</div>
                <div className="flex justify-evenly items-center">
                    <div>
                        <img src={serv1} alt="serv1" />
                        <div className="text-[#34C363] text-2xl text-center font-bold mt-7 tracking-tighter">Easy To Order</div>
                        <div className="text-gray-600 font-semibold text-center">You only need a few steps in</div>
                        <div className="text-gray-600 font-semibold text-center"> ordering food</div>
                    </div>
                    <div>
                        <img src={serv2} alt="serv2" />
                        <div className="text-[#34C363] text-2xl text-center  font-bold tracking-tighter">Fastest Delivery</div>
                        <div className="text-gray-600 font-semibold text-center">Delivery that is always ontime</div>
                        <div className="text-gray-600 font-semibold text-center">even faster</div>
                    </div>
                    <div>
                        <img src={serv3} alt="serv3" />
                        <div className="text-[#34C363] text-2xl text-center font-bold tracking-tighter">Best Quality</div>
                        <div className="text-gray-600 font-semibold text-center">Not only fast for us quality is also</div>
                        <div className="text-gray-600 font-semibold text-center">number one</div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Whatweserve