
import Link from "next/link"

export const Footer = () => {
    return (
        <>
            <div className="bg-white flex flex-col gap-20 w-full h-[1011px] md:h-[579px] px-5 md:px-20 py-20">
                <img src="/logo.png" className="w-[227px] h-[35px] object-contain" alt="logo" draggable={false} />


                <div className="flex flex-col md:flex-row gap-14 md:gap-40 w-full justify-start md:justify-between items-start md:items-center">
                    <div>
                        <div className="flex flex-col gap-4 mt-2 md:mt-10">
                            <p className="font-[600] text-[16px] leading-[20px] font-inter w-[306px] text-[#4D4D4D]">Get the latest Artreus updates</p>
                            <div className="w-[335px] h-[44px] bg-[#2121211A] rounded-[12px] flex flex-row items-center">
                                <input className="bg-transparent w-fit text-black h-[44px] px-4 focus:outline-none" placeholder="Your email" />

                                <button className="bg-[#6039CF] h-[36px] rounded-[8px] flex flex-row text-white items-center p-[8px_10px_8px_10px]">
                                    <p>I'm in</p>
                                    <img src="/arrow-right.svg" alt="arrow-right" draggable={false} />
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 mt-5 md:mt-10">
                            <p className="font-[600] text-[16px] leading-[20px] font-inter w-[302px] text-[#4D4D4D]">Join Artreus Community</p>
                            <div className="w-[335px] h-[44px] flex flex-row gap-4 items-center">
                                <Link href={'https://discord.gg/C4F6vqsy'}>
                                    <img src="/discord.svg" alt="discord" draggable={false} />
                                </Link>
                                <Link href={'https://www.youtube.com/@ArtreusStore'}>
                                    <img src="/youtube.svg" alt="youtube" draggable={false} />
                                </Link>
                                <Link href={'https://twitter.com/OfficialArtreus'}>
                                    <img src="/twitter.svg" alt="twitter" draggable={false} />
                                </Link>
                                <Link href={'https://t.me/official_artreus'}>
                                    <img src="/telegram.svg" alt="telegram" draggable={false} />
                                </Link>
                            </div>
                        </div>
                    </div>





                    <div className='mt-[17px]  flex space-x-[66px]'>
                        <div className=''>
                            <p className="font-semibold text-[24px] pb-[16px]">Dapp Store</p>
                            <p className="font-medium  text-[16px] py-[13px]">Apps</p>
                            <p className="font-medium  text-[16px] py-[13px]">Games</p>
                            <Link target='_blank' href={'https://medium.com/@officialartreus'}>
                                <p className="font-medium  text-[16px] py-[13px]">Blog</p>
                            </Link>
                            <Link target='_blank' href={'https://www.youtube.com/@ArtreusStore'}>
                                <p className="font-medium  text-[16px] py-[13px]">How It Works</p>
                            </Link>
                            <Link target='_blank' href={'https://discord.gg/C4F6vqsy'}>
                                <p className="font-medium  text-[16px] py-[13px]">Help Center</p>
                            </Link>

                        </div>

                        <div className='space-y-[26px]'>
                            <p className="font-semibold text-[24px]">Creators</p>
                            <p className="font-medium  text-[16px]">Quick start</p>
                            <p className="font-medium  text-[16px]">JS SDK</p>
                            <p className="font-medium  text-[16px]">UI Kit</p>
                            <p className="font-medium  text-[16px]">The Graph</p>
                            <p className="font-medium  text-[16px]">Resources</p>

                        </div>

                    </div>

                </div>


                {/*  */}
                {/*  */}
                <div className="flex flex-col items-center gap-2">
                    <img src="/break.svg" alt="break" />
                    <div className="flex flex-row items-center gap-8">
                        <p className="font-[400] text-[12px] leading-[15px] font-inter text-[#5D50C6]">Copyright 2022 Artreus.</p>
                        <p className="font-[400] text-[12px] leading-[15px] font-inter text-[#5D50C6]">All right reserved</p>
                        <p className="font-[400] text-[12px] leading-[15px] font-inter text-[#5D50C6]">Terms</p>
                        <p className="font-[400] text-[12px] leading-[15px] font-inter text-[#5D50C6]">Privacy policy</p>
                    </div>
                </div>
            </div>
        </>
    )
}