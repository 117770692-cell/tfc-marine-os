export type Port = { id:string; name:string; city:string; address:string };
export type Captain = { id:string; name:string; level:string; rating:number; trips:number; verified:boolean; phone:string };
export type Boat = { id:string; name:string; captainId:string; capacity:number; length:number; image:string; equipment:string[] };
export type Trip = { id:string; boatId:string; captainId:string; portId:string; title:string; date:string; startTime:string; endTime:string; seaArea:string; price:number; totalSeats:number; bookedSeats:number; targetFish:string[]; status:'open'|'full'|'cancelled'; note:string };
export type Booking = { id:string; tripId:string; userName:string; people:number; amount:number; status:'pending'|'paid'|'cancelled'|'refunded'|'waitlist'; createdAt:string };
export const ports:Port[]=[
 {id:'p1',name:'积米崖码头',city:'青岛',address:'黄岛区积米崖'},
 {id:'p2',name:'沙子口码头',city:'青岛',address:'崂山区沙子口'},
 {id:'p3',name:'灵山卫码头',city:'青岛',address:'西海岸新区灵山卫'},
 {id:'p4',name:'仰口码头',city:'青岛',address:'崂山区仰口'}
];
export const captains:Captain[]=[
 {id:'c1',name:'老张船长',level:'五星船长',rating:4.9,trips:326,verified:true,phone:'13800000001'},
 {id:'c2',name:'阿军船长',level:'外海专家',rating:4.8,trips:218,verified:true,phone:'13800000002'},
 {id:'c3',name:'老李船长',level:'近海铁板',rating:4.7,trips:186,verified:true,phone:'13800000003'},
 {id:'c4',name:'大海船长',level:'慢摇导师',rating:4.9,trips:274,verified:true,phone:'13800000004'}
];
export const boats:Boat[]=[
 {id:'b1',name:'海钓一号',captainId:'c1',capacity:8,length:9.6,image:'linear-gradient(145deg,#0d5c73,#08131d)',equipment:['救生衣','探鱼器','冰箱','卫生间']},
 {id:'b2',name:'蓝鲸号',captainId:'c2',capacity:10,length:11.2,image:'linear-gradient(145deg,#0f766e,#0b2532)',equipment:['雷达','探鱼器','活水仓','钓竿架']},
 {id:'b3',name:'Storm Rider',captainId:'c3',capacity:6,length:8.4,image:'linear-gradient(145deg,#12384a,#0d5c73)',equipment:['救生衣','GPS','遮阳棚']},
 {id:'b4',name:'TFC ONE',captainId:'c4',capacity:12,length:12.8,image:'linear-gradient(145deg,#08131d,#f97316)',equipment:['双机动力','雷达','厨房','休息舱']}
];
export const trips:Trip[]=[
 {id:'t1',boatId:'b1',captainId:'c1',portId:'p1',title:'灵山岛外海铁板航次',date:'2026-06-28',startTime:'06:00',endTime:'14:00',seaArea:'灵山岛外海',price:500,totalSeats:8,bookedSeats:5,targetFish:['蓝点马鲛','黄条鰤','真鲷'],status:'open',note:'近海铁板航次，适合有基础的路亚玩家。'},
 {id:'t2',boatId:'b2',captainId:'c2',portId:'p2',title:'崂山外海慢摇体验',date:'2026-06-29',startTime:'05:30',endTime:'15:30',seaArea:'崂山外海礁区',price:680,totalSeats:10,bookedSeats:8,targetFish:['真鲷','黑头','海鲈'],status:'open',note:'慢摇为主，视鱼情切换铁板。'},
 {id:'t3',boatId:'b3',captainId:'c3',portId:'p3',title:'近海鲅鱼快抽团',date:'2026-06-30',startTime:'06:30',endTime:'13:30',seaArea:'竹岔岛近海',price:420,totalSeats:6,bookedSeats:6,targetFish:['蓝点马鲛','海鲈'],status:'full',note:'快抽铁板，节奏较快。'},
 {id:'t4',boatId:'b4',captainId:'c4',portId:'p4',title:'外海大物探索航次',date:'2026-07-01',startTime:'05:00',endTime:'17:00',seaArea:'千里岩外海',price:980,totalSeats:12,bookedSeats:7,targetFish:['黄条鰤','GT','石斑'],status:'open',note:'高阶航次，建议有外海经验。'}
];
export const bookings:Booking[]=[
 {id:'o1',tripId:'t1',userName:'阿涛路亚',people:1,amount:500,status:'paid',createdAt:'2026-06-24 10:21'},
 {id:'o2',tripId:'t2',userName:'SlowJig王',people:2,amount:1360,status:'pending',createdAt:'2026-06-24 13:08'},
 {id:'o3',tripId:'t3',userName:'青岛老李',people:1,amount:420,status:'waitlist',createdAt:'2026-06-25 08:44'}
];
export function getBoat(id:string){return boats.find(x=>x.id===id) || boats[0]}
export function getCaptain(id:string){return captains.find(x=>x.id===id) || captains[0]}
export function getPort(id:string){return ports.find(x=>x.id===id) || ports[0]}
export function getTrip(id:string){return trips.find(x=>x.id===id)}
