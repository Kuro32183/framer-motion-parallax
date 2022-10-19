import React from 'react';
import dynamic from 'next/dynamic';
import { HeadApp } from '../components/Head';

const HeroDesktop = dynamic(
  () => import('../components/HeroDesktop').then((mod) => {
    if (window.innerWidth >= 768) {
      return mod.HeroDesktop;
    }
    return mod.HeroDesktopHide;
  }),
  { ssr: false }
);

const HeroMobile = dynamic(
  () => import('../components/HeroMobile').then((mod) => {
    if (window.innerWidth < 768) {
      return mod.HeroMobile;
    }
    return mod.HeroMobileHide;
  }),
  { ssr: false }
);

const FunctionsDesktop = dynamic(
  () => import('../components/FunctionsDesktop').then((mod) => {
    if (window.innerWidth >= 768) {
      return mod.FunctionsDesktop;
    }
    return mod.FunctionsDesktopHide;
  }),
  { ssr: false }
);



const HomeFunzioniMobile = dynamic(
  () => import('../components/FunctionsMobile').then((mod) => {
    if (window.innerWidth < 768) {
      return mod.HomeFunzioniMobile;
    }
    return mod.HomeFunzioniMobileHide;
  }),
  { ssr: false }
);

import Presentazione from '../components/SectionVideo';
import Counters from '../components/Counters';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Testimonials from '../components/Testimonials';



export default function HomePage2() {

  return (
    <main>
      {/* <HeadApp
        url={"/"}
        title={"Home"}
        description={"Home"}
      /> */}
      <div className="bg-app min-w-screen min-h-screen hidden md:block">
        <HeroDesktop />
      </div>
      <div className="bg-app block md:hidden">
        <HeroMobile />
      </div>
      <div className="bg-app min-w-screen min-h-screen hidden md:block">
        <FunctionsDesktop />
      </div>
      <div className="bg-white min-w-screen min-h-screen block md:hidden">
        <HomeFunzioniMobile />
      </div>
      {/* <Presentazione /> */}
      {/* <Counters /> */}
      {/* <Section1 /> */}
      {/* <Testimonials /> */}
      {/* <Section2 /> */}
    </main>
  )
}
