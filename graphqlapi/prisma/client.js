import pg from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

const connectionString = `postgresql://naveenkumar:password123@localhost:5432/gymshark`;
const { Pool } = pg;

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool, {
  schema: "public",
});
const prisma = new PrismaClient({ adapter });

export default prisma;
