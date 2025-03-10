<script>
  import { onMount } from 'svelte';
  let produkter = [
    { id: 1, namn: "Äpple", pris: 2, bild: "images/apple-roda.jpg", antal: 1 },
    { id: 2, namn: "Banan", pris: 1, bild: "images/banana.jpg", antal: 1 },
    { id: 3, namn: "Morot", pris: 3, bild: "images/morot.jpg", antal: 1 },
    { id: 4, namn: "Tomat", pris: 2, bild: "images/tomat.jpg", antal: 1 },
    { id: 5, namn: "Apelsin", pris: 2, bild: "images/apelsin.jpg", antal: 1 },
    { id: 6, namn: "Druvor", pris: 4, bild: "images/druvor.jpg", antal: 1 },
    { id: 7, namn: "Potatis", pris: 1, bild: "images/potatis.jpg", antal: 1 },
    { id: 8, namn: "Gurka", pris: 3, bild: "images/gurka.jpg", antal: 1 }
  ];

  let varukorg = [];  
  let visaVarukorg = false;

  function laggTillIVarukorg(produkt) {
    let vara = varukorg.find(p => p.id === produkt.id);
    if (vara) {
      vara.antal += parseInt(produkt.antal);
    } else {
      varukorg = [...varukorg, { ...produkt, antal: parseInt(produkt.antal) }];
    }
  }

  function taBortFranVarukorg(id) {
    varukorg = varukorg.filter(p => p.id !== id);
  }
</script>

<style> 
body {
    font-family: Arial, sans-serif;
    background-color: #f8f9fa;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .header {
    width: 100%;
    background: #007bff;
    color: white;
    text-align: center;
    padding: 15px;
    font-size: 24px;
    font-weight: bold;
    position: relative;
  }
  .cart-icon {
    position: absolute;
    top: 15px;
    right: 20px;
    background: white;
    color: black;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  .main-container {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-top: 20px;
  }
  .content, .sidebar {
    width: 100%;
    padding: 20px;
    background: white;
    border-radius: 5px;
    color: black;
    margin-bottom: 20px;
  }
  .ad img {
    width: 200%;
    border-radius: 50px;
   
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
  .product {
    background: white;
    padding: 15px;
    border-radius: 5px;
    width: 90%;
    text-align: center;
    color: black;
  }
  .product img {
    width: 150px;
    height: 150px;
  }
  .product input {
    width: 50px;
    margin-right: 10px;
    color: black;
  } 
  .product button {
    background: #28a745;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    width: 100%;
    border-radius: 3px;
  }
  .cart {
    margin-top: 20px;
    background: white;
    padding: 15px;
    border-radius: 5px;
    color: black;
  }
  @media (min-width: 768px) {
    .main-container {
      flex-direction: row;
    }
    .content {
      width: 70%;
    }
    .sidebar {
      width: 30%;
      margin-left: 20px;
    }
    .product {
      width: 220px;
    }
  }
</style>

<div class="header">
  Frukt & Grönsaksbutik 
  <button class="cart-icon" on:click={() => visaVarukorg = !visaVarukorg}>🛒 Varukorg ({varukorg.length})</button>
</div>

<div class="main-container">
  <div class="content">
    <h2>Produkter</h2>
    <div class="container">
      {#each produkter as produkt}
        <div class="product">
          <img src={produkt.bild} alt={produkt.namn} />
          <h3>{produkt.namn}</h3>
          <p>{produkt.pris} kr</p>
          <input type="number" min="1" bind:value={produkt.antal}>
          <button on:click={() => laggTillIVarukorg(produkt)}>Lägg till i varukorg</button>
        </div>
      {/each}
    </div>
  </div>
  
  <div class="sidebar">
    <h2>Reklam</h2>
    <div class="ad">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi2Cltq-ik7cRD1wN7GQ3NbymQQBL70f2j0RhmAbNuu_p_rpqReb3PzfKAg_M_01iRbsI&usqp=CAU" alt="Reklam 1">
    </div>
  </div>
</div>

{#if visaVarukorg}
  <div class="cart">
    <h2>Varukorg</h2>
    {#each varukorg as vara}
      <div>
        {vara.namn} - {vara.antal} st - {vara.pris * vara.antal} kr 
        <button on:click={() => taBortFranVarukorg(vara.id)}>❌</button>
      </div>
    {/each}
  </div>
{/if}