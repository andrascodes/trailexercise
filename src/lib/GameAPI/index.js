import { data as games } from './games.json'

export const getAllGames = () => games.slice()

export const getGamesPlayedByFriends = () => games.filter(({ attributes }) => 
  attributes.online_friends !== null && attributes.online_friends.length > 0
)