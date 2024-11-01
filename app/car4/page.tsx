import Link from "next/link"
export default function Car4 (){
    return(
        <div className="bg-blue-50">
        <div>
            <h1 className="text-5xl style-bold flex justify-center mb-20 text-black">
            Audi e-tron 2023
            </h1 >
            </div>
            <div className="flex flex-col items-center ">
            <img className="h-80 w-80"src="https://cache4.pakwheels.com/ad_pictures/1106/audi-e-tron-50-quattro-sportback-230kw-2023-110636921.webp" alt="Load Image" />
            </div>
        
        <div>
            <p className="text-black text-center font-semi bold mt-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/> Atque, repellendus vitae aliquid eligendi velit,<br/> obcaecati beatae debitis expedita quod consectetur ab sapiente distinctio iste repellat.<br/> Nesciunt accusamus numquam debitis provident?</p>
        </div>
        <div className="text-green-500 text-2xl font-bold text-center mt-20">
            <p >
            PKR 30,000,000
            </p>
        </div>
        <div className="flex flex-col items-center">
            <button className="bg-blue-800 p-5 rounded mt-20 mb-20">Make Payment</button>
            <div className="text-black">
       <Link  href="http://localhost:3000/form">Click Here to Make Payment</Link>
       </div>
            </div>

            
        </div>
    )
}