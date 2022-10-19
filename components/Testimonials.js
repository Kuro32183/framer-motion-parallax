import React from 'react';
import Ticker from 'react-ticker'
import { StartIcon } from './Icons';

const items = ["Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "Lorem Ipsum is simply dummy text of the printing and typesetting industry."];


export default function Testimonials() {
    const [move, setMove] = React.useState(true);
    return (<div className="hero-background py-12">
        <div className="container mx-auto">
            <div className="flex flex-col">
                <div className="flex justify-center mb-6">
                    <h2 className="text-white text-2xl md:text-4xl font-bold">Testimonials</h2>
                </div>
            </div>
        </div>
        <Ticker
            move={move}
        >
            {({ index }) => (
                <div
                    onMouseEnter={() => {
                        setMove(false)
                    }}
                    onMouseLeave={() => {
                        setMove(true)
                    }}
                    className="flex flex-row flex-nowrap">
                    {items.map((item, index) => {
                        return (<div key={index} className="text-center mx-4" style={{ width: '30rem' }}>
                            <div className="mx-auto text-center">
                                <span className="inline-block mx-1"><StartIcon color={'#FDE68A'} /></span>
                                <span className="inline-block mx-1"><StartIcon color={'#FDE68A'} /></span>
                                <span className="inline-block mx-1"><StartIcon color={'#FDE68A'} /></span>
                                <span className="inline-block mx-1"><StartIcon color={'#FDE68A'} /></span>
                                <span className="inline-block mx-1"><StartIcon color={'#FDE68A'} /></span>
                            </div>
                            <p className="text-white text-sm">{item}</p>
                        </div>)
                    })}
                </div>
            )}
        </Ticker>
    </div>);
}