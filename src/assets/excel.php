<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Excel</title>
    <link rel="shourtcut icon" href="./dist/favicon.png">
</head>
<body>
    <div class="container">
        <div class="excel">
            <div class="excel__header">
                <input type="text" class="input" value="новая таблица" />
                <div>
                    <div class="btn">
                        <i class="far fa-trash-alt"></i>
                    </div>
                    <div class="btn">
                        <i class="fas fa-sign-out-alt"></i>
                    </div>
                </div>
            </div>
            <div class="excel__toolbar">
                <div class="btn">
                    <i class="fas fa-align-left"></i>
                </div>
                <div class="btn">
                    <i class="fas fa-align-center"></i>
                </div>
                <div class="btn">
                    <i class="fas fa-align-right"></i>
                </div>
                <div class="btn">
                    <i class="fas fa-bold"></i>
                </div>
                <div class="btn">
                    <i class="fas fa-italic"></i>
                </div>
                <div class="btn">
                    <i class="fas fa-underline"></i>
                </div>
            </div>
            <div class="excel__formula">
                <div class="info">fx</div>
                <div class="input" contenteditable="true" spellcheck="false"></div>
            </div>
            <div class="excel__table">

                <div class="row">
                    <div class="row-info"></div>
                    <div class="row-data">
                        <div class="column">A</div>
                        <div class="column">B</div>
                        <div class="column">C</div>
                    </div>
                </div>
                <div class="row">
                    <div class="row-info">1</div>
                    <div class="row-data">
                        <div class="cell selected" contenteditable="true">A1</div>
                        <div class="cell" contenteditable="true">B1</div>
                        <div class="cell" contenteditable="true">C1</div>
                    </div>
                </div>
                <div class="row">
                    <div class="row-info">2</div>
                    <div class="row-data">
                        <div class="cell" contenteditable="true">A2</div>
                        <div class="cell" contenteditable="true">B2</div>
                        <div class="cell" contenteditable="true">C2</div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</body>
</html>