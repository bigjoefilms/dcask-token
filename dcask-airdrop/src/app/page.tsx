import Icon from "@/assets/icon";
import Icon2 from "@/assets/icon2";
import Logo from "@/assets/logo";
import Image from "next/image";

export default function Home() {
  return (
   <main className=" flex lg:flex-row flex-col h-[100vh]">
   

     
   
    <div className="flex-1 flex-col flex  h-[100vh] border relative">
    <div className="p-[25px]"> <Logo/></div>
   
    <div className="flex items-start justify-center flex-col px-[50px] ">
      <h1 className="text-[36px] font-semibold pt-[50px]">Claim your </h1>
      <p className="text-[36px] font-semibold ">Digicask Testnet faucet tokens</p>
      <div></div>
    </div>
    <div className="absolute bottom-0 right-6 lg:flex hidden">
   
                                        <Image
                                            src="/coins.png"
                                           
                                            width={505}
                                            height={505}
                                            alt="coins"
                                            priority
                                            className="ml-1"
                                        />
  

    </div>


    </div>
    <div className="flex-1 flex-col flex justify-center items-center h-[100%] relative border w-[100%]">
      <div>
      <h1 className="text-[14px] my-[10px] ">Send to </h1>

      <input className=" w-full max-w-[545px] h-[45px] border rounded-[8px] px-[10px] py-[5px] text-[14px] item" placeholder="Wallet address"/>
      <p className="text-[12px] text-[#777575] my-[5px]">Limit one request per pairing of stablecoin and test network daily</p>

      <button className="w-full max-w-[545px] h-[45px] justify-center items-center text-[14px] rounded-[8px] bg-[#008080] my-[15px] hover:opacity-85 text-[#fff]">Claim 50 $dcask </button>
      
      <p className="items-center justify-center flex text-[14px] text-[#777575] my-[10px]"> Need help using this faucet? <span className="text-[14px] text-[#008080] cursor-pointer px-[5px] ">  HELP CENTER</span> </p>
      <div className="absolute bottom-10 right-20">

      
      <div className="items-center justify-center gap-3 flex  text-[12px] text-[#777575]">Join our community <div className="flex items-center gap-3 justify-center"><Icon/><Icon2/></div></div>
      </div>


      </div>
    </div>
    
   </main>
  );
}
