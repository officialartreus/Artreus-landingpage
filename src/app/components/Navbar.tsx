"use client";
import Link from "next/link";
import { useState } from "react"

export const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="md:px-10 px-5 py-5 md:py-10 bg-transparent flex flex-row justify-between items-center">
                <img src="/logo.png" className="w-[121px] md:w-[227px] h-[26px] md:h-[35px] object-contain" alt="logo" draggable={false} />



                <ul className="hidden md:flex flex-row justify-between items-center gap-3 text-[#252525]">
                    <Link href={'https://app.gitbook.com/o/TPNC1fxaYps1NzM6lm4k/s/v2BE4xGlOcPluHha0FJF/market/sales '}>
                        <li className="text-[18px] leading-[21.78px] font-lexend">Sales</li>
                    </Link>
                    <Link href={'https://app.gitbook.com/o/TPNC1fxaYps1NzM6lm4k/s/v2BE4xGlOcPluHha0FJF/market/hackathon '}>
                        <li className="text-[18px] leading-[21.78px]">Hackathon</li>
                    </Link>
                    <Link href={''}>
                        <li className="text-[18px] leading-[21.78px]">Schedule A Call</li>
                    </Link>
                </ul>


                <div className="hidden md:block">
                    <Link href={'https://dappstore.artreus.io'}>
                        <button className="button-dapp">
                            <img src="/arrow.svg" alt="arrow" draggable={false} />
                            <p>Open DappStore</p>
                        </button>
                    </Link>
                </div>

                <div className="block md:hidden">
                    <button onClick={() => setOpen(!open)} className="">
                        <img src="/bar.svg" alt="bar" draggable={false} />
                    </button>
                </div>
            </div>
            {open && <div className="w-screen absolute top-0 h-[663px] px-3 py-4 block md:hidden z-[9999] bg-[#EBF0FAF2]">
                <div className="flex flex-row justify-between items-center md:hidden">
                    <img src="/logo.png" className="w-[121px] md:w-[227px] h-[26px] md:h-[35px] object-contain" alt="logo" draggable={false} />

                    <button onClick={() => setOpen(!open)} className="">
                        <img src="/cancel.svg" alt="cancel" draggable={false} />
                    </button>
                </div>
                <ul className="flex flex-col items-start gap-4 mt-10">
                    <li className="font-lexend font-[500] text-[20px] leading-[25px] text-black"><a href="/marketplace">Marketplace</a></li>
                    <li className="font-lexend font-[500] text-[20px] leading-[25px] text-black"><a href="/dapp">DappStore</a></li>
                    <li className="font-lexend font-[500] text-[20px] leading-[25px] text-black"><a href="/developers">Developers</a></li>
                </ul>
            </div>
            }
        </>
    )
}