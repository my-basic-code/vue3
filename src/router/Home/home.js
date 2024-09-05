import { loadView } from '@/utils/handleRouter';

export default [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'Home'
    },
    component: loadView('Home', 'Home'),
  },
]