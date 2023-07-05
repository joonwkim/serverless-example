pnpm add -D prisma
pnpm add @prisma/client
pnpx prisma init //to initialize prism

pnpx prisma db push

pnpx prisma generate


Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started 
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.      
3. Run prisma db pull to turn your database schema into a Prisma schema.    
4. Run prisma generate to generate the Prisma Client. You can then start querying your database.


add .env to .gitignore

create model on schema.prisma



create lib folder

create prisma.ts to create prisma client instance

create services folder for data service

modify next.config.ts to 
/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverActions:true,
    }
}

module.exports = nextConfig


// bootstrap 

pnpm add bootstrap react-bootstrap
pnpm add @types/react-bootstrap -D

import 'bootstrap/dist/css/bootstrap.min.css' on layout.tsx


Deploying from source
vercel deploy
