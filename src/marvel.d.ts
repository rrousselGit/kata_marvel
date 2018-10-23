interface Character {
  id: number;
  name: string;
  description: string;
  modified: Date;
  resourceURI: string;
  urls: Url[];
  thumbnail: Image;
  comics: ComicList;
  stories: StoryList;
  events: EventList;
  series: SeriesList;
}

interface CharacterSummary
  extends Pick<Character, "id" | "name" | "description" | "thumbnail"> {}

interface Url {
  type: string;
  url: string;
}
interface Image {
  path: string;
  extension: string;
}
interface ComicList {
  available: number;
  returned: number;
  collectionURI: string;
  items: ComicSummary[];
}
interface ComicSummary {
  resourceURI: string;
  name: string;
}
interface StoryList {
  available: number;
  returned: number;
  collectionURI: string;
  items: StorySummary[];
}
interface StorySummary {
  resourceURI: string;
  name: string;
  type: string;
}
interface EventList {
  available: number;
  returned: number;
  collectionURI: string;
  items: EventSummary[];
}
interface EventSummary {
  resourceURI: string;
  name: string;
}
interface SeriesList {
  available: number;
  returned: number;
  collectionURI: string;
  items: SeriesSummary[];
}
interface SeriesSummary {
  resourceURI: string;
  name: string;
}
interface AllCharacters {
  totalCharactersCount: number;
  characters: CharacterSummary[];
  page: number;
}

interface MarvelClient {
  getCharacters(page: number): Promise<AllCharacters>;
  getCharacter(id: number): Promise<Character>;
}
