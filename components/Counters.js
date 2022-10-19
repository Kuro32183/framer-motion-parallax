import React from 'react';
import CountersUsers from './Counters/Users';
import CountersPlayStore from './Counters/PlayStore';
import CountersCoffee from './Counters/CoffeeIcon';
import CountersAppStore from './Counters/AppStore';


export default function Counters() {
    return (<div className="bg-app">
        <div className="container mx-auto py-12">
            <div className="flex flex-col sm:flex-row sm:flex-wrap w-full">
                <CountersCoffee />
                <CountersPlayStore />
                <CountersAppStore />
                <CountersUsers />
            </div>
        </div>
    </div>);
}