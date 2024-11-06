<script>
    let name = "";
    let email = "";
    let password = "";
    let color = "black";
    let colors = [
        { namn: "Blå", value: "blue" },
        { namn: "Röd", value: "white" },
        { namn: "Grön", value: "green" },
        { namn: "Gul", value: "yellow" },
        { namn: "Svart", value: "pink" }
    ];

    function handleSubmit() {
        alert(`Välkommen ${name}!\nE-post: ${email}\nLösenord: ${password}\nFavoritfärg: ${color}`);
    }
</script>

<main>
    <div class="container">
        <h2>Registrering</h2>
        <form on:submit|preventDefault={handleSubmit}>
            <!-- Färgcirkel -->
            <div style="width: 100px; height: 100px; border-radius: 50%; overflow:hidden; background-color:{color}; margin: auto;"></div>
            
           
            
            namnen 
            <label for="name">Namn:</label>
            <input type="text" id="name" bind:value={name} />

            <!-- E-post fält -->
            <label for="email">E-post:</label>
            <input type="email" id="email" bind:value={email} />

            <!-- Lösenord fält -->
            <label for="password">Lösenord:</label>
            <input type="password" id="password" bind:value={password} />

            <!-- Favoritfärg dropdown -->
            <label for="color">Favoritfärg:</label>
            <select id="color" bind:value={color}>
                {#each colors as c}
                    <option value={c.value}>{c.namn}</option>
                {/each}
            </select>

            <!-- Registrera knapp -->
            <input type="submit" value="Registrera" />
        </form>
    </div> 
</main>

<style>
    main {
        background-image: url("https://t4.ftcdn.net/jpg/05/21/65/59/360_F_521655929_N80d5GaCQJ2VP073PfTXJTe9mkvsNtHE.jpg");
        background-size: cover;
        width: 100%;
        height: 100%;
        padding: 5%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container {
        border: solid 5px rosybrown;
        border-radius: 10px;
        width: 35%;
        height: 80%;
        background-color: #3a2e3b;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        padding: 1rem;
    }

    label, input, select {
        margin: 0.5rem 0;
        width: 80%;
    }

    h2 {
        text-align: center;
        color: white;
    }
</style>
