"use client";

import { useEffect, useState } from "react";

interface MediumArticle {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  description: string;
}

interface MediumResponse {
  items: MediumArticle[];
  status: string;
}

const MEDIUM_USERNAME = "tharsan.senthivel";
const RSS_URL = `https://medium.com/feed/@${MEDIUM_USERNAME}`;
const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`;

export function MediumArticles() {
  const [articles, setArticles] = useState<MediumArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await fetch(API_URL);
        const data: MediumResponse = await response.json();

        if (data.status === "ok") {
          // Get the 3 most recent articles
          setArticles(data.items.slice(0, 3));
        } else {
          setError(true);
        }
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="text-[#8C5A3C] dark:text-[#948979]">Loading articles from Medium...</div>
      </div>
    );
  }

  if (error || articles.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-6">
        <svg className="w-6 h-6 text-[#C08552] dark:text-[#DFD0B8]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
        </svg>
        <span className="text-sm text-[#8C5A3C] dark:text-[#948979]">Also published on</span>
        <a
          href={`https://medium.com/@${MEDIUM_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-[#C08552] dark:text-[#DFD0B8] hover:underline"
        >
          Medium
        </a>
      </div>

      <div className="space-y-6">
        {articles.map((article) => {
          // Format the date
          const date = new Date(article.pubDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
          });

          // Calculate read time (rough estimate: 200 words per minute)
          const wordCount = article.description.split(" ").length;
          const readTime = Math.max(1, Math.ceil(wordCount / 200));

          return (
            <a
              key={article.link}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 rounded-2xl bg-[#FFF8F0] dark:bg-[#222831] border border-[#C08552] dark:border-[#393E46] hover:border-[#C08552] dark:hover:border-[#DFD0B8] hover:shadow-lg transition-all hover:scale-[1.02]"
            >
              <div className="flex items-center gap-2 text-sm text-[#8C5A3C] dark:text-[#948979] mb-3">
                <span className="inline-block px-2 py-1 text-xs rounded-full bg-[#C08552]/20 dark:bg-[#222831] text-[#C08552] dark:text-[#DFD0B8]">
                  Technical
                </span>
                <span>{date}</span>
                <span>·</span>
                <span>{readTime} min read</span>
              </div>

              <h3 className="text-lg font-semibold text-[#4B2E2B] dark:text-[#DFD0B8] mb-3 group-hover:text-[#C08552] dark:group-hover:text-[#DFD0B8] transition-colors line-clamp-2">
                {article.title}
              </h3>

              <p className="text-sm text-[#8C5A3C] dark:text-[#948979] mb-4 line-clamp-2">
                {article.description.replace(/<[^>]*>/g, "").slice(0, 150)}...
              </p>

              <div className="flex items-center gap-1 text-sm text-[#C08552] dark:text-[#DFD0B8] group-hover:gap-2 transition-all">
                Read on Medium
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
