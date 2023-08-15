import React, { useState, useEffect } from 'react';
import axios from 'axios';


function BlogCardNote() {

    const [post, setPosts] = useState([])
    const url = "https://us-central1-mediation-server-daf9e.cloudfunctions.net/api/notes";

    useEffect(() => {
        axios.get(url).then(res => {
            console.log(res.data.data)
            setPosts(res.data.data.contents)
        });
    }, [])

    return (
        <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow col-span-3 lg:col-span-1 ">

            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">note</h5>
                {post.map((data) => {
                    return (
                        <div class="text-left py-1 px-4">
                            <p class="text-black">
                                <a href={data.noteUrl} target="_blank" rel="noopener noreferrer" class="font-medium text-black hover:underline"> {data.name} </a>
                            </p>

                            <div class="flex items-center">
                                {data.hashtags.map((tag) => {
                                    return (<p class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">{tag.hashtag.name}</p>)
                                })}
                            </div>
                            <div class="flex items-center">
                                <p>{new Date(data.publishAt).toLocaleDateString()}</p>
                                <i class="fa-solid fa-folder px-2"></i>
                                <p>{data.likeCount}</p>
                            </div>
                        </div>
                    );
                })}

            </div>
        </div>);
}
export default BlogCardNote;