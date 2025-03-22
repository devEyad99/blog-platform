
import { useNavigate } from 'react-router-dom';
import PageLayout from '../layouts/Pagelayout/Pagelayout';

export default function Home() {

  const navigate = useNavigate();

  return (
    <PageLayout title='Manage Posts'>
      <div className='flex flex-col-1  items-center gap-5'>
      <button
        className="px-4 py-2 rounded bg-blue-500 text-white mb-4"
        onClick={() => navigate('/posts')}
      >
        Get All Posts
      </button>
      
      <button
        className="px-4 py-2 rounded bg-green-500 text-white mb-4"
        onClick={() => navigate('/create-post')}
      >
        Create Post
      </button>
      </div>
    </PageLayout>
  );
}
