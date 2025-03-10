<script>
    let items = [0, 1, 2, 3, 4, 5, 6];
  </script>
  
  <style>
    .container {
      width: 50vw;
      height: 60vh;
      display: grid;
      gap: 10px;
      padding: 10px;
      
   
    }
    .item:first-child {
      grid-column: span 6;
      background-color: red;
      color: white;
      display: flex;
      justify-content: left;
    }
    .item {
      background-color: rgb(225, 9, 9);
      display: flex;
      align-items: upper;
      justify-content: left;
      padding: 1px;
      color: white;
    }
  </style>
  
  <div class="container">
    <div class="item">0</div>
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
  </div>
  