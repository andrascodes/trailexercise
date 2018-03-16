import { data as games } from './games.json'

const GameAPI = {
  getAllGames: () => games.slice(),
}

export default GameAPI