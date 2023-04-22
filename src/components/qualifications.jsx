import React from 'react';

class Qualifications extends React.Component {
    render() {
        return (
            <section id="qualifications" class="home-section parallax text-center" data-stellar-background-ratio="0.5">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12 col-lg-offset-2">
                            <div class="section-heading text-center">
                                    <div class>
                                        <h2 class="text-4xl text-center font-semibold py-2">Qualifications</h2>
                                    </div>
                                    <p><strong>これまでに取得した資格です。</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="col-md-12 chronology">
                        <table class="table table-hover">
                            <tbody>
                                <tr>
                                    <th scope="row">2020</th>
                                    <td>ITパスポート</td>
                                </tr>
                                <tr>
                                    <th scope="row">2019</th>
                                    <td>
                                        Python3 エンジニア認定基礎試験
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

export default Qualifications;