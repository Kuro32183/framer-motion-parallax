import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FacebookIcon, TwitterIcon, InstagramIcon, MenuIcon } from './Icons'

export default function Navigation() {
    const router = useRouter()
    const [viewMenu, setViewMenu] = React.useState(false);
    return (
        <nav className="fixed top-0 left-0 w-full h-16 z-50 border-b bg-white bg-clip-padding bg-opacity-60 backdrop-filter backdrop-blur-md border-gray-200">
            <div className="container mx-auto py-2">
                <div className="flex md:hidden flex-row flex-wrap">
                    <div className="flex relative justify-center items-center w-full text-center">
                        <Link href="/" prefetch={false}><a href="/"><img src="/images/logo.png" alt="" className="w-40 h-12 object-contain" /></a></Link>
                        <div className="absolute top-1 right-2 w-10 h-10 bg-white rounded-full">
                            <div className="flex relative justify-center items-center w-full h-full text-center" onClick={() => {
                                setViewMenu(!viewMenu)
                            }}>
                                <MenuIcon color={'#00adef'} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex flex-row flex-wrap">
                    <div className="flex flex-row flex-1 justify-center items-center">
                        <div className="text-left px-4">
                            <Link href="/" prefetch={false}><a href="/"><img src="/images/logo.png" alt="" className="w-40 h-12 object-contain" /></a></Link>
                        </div>
                        <div className="flex flex-row flex-1 justify-center items-center">
                            <div className="mx-3">
                                <Link href="/" prefetch={false}><a onClick={() => { setViewMenu(false) }} className={(router.asPath == '/' ? "text-app font-bold" : "text-black") + " hover:text-app"} title="Misto">Misto</a></Link>
                            </div>
                            <div className="mx-3">
                                <Link href="/teams" prefetch={false}><a onClick={() => { setViewMenu(false) }} className={(router.asPath == '/teams' ? "text-app font-bold" : "text-black") + " hover:text-app"} title="Teams">Teams</a></Link>
                            </div>
                            <div className="mx-3">
                                <Link href="/about-us" prefetch={false}><a onClick={() => { setViewMenu(false) }} className={(router.asPath == '/about-us' ? "text-app font-bold" : "text-black") + " hover:text-app"} title="About Us">About Us</a></Link>
                            </div>
                        </div>
                        <div className="hidden lg:flex flex-row">
                            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" title="" className=" p-2 mr-2"><FacebookIcon color={'#00adef'} /></a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" title="" className="p-2 mx-2"><TwitterIcon color={'#00adef'} /></a>
                            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" title="" className="p-2 mx-2"><InstagramIcon color={'#00adef'} /></a>
                        </div>
                    </div>
                </div>
            </div>
            {viewMenu && <div className="fixed md:hidden top-16 left-0 w-full h-auto z-50 border-b bg-white">
                <div className="flex flex-col flex-1 justify-center items-center mt-4">
                    <div className="my-2">
                        <Link href="/" prefetch={false}><a onClick={() => { setViewMenu(false) }} className={(router.asPath == '/' ? "text-app font-bold" : "text-black") + " hover:text-app"} title="Misto">Misto</a></Link>
                    </div>
                    <div className="my-2">
                        <Link href="/teams" prefetch={false}><a onClick={() => { setViewMenu(false) }} className={(router.asPath == '/teams' ? "text-app font-bold" : "text-black") + " hover:text-app"} title="Teams">Teams</a></Link>
                    </div>
                    <div className="my-2">
                        <Link href="/about-use" prefetch={false}><a onClick={() => { setViewMenu(false) }} className={(router.asPath == '/about-us' ? "text-app font-bold" : "text-black") + " hover:text-app"} title="About Us">About Us</a></Link>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center py-4">
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer" title="" className=" p-2 mr-2"><FacebookIcon color={'#00adef'} /></a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" title="" className="p-2 mx-2"><TwitterIcon color={'#00adef'} /></a>
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer" title="" className="p-2 mx-2"><InstagramIcon color={'#00adef'} /></a>
                </div>
            </div>}
        </nav>
    );
}