import React from 'react';
import img1 from '../images/techscoreblog.jpg'
import Note from './organisms/blog_card_note';
import Qiita from './organisms/blog_card_qiita';
import TechScore from './organisms/blog_card_techscore';


function Blog() {
    return (
        <section id="blog" class="home-section parallax text-center  py-10" data-stellar-background-ratio="0.5">
            <div class="flex items-center justify-center py-5">
                <div class="container relative z-30 ">
                    <div class="section-heading text-center ">
                        <h2 class="text-4xl text-center font-semibold pb-6">Blog</h2>
                    </div>
                    <div class="grid gap-3 grid-flow-row-dence grid-cols-3 justify-center xl:px-40 px-10 ">
                        <Note />
                        <Qiita />
                        <TechScore />
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Blog;
