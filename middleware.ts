import { NextRequest, NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const middleware = (req : NextRequest, res : NextResponse) => {
    return NextResponse.next(); // Return the next response in the chain
}

export default middleware;