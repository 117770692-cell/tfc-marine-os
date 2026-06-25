-- Basic RLS policies for MVP
alter table profiles enable row level security;
alter table ports enable row level security;
alter table fish_species enable row level security;
alter table captains enable row level security;
alter table boats enable row level security;
alter table trips enable row level security;
alter table sea_conditions enable row level security;
alter table bookings enable row level security;
alter table payments enable row level security;
alter table refunds enable row level security;
alter table reviews enable row level security;
alter table favorites enable row level security;
alter table notifications enable row level security;

create policy "public read ports" on ports for select using (true);
create policy "public read fish" on fish_species for select using (true);
create policy "public read captains" on captains for select using (true);
create policy "public read boats" on boats for select using (true);
create policy "public read trips" on trips for select using (true);
create policy "public read sea conditions" on sea_conditions for select using (true);
create policy "public read reviews" on reviews for select using (true);

create policy "demo insert trips" on trips for insert with check (true);
create policy "demo insert bookings" on bookings for insert with check (true);
create policy "demo read bookings" on bookings for select using (true);
create policy "demo insert reviews" on reviews for insert with check (true);
create policy "demo insert favorites" on favorites for insert with check (true);
