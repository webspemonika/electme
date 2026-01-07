import React from 'react';
import { Link } from 'react-router';

const BlogLayout = ({ blog }) => {
    return (
        <div className="">
            {/* 1 blog-image */}
            <img
                src={blog.blogImage}
                alt={blog.title}
                className="w-full h-auto oject-cover rounded-lg"
            />
            <div className="py-5 ">
                {/* 2.blog-title */}
                <Link to={""}
                    className='text-18px-black-medium capitalize  inline-block line-clamp-2'
                > {blog.blogTitle}  </Link>
                {/* 3. bloger name + blog publish time */}
                <div className="my-3.75 flex gap-5 ">
                    <span className="text-15px-normal-gray capitalize "> {blog.blogerName} </span>
                    <span className="text-15px-normal-gray "> {blog.blogPublishTime} </span>
                </div>
            </div>
        </div>
    );
};

export default BlogLayout;