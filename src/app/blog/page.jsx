"use client";
import React, { useEffect, useState } from "react";
import { FakePosts } from "../api/useQuery";
import BlogPost from "../../components/BlogPost";

const POSTS_PER_PAGE = 5;

const BlogPage = () => {
  const [posts, setPosts] = useState([]); // All posts
  const [filteredPosts, setFilteredPosts] = useState([]); // Filtered posts after search
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState(""); // Search term
  const [currentPage, setCurrentPage] = useState(1); // Current page

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await FakePosts();
        setPosts(data);
        setFilteredPosts(data); // Initialize filtered posts
      } catch (err) {
        setError("Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  // Search filter (case-insensitive)
  useEffect(() => {
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredPosts(filtered);
    setCurrentPage(1); // Reset to first page when searching
  }, [search, posts]);

  // Pagination logic
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  return (
    <div className="bg-slate-100 min-h-screen p-6 pt-40">
      <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between">
      <h1 className="text-3xl text-gray-900 font-bold mb-4">
            Latest  Posts
          </h1>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md p-2 border border-gray-300 rounded-md mb-4 text-slate-900"
          />
        </div>

        {/* Blog Posts Grid */}
        <div className="min-h-[200px]">
          {loading ? (
            <div className="flex justify-center items-center h-40">
              <p className="text-lg text-gray-900">Loading posts...</p>
            </div>
          ) : currentPosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  gap-x-10 gap-y-20">
              {currentPosts.map((post) => (
                <BlogPost
                  key={post.id}
                  img={post.image}
                  price={post.price}
                  category={post.category}
                  title={post.title}
                  summary={post.body}
                  slug={post.id}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600">No posts found.</p>
          )}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 mx-2 rounded-md ${
                currentPage === 1 ? "bg-gray-300" : "bg-slate-700 text-white"
              }`}
            >
              Prev
            </button>

            <span className="px-4 py-2 bg-white border border-gray-300 text-slate-900 rounded-md">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className={`px-4 py-2 mx-2 rounded-md ${
                currentPage === totalPages
                  ? "bg-gray-300"
                  : "bg-slate-700 text-white"
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;