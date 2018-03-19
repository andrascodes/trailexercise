import { data as games } from './games.json'

const GameAPI = {
  getAllGames: () => games.slice(),
  getGameBySlug: slug => games.find(game => game.attributes.slug === slug)
}

export default GameAPI