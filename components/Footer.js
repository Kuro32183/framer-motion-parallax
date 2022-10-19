import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FacebookIcon, TwitterIcon, InstagramIcon } from './Icons'
import IconsStore from './IconsStore';

const dt = new Date();
const year = dt.getFullYear();

export default function Footer() {
    return (
        <footer className="w-full py-4 bg-app">
            <div className="container mx-auto">
                <div className="flex flex-col w-full">
                    <div className="flex flex-col flex-wrap py-4 justify-center items-center">
                        <h3 className="text-white text-3xl sm:text-5xl mb-4 text-center font-bold">Download App</h3>
                        <h4 className="text-white text-xl sm:text-2xl mb-4 text-center font-bold">Neque porro quisquam est qui dolorem ipsum</h4>
                        <IconsStore class_add="" background={"transparent"} />
                    </div>
                    <div className="flex flex-row flex-wrap py-4">
                        <div className="flex flex-col w-full justify-center items-center lg:w-1/4 lg:justify-start lg:items-start p-4">
                            <div className="text-left">
                                <img src="/images/logo.png" alt="" className="w-52 h-16 object-contain" />
                            </div>
                            <div className="mt-6 pr-0 sm:pr-4">
                                <p className="text-white text-base  text-center lg:text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                        </div>
                        <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                            <h1 className="text-white text-base uppercase mb-4 font-bold">App</h1>
                            <ul>
                                <li className="text-white text-base py-1"><Link href="/" prefetch={false}><a>Misto</a></Link></li>
                                <li className="text-white text-base py-1"><Link href="#" prefetch={false}><a>Trusted</a></Link></li>
                                <li className="text-white text-base py-1"><Link href="#" prefetch={false}><a>About Us</a></Link></li>
                                <li className="text-white text-base py-1"><Link href="#" prefetch={false}><a>Faq</a></Link></li>
                            </ul>
                        </div>
                        <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                            <h1 className="text-white text-base uppercase mb-4 font-bold">Legal</h1>
                            <ul>
                                <li className="text-white text-base py-1"><a href="#" target="_blank" rel="noreferrer" title="">Privacy</a></li>
                                <li className="text-white text-base py-1"><a href="#" target="_blank" rel="noreferrer" title="">Cookie</a></li>
                            </ul>
                            <h1 className="text-white text-base uppercase my-4 font-bold">App</h1>
                            <ul>
                                <li className="text-white text-base py-1"><a href="#" target="_blank" rel="noreferrer" title="">Link 1</a></li>
                                <li className="text-white text-base py-1"><a href="#" target="_blank" rel="noreferrer" title="">Link 2</a></li>
                            </ul>
                        </div>
                        <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                            <div className="flex flex-row">
                                <motion.a
                                    initial={{ y: 0 }}
                                    whileHover={{ y: -10 }}
                                    transition={{ duration: 0.5 }}
                                    href="https://www.facebook.com" target="_blank" rel="noreferrer" title="Facebook Page" className="pr-2 py-2 mr-2"><FacebookIcon /></motion.a>
                                <motion.a
                                    initial={{ y: 0 }}
                                    whileHover={{ y: -10 }}
                                    transition={{ duration: 0.5 }}
                                    href="https://www.twitter.com" target="_blank" rel="noreferrer" title="Twitter Page" className="p-2 mx-2"><TwitterIcon /></motion.a>
                                <motion.a
                                    initial={{ y: 0 }}
                                    whileHover={{ y: -10 }}
                                    transition={{ duration: 0.5 }}
                                    href="https://www.instagram.com" target="_blank" rel="noreferrer" title="Instagram Page" className="p-2 mx-2"><InstagramIcon /></motion.a>
                            </div>
                            <div>
                                <p className="text-white text-base py-1">info@website.app</p>
                                <p className="text-white text-base py-1">tech@website.app</p>
                                <p className="text-white text-base py-1">+40 1241251212</p>
                            </div>
                        </div>
                    </div>
                    <div className="px-4">
                        <div className="border-t border-white">
                            <p className="text-white text-base pt-4">Copyright © {year}</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}