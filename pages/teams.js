import React from 'react';
import { HeadApp } from '../components/Head';

export default function AboutUsPage() {
    return <div className="w-screen pt-20">
        <div className="container mx-auto pb-12">
            <HeadApp
                url={"/teams"}
                title={"Teams"}
                description={"Teams"}
            />
            <div className="flex flex-col">
                <div className="flex w-full justify-center items-center">
                    <h2 className="text-black text-3xl sm:text-5xl pt-2 mb-8 font-bold">Teams</h2>
                </div>
                <div className="flex flex-row flex-wrap">
                    <div className="flex flex-col px-0 md:px-4 w-1/2 md:w-1/3 lg:w-1/5 justify-center items-center">
                        <img src={"/images/icon-person.jpeg"} alt="" className="p-2 object-contain" style={{ width: 250, height: 250 }} />
                        <p className="text-app text-base text-center font-bold">User 1</p>
                        <p className="text-black text-sm text-center">Developer</p>
                    </div>
                    <div className="flex flex-col px-0 md:px-4 w-1/2 md:w-1/3 lg:w-1/5 justify-center items-center">
                        <img src={"/images/icon-person.jpeg"} alt="" className="p-2 object-contain" style={{ width: 250, height: 250 }} />
                        <p className="text-app text-base text-center font-bold">User 1</p>
                        <p className="text-black text-sm text-center">Developer</p>
                    </div>
                    <div className="flex flex-col px-0 md:px-4 w-1/2 md:w-1/3 lg:w-1/5 justify-center items-center">
                        <img src={"/images/icon-person.jpeg"} alt="" className="p-2 object-contain" style={{ width: 250, height: 250 }} />
                        <p className="text-app text-base text-center font-bold">User 3</p>
                        <p className="text-black text-sm text-center">Developer</p>
                    </div>
                    <div className="flex flex-col px-0 md:px-4 w-1/2 md:w-1/3 lg:w-1/5 justify-center items-center">
                        <img src={"/images/icon-person.jpeg"} alt="" className="p-2 object-contain" style={{ width: 250, height: 250 }} />
                        <p className="text-app text-base text-center font-bold">User 4</p>
                        <p className="text-black text-sm text-center">Developer</p>
                    </div>
                    <div className="flex flex-col px-0 md:px-4 w-1/2 md:w-1/3 lg:w-1/5 justify-center items-center">
                        <img src={"/images/icon-person.jpeg"} alt="" className="p-2 object-contain" style={{ width: 250, height: 250 }} />
                        <p className="text-app text-base text-center font-bold">User 5</p>
                        <p className="text-black text-sm text-center">Developer</p>
                    </div>
                </div>
                <div className="flex flex-col flex-wrap my-4">
                    <p className="mt-2 text-base text-gray-txt leading-loose">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <p className="mt-2 text-base text-gray-txt leading-loose">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                    <p className="mt-2 text-base text-gray-txt leading-loose">Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                    <p className="mt-2 text-base text-gray-txt leading-loose">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                    <p className="mt-2 text-base text-gray-txt leading-loose">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <p className="mt-2 text-base text-gray-txt leading-loose">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                    <p className="mt-2 text-base text-gray-txt leading-loose">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <p className="mt-2 text-base text-gray-txt leading-loose">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                    <p className="mt-2 text-base text-gray-txt leading-loose">Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                    <p className="mt-2 text-base text-gray-txt leading-loose">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                </div>
            </div>
        </div>
    </div>
}