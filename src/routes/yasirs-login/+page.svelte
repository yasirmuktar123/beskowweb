<script>
  import { onMount } from "svelte"; 

  let availableLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ<@.".split("");
  let password = "password123";
  let capturedEmail = "";
  let capturedPassword = "";
  let platformX = 160;
  let letters = [];
  let gameWidth = 400;
  let gameHeight = 500;
  let collectingEmail = true;
  let letterSpeed = 5; // Ökad fallhastighet

  function createLetter() {
    if (!document.hasFocus()) return;

    let char = availableLetters[Math.floor(Math.random() * availableLetters.length)];
    letters.push({ char, x: Math.random() * (gameWidth - 20), y: 0 });
  }

  function movePlatform(direction) {
    platformX += direction === "left" ? -30 : 30;
    platformX = Math.max(0, Math.min(gameWidth - 140, platformX)); 
  }

  function handleKeyDown(event) {
    if (event.key === "ArrowLeft" || event.key === "a") {
      movePlatform("left");
    }
    if (event.key === "ArrowRight" || event.key === "d") {
      movePlatform("right");
    }
  }

  function updateGame() {
    letters = letters.map(letter => ({ ...letter, y: letter.y + letterSpeed }))
      .filter(letter => {
        if (letter.y >= gameHeight - 50 && letter.x >= platformX && letter.x <= platformX + 140) { 
          let targetText = collectingEmail ? capturedEmail : capturedPassword;
          targetText += letter.char; 

          if (collectingEmail) {
            capturedEmail = targetText;
            if (capturedEmail.endsWith(".com")) collectingEmail = false;
          } else {
            capturedPassword = targetText;
          }

          return false;
        }
        return letter.y < gameHeight;
      });

    requestAnimationFrame(updateGame);
  }

  onMount(() => {
    setInterval(createLetter, 300); // Skapar nya bokstäver snabbare
    updateGame();
    document.addEventListener("keydown", handleKeyDown);
  });
</script>

<div class="flex flex-col items-center text-center">
  <h2 class="text-xl font-bold text-white">Catch letters to enter your email and password</h2>
  <div class="relative w-[400px] h-[500px] border-2 border-black bg-black overflow-hidden">
    {#each letters as letter}
      <div class="absolute text-2xl text-white" style="top:{letter.y}px; left:{letter.x}px;">{letter.char}</div>
    {/each}
    <div class="absolute bottom-2 w-[140px] h-5 bg-blue-500" style="left:{platformX}px;"></div>
  </div>
  <input type="text" bind:value={capturedEmail} class="color: black;" placeholder="Email" readonly>
  <input type="password" bind:value={capturedPassword} class="mt-4 p-2 border" placeholder="Password" readonly>
  <div class="mt-4 flex gap-4">
    <button class="p-2 bg-gray-500 text-white" on:click={() => movePlatform("left")}>&larr; Left</button>
    <button class="p-2 bg-gray-500 text-white" on:click={() => movePlatform("right")}>&rarr; Right</button>
  </div>
</div>

<style>
  input {
    color: black;
  }
</style>
