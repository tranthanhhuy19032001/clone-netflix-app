// Layouts
import { BodyOnly } from '../components/Layout';

// Pages
import Home from '../pages/Home';
import Genre from '../pages/Genre';
import Watch from '../pages/Watch';
import Search from '../pages/Search';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/search', component: Search },
    { path: '/genre/83', component: Genre },
    { path: '/watch/:id', component: Watch, layout: BodyOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
