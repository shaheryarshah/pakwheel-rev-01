import Link from "next/link"
export default function Form() {
  return (
    <main className="bg-gray-400 min-h-screen ">
      <div className="text-bold text-3xl uppercase items-center text-center bg-grey-500 min-h-80 ">
        <p>Enter Your Details</p>
        <div className="min-h-80 items-center flex-col justify-center ">
        <form className="flex flex-col justify-center items-center text-center min-h-80">
          <input type="email" placeholder="enter your email address" className="rounded-xl w-2/5 p-2 py-2 text-black " />
          <input type="password" placeholder="enter your password" className="rounded-xl w-2/5 p-2 py-2 mt-10 text-black" />
        </form>
        </div>
        <div className="">
        <button className="p-5 bg-blue-500 rounded-xl">Place your order Now</button>
        <Link  href="http://localhost:3000/thankyou">Click Here</Link>
        
        </div>
      </div>
    </main>
  );
}
