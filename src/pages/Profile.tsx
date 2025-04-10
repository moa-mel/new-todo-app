import { useParams } from '@tanstack/react-router';
import { Helmet } from 'react-helmet-async';

const Profile: React.FC = () => {
  const { username } = useParams({ from: '/profile/$username' });
  const user = {
    name: username || 'User',
    profileImage: 'https://via.placeholder.com/150',
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Helmet>
        <title>{user.name}'s Profile - Todo App</title>
        <meta name="description" content={`Todo list and profile of ${user.name}`} />
        <meta property="og:title" content={`${user.name}'s Profile`} />
        <meta property="og:description" content={`Tasks and profile of ${user.name}`} />
        <meta property="og:image" content={user.profileImage} />
      </Helmet>

      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center space-x-6">
          <img
            src={user.profileImage}
            alt="profile"
            className="w-32 h-32 rounded-full object-cover"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {user.name}'s Profile
            </h2>
            <p className="text-gray-600 mt-2">
              This is the user profile page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;