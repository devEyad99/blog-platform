
import { useNavigate } from 'react-router-dom';
import PageLayout from '../layouts/Pagelayout/Pagelayout';

export default function Home() {

  const navigate = useNavigate();

  return (
    <PageLayout title='Manage Tasks'>
      <div className='flex flex-col-1  items-center gap-5'>
      <button
        className="px-4 py-2 rounded bg-blue-500 text-white mb-4"
        onClick={() => navigate('/all-tasks')}
      >
        Get All Tasks
      </button>
      
      <button
        className="px-4 py-2 rounded bg-green-500 text-white mb-4"
        onClick={() => navigate('/create-task')}
      >
        Create Task
      </button>
      
        <button
         className='px-4 py-2 rounded bg-yellow-500 text-white mb-4'
         onClick={() => navigate('/users')}
        >
          Get All Users
        </button>
      </div>
    </PageLayout>
  );
}
