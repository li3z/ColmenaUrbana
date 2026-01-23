import React from 'react';

const BlogPostContent = ({ post }) => {
  return (
    <article className="max-w-4xl mx-auto">
      <img 
        src={post.image} 
        alt={post.title}
        className="w-full h-auto rounded-lg shadow-md mb-8"
      />
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="flex items-center text-gray-600 mb-8">
        <span>{post.date}</span>
        <span className="mx-2">•</span>
        <span>Por {post.author}</span>
      </div>
      <div className="prose prose-lg max-w-none">
        {post.content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>
    </article>
  );
};

export default BlogPostContent;