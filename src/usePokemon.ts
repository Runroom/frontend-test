import { useQuery } from 'react-query';
import api from './services/api';

const usePokemon = (number: string) => {
  const { data } = useQuery(['pokemons', number], ({ signal }) =>
    api.get('pokemons/' + number, { signal })
  );

  return {
    pokemon: data
  };
};

export default usePokemon;
