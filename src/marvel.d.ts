interface CharacterDetails {}

interface AllCharacters {
  characters: CharacterDetails;
  page: number;
}

interface MarvelClient {
  getCharacters(page: number): Promise<AllCharacters>;
}
