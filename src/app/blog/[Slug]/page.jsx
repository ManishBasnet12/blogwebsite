"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"; 
import { FakeSinglePost } from "../../api/useQuery";
import SinglePost from "@/components/SinglePost";

const SinglePage = () => {
  const { Slug } = useParams(); 
  const [singlePost, setSinglePost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPost = async () => {
      try {
        const data = await FakeSinglePost(Slug);
        setSinglePost(data);
      } catch (err) {
        console.error("Error fetching post:", err);
      } finally {
        setLoading(false);
      }
    };

    if (Slug) {
      getPost();
    }
  }, [Slug]);


  return (
    <div className="min-h-[200px]">
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <p className="text-lg text-gray-900">Loading post...</p>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto p-4">
          {singlePost ? (
            <SinglePost
              key={singlePost.id}
              img={singlePost.image}
              price={singlePost.price}
              category={singlePost.category}
              title={singlePost.title}
              summary={singlePost.body}
            />
          ) : (
            <p className="text-center text-gray-600">Post not found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SinglePage;
