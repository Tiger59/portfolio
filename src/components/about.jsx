import React from 'react';
import img1 from '../images/img1.jpg'

class About extends React.Component {
    render() {
        return (
            <section id="about" class="home-section">
                <div class="container">
                    <div class="section-heading text-center ">
                        <h2 class="wow bounceInDown " data-wow-delay="0.3s">About me</h2>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-6 col-xl-6">
                        <img src={img1} class="img-fluid rounded "  alt=""/>
                        </div>
                        <div class="col-md-6">
                            <p>
                                神戸出身のエンジニア。大学で知能情報学を学んだのち現在は、シナジーマーケティング株式会社でエンジニアをしています。
                                主に集客、顧客情報の統合、メッセージング、分析まで、CRMのあらゆる活動を支えるシステム "Synergy!" のバックエンドを開発しています。
                            </p>
                            <p>
                                趣味は<strong>プログラミング</strong>や<strong>技術系のイベント</strong>に参加することです。<br />
                                プログラミングは普段KotlinとJava,Pythonなどをよく書いています。技術面では、最近はK8sやAWSなどを勉強しています。
                            </p>
                        </div>
                    </div>
                </div>
            </section >
        );
    }
}

export default About;
