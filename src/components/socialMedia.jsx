import React from 'react';

class SocialMedia extends React.Component {
  render() {
    return (
      <section id="contact" class="home-section parallax text-center" data-stellar-background-ratio="0.5">
        <div class="container">
          <div class="row">
            <div class="col-xl-12 col-lg-offset-2">
              <div class="section-heading text-center">
                <h2 class="text-4xl text-center font-semibold py-2">Contact</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row align-center ">
            <div class="col-3 col-sm-3 col-md-3">
              <div class="align-center txt-shadow">
                <div class="icon">
                  <a href="http://twitter.com/koneko59" target="_blank"  rel="noopener noreferrer">
                    <i class="fa fa-brands fa-twitter fa-5x"></i>
                  </a>
                </div>
                <span class="color-white">Twitter<br />@koneko59 </span>
              </div>
            </div>
            <div class="col-3 col-sm-3 col-md-3">
              <div class="align-center txt-shadow">
                <div class="icon">
                  <a href="https://github.com/Tiger59" target="_blank"  rel="noopener noreferrer">
                    <i class="fa fa-brands fa-github fa-5x"></i>
                  </a>
                </div>
                <span class="color-white">GitHub</span>
              </div>
            </div>
            <div class="col-3 col-sm-3 col-md-3">
              <div class="align-center txt-shadow">
                <div class="icon">
                  <a href="https://www.facebook.com/taiga.kishimoto.14" target="_blank"  rel="noopener noreferrer">
                    <i class="fa fa-brands fa-facebook fa-5x"></i>
                  </a>
                </div>
                <span class="color-white">Facebook</span>
              </div>
            </div>
            <div class="col-3 col-sm-3 col-md-3">
              <div class="align-center txt-shadow">
                <div class="icon">
                  <a href="https://t.me/Tiger_rip" target="_blank"  rel="noopener noreferrer">
                    <i class="fa fa-brands fa-telegram fa-5x"></i>
                  </a>
                </div>
                <span class="color-white">Telegram</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SocialMedia;