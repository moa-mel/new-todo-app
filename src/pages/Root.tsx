import { Outlet } from '@tanstack/react-router';
import { Link } from '@tanstack/react-router';
import { useAuth } from '../context/AuthContext';

const Root: React.FC = () => {
  const { isAuthenticated, username, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-800">My ToDo App</h1>
          <nav className="space-x-4">
            {!isAuthenticated ? (
              <>
                <Link
                  to="/login"
                  className="text-gray-600 hover:text-blue-500 font-medium transition-colors duration-200"
                >
                  Login
                </Link>
                <Link
                  to="/signUp"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <Link
                  to={`/profile/${username}`}
                  className="text-gray-600 hover:text-blue-500 font-medium transition-colors duration-200"
                >
                  Profile
                </Link>
                <button
                  onClick={logout}
                  className="text-gray-600 hover:text-red-500 font-medium transition-colors duration-200"
                >
                  Logout
                </button>
              </>
            )}
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Root;