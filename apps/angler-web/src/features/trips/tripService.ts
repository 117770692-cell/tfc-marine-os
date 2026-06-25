import { supabase } from '../../shared/api/supabase';
import { trips, type Trip } from '../../data/mock';
export async function listTrips():Promise<Trip[]>{
 if(!supabase) return trips;
 const {data,error}=await supabase.from('trips').select('*').order('date',{ascending:true});
 if(error || !data) return trips;
 return data.map((r:any)=>({id:r.id,boatId:r.boat_id,captainId:r.captain_id,portId:r.port_id,title:r.title,date:r.date,startTime:r.start_time,endTime:r.end_time,seaArea:r.sea_area,price:r.price,totalSeats:r.total_seats,bookedSeats:r.booked_seats,targetFish:r.target_fish||[],status:r.status,note:r.note||''}));
}
export async function createTrip(input:Partial<Trip>){
 if(!supabase) return {data:null,error:null};
 return supabase.from('trips').insert({boat_id:input.boatId,captain_id:input.captainId,port_id:input.portId,title:input.title,date:input.date,start_time:input.startTime,end_time:input.endTime,sea_area:input.seaArea,price:input.price,total_seats:input.totalSeats,booked_seats:0,target_fish:input.targetFish,status:'open',note:input.note});
}
