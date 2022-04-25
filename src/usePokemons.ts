import { useQuery } from 'react-query';
import api from './services/api';

const usePokemons = () => {
  const { data } = useQuery(['pokemons'], ({ signal }) => api.get('pokemons', { signal }));

  return {
    pokemons: data
  };
};

export default usePokemons;
