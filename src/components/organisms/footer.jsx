import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div class="bg-black">
          <div class=" flex flex-col justify-center py-6 sm:flex-row">
            <p class="text-center font-body text-white md:text-left px-6">
              © Taiga Kishimoto
            </p>
            <div class="flex items-center justify-center pt-5 sm:justify-start sm:pt-0 px-6">
              <a href="/">
                <i
                  class="bx bxl-facebook-square text-2xl text-white hover:text-yellow"
                ></i>
              </a>
              <a href="/" class="pl-4">
                <i class="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
              </a>
              <a href="/" class="pl-4">
                <i class="bx bxl-dribbble text-2xl text-white hover:text-yellow"></i>
              </a>
              <a href="/" class="pl-4">
                <i class="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;