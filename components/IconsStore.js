import { BrandGooglePlay, BrandAppStore } from "./Icons";

export default function IconsStore({ class_add, background }) {
    return (<div className={"flex flex-col sm:flex-row py-4 " + (class_add ? class_add : "")}>
        <a className={"flex flex-row items-center w-44 max-w-44 border rounded-md border-white mb-4 sm:mb-0 py-1 " + (background || "bg-app")} href="#" rel="noreferrer" target="_blank" title="">
            <span className="px-2"><BrandGooglePlay /></span>
            <p className="text-white px text-sm">GET IT ON<br /> <span className="text-white text-lg">Google Play</span></p>
        </a>
        <a className={"flex flex-row items-center w-44 max-w-44 border rounded-md border-white py-1 ml-0 sm:ml-10 " + (background || "bg-app")} href="#" rel="noreferrer" target="_blank" title="">
            <span className="px-2"><BrandAppStore /></span>
            <p className="text-white px text-sm">Download on<br /> <span className="text-white text-lg">App Store</span></p>
        </a>
    </div>)
}