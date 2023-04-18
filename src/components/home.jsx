import React from 'react';
import icon from '../images/icon.jpg'


class Home extends React.Component {
    render() {
        return (
            <section id="home" class="home-section">
                <div class="container">
                    <div class="section-heading text-center">
                        <div class="wow bounceInDown" data-wow-delay="0.2s">
                            <h2>Hi! I'm Tiger.</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-8 mx-auto">
                            <div class="row">
                                <div class="col-4">
                                    <img src={icon} class="img-fluid rounded " class="rounded  offset-m profile-img" width="100%" alt="" />
                                </div>
                                <div class="col-8">
                                    <p class="wow bounceInUp" data-wow-delay="0.3s">
                                        <span>はじめまして。<span id="age"></span> 歳、システムエンジニアの岸本 大河です。</span>
                                        <span>このページでは、これまでに手がけた制作物、身につけたスキルなどをまとめています。</span>
                                        <span>私のことを簡単に知っていただければと思い作成したので、どうぞごゆるりとご覧ください。</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Home;