import { create } from 'zustand';
import prismadb from "@/lib/prismadb";
import { NextResponse } from "@/node_modules/next/server";
import { auth } from "@clerk/nextjs";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();

    const { name } = body;

    if (!userId) return new NextResponse("Unauthorized", { status: 401 });
    if (!name) return new NextResponse("Name is  required", { status: 400 });

    const store = await prismadb.store.create({
        data: {
            name, 
            userId
        }
    })

    return NextResponse.json(store)
  } catch (error) {
    console.log("[STORES_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
