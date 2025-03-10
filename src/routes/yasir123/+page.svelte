<script>
  import { onMount } from 'svelte';

  let words = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
  let fallingWords = [];
  let typedWord = "";
  let speed = 5; // Increased speed to make words fall faster
  let containerHeight = 600;
  let containerWidth = 500;
  let score = 0; // Initialize score
  

  function addWord() {
    let randomWord = words[Math.floor(Math.random() * words.length)];
    let randomX = Math.random() * (containerWidth + 500); // Spread words horizontally
    fallingWords.push({ text: randomWord, x: randomX, y: 0, time: Date.now() });
  }

  function updateWords() {
    fallingWords.forEach(word => {
      word.y += speed;
    });

    // Check if words are off-screen, deduct points if they are
    fallingWords.forEach(word => {
      if (word.y >= containerHeight) {
        score -= 1; // Deduct 1 point if the word falls off the screen
        fallingWords = fallingWords.filter(w => w !== word);
      }
    });

    fallingWords = fallingWords.filter(word => word.y < containerHeight);
  }

  function checkWord() {
    fallingWords = fallingWords.filter(word => {
      if (word.text === typedWord.trim()) {
        score += 1; // Increase score for a correct match
        typedWord = ""; // Clear input after successful match
        return false; // Remove the matched word
      }
      return true;
    });
  }

  onMount(() => {
    setInterval(() => {
      addWord();
    }, 800); // Faster word spawn rate
    setInterval(() => {
      updateWords();
    }, 50); // More frequent updates for smoother movement
  });

</script>

<style>
  :root {
    --current-color: rgb(255, 255, 255);
  }

  .game-container {
    margin:auto;
    position: relative;
    width: 70vw;
    height: 70vh;
    border: 2px solid black;
    overflow: hidden;
    background: white;
  }
  .word {
    position: absolute;
    font-size: 20px;
    color: black;
  }
  input {
    margin:auto;
    display: block;
    margin-top: 10px;
    width: 50%;
    padding: 5px;
    font-size: 16px;
    border: 1px solid black;
    color: black;
    background: white;
  }
  .score {
    margin: auto;
    margin-top: 15px;
    font-size: 48px;
    font-weight: bold;
    color: var(--current-color);
  }
  .input-container {
    text-align: center;
  }
</style>

<div class="game-container">
  {#each fallingWords as word (word.text + word.y)}
    <div class="word" style="top:{word.y}px; left:{word.x}px;">
      {word.text}
    </div>
  {/each}
</div>
<div class="input-container">
<input type="text" bind:value={typedWord} on:input={checkWord} placeholder="Type here..." />
<div class="score" style="color: {score < 0 ? 'red' : 'green'}">Score: {score}</div>
</div>
