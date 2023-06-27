import Image from "next/image";
import Link from "next/link";

export const Nft = () => {
    const dapps = [{}, {}, {}, {}]
    return (
        <>
            <div className="flex flex-col relative justify-center items-center pb-10 gap-4 h-screen overflow-hidden">
                <h1 className="hero-h1 text-black text-[20px] md:text-[40px] leading-[23.42px] text-center md:leading-[46.84px] w-[320px] md:w-[723px]">OWN YOUR DATA</h1>
                <p className="text-[#212121] font-inter font-[400] text-[15px] md:text-[16px] leading-[20.04px] text-center md:leading-[21.38px] w-[320px] md:w-[600px]">In centralized appstores, users' personal data and app usage habits are often collected and shared with third parties without their consent, this often lead to data misuse. But on Artreus store, Users own their apps or game and the data in it.</p>
                <div className="flex flex-row justify-between items-center gap-3 mt-4">
                    <Link href={'https://dappstore.artreus.io'}>
                        <button className="button-dapp">
                            <Image src="/arrow.svg" alt="arrow" draggable={false} />
                            <p>Open DappStore</p>
                        </button>
                    </Link>

                </div>


                <div className="flex flex-row justify-between z-[999] absolute bottom-0 items-center gap-6 w-screen">
                    {dapps.map((dapp, i) => (
                        <Card key={i}>
                            <div className="flex flex-col justify-center items-start z-[100]">
                                <div className="flex flex-row justify-between items-center">
                                    <Image className="pt-4 w-[80px] h-[80px] object-cover" src="/dapp-logo.svg" draggable={false} alt="" />
                                    <div className="flex flex-col justify-center items-center">
                                        <p className="font-[600] text-[20px] leading-[25px] font-inter w-[91px] text-[#4D4D4D]">Minecraft</p>
                                        <Image draggable={false} className="" src="/rates.svg" alt="" />
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between gap-4 items-center">
                                    <Image draggable={false} className="" src="/dapp-image.svg" alt="" />
                                    <Image draggable={false} className="" src="/dapp-image.svg" alt="" />
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
                {/* <div className="community-NFT-head absolute bottom-0" /> */}
            </div>
        </>
    );
}



const Card = ({ children }: any) => {
    return (
        <>
            <div className="card">
                {children}
            </div>
        </>
    )
}