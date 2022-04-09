<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Allow-Credentials: true');
// pdo pour la connexion à la base de données
// if type in $_POST is register, then register the user
// echo json_encode($_POST);
if (isset($_POST)) {
    if ($_POST['type'] == 'Register') {

        $credentials = array(
            'username' => $_SERVER['PHP_AUTH_USER'],
            'password' => password_hash($_SERVER['PHP_AUTH_PW'], PASSWORD_DEFAULT)
        );
        echo json_encode($credentials);
        $pdo = new PDO('mysql:host=db;dbname=db;', 'root', 'password');
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);

        $sql = "INSERT INTO user (username, password) VALUES (:username, :password)";
        $stmt = $pdo->prepare($sql);
        $stmt->execute($credentials);
    } elseif ($_POST['type'] == 'Login') {
        $credentials = array(
            'username' => $_SERVER['PHP_AUTH_USER']
        );
        $pdo = new PDO('mysql:host=db;dbname=db;', 'root', 'password');
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);

        $sql = "SELECT * FROM user WHERE username = :username";
        $stmt = $pdo->prepare($sql);
        $stmt->execute($credentials);
        $user = $stmt->fetch();
        if (password_verify($_SERVER['PHP_AUTH_PW'], $user->password)) {
            echo json_encode(array('username' => $credentials['username']));
        } else {
            header('HTTP/1.0 401 Unauthorized');
            echo json_encode(array('error' => 'Invalid credentials'));
        }
    }
}
