
export interface Movie {
  title: string; // Titolo film
  tags: string[]; // Tags del film (es. horro, action, kids, family ecc...) TODO DA DEFINIRE I TAG
  description: string; // Descrizione film
  releaseYear: number; // Anno uscita film
  duration: string; // Durata film espressa come hh : ss
  cast: Actor[]; // Attori che hanno partecipato al film
  director: string; // Film diretto da
  imageUrl: string; // Immagine copertina film
  trailerUrl: string; // Trailer url film
  movie: boolean; // true film , false serie tv
  alreadySeen: boolean; // Flag se stato visto dall'utente
  views: number; // Numero persone che hanno visto il film
  rating: number; // Valutazione del film da parte di utenti
  added: Date; // Giorno in cui è stato aggiunto
}

export interface Actor {
  name: string; // Nome attore
  character: string; // Nome personaggio interpretato
}
