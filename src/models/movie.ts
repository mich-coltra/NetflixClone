
export interface Movie {
  title: string;
  tags: string[];
  description: string;
  releaseYear: number;
  duration: string;
  cast: Actor[];
  director: string;
  imageUrl: string;
  trailerUrl: string;
  movie: boolean; // true film , false serie tv
  alreadySeen: boolean;
  views: number;
  rating: number;
}

export interface Actor {
  name: string;
  character: string;
}
