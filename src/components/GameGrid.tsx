import { SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { px } from "framer-motion";
import GameCard from "./GameCard";
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
        <SimpleGrid columns={3} spacing={10}>
            {games.map(game => <GameCard key={game.id} game={game} />)}
        </SimpleGrid>
      </>
    );
}


export default GameGrid;