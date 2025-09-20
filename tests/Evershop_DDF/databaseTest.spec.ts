import { test, expect } from "@playwright/test";
import { Client } from "pg";
import dotenv from "dotenv";

dotenv.config();
test("database testing", async () => {
  //Step-01_First Create database connection
  const client = new Client({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: process.env.DB_SSLMODE === "disable" ? false : true,
  });

  //Step-02_after that Connect to database
  await client.connect();
  console.log("Connected to database");

  //Get product names by using Query
  const result = await client.query(`SELECT  name
  FROM public.product_description;`);

  // Get product count by using Query
  const product_description_count = await client.query(
    `SELECT COUNT(*) FROM public.product_description;`
  );

  console.log("product count:", product_description_count.rows[0].count);


  //01_Super_Ultra_pro
  const productname = result.rows.map((row) => row.name);
  console.log(productname);

  // //02_Ultra_pro
  // const productNames1 = [];
  // for (const row of result.rows) {
  //   productNames1.push(row.name);
  // }
  // console.log(productNames1);

  
  // //03_Pro
  // const productNames2 = [];
  // for (let i = 0; i < result.rows.length; i++) {
  //   productNames2.push(result.rows[i].name);
  // }
  // console.log(productNames2);

  
  await client.end();
  console.log(" Database connection closed");
});
