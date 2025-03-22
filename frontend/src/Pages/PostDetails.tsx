// src/pages/PostDetails.tsx
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import PageLayout from "../layouts/Pagelayout/Pagelayout";
import { actFetchPostById } from "../store/Posts/postsSlice"; // Import the fetch action

const PostDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the post ID from the URL
  const dispatch = useAppDispatch();
  const { post, loading, error } = useAppSelector((state) => state.posts);

  // Fetch the post by ID when the component mounts
  useEffect(() => {
    if (id) {
      dispatch(actFetchPostById(id));
    }
  }, [dispatch, id]);

  if (loading === "pending") {
    return (
      <PageLayout title="Post Details">
        <div className="max-w-4xl mx-auto p-6">
          <p>Loading post details...</p>
        </div>
      </PageLayout>
    );
  }

  if (error) {
    return (
      <PageLayout title="Post Details">
        <div className="max-w-4xl mx-auto p-6">
          <p className="text-red-500">Error: {error}</p>
        </div>
      </PageLayout>
    );
  }

  if (!post) {
    return (
      <PageLayout title="Post Details">
        <div className="max-w-4xl mx-auto p-6">
          <p>Post not found.</p>
        </div>
      </PageLayout>
    );
  }

  // Ensure comments is always an array
  const comments = post.comments || [];

  return (
    <PageLayout title="Post Details">
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800">{post.title}</h2>
          <p className="mt-2 text-gray-600">{post.content}</p>
          <p className="mt-4 text-sm text-gray-500">By: {post.author.name}</p>

          {/* Display Comments */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800">Comments</h3>
            {comments.length > 0 ? (
              comments.map((comment) => (
                <div key={comment.id} className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-600">{comment.content}</p>
                  <p className="mt-2 text-sm text-gray-500">By: {comment.author.name}</p>
                </div>
              ))
            ) : (
              <p className="mt-4 text-gray-600">No comments yet.</p>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default PostDetails;