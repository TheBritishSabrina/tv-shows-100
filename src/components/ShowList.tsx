import { useState } from "react";
import Show from "./Show";
import episodes from "../episodes.json";
import { IEpisode } from "../interfaces/Episode";

const listStyles = {
  display: "flex",
};

function ShowList(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");

  // add useEffect to filter list when searchTerm changes
  // add dropdown
  // add counter

  return (
    <div>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <section style={listStyles}>
        {episodes
          .filter(
            (episode) =>
              episode.summary
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
              episode.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((episode: IEpisode) => (
            <Show
              key={episode.id}
              id={episode.id}
              url={episode.url}
              name={episode.name}
              season={episode.season}
              number={episode.number}
              type={episode.type}
              airdate={episode.airdate}
              airtime={episode.airtime}
              airstamp={episode.airstamp}
              runtime={episode.runtime}
              image={episode.image}
              summary={episode.summary}
              _links={episode._links}
            />
          ))}
      </section>
    </div>
  );
}

export default ShowList;
