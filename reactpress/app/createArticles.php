<?php

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

$pdo = new PDO('mysql:host=db;dbname=db;', 'root', 'password');
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
    
// insert article with date
$sql = "INSERT INTO blog (titre, contenu, date) VALUES (:titre, :contenu, :date)";
$stmt = $pdo->prepare($sql);
$stmt->bindParam(':titre', $_POST['titre']);
$stmt->bindParam(':contenu', $_POST['contenu']);
$date = date('Y-m-d H:i:s');
$stmt->bindParam(':date', $date);
$stmt->execute();

echo json_encode($_POST);
