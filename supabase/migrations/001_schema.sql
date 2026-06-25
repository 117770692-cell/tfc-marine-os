-- TFC Marine OS v1.0-alpha schema
create extension if not exists "pgcrypto";

drop table if exists notifications cascade;
drop table if exists favorites cascade;
drop table if exists reviews cascade;
drop table if exists refunds cascade;
drop table if exists payments cascade;
drop table if exists bookings cascade;
drop table if exists sea_conditions cascade;
drop table if exists trips cascade;
drop table if exists boats cascade;
drop table if exists captains cascade;
drop table if exists fish_species cascade;
drop table if exists ports cascade;
drop table if exists profiles cascade;

create table profiles (
  id uuid primary key default gen_random_uuid(),
  user_name text not null,
  phone text,
  avatar_url text,
  city text default '青岛',
  credit_score int default 90,
  trip_count int default 0,
  role text default 'angler' check (role in ('angler','captain','admin')),
  created_at timestamptz default now()
);

create table ports (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  city text not null,
  address text,
  longitude numeric,
  latitude numeric,
  created_at timestamptz default now()
);

create table fish_species (
  id uuid primary key default gen_random_uuid(),
  name_cn text not null,
  name_en text,
  season text,
  technique text,
  created_at timestamptz default now()
);

create table captains (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid references profiles(id),
  name text not null,
  phone text,
  level text default '认证船东',
  rating numeric default 5,
  verified boolean default false,
  trip_count int default 0,
  punctuality_rate numeric default 0.98,
  cancel_rate numeric default 0.01,
  created_at timestamptz default now()
);

create table boats (
  id uuid primary key default gen_random_uuid(),
  captain_id uuid references captains(id) on delete cascade,
  name text not null,
  capacity int not null,
  length numeric,
  horsepower int,
  image_url text,
  equipment text[] default '{}',
  created_at timestamptz default now()
);

create table trips (
  id uuid primary key default gen_random_uuid(),
  boat_id uuid references boats(id) on delete cascade,
  captain_id uuid references captains(id) on delete cascade,
  port_id uuid references ports(id),
  title text not null,
  date date not null,
  start_time text not null,
  end_time text not null,
  sea_area text not null,
  price int not null,
  total_seats int not null,
  booked_seats int default 0,
  target_fish text[] default '{}',
  status text default 'open' check (status in ('open','full','cancelled')),
  note text,
  created_at timestamptz default now()
);

create table sea_conditions (
  id uuid primary key default gen_random_uuid(),
  trip_id uuid references trips(id) on delete cascade,
  wind_level text,
  wave_height text,
  tide text,
  water_temp text,
  fishing_index int default 4,
  created_at timestamptz default now()
);

create table bookings (
  id uuid primary key default gen_random_uuid(),
  trip_id uuid references trips(id) on delete cascade,
  user_id uuid references profiles(id),
  user_name text default '测试用户',
  phone text,
  people int not null default 1,
  amount int not null,
  status text default 'pending' check (status in ('pending','paid','cancelled','refunded','waitlist')),
  note text,
  created_at timestamptz default now()
);

create table payments (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid references bookings(id) on delete cascade,
  amount int not null,
  provider text default 'wechat',
  status text default 'pending',
  transaction_no text,
  paid_at timestamptz,
  created_at timestamptz default now()
);

create table refunds (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid references bookings(id) on delete cascade,
  amount int not null,
  reason text,
  status text default 'pending',
  created_at timestamptz default now()
);

create table reviews (
  id uuid primary key default gen_random_uuid(),
  trip_id uuid references trips(id) on delete cascade,
  user_id uuid references profiles(id),
  rating int not null check (rating between 1 and 5),
  content text,
  created_at timestamptz default now()
);

create table favorites (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id),
  trip_id uuid references trips(id) on delete cascade,
  created_at timestamptz default now(),
  unique(user_id, trip_id)
);

create table notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id),
  title text not null,
  content text,
  read boolean default false,
  created_at timestamptz default now()
);

create index idx_trips_date on trips(date);
create index idx_bookings_trip on bookings(trip_id);
create index idx_bookings_status on bookings(status);
