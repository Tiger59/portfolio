import React, {useState, useEffect} from 'react';
import axios from 'axios';


class BlogCardNote extends React.Component {
    
    
    render() {
        return (
            <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow col-span-3 lg:col-span-1 ">
                
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">note</h5>
                    <a href="https://note.com/tiger59/n/nf339306cb751"target="_blank" rel="noopener noreferrer">
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">自動化大好きエンジニアLT大会 参加記録</p>
                    </a>
                </div>
            </div>);
    }
}
export default BlogCardNote;