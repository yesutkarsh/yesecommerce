import { NextResponse } from "next/server";

import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";


export async function middleware(request) {
    const {isAuthenticated} = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();
    if(isUserAuthenticated){
        return NextResponse.next()
    }
    return NextResponse.redirect(new URL('/pages/signup', request.url))
        
}

export const config = {
    matcher: ['/pages/whoami','/pages/order'],
  }