<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Man Down 100</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
    <style>
        *{
            margin: 0px;
            padding: 0px;
            overflow: hidden;
        }
        #infoCanvas{
            /*background: black;*/
            top: 0px;
            border: 1px solid yellow;
            position: absolute;
            overflow: hidden;
        }
        #gameCanvas{
            /*background: black;*/
            border: 1px solid cyan;
            position: relative;
            overflow: hidden;
        }

    </style>
</head>
<body>
<canvas id="infoCanvas"></canvas>
<canvas id="gameCanvas"></canvas>
<script src="js/0.S.js" ></script>
<script src="js/0.1.R.js" ></script>
<script src="js/1.SmartScale.js" ></script>
<script src="js/3.Block.js" ></script>
<script src="js/4.Hero.js" ></script>

<!--最后一个js-->
<script src="js/99.Main.js"></script>
</body>
</html>
