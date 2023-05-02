interface pokemon {
  team: Array<number>;
}

export const PokemonCard = (props: pokemon) => {
  const { team } = props;

  return (
    <div>
      {team.map((e: number) => (
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${e}.png`}
        />
      ))}
    </div>
  );
};
