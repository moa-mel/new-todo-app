import { createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import Root from './pages/Root';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';

const rootRoute = createRootRoute({
  head: () => {
    return {
    meta: [
      { title: 'My ToDo App' },
      { name: 'description', content: 'A simple todo app with user profiles' },
      { property: 'og:title', content: 'My ToDo App' },
      { property: 'og:description', content: 'Manage your tasks and profile' },
      { property: 'og:image', content: 'https://via.placeholder.com/150' },
    ],
    links: [
      { rel: 'icon', href: '/favicon.ico' },
    ],
    scripts: [],
};
  },
  component: Root,
});

const routeTree = rootRoute.addChildren([
  createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: Home,
    head: () => ({
      meta: [
        { title: 'Home - My ToDo App' },
        { name: 'description', content: 'Welcome to your todo app homepage' },
      ],
      links: [],
      scripts: [],
    }),
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: 'login',
    component: Login,
    head: () => ({
      meta: [
        { title: 'Login - My ToDo App' },
        { name: 'description', content: 'Log in to access your todo list' },
      ],
      links: [],
      scripts: [],
    }),
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: 'signUp',
    component: SignUp,
    head: () => ({
      meta: [
        { title: 'Sign Up - My ToDo App' },
        { name: 'description', content: 'Create an account for your todo app' },
      ],
      links: [],
      scripts: [],
    }),
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: 'profile/$username',
    component: Profile,
    head: ({ params }) => ({
      meta: [
        { title: `${params.username}'s Profile - My ToDo App` },
        { name: 'description', content: `Todo list and profile of ${params.username}` },
        { property: 'og:title', content: `${params.username}'s Profile` },
        { property: 'og:description', content: `Tasks and profile of ${params.username}` },
        { property: 'og:image', content: 'https://via.placeholder.com/150' },
      ],
      links: [],
      scripts: [],
    }),
  }),
]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}