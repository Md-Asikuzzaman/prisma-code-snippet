import { fetchUsers, createUser } from '@/prisma/user';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(res: NextResponse) {
  const users = await fetchUsers();

  return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
  const { email, name, age } = await req.json();

  const newUser = await createUser(email, name, age);

  return NextResponse.json(newUser);
}
