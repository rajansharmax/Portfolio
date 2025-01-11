export async function GET() {
    const location = {
        description: "Chandigarh",
        latitude: 30.7333,
        longitude: 76.7794,
        date: Date.now(),
    };

    return new Response(JSON.stringify(location), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}
