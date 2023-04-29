import React from 'react';
import icon from '../images/icon.jpg'
import bg from '../images/bg-hero.jpg'
import Header from './organisms/header';

class Intro extends React.Component {
  render() {
    return (
      <section id="intro" class="intro">
        <div class="w-full bg-center bg-cover relative bg-cover bg-center bg-no-repeat " style={{ backgroundImage: `url(${bg})` }}>
          <Header />
          <div class="flex items-center justify-center bg-gray-900 bg-opacity-50 py-5">
            <div class="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
              <div class="flex flex-col items-center justify-center lg:flex-row">

                <div class="rounded-full border-8 border-gray-800 shadow-xl">
                  <img src={icon} class="h-48 rounded-full sm:h-56" alt="author" />
                </div>

                <div class="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
                  <h1 class="text-center font-header text-4xl sm:text-left sm:text-5xl md:text-6xl text-white">
                    Hello I'm Taiga Kishimoto!
                  </h1>

                  <div class="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                    <div class="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                      <p class=" m-0 font-body text-lg uppercase text-white">Let's connect</p>
                      <div class="hidden sm:block">
                        <i class="bx bx-chevron-right text-3xl text-white"></i>
                      </div>
                    </div>

                    <div class="grid-cols-1">

                      <div class="flex items-center justify-center pl-2 sm:justify-start sm:pt-0">
                        <a href="https://www.facebook.com/taiga.kishimoto.14" class="pl-4"><i class="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i></a>
                        <a href="http://twitter.com/koneko59" class="pl-4"><i class="bx bxl-twitter text-2xl text-white hover:text-yellow"></i></a>
                        <a href="/" class="pl-4"><i class="bx bxl-dribbble text-2xl text-white hover:text-yellow"></i></a>
                        <a href="/" class="pl-4"><i class="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i></a>
                      </div>

                    <div class="flex items-center justify-center pl-2 sm:justify-start sm:pt-0">
      
                        <i class="bx bx-envelope text-2xl text-white hover:text-yellow"></i>
                        <p class="px-2 text-left font-body text-white hover:text-yellow lg:text-lg">
                          tiger53990@gmail.com
                        </p>
                      </div>

                      <div class="flex items-center justify-center pl-2 sm:justify-start sm:pt-0">
                        <i class="bx bx-phone text-2xl text-white hover:text-yellow"></i>
                        <p class="px-2 text-left font-body text-white hover:text-yellow lg:text-lg">
                          080 5718 8571
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    );
  }
}

export default Intro;