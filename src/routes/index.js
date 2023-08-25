//LAYOUTS
import { HeaderOnly } from '~/components/Layout'


import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
import Search from '~/pages/Search'


//Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly }, // layout: null(Khoong cos layout)
    { path: '/search', component: Search, layout: null } // layout: null(Khoong cos layout)
]

const privateRoutes = [

]
export { publicRoutes, privateRoutes }