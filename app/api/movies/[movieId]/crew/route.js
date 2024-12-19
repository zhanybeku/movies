import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { movieId } = await params;
  if (!movieId) {
    return NextResponse.json(
      { error: "Movie ID is required" },
      { status: 400 }
    );
  }

  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch movie details" },
        { status: response.status }
      );
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
