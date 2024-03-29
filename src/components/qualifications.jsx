import React from 'react';

function Qualifications() {
    return (
        <section id="qualifications" class="home-section parallax text-center  py-10" data-stellar-background-ratio="0.5">
            <div class="flex items-center justify-center py-5">
                <div class="container relative z-30 ">
                    <div class="section-heading text-center ">
                        <h2 class="text-4xl text-center font-semibold pb-3">Qualifications</h2>
                    </div>
                    <h2 class="text-2xl text-center font-semibold pb-6">保有する資格の一覧です</h2>
                    <div class="grid gap-3 grid-flow-row-dence grid-cols-3 justify-center xl:px-40 px-10">

                        <div class="col-span-3 lg:col-span-1 ">
                            <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow  hover:bg-gray-100">
                                <div class="flex flex-col justify-between p-4 leading-normal">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">ITパスポート</h5>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">情報系初級国家資格</p>
                                </div>
                            </a>
                        </div>

                        <div class="col-span-3 lg:col-span-1 ">
                            <a href="https://qiita.com/koneko59/items/7cabfa03ade22454b0ac" target="_blank" rel="noopener noreferrer" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                                <div class="flex flex-col justify-between p-4 leading-normal">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">python3エンジニア認定基礎試験 </h5>
                                    <p class="mb-3 font-normal text-gray-700 ">情報系初級国家資格</p>
                                    <p>詳しくは合格記事を参照ください</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Qualifications;