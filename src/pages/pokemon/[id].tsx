import { useRouter } from "next/router"

export default function Pokemon() {
    const router = useRouter()
    const { id } = router.query

    return (
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}/>
    )
}