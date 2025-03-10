 <script>
    import {goto} from "$app/navigation"
    let search=""
 </script>
<form on:submit|preventDefault={()=> goto('/search/'+search)}>
    <input type="text" placeholder="Sök upp en pokemon" bind:value={search} />
  </form>

<style>
    form{
        color:black;
    }
</style>
                   