import { IEpisode } from "../interfaces/Episode";

export default function getFullEpisodeNumber(props: IEpisode): string {
  const fullEpisodeNumber =
    "S" +
    (props.season < 10 ? "0" : "") +
    props.season +
    "E" +
    (props.number < 10 ? "0" : "") +
    props.number;

  return fullEpisodeNumber;
}
