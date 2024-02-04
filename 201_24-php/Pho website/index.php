<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home page</title>
</head>

<body>
    <h1>Welcome to php website</h1>
    <p>Lorem ad ex tempor sunt laboris aliqua nostrud. Reprehenderit aliquip consequat mollit exercitation voluptate excepteur cupidatat quis aliqua eu laborum elit. Consequat ut ut veniam nostrud. Aute ad minim qui enim ex aute exercitation nulla mollit et elit. Commodo ut sunt laboris aute sit Lorem consequat deserunt sunt.</p>

    <?php
    $a = 10;
    $b = 20;
    $sum = $a + $b;
    echo "<p>The sum of $a and $b is $sum</p>";
    ?>
    <hr>

    <p>Server Date and time (Ils)</p>
    <?php
    date_default_timezone_set("Asia/Jerusalem");
    echo date("d/m/Y h:i:s A");
    ?>

</body>

</html>