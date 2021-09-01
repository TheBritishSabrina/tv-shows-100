import { useEffect, useState } from "react";
import Show from "./Show";
import episodes from "../episodes.json";
import { IEpisode } from "../interfaces/Episode";
import getFullEpisodeNumber from "../utils/EpisodeNumber";

const listStyles = {
  display: "flex",
};

function ShowList(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEpisode, setSelectedEpisode] = useState<IEpisode>();
  const [filteredEpisodes, setFilteredEpisodes] =
    useState<IEpisode[]>(episodes);

  const handleClear = () => {
    setSelectedEpisode(undefined);
  };

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
      <select
        onChange={(e) =>
          setSelectedEpisode(
            episodes.filter((episode) => episode.name === e.target.value)[0]
          )
        }
      >
        {/* TODO: Find a better way to select a single episode in case of name clashes */}
        {episodes.map((episode: IEpisode, index) => (
          <option value={episode.name} key={index}>
            {getFullEpisodeNumber(episode) + ": " + episode.name}
          </option>
        ))}
      </select>
      <button onClick={handleClear}>Clear selection</button>
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
