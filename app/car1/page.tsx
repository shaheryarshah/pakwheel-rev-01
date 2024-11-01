import Link from "next/link"
export default function Car1 (){
    return(
        <div className="bg-blue-50">
        <div>
            <h1 className="text-5xl style-bold flex justify-center mb-20 text-black">
            Mercedes Benz E Class 2011
            </h1 >
            </div>
            <div className="flex flex-col items-center ">
            <img className="h-80 w-80"src="https://cache3.pakwheels.com/ad_pictures/1064/mercedes-benz-e-class-e-250-2011-106415955.webp" alt="Load Image" />
            </div>
        
        <div>
            <p className="text-black text-center font-semi bold mt-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/> Atque, repellendus vitae aliquid eligendi velit,<br/> obcaecati beatae debitis expedita quod consectetur ab sapiente distinctio iste repellat.<br/> Nesciunt accusamus numquam debitis provident?</p>
        </div>
        <div className="text-green-500 text-2xl font-bold text-center mt-20">
            <p >
            PKR 13,200,000
            </p>
        </div>
        <div className="flex flex-col items-center" >
       <button   className="bg-blue-800 rounded mt-20 p-5 " >Make Payment</button>
       <div className="text-black">
       <Link  href="http://localhost:3000/form">Click Here to Make Payment</Link>
       </div>
       </div>
            
        </div>
    )
}