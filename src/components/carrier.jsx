import React from 'react';

class Carrier extends React.Component {
    render() {
        return (
            <section id="carrier" class="home-section parallax text-center" data-stellar-background-ratio="0.5">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12 col-lg-offset-2">
                            <div class="section-heading text-center text-white">
                                <h2 class="wow bounceInDown " data-wow-delay="0.3s">Carrier</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="col-md-12 chronology">
                        <table class="table table-hover">
                            <tbody>
                                <tr>
                                    <div class="col-3 col-sm-3 col-md-3">
                                        <th scope="row">2020~</th>
                                    </div>
                                    <td>
                                        <a href="https://www.synergy-marketing.co.jp" target="_blank">シナジーマーケティング株式会社</a>
                                    </td>
                                    <td>CRM プラットフォーム Synergy! のバックエンドエンジニア</td>
                                </tr>
                                <tr>
                                    <th scope="row">2019~2020</th>
                                    <td>
                                        <a href="https://neton.co.jp" target="_blank">
                                            neton株式会社 長期インターン
                                        </a>
                                    </td>
                                    <td>採用Webマーケティングバックエンドエンジニア</td>
                                </tr>
                                <tr>
                                    <th scope="row">2016~2020</th>
                                    <td>
                                        <a href="https://www.konan-u.ac.jp/faculty/ii/ii/" target="_blank">
                                            甲南大知能学情報学部
                                        </a>
                                    </td>
                                    <td>
                                        数学、システム、制御工学、情報工学など幅広い学問を学びました。
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        );
    }
}

export default Carrier;