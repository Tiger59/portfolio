import React from 'react';

class Skills extends React.Component {
  render() {
    return (
        <section id="skills" class="home-section parallax text-center" data-stellar-background-ratio="0.5">
        <div class="container">
          <div class="row">
            <div class="col-xl-12 col-lg-offset-2">
              <div class="section-heading text-center text-white">
                <h2 class="wow bounceInDown " data-wow-delay="0.3s">Skills</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="card">
            <h3><i class="fa-solid fa-desktop"></i>プログラミング言語</h3>
          </div>
          <div class="row">
            <div class="card col-12 col-md-6">
              <h3><i class="fa-solid fa-desktop"></i>バックエンド</h3>
            </div>
            <div class="card col-12 col-md-6">
              <h3><i class="fa-solid fa-desktop"></i>フロントエンド</h3>
            </div>
          </div>
          <div class="row">
            <div class="card col-12 col-md-6">
              <h3><i class="fa-solid fa-database"></i>DB</h3>
            </div>
            <div class="card col-12 col-md-6">
              <h3>
                <i class="fa-solid fa-server"></i>
                インフラ・サーバー
              </h3>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;