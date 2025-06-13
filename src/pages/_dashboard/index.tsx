import Layout from '@/components/layouts/Layout';
import React, { useState } from 'react';
import Markdown from 'react-markdown';
import ReactMarkdown from 'react-markdown';

const Index = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handlePost = () => {
    alert(`Title: ${title}\nContent:\n${content}`);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-4">Create Post</h1>
        <div className="space-y-6">
          {/* Title Input */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium ">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter post title"
            />
          </div>

          {/* Markdown Content Input */}
          <div>
            <label htmlFor="content" className="block text-sm font-medium ">
              Content (Markdown)
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={10}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Write your content in Markdown"
            ></textarea>
          </div>

          {/* Preview */}
          <div>
            <h2 className="text-lg font-medium not-even:mb-2">Preview</h2>
            <div className="p-4 border border-gray-300 rounded-md prose prose-pink  ">
              {content ? (
                <ReactMarkdown>{content}</ReactMarkdown>
              ) : (
                <p className="">No content to preview</p>
              )}
            </div>
          </div>

          {/* Post Button */}
          <div className="text-right">
            <button
              onClick={handlePost}
              className="px-4 py-2 bg-indigo-600 text-white font-medium text-sm rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
