interface Repository {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    stargazers_count: number;
}

export async function GET(): Promise<Response> {
    try {
        const res = await fetch("https://api.github.com/users/rajansharmax/repos");

        if (!res.ok) {
            throw new Error("Failed to fetch repositories");
        }

        const repos: Repository[] = await res.json();

        return new Response(JSON.stringify(repos), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error: any) {
        return new Response(
            JSON.stringify({ error: "Error fetching repositories", message: error.message }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}