export class MarvelApiClient implements MarvelClient {
  getCharacters(_: number): Promise<AllCharacters> {
    throw new Error("Method not implemented.");
  }
}
