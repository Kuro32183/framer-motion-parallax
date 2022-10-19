import React from 'react';
import IconsStore from './IconsStore';

export function HeroMobileHide() {
    return <React.Fragment />
}

export function HeroMobile() {
    return (
        <div className="w-screen pt-20 hero-background z-10">
            <div className="flex flex-col px-4">
                <div className="flex flex-col w-full justify-center items-start py-12">
                    <h1 className="text-white text-4xl md:text-5xl font-bold">Misto App</h1>
                    <p className="text-white text-base py-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <p className="text-white text-base py-2">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <p className="text-white text-base py-2">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <IconsStore class_add="" background={"transparent"} />
                </div>
                <div className="flex flex-col w-full justify-center items-center mb-4">
                    <picture>
                        <source srcSet={"/images/phone.webp"} type="image/webp" />
                        <img src="/images/phone.png" alt="" className="object-contain" style={{ width: 400, height: 500 }} />
                    </picture>
                </div>
            </div>
        </div>
    );
}