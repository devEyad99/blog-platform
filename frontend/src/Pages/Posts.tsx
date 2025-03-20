// src/pages/Posts.tsx
import PageLayout from "../layouts/Pagelayout/Pagelayout";

const Posts: React.FC = () => {
  return (
    <PageLayout title="Posts">
      <div className="max-w-4xl mx-auto p-6">
        <div className="space-y-6">
          {/* Post Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold text-gray-800">Post Title 1</h2>
            <p className="mt-2 text-gray-600">
              This is the content of the first post. It can be a brief summary or the full content of the post.
            </p>
            <p className="mt-4 text-sm text-gray-500">By: Author Name</p>
          </div>

          {/* Post Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold text-gray-800">Post Title 2</h2>
            <p className="mt-2 text-gray-600">
              This is the content of the second post. It can be a brief summary or the full content of the post.
            </p>
            <p className="mt-4 text-sm text-gray-500">By: Author Name</p>
          </div>

          {/* Post Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold text-gray-800">Post Title 3</h2>
            <p className="mt-2 text-gray-600">
              This is the content of the third post. It can be a brief summary or the full content of the post.
            </p>
            <p className="mt-4 text-sm text-gray-500">By: Author Name</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Posts;