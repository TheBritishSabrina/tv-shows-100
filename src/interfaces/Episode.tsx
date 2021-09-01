export interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image?: {
    medium: string;
    original: string;
  } | null;
  summary: string;
  _links: { self: { href: string } };
}
