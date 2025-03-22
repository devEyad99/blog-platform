// src/pages/Posts.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useAppDispatch, useAppSelector } from "../store/hooks";
import PageLayout from "../layouts/Pagelayout/Pagelayout";
import { actFetchPosts } from "../store/Posts/postsSlice"; // Import the fetch action

const Posts: React.FC = () => {
  const dispatch = useAppDispatch();
  const { posts, loading, error } = useAppSelector((state) => state.posts);
  const navigate = useNavigate(); // Initialize useNavigate

  // Fetch posts when the component mounts
  useEffect(() => {
    dispatch(actFetchPosts());
  }, [dispatch]);

  if (loading === "pending") {
    return (
      <PageLayout title="Posts">
        <div className="max-w-4xl mx-auto p-6">
          <p>Loading posts...</p>
        </div>
      </PageLayout>
    );
  }

  if (error) {
    return (
      <PageLayout title="Posts">
        <div className="max-w-4xl mx-auto p-6">
          <p className="text-red-500">Error: {error}</p>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Posts">
      <div className="max-w-4xl mx-auto p-6">
        <div className="space-y-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer" // Add cursor-pointer
              onClick={() => navigate(`/posts/${post.id}`)} // Redirect to post details
            >
              <h2 className="text-2xl font-bold text-gray-800">{post.title}</h2>
              <p className="mt-2 text-gray-600">{post.content}</p>
              <p className="mt-4 text-sm text-gray-500">By: {post.author.name}</p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Posts;