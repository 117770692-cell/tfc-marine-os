# TFC Marine OS v1.0-alpha 完整工程包

这是 TFC 海钓数字化平台的 V1 Alpha 版本，用于本地测试和后续 GitHub 正式仓库初始化。

## 已包含功能

- React + TypeScript + Vite
- 自定义 TFC Design System CSS 变量
- Supabase 客户端接入
- 首页 / 发船大厅
- 航次详情页
- 报名确认页
- 我的订单
- 发布航次
- 船东工作台
- 运营后台基础页
- Supabase 数据库 SQL
- RLS 权限策略
- Seed 测试数据

## 运行方式

```cmd
cd C:\Users\Administrator\TFC-Fishing\tfc-marine-os-v1-alpha-complete
npm install --registry=https://registry.npmmirror.com --package-lock=false
npm run dev
```

浏览器打开：

```text
http://localhost:5173
```

## Supabase 配置

复制环境变量文件：

```cmd
copy apps\angler-web\.env.example apps\angler-web\.env.local
```

填写：

```env
VITE_SUPABASE_URL=https://ixaadhkkkdwnqkikegxi.supabase.co
VITE_SUPABASE_ANON_KEY=你的 Supabase anon / publishable key
```

## 数据库初始化

在 Supabase SQL Editor 按顺序执行：

```text
supabase/migrations/001_schema.sql
supabase/migrations/002_rls.sql
supabase/seed/003_seed.sql
```

## 当前版本定位

这是 MVP Alpha，不是最终商业版。目标是先打通：

```text
首页 → 航次详情 → 报名确认 → 我的订单 → 发布航次 → 船东工作台
```

后续版本继续加入：登录、微信支付、图片上传、真实船东审核、管理后台、商城与俱乐部模块。
