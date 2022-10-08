import { 
  PageA, 
  PageB, 
  PageC, 
  NotFound404 
} from '@/pages';

export type TRouteConfig = {
  path: string;
  title: string,
  element?: string,
  routes?: Array<TRouteConfig>
}

const routerConfig: Array<TRouteConfig> = [{
  path: "a",
  title: "PageA",
  element: 'pageA/index.tsx'
},
{
  path: "b",
  title: "PageB",
  element: 'pageB/index.tsx'
},
{
  path: "c",
  title: "PageC",
  element: 'pageC/index.tsx'
},
{
  path: "*",
  title: "Not Found 404",
  element: 'NotFound404/index.tsx'
}];

export default routerConfig;
