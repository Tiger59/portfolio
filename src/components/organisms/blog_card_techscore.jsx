import React from 'react';
import img1 from '../../images/techscoreblog.jpg'

function BlogCardTechScore() {
    return (
        <div class="bg-white border border-gray-200 rounded-lg  col-span-3 lg:flex lg:flex-row lg:col-span-1 ">
            <a href="https://blog.techscore.com/entry/2023/04/14/080000" target="_blank" rel="noopener noreferrer">
                <img class="object-cover  w-full  h-40 rounded-lg" src={img1} alt="" />
                <div class="p-5">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">オブジェクト指向におけるデザインパターンについて</h5>
                    <p class="mb-3 font-normal text-gray-700 ">この記事ではデザインパターンとは何か、デザインパターンを使うメリット、kotlinを使った実際のプログラム例を紹介します。
                        オブジェクト指向におけるデザインパターンについて - TECHSCORE BLOG</p>
                    <div class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </div>
                </div>
            </a>
        </div>
    );
}
export default BlogCardTechScore;