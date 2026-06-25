import { Outlet } from 'react-router-dom';
import { BottomNav } from '../shared/ui/BottomNav';
export function Layout(){return <div className="page"><div className="container"><Outlet/><BottomNav/></div></div>}
