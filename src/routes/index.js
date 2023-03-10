// Layouts
import { BodyOnly } from '../components/Layout';

// Pages
import Home from '../pages/Home';
import { genreFilms, genreTvMovies } from '../pages/Genre';
import Latest from '../pages/Latest';
import Watch from '../pages/Watch';
import Search from '../pages/Search';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/search', component: Search },
    { path: '/genre/19', component: genreTvMovies },
    { path: '/genre/03', component: genreFilms },
    { path: '/latest', component: Latest },
    { path: '/watch/:id', component: Watch, layout: BodyOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
