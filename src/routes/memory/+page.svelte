<script>
  let images = []
  // Skapa variabler och data
  let cards = Array(6)
    .fill(null)
    .flatMap((_, i) => [
      { id: i, image: ("memory/" + i + ".png"), flipped: false, matched: false },
      { id: i, image: ("memory/" + i + ".png"), flipped: false, matched: false }
    ])
    .sort(() => Math.random() - 0.5); // Slumpa kortens placering

  let bluePoints = 0; 
  let redPoints = 0; 
  let blueTurn = true; 
  let flippedCards = []; 
  let flipCount = 0; 
  let disableClicks = false; 
  let gameOver = false; // Indikerar om spelet är slut

  function flipCard(index) {
    if (disableClicks || cards[index].flipped || cards[index].matched || gameOver) return;

    cards = cards.map((card, i) =>
      i === index ? { ...card, flipped: true } : card
    );
    flippedCards.push(index);
    flipCount++;

    if (flipCount === 2) {
      disableClicks = true;
      const [first, second] = flippedCards;

      if (cards[first].id === cards[second].id) {
       
        cards = cards.map((card, i) =>
          i === first || i === second ? { ...card, matched: true } : card
        );
        blueTurn ? bluePoints++ : redPoints++;
        checkGameOver(); 
        resetFlippedCards();
      } else {
      
        setTimeout(() => {
          cards = cards.map((card, i) =>
            i === first || i === second ? { ...card, flipped: false } : card
          );
          resetFlippedCards();
          blueTurn = !blueTurn; 
        }, 1000);
      }
    }
  }

  function resetFlippedCards() {
    flippedCards = [];
    flipCount = 0;
    disableClicks = false;
  }

  function resetGame() {
    // Nollställ spelet
    bluePoints = 0;
    redPoints = 0;
    blueTurn = true;
    gameOver = false;
    cards = cards.map(card => ({ ...card, flipped: false, matched: false })).sort(() => Math.random() - 0.5);
  }

  function checkGameOver() {
    if (cards.every(card => card.matched)) {
      gameOver = true;
      alert(`Spelet är slut! ${bluePoints > redPoints ? 'Blå spelare vinner!' : redPoints > bluePoints ? 'Röd spelare vinner!' : 'Det är oavgjort!'}`);
    }
  }
</script>

<style>
  /* Layout och stil */
  h1 {
    text-align: center;
    margin-top: 20px;
  }

  main {
    display: grid;
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: repeat(3, 100px);
    gap: 10px;
    justify-content: center;
    margin: 20px auto;
  }

  @media (max-height: 500px) {
    main {
      grid-template-columns: repeat(6, 100px);
      grid-template-rows: repeat(2, 100px);
    }
  }

  .card {
    position: relative;
    width: 100px;
    height: 100px;
    border: 1px solid black;
    perspective: 1000px;
  }

  .card-inner {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.5s;
  }

  .card.flipped .card-inner {
    transform: rotateY(180deg);
  }

  .front,
  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .front {
    background-color: white;
    border: 1px solid black;
    transform: rotateY(180deg);
  }

  .back {
    background-color: #333;
    color: white;
    background-image: url("https://play-lh.googleusercontent.com/mrjcLx29YdA8FE29vfkX4GOWrKKvEVM_PUJydLiFKpq_bmYV9Cric5T77skgaIN9PLA=s256-rw");
    background-size: contain;
    background-repeat: no-repeat;
  }

  aside {
    width: 100px;
    height: 100px;
    position: fixed;
    bottom: 10px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .blue {
    right: 10px;
    background-color: blue;
  }

  .turn {
    z-index: -1;
    box-shadow: 0 0 10px 10px yellowgreen;
    position: fixed;
    bottom: 10px;
  }

  p {
    font-size: 30px;
    color: white;
  }

  .card:not(.flipped):hover {
    transform: scale(1.1);
    transition: transform 0.2s;
  }

  button {
    margin: 20px auto;
    display: block;
    padding: 10px 20px;
    font-size: 16px;
    background-color: green;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: darkgreen;
  }
</style>

<h1>Memory</h1>

<main>
  {#each cards as card, index}
    <div class="card {card.flipped ? 'flipped' : ''}" on:click={() => flipCard(index)}>
      <div class="card-inner">
        <div class="front">
          <img src={card.image} alt="Card front" style="width: 80%; height: 80%;" />
        </div>
        <div class="back"></div>
      </div>
    </div>
  {/each}
</main>

<aside class="blue">
  <p>{bluePoints}</p>
</aside>
<aside>
  <p>{redPoints}</p>
</aside>
<aside class="turn" class:blue={blueTurn}></aside>

<button on:click={resetGame}>Starta om</button>
