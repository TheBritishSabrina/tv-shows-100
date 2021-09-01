import { IEpisode } from "../interfaces/Episode";

const showStyles = {
  border: 10,
  padding: 5,
  width: "30vw",
};

function Show(props: IEpisode): JSX.Element {
  const fullEpisodeNumber =
    "S" +
    (props.season < 10 && "0") +
    props.season +
    "E" +
    (props.number < 10 && "0") +
    props.number;

  return (
    <section style={showStyles}>
      <h2>
        {props.name} - {fullEpisodeNumber}
      </h2>
      <img src={props.image.medium} />
      <p>{props.summary.slice(3, -4)}</p>
    </section>
  );
}

export default Show;
