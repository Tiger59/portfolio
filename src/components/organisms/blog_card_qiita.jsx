import React, { useState, useEffect } from 'react';
import axios from 'axios';



function BlogCardQiita() {
    const [post, setPosts] = useState([])

    const url = "https://qiita.com/api/v2/users/koneko59/items?page=1&per_page=10";
    useEffect(() => {
        axios.get(url).then(res => {
            console.log(res.data)
            setPosts(res.data)
        });
    }, [])

    return (
        <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow col-span-3 lg:col-span-1 ">
            <div class="flex flex-col justify-between p-4 leading-normal">
                <a class="mb-2 text-2xl font-bold tracking-tight text-gray-900 " href="https://qiita.com/koneko59">
                    Qiita
                </a >

                {post.map((data) => {
                    return (
                        <div class="text-left py-1 px-4">
                            <p class="text-black">
                                <a href={data.url} target="_blank" rel="noopener noreferrer" class="font-medium text-black hover:underline"> {data.title} </a>
                            </p>

                            <div class="flex items-center">
                            {data.tags.map((tag) => {
                                    return (<p class = "bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">{tag.name}</p>)
                                })}
                            </div>
                            <div class="flex items-center">
                                <p>{new Date(data.updated_at).toLocaleDateString()}</p>
                                <i class="fa-solid fa-folder px-2"></i>
                                <p>{data.stocks_count}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>);
}
export default BlogCardQiita;