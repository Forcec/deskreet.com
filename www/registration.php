<?php
require "db.php";
$data = $_POST;
if( isset($data['signup']) ) {
    $errors = array();
    if( trim($data['login']) == '') {
        $errors = "Введите логин!";
    }
    if( trim($data['email']) == '') {
        $errors = "Введите email!";
    }
    if( trim($data['password']) == '')  {
        $errors = "Введите пароль!";
    }
    if($data['password2'] != $data['password']) {
        $errors = "Пароли не совпадают!";
    }
    if( empty($errors) ) {
        // All's ok!
    } else {
        echo '<div style = "color:red;">'.array_shift($errors).'</div>';
    }
}
?>
<!doctype html>
<html>
<head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <title>Лаба #2 - Дискретная математика</title>
    <link rel="stylesheet" href="style/styles.css" type="text/css">
    <link rel="shortcut icon" href="images/favicon.png" type="image/png">
    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Oswald:400,300" type="text/css">
</head>
<body>
<div id="wrapper" >
    <a href="index.html"><img src="images/logo.png" width="282" height="75"></a>
    <h1></h1>
    <nav>
        <ul class="top-menu">
            <li><a href="index.html">Главная</a></li>
            <li class="active"><a>Лабы по дискретке</a><ul>
                    <li><a href="first.html">Лаба #1</a></li>
                    <li><a href="second.html">Лаба #2</a></li>
                    <li><a href="third.html">Лаба #3</a></li>
                    <li><a href="fourth.html">Лаба #4</a></li>
                    <li><a href="fifth.html">Лаба #5</a></li>
                </ul>
            </li>
            <li><a href="contacts.html">Лабы по вебу</a></li>
        </ul>
    </nav>
    <div id="heading">
    </div>

    <section class="calc">
        <div class="heading">
            <h1>Регистрация</h1>
            <br><br>
        </div>
        <form action="/registration.php" method="post">
            <p>
                <p>Ваш логин:<br>
                <input type="text" name="login">
            </p>


            <p>Ваш Email:<br>
                <input type="text" name="email">
            </p>

            <p>Ваш пароль:<br>
                <input type="password" name="password">
            </p>
            <p>Повторите пароль:<br>
                <input type="password" name="password2">
            </p>
            
            <br><br><br><br><br><br>
            <p>
            <button type="submit" name = "signup">Зарегестрироваться!</button>
            </p>
        </form>
		<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    </section>
</div>
<footer>
    <div id="footer">

        <div id="sitemap">
            <h3>MAP</h3>
            <div>
                <a href="index.html">Home</a>
                <a href="index.html">Services</a>
                <a href="contacts.html">Contacts</a>
            </div>
        </div>
        <div id="social">
            <h3>SOCIAL NETWORKS</h3>
            <a href="http://twitter.com/" class="social-icon twitter"></a>
            <a href="http://facebook.com/" class="social-icon facebook"></a>
            <a href="http://plus.google.com/" class="social-icon google-plus"></a>
            <a href="https://vk.com/chemical_rage" class="vk"></a>
        </div>
        <div id="footer-logo">
            <a href="index.html"><img src="images/footer-logo.png" width="165px" height="45px" alt=""></a>
            <p>notCopyright &copy; 2018. </p>
        </div>
    </div>
</footer>
</body>
</html>