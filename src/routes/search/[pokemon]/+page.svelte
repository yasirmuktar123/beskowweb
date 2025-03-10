
<script>
    /** @type {import('./$types').PageData} */
    export let data;

    //
  </script>
  
  {#await data}
    <p>.. waiting</p>
  {:then pokemon} 
  <article>
    {#each Object.entries(pokemon.response.sprites) as sprites}
      {#if typeof sprites[1] == "string"}
      <img src={sprites[1]} />
      {/if}
    {/each}
    <p>Name {pokemon.response.name}</p>
    {#each pokemon.response.types as types}
      <p>Type : {types.type.name}</p>
    {/each}
    <p>Vikt : {pokemon.response.weight} hg</p>
    <p>Längd : {pokemon.response.height} dm</p>
  </article>
  <h1>{pokemon.response.name}</h1>
  <section>
  
  </section>
  
  {/await}  
  
  
<style>
    article{
        display:flex;
        width:100%;
        height:30%;
        gap:1em;

        flex-wrap: wrap;

    }

    img{
      width: 100px;
      height: 100px;

      image-rendering: pixelated;
    }

</style>