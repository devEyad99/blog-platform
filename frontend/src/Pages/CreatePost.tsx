// components/CreatePost.tsx
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import PageLayout from "../layouts/Pagelayout/Pagelayout";
import Input from "../components/Input/Input";
import { actCreatePost } from "../store/Posts/postsSlice"; // Import the action

const CreatePost: React.FC = () => {
  const dispatch = useAppDispatch();
  const { loading, error, message } = useAppSelector((state) => state.posts);
  const navigate = useNavigate(); // Initialize useNavigate

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(actCreatePost({ title, content })); // Dispatch the createPost action
  };

  // Redirect to the posts page after a post is successfully created
  useEffect(() => {
    if (message === "Post created successfully") {
      navigate("/posts"); // Redirect to the posts page
    }
  }, [message, navigate]);

  return (
    <PageLayout title="Create Post">
      <form
        onSubmit={handleSubmit}
        className="mt-12 space-y-6 max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
      >
        <Input
          label="Title"
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter post title"
        />
        <Input
          label="Content"
          type="textarea"
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter post content"
        />
        <button
          disabled={loading === "pending"}
          type="submit"
          className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600"
        >
          {loading === "pending" ? "Creating post..." : "Create Post"}
        </button>
        {error && <p className="mt-4 text-red-500">Error: {error}</p>}
      </form>
    </PageLayout>
  );
};

export default CreatePost;