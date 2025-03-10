<script>
  import ElizaBot from 'elizabot';
  import { enhance } from "$app/forms";
  import { chat_store } from "$lib/chat"
  import { onMount } from 'svelte';
  import {base} from '$app/paths'

onMount(() => {
  chat = $chat_store.length>2?JSON.parse($chat_store):chat = [{ user: 'Eliza', message: eliza.getInitial() }];
});

  const eliza = new ElizaBot();
  let chat = [{ user: 'Eliza', message: eliza.getInitial() }];
  let isTyping = false
  let botName = 'Eliza'

  // Funktion för att skriva meddelanden och få Elizas svar
  async function write(message) {
    if (isTyping) {return}
    $chat_store = JSON.stringify(chat)

    chat.push({user : "user", message : message})

    /*var element = document.getElementById("visible")*/
    chat=chat
    isTyping = true
    chat= chat
    await new Promise((r) => setTimeout(r, 1000 + Math.random() * 250))
    isTyping = false
    chat = chat

    let response = eliza.transform(message)
    chat.push({user : botName, message : response})
    $chat_store = JSON.stringify(chat)  
    chat = chat
  }

  function chatClear(){
    chat = [{ user: 'Eliza', message: eliza.getInitial() }]
    $chat_store = JSON.stringify(chat)
    chat= chat
  }
</script>

<style>
  main {
    width: 60vw;
    height: 70vh;
    margin: auto;
    padding: 10px;
    background-color: #cd2222f4;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
  }

  section {
    flex: 1;
    overflow-y: scroll; 
    margin-bottom: 10px; 
  }

  article {
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    width: 90%;
  }

  article.You {
    background-color: #557aa2;
    align-self: flex-end;
  }

  article.Eliza {
    background-color: #28b056;
    align-self: flex-start;
  }

  form {
    display: flex;
    gap: 10px;
  }
  
  input {
    flex: 1;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #820d3e;
    color: #000;
  }

  button {
    padding: 10px 20px;
    background-color: #28a745;
    color: rgb(103, 134, 149);
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #218838;
  } 

  /* Indikator för att Eliza skriver */
  #visible {
    display: none;
    height: 60px; 
    justify-content: center;
    align-items: center;
  }

  .circle {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #844747;
    margin: 0 5px;
    animation: typing 1s infinite;
  }

  .circle:nth-child(2) {
    animation-delay: 0.2s;
  }

  .circle:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes typing {
    0%, 25% {
      transform: scale(1);
      }
      50% {
        transform: scale(1.4);
      } 
    100% {
      transform: scale(1);
    }
  }
</style>

<main>
  <!-- Chattvisningshellshe -->
  <section>
    {#each chat as message}
      <article class={message.user}>{message.message}</article>
    {/each}

    <!-- Indikator för att Eliza skriver -->
    <article id="visible">
      <span class="circle"></span>
      <span class="circle"></span>
      <span class="circle"></span>
    </article>
  </section>

  <!-- Formulär för att skicka meddelanden -->  
  <form method="post" use:enhance={({ formData, cancel }) => {
      cancel();
      const text = formData.get("text");
      write(text);
      formData.set("text", ""); // Töm inputfältet
    }}>
    <input name="text" type="text" placeholder="Skriv ett meddelande..." required />
    <button type="submit">Skicka</button>
  </form>
  <button class="clearShit" on:click={chatClear}>Rensa Chatten</button>
</main>
