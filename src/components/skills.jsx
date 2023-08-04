import React from 'react';

class Skills extends React.Component {
  render() {
    return (
      <section id="skills" class="home-section parallax text-center  py-10" data-stellar-background-ratio="0.5">
        <div class="flex items-center justify-center py-5">
          <div class="container relative z-30 ">
            <div class="section-heading text-center ">
              <h2 class="text-4xl text-center font-semibold pb-6">Skills</h2>
            </div>

            <div class="grid gap-3 grid-flow-row-dence grid-cols-3 justify-center xl:px-40 px-10">

              <div class="col-span-3 lg:col-span-1 ">
                <div href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                  <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">バックエンド</h5>
                    <p class="mb-3 font-normal text-gray-700 ">Kotlin, Java, SpringBoot</p>
                    <p class="mb-3 font-normal text-gray-700 ">Python, Flask</p>
                  </div>
                </div>
              </div>

              <div class="col-span-3 lg:col-span-1 ">
                <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow  hover:bg-gray-100">
                  <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">フロントエンド</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">JavaScript, TypeScript, React</p>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Tailwind</p>
                  </div>
                </div>
              </div>

              <div class="col-span-3 lg:col-span-1 ">
                <div href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow  hover:bg-gray-100">
                  <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">インフラストラクチャ</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kubernetes,AWS,Firebase</p>
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

export default Skills;