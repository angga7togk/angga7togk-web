import { useLangContext } from "@/context/LangContext";
import { stringToSlug } from "@/utils/utils";
import Link from "next/link";
import React from "react";
import { FaLink } from "react-icons/fa";
import Markdown from "react-markdown";
// Tipe props yang digunakan
type Props = {
  href?: string; // Slug artikel
  title: string; // Judul artikel
  content: string; // Isi artikel dalam bentuk array string
  date: Date;
};

const Article: React.FC<Props> = ({ href, title, content, date }) => {
  const lang = useLangContext();
  return (
    <article id={stringToSlug(title)} className="w-full mx-auto mb-16 md:mb-24">
      {/* Judul Artikel */}
      <header className="mb-8">
        <div className="flex items-center mb-4 gap-x-2 transition-all duration-300">
          <Link
            href={`#${stringToSlug(title)}`}
            className="flex cursor-pointer transition-all duration-300 text-gray-500 hover:bg-black/10 hover:dark:bg-white/10 p-2 rounded-full"
          >
            <FaLink className="text-xl" />
          </Link>
          {href ? (
            <Link
              href={href}
              className="text-3xl font-bold text-gray-800 dark:text-gray-200 transition-colors duration-300 hover:underline"
            >
              {title}
            </Link>
          ) : (
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
              {title}
            </h1>
          )}
        </div>
        {/* Tanggal */}
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">
          {lang.lang === "id"
            ? "Dibuat pada " +
              date.toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })
            : "Created at " +
              date.toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
        </p>
        <hr className="border-gray-300" />
      </header>

      {/* Konten Artikel */}
      <section>
        <Markdown
        
          components={{
            p({ children }) {
              return (
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                  {children}
                </p>
              );
            },
            a({ children, href }) {
              const isBlank = href?.startsWith("http");
              return (
                <Link
                  href={href || ""}
                  className="text-blue-500 hover:underline"
                  target={isBlank ? "_blank" : "_self"}
                  title={children?.toString()}
                  rel="noopener noreferrer"
                >
                  {children}
                </Link>
              );
            },
          }}
        >
          {content}
        </Markdown>
      </section>
    </article>
  );
};

export default Article;
