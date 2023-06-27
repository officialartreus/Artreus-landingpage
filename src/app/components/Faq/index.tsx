"use client"

import { useState } from "react"

export const Faqs = () => {


    const faqs = [
        {
            q: "What is a decentralized appstore",
            a: "A decentralized appstore is a platform built on blockchain technology that enables the distribution and discovery of decentralized applications(DApps).Unlike traditional app marketplaces, it operates without a central authority, providing transparency, security, and user control."
        },

        {
            q: 'How does limiting the supply of apps work',
            a: "In our decentralized appstore, each listed app is assigned a limited supply.This means there are a fixed number of digital tokens representing the app available for ownership.By introducing limited supply, we create scarcity, exclusivity, and value for each app, enhancing their desirability and uniqueness within the ecosystem."
        },

        {
            q: "What are the benefits of limiting supply in the appstore",
            a: `Limiting supply brings several benefits: <br/>
            - Enhanced value and exclusivity for app owners. 
            - Incentives for developers to create high - quality, innovative apps. 
            - Increased user engagement and excitement due to the scarcity 
            - driven model. 
            - Reduction of fraudulent activities, as each app token can be securely tracked on the blockchain.`
        },

        {
            q: "How does the appstore solve the double spending problem",
            a: "Double spending is eliminated through the digitalization of apps on the blockchain. Each app listed on our appstore is tokenized, meaning it is represented by a unique digital asset or token.These tokens cannot be duplicated or spent multiple times, ensuring that each app can only be owned by one user at a time. The immutability and transparency of the blockchain prevent any fraudulent attempts to spend the same app token multiple times."
        },

        {
            q: "What is the role of blockchain in the appstore",
            a: "Blockchain technology forms the foundation of our decentralized appstore. It provides transparency, security, and decentralized verification of transactions. The blockchain's distributed ledger ensures that every app token transfer is recorded and cannot be altered, establishing trust and integrity within the ecosystem."
        },

        {
            q: "How can developers benefit from the decentralized appstore",
            a: `Developers gain numerous advantages from our decentralized appstore, including: 
            - Access to a global audience without the limitations of traditional app marketplaces. 
            - Fair and transparent revenue 
            - sharing mechanisms through smart contracts. 
            - Opportunities to showcase unique and innovative apps, attracting users who appreciate rarity and exclusivity.`
        },

        {
            q: "What are the advantages for users in the decentralized appstore",
            a: `Users benefit from the decentralized appstore in the following ways: 
            - Increased transparency and trust in app transactions and ownership. 
            - Access to a wide range of innovative DApps from around the world. 
            - Ownership of exclusive digital assets with limited supply, enhancing their value and appeal.`
        },

        {
            q: "How can I get involved in the decentralized appstore",
            a: "To get involved, you can sign up for updates and stay informed about the development progress of our decentralized appstore.Once launched, you can join the community, discover and download unique DApps, and participate in decentralized governance to shape the future of the appstore."
        },

        {
            q: "Is the decentralized appstore already available",
            a: "Our decentralized appstore is currently under development.Sign up for updates to be notified about its launch and be among the first to experience the power of scarcity and secure app distribution."
        },

        {
            q: "How can I contact the appstore team for further inquiries",
            a: `For any further inquiries or information, you can reach out to our team through the contact page on our website. We are excited to hear from you and address any questions you may have about our decentralized appstore.`
        }
    ]

    return (
        <>
            <div className="faq py-[35px] flex flex-col justify-center items-center relative overflow-hidden">
                <p className="text-[#ff] font-lexend font-[400] text-[20px] md:text-[40px] text-center leading-[23.42px] md:leading-[46.84px]">FREQUENTLY ASKED QUESTIONS</p>

                <img src="/Vectary.svg" draggable={false} className="absolute -bottom-1 md:bottom-3 -left-[7px] w-[143px] h-[122px] md:w-[351px] md:h-[301px]" />


                <div className="mt-12 flex flex-col justify-center items-center gap-4">
                    {faqs.map((faq, i) => {

                        const [show, setshow] = useState('hidden')

                        return <div key={i} className="bg-[#FACFFF] p-[10px] rounded-[8px] w-[450px] md:w-[698px]  justify-center md:justify-between items-center">
                            <div className="flex  md:flex-row justify-between items-center">
                                <p className="text-[#000] font-opensans font-[400] text-[16px] md:text-[20px] leading-[21.79px] md:leading-[27.24px]">{faq.q}</p>

                                <button className="flex" onClick={() => {
                                    setshow(prev => prev == 'hidden' ? 'flex' : 'hidden')
                                }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </button>
                            </div>
                            <p className={`${show} mt-[8px]`}>{faq.a}</p>

                        </div>
                    })}
                </div>
            </div>
        </>
    )
}