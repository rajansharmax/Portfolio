import { NextResponse } from "next/server";

interface Repository {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    stargazers_count: number;
}

export async function GET(): Promise<Response> {
    const res = await fetch("https://api.github.com/users/rajansharmax/repos").then((res) => res.json());

    if (!res.ok) {
        return NextResponse.error();
    }

    const repos: Repository[] = await res.json();

    return new Response(JSON.stringify(repos), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}