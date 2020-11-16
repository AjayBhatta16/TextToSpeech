<html>
  <head>
    <title>Text To Speech Web App</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="index.css">
  </head>
  <body>
  <?php
  $toSpeech = $err = "";
  $toSpeech = $_GET["toSpeech"];
  if(empty($toSpeech)){
    $err = "  *Please enter some text";
  }
  ?>
    <header>
       <h1>Text To Speech</h1>
    </header>
    <main>
      <form method="get">
         <label for="toSpeech">Enter text here:</label><span class="error"><?php echo $err;?></span><br>
         <input type="text" name="toSpeech" id="toSpeech" value="<?php echo $toSpeech;?>"><button id="clear">Clear</button><br>
         <input type="submit" value="speak" id="speak">
      </form>
      <div id="customize">
        <h3>Options</h3>
        <label for="voice">Voice: </label><br>
        <select name="voice" id="voices">
          <option value="">Select A Voice</option>
        </select>
        <div class="slidecontainer">
          <label for="rate">Speed: </label><br>
          <input type="range" min="0" max="2" value="1" step="0.02" class="slider" name="rate" id="rate">
        </div>
        <div class="slidecontainer">
          <label for="pitch">Pitch: </label><br>
          <input type="range" min="0" max="2" value="1" step="0.01" class="slider" name="pitch" id="pitch">
        </div>
        <!--<button id="adjust">Adjust</button>-->
      </div>
    </main>
  </body>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="index.js"></script>
</html>