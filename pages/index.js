import React from 'react'
import axios from 'axios'

export async function getStaticProps(context) {
    const pokemons = await axios.get('https://pokeapi.co/api/v2/pokedex/2/').then(res => {
        return res.data.pokemon_entries
    })
    return {
      props: {
          pokemons
      }, // will be passed to the page component as props
    }
  }

export default function Home({ pokemons }) {

    return (
        <div>
            Pokedex
            <ul>
                {pokemons.map( pokemon => (
                    <li key={pokemon.entry_number}>
                        {pokemon.pokemon_species.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}