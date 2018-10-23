interface CharacterDataWrapper {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: CharacterDataContainer;
  etag: string;
}
interface CharacterDataContainer {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Character[];
}

export class MarvelApiClient implements MarvelClient {
  constructor(private readonly apiKey: string) {}

  async getCharacter(id: number): Promise<Character> {
    const res: CharacterDataWrapper = await fetch(
      `https://gateway.marvel.com/v1/public/characters/${id}?apikey=${
        this.apiKey
      }`,
    ).then((r) => r.json());
    return res.data.results[0];
  }

  async getCharacters(page: number): Promise<AllCharacters> {
    const result: CharacterDataWrapper = await fetch(
      `https://gateway.marvel.com/v1/public/characters?apikey=${this.apiKey}`,
    ).then((r) => r.json());

    return {
      totalCharactersCount: result.data.total,
      page,
      characters: result.data.results,
    };
  }
}

if (!process.env || !process.env.VUE_APP_MARVEL_API_KEY) {
  throw new Error("Missing environment VUE_APP_MARVEL_API_KEY");
}

// bad singleton ! How to skip this?
export const client = new MarvelApiClient(process.env.VUE_APP_MARVEL_API_KEY);
