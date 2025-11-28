import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "visit-count.txt");

  try {
    let count = 0;

    try {
      const data = await fs.readFile(filePath, "utf-8");
      count = parseInt(data);
    } catch {
      count = 0;
    }

    count++;

    await fs.writeFile(filePath, count.toString());

    return NextResponse.json({ visits: count });
  } catch (error) {
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}
