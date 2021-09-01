import { IEpisode } from "../interfaces/Episode";
import getFullEpisodeNumber from "../utils/EpisodeNumber";

const showStyles = {
  border: 10,
  padding: 5,
  width: "30vw",
};

function Show(props: IEpisode): JSX.Element {
  return (
    <section style={showStyles}>
      <h2>
        {props.name} - {getFullEpisodeNumber(props)}
      </h2>
      <img src={props.image.medium} />
      <p>{props.summary.slice(3, -4)}</p>
    </section>
  );
}

export default Show;
