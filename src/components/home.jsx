import React from 'react';
import icon from '../images/icon.jpg'
import dayjs from 'dayjs';

class Home extends React.Component {
    render() {
        const age = dayjs().diff(dayjs('1998-03-17'), 'year');
        return (
            <section id="home" class="home-section">
                <div class="container mx-auto">
                    <h2 class='text-4xl text-center font-medium py-10'>Hi! I'm Tiger.</h2>
                        <div  class="grid gap-6 grid-flow-row-dence grid-cols-3 justify-center xl:px-40">
                                <div class="col-span-3  md:col-span-1  sm:col-span-3">
                                    <img src={icon} class="shadow rounded-full max-w-full h-auto align-middle border-none" width="100%" alt="" />
                                </div>
                                <div class="col-span-3  md:col-span-2 sm:col-span-3 ">
                                    はじめまして。{age} 歳、システムエンジニアの岸本 大河です。
                                        このページでは、これまでに手がけた制作物、身につけたスキルなどをまとめています。
                                        私のことを簡単に知っていただければと思い作成したので、どうぞごゆるりとご覧ください。
                                </div>
                        </div>
                </div>
                
            </section>
            
        );
    }
}

export default Home;