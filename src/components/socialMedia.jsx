import React from 'react';


function SocialMedia() {
  return (
    <section id="socialmedia" class="home-section parallax text-center  py-10" data-stellar-background-ratio="0.5">
      <div class="flex items-center justify-center py-5">
        <div class="container relative z-30 ">
          <div class="col-xl-12 col-lg-offset-2">
            <div class="section-heading text-center">
              <h2 class="text-4xl text-center font-semibold  pb-6">Social Media</h2>
            </div>
          </div>


          <div class="container  grid grid-cols-2 sm:grid-cols-4 xl:px-40 ">

            <div class="col-span-1">
              <div class="align-center txt-shadow">
                <div class="icon">
                  <a href="http://twitter.com/koneko59" target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-brands fa-twitter fa-5x"></i>
                  </a>
                </div>
                <span class="color-white">Twitter<br />@koneko59 </span>
              </div>
            </div>

            <div class="col-span-1">
              <div class="align-center txt-shadow">
                <div class="icon">
                  <a href="https://github.com/Tiger59" target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-brands fa-github fa-5x"></i>
                  </a>
                </div>
                <span class="color-white">GitHub</span>
              </div>
            </div>

            <div class="col-span-1">
              <div class="align-center txt-shadow">
                <div class="icon">
                  <a href="https://www.facebook.com/taiga.kishimoto.14" target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-brands fa-facebook fa-5x"></i>
                  </a>
                </div>
                <span class="color-white">Facebook</span>
              </div>
            </div>

            <div class="col-span-1">
              <div class="align-center txt-shadow">
                <div class="icon">
                  <a href="https://www.threads.net/@tigre.qui.rit" target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-brands fa-threads fa-5x"></i>
                  </a>
                </div>
                <span class="color-white">Threads</span>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
export default SocialMedia;