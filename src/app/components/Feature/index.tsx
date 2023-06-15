// import strandleft fro


export const Features = () => {
    return (
        <>
            <div className="flex flex-col py-[30px] justify-center overflow-hidden items-center w-full h-[160vh]">
                <div className="features-card flex flex-col justify-center items-center md:items-start gap-20 px-20">
                    <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center md:items-start">
                        <div className="text-black flex flex-col justify-center items-center gap-6">
                            <h1 className="hero-h1 text-black text-[20px] leading-[23.42px] text-center md:text-[40px] md:leading-[46.84px] w-[377px] uppercase md:w-[536px]">Discover a New Paradigm in App Distribution</h1>
                            <p className="font-[400] text-[15px] leading-[20.04px] md:text-[16px] text-center md:leading-[21.38px] font-inter w-[334px] md:w-[464px]">Welcome to our decentralized appstore, where innovation meets freedom. We are revolutionizing the way applications are distributed, empowering developers and users with a transparent, secure, and inclusive platform. Say goodbye to centralized control and welcome a new era of decentralized app discovery and distribution..</p>
                            <div>
                                <div className="flex flex-row justify-between items-center">
                                    <img className="mt-2" src="/tick.svg" alt="tick" draggable={false} />
                                    <p className="font-[400] text-[18px] leading-[21.78px] uppercase font-inter w-[241px] md:w-[464px]">fully autonomous system</p>
                                </div>
                                <div className="flex flex-row justify-between items-center">
                                    <img className="mt-2" src="/tick.svg" alt="tick" draggable={false} />
                                    <p className="font-[400] text-[18px] leading-[21.78px] uppercase font-inter w-[241px] md:w-[464px]">SECURITY & PRIVACY</p>
                                </div>
                                <div className="flex flex-row justify-between items-center">
                                    <img className="mt-2" src="/tick.svg" alt="tick" draggable={false} />
                                    <p className="font-[400] text-[18px] leading-[21.78px] uppercase font-inter w-[241px] md:w-[464px]">NO POP-UP ADS</p>
                                </div>
                                <div className="flex flex-row justify-between items-center">
                                    <img className="mt-2" src="/tick.svg" alt="tick" draggable={false} />
                                    <p className="font-[400] text-[18px] leading-[21.78px] uppercase font-inter w-[241px] md:w-[464px]">storage in the blockchain</p>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-[408px] md:h-[408px] w-[232.11px] h-[232.1px] flex flex-col justify-center items-center border-2 border-[#7766EF] rounded-full">
                            <img className="" src="/globe.svg" alt="globe" draggable={false} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 place-items-center w-full rounded-full">
                        <div className="flex flex-col justify-center items-center gap-4 text-black">
                            <img className="w-[143px] h-[144.23px]" src="/dapp.svg" alt="dapp" draggable={false} />
                            <p className="font-[700] text-[20px] text-center leading-[24.2px] uppercase font-inter w-[255px]">decentralized Applications</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4 text-black">
                            <img className="w-[143px] h-[144.23px]" src="/secured.svg" alt="secured" draggable={false} />
                            <p className="font-[700] text-[20px] text-center leading-[24.2px] uppercase font-inter w-[255px]">BLOCKCHAIN secured integrations</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4 text-black">
                            <img className="w-[143px] h-[144.23px]" src="/dapp.svg" alt="dapp" draggable={false} />
                            <p className="font-[700] text-[20px] text-center leading-[24.2px] uppercase font-inter w-[255px]">Fully <br />
                                transparent</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}