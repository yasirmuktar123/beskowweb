<script>
    import { fade } from 'svelte/transition'

    let varor = [{name : "Mjölk", buy : false, viktig : "green"}]
    let varaAttAdda = ""

    function läggVara(){
        if(varaAttAdda != "")
        {
            varor.unshift({name : varaAttAdda, buy : false, viktig : "green"})
        }

        varor = varor
    }

    function taBortVara(vara){
        varor.splice(varor.indexOf(vara), 1)

        varor = varor
    }

    function flyttaVara(vara){
        vara.buy = !vara.buy

        varor = varor
    }

    $:varor.sort((vara1, vara2) => {
        const ordning = {red: 0, yellow : 1, green : 2}
        return ordning[vara1.viktig] - ordning[vara2.viktig]
    })

</script>
<main class="container">
    <h1>
        Shoppinglist
    </h1>

    <div class="categories_container">
        <section>
            <h2>Varor att köpa</h2>
            <input type="text" bind:value={varaAttAdda}>
            <button style="display:inline-block;" on:click={läggVara}>Lägg till vara</button>
            <ol>
                {#each varor as vara}
                    {#if vara.buy === false}
                        <li transition:fade>
                            <select bind:value={vara.viktig}  style="background-color: {vara.viktig}; color: transparent;">
                                <option value="red" style="background-color: red">Hög</option>
                                <option value="yellow" style="background-color: yellow">Mid</option>
                                <option value="green" style="background-color: green">Låg</option>
                            </select>

                            <div>{vara.name}</div>
                            
                           <div>
                            <button on:click={flyttaVara(vara)}>Markera klar</button>
                            <button on:click={taBortVara(vara)}>Ta bort vara</button>
                           </div>
                        </li>
                    {/if}
                {/each}
            </ol>
        </section>
        <section>
            <h2>Köpta varor</h2>
            <ul>
                {#each varor as vara}
                    {#if vara.buy === true}
                        <li transition:fade>{vara.name}
                            <div>
                                <button on:click={flyttaVara(vara)}>Markera oklar</button>
                                <button on:click={taBortVara(vara)}>Ta bort vara</button>
                            </div>
                        </li>
                    {/if}
                {/each}
            </ul>
        </section>
    </div>
</main>

<style>
    
.container{
    background-color: rgb(226, 113, 113);
    width: 60vw;
    height: 70vh;
    border-radius: 20px;

    
    display: grid;
    grid-template-rows: 1fr 9fr 1fr;
        
}

.container h1{
    background-color: red;
    justify-self: center;
    align-self: center;
    font-size: xx-large;
    padding: 10px;

}

.categories_container{
    height: 100%;
    background-color: rebeccapurple;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
}

section{
    width: 100%;
}

input{
    margin: 2px 4px;
    color: black;
    background-color: white; 
}

h2{
    background-color: rgb(211, 148, 30);
    text-align: center; 
    margin: 8px 0px;
}

.categories_container section:last-child{
    background-color: rgba(123, 120, 120, 0.1);
}

.categories_container section:first-child{
    background-color: rgba(0, 0, 0, 0.3);
}

li{
    background-color: rgb(148, 138, 118);
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 10px;
    margin: 4px;
    border-bottom-width: 1px;
    border-color: rgb(190, 148, 148);
}

li button{
    margin: 0px 10px;
    padding: 2px;
    
}
        
</style>