import { Link, useLocation } from 'react-router-dom';
import { Home, PlusCircle, ClipboardList, User } from 'lucide-react';
export function BottomNav(){const {pathname}=useLocation(); const item=(to:string,label:string,Icon:any)=><Link to={to} className={'nav-item '+(pathname===to?'active':'')}><Icon size={20}/><div>{label}</div></Link>; return <nav className="bottom-nav">{item('/','首页',Home)}{item('/publish','发布',PlusCircle)}{item('/orders','订单',ClipboardList)}{item('/profile','我的',User)}</nav>}
