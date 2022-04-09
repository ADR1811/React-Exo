<?php

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Allow-Credentials: true');

$pdo = new PDO('mysql:host=db;dbname=db;', 'root', 'password');
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);

$sql = "SELECT * FROM blog";
$stmt = $pdo->prepare($sql);
$stmt->execute();
$articles = $stmt->fetchAll();

echo json_encode($articles);
