import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import Link from "next/link";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { stringToSlug } from "./utils/utils";
import { FaLink } from "react-icons/fa";

// Custom MDX Components
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <div className="flex items-center mb-4 gap-x-2 transition-all duration-300">
        <Link
          href={`#${stringToSlug(JSON.stringify(children))}`}
          className="flex cursor-pointer transition-all duration-300 text-gray-500 hover:bg-black/10 hover:dark:bg-white/10 p-2 rounded-full"
        >
          <FaLink className="text-xl" />
        </Link>
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 my-6">
          {children}
        </h1>
      </div>
    ),
    h2: ({ children }) => (
      <div className="flex items-center mb-4 gap-x-2 transition-all duration-300">
        <Link
          href={`#${stringToSlug(JSON.stringify(children))}`}
          className="flex cursor-pointer transition-all duration-300 text-gray-500 hover:bg-black/10 hover:dark:bg-white/10 p-2 rounded-full"
        >
          <FaLink className="text-xl" />
        </Link>

        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 my-5">
          {children}
        </h2>
      </div>
    ),
    p: ({ children }) => (
      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
        {children}
      </p>
    ),
    a: ({ children, href }) => {
      const isBlank = href?.startsWith("http");
      return (
        <Link
          href={href || ""}
          className="text-blue-500 hover:underline"
          target={isBlank ? "_blank" : "_self"}
          rel="noopener noreferrer"
        >
          {children}
        </Link>
      );
    },
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        className="rounded-lg shadow-md my-4"
        {...(props as ImageProps)}
      />
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 dark:text-gray-300 mb-4">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 text-lg text-gray-700 dark:text-gray-300 mb-4">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="ps-4">{children}</li>,

    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic text-gray-600 dark:text-gray-400 my-4">
        {children}
      </blockquote>
    ),
    code: ({ children, className }) => {
      const language = className?.replace("language-", "") || "text";
      return language === "text" ? (
        <code className="bg-gray-200 dark:bg-gray-800 rounded px-2 py-1 text-sm">
          {children}
        </code>
      ) : (
        <div className="my-4 ps-4">
          <SyntaxHighlighter
            language={language}
            style={dark}
            customStyle={{ padding: "1rem", borderRadius: "0.5rem" }}
          >
            {children}
          </SyntaxHighlighter>
        </div>
      );
    },
    ...components,
  };
}
