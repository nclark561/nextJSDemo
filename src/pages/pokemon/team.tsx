import { PokemonCard } from "@/components/PokemonCard"
import styles from "@/styles/team.module.css"

export default function team ()  {
    const pokemonTeam = [491, 560, 571, 197, 262, 630]

    return (
        <div className={styles.team}>
            <h1>My Team:</h1>
            <PokemonCard team={pokemonTeam}/>
        </div>
    )
}