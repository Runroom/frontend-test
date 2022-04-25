import Head from 'next/head';
import Logo from '../ui/svg/pokemon-logo.svg';
import usePokemon from '../usePokemon';
import usePokemons from '../usePokemons';

const Home = () => {
  const pokemons = usePokemons();
  const pokemon = usePokemon('025');

  console.log(pokemons);
  console.log(pokemon);

  return (
    <>
      <Head>
        <title>Fullstack Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Logo className="logo" />
    </>
  );
};

export default Home;
