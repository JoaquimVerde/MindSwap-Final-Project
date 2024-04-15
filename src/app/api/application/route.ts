import { NextRequest, NextResponse } from "next/server";

import { Application } from "@/app/lib/definitions";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json();
    console.log(body);

    return NextResponse.json(body);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error });
  }

  // const res = await fetch(" http://${process.env.NEXT_PUBLIC_URL}:/proxy/api/v1/registration", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     //"API-Key": process.env.DATA_API_KEY!,
  //   },
  //   body: JSON.stringify({}),
  // });

  // const data = await res.json();

  // return Response.json(data);
}
