<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Translator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div class="wrapper">
            <div class="text-input">
                <textarea class="from-text" placeholder="Enter text"></textarea>
                <textarea class="to-text" placeholder="Translation" readonly></textarea>
            </div>
            <ul class="controls">
                <li class="row from">
                    <select></select>
                    <div class="icons">
                        <i id="from" class="fa fa-copy"></i>
                        <i id="from" class="fa fa-volume-up"></i>
                    </div>
                </li>
                <li class="exchange">
                    <i class="fa fa-exchange"></i>
                </li>
                <li class="row to">
                    <select></select>
                    <div class="icons">
                        <i id="to" class="fa fa-copy"></i>
                        <i id="to" class="fa fa-volume-up"></i>
                    </div>
                </li>
            </ul>
            <button>Translate</button>
        </div>
    </div>
    <script src="countries.js"></script>
    <script src="script.js"></script>
    <script src="orientation.js"></script>
</body>
</html>
