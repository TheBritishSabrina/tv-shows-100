import { useEffect, useState } from "react";
import Show from "./Show";
import episodes from "../episodes.json";
import { IEpisode } from "../interfaces/Episode";

const listStyles = {
  display: "flex",
};

function ShowList(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEpisode, setSelectedEpisode] = useState<IEpisode>();
  const [filteredEpisodes, setFilteredEpisodes] =
    useState<IEpisode[]>(episodes);

  useEffect(() => {
    const newFilteredEpisodes = episodes.filter(
      (episode) =>
        episode.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        episode.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredEpisodes(newFilteredEpisodes);
  }, [searchTerm]);

  useEffect(() => {
    if (selectedEpisode) {
      setFilteredEpisodes([selectedEpisode]);
    } else {
      setFilteredEpisodes(episodes);
    }
  }, [selectedEpisode]);

  return (
    <div>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div></div>
      <select>
        {filteredEpisodes.map((episode: IEpisode, index) => (
          <option key={index}>{episode.name}</option>
        ))}
      </select>
      {filteredEpisodes.length !== episodes.length && (
        <p>
          Showing {filteredEpisodes.length} of {episodes.length} episodes
        </p>
      )}
      <section style={listStyles}>
        {filteredEpisodes.map((episode: IEpisode) => (
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
