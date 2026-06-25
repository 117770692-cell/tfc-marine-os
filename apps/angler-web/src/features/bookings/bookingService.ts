import { supabase } from '../../shared/api/supabase';
import { bookings, type Booking } from '../../data/mock';
export async function listBookings():Promise<Booking[]>{
 if(!supabase) return bookings;
 const {data,error}=await supabase.from('bookings').select('*').order('created_at',{ascending:false});
 if(error || !data) return bookings;
 return data.map((r:any)=>({id:r.id,tripId:r.trip_id,userName:r.user_name,people:r.people,amount:r.amount,status:r.status,createdAt:r.created_at}));
}
export async function createBooking(tripId:string, people:number, amount:number, phone:string, note:string){
 if(!supabase){return {data:{id:'local-'+Date.now()},error:null};}
 return supabase.from('bookings').insert({trip_id:tripId,user_name:'测试用户',people,amount,status:'pending',phone,note});
}
