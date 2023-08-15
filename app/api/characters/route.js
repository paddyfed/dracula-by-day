import { NextResponse } from "next/server";
import characters from '@/json/characters.json'


export async function GET() {
    return NextResponse.json({ characters: characters.data })
}