import { SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
//import { GameQuery } from "../App";
//import useGames, { Platform } from "../hooks/useGames";
//import { Genre } from "../hooks/useGenres";
//import GameCard from "./GameCard";
//import GameCardContainer from "./GameCardContainer";
//import GameCardSkeleton from "./GameCardSkeleton";

interface Game {
    id: number;
    name: string;
}

interface FetchGameResponse {
    count: number;
    results: Game[]
}
const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        apiClient.get<FetchGameResponse>('./games')
            .then(res => setGames(res.data.results))
    })
    return (
      <>
      {error && <Text>{error}</Text>}
        <ul >
            {games.map(game => <li key={game.id}>{game.name}</li>)}
        </ul>
      </>
    );
}


export default GameGrid;