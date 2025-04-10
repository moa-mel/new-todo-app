import { createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import Root from './pages/Root';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';

const rootRoute = createRootRoute({
  component: Root,
});

const routeTree = rootRoute.addChildren([
  createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: Home
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: 'login',
    component: Login
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: 'signUp',
    component: SignUp
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: 'profile/$username',
    component: Profile
  }),
]);

export const router = createRouter({ routeTree });

// Add this type definition
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}