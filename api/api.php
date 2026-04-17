<?php
header("Content-Type: application/json; charset=utf-8");
require "db.php";
$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case 'GET':
        try {
            $stmt = $pdo->query("SELECT az, nev, tipus, uzemel FROM hajok");
            $rows = $stmt->fetchAll();

            $readData = array_map(function ($row) {
                return [
                    'id' => (int)$row['az'],
                    'name' => $row['nev'],
                    'type' => $row['tipus'],
                    'active' => (bool)$row['uzemel']
                ];
            }, $rows);
            http_response_code(200);
            echo json_encode(['status' => 'Read success!', "readData" => $readData]);
        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode(['status' => 'Read error!']);
        }
        break;
    case 'POST':
        try {
            $data = json_decode(file_get_contents("php://input"), true);
            if (!isset($data['name'], $data['type'], $data['active'])) {
                http_response_code(400);
                echo json_encode([
                    'status' => 'Create error!',
                    'message' => 'Missing required fields'
                ]);
                break;
            }
            $stmt = $pdo->prepare("INSERT INTO hajok (nev, tipus, uzemel) VALUES (?, ?, ?)");
            $stmt->execute([$data['name'], $data['type'], $data['active']]);
            http_response_code(201);
            echo json_encode(['status' => 'Create success!']);
        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode(['status' => 'Create error!']);
        }
        break;
    case 'PUT':
        try {
            $data = json_decode(file_get_contents("php://input"), true);
            if (!isset($data['name'], $data['type'], $data['active'])) {
                http_response_code(400);
                echo json_encode([
                    'status' => 'Create error!',
                    'message' => 'Missing required fields'
                ]);
                break;
            }
            $stmt = $pdo->prepare("UPDATE hajok SET nev=?, tipus=?, uzemel=? WHERE az=?");
            $stmt->execute([$data['name'], $data['type'], $data['active'], $data['id']]);
            http_response_code(200);
            echo json_encode(['status' => 'Update success!']);
        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode(['status' => 'Update error!']);
        }
        break;
    case 'DELETE':
        try {
            $data = json_decode(file_get_contents("php://input"), true);
            if (!isset($data['id'])) {
                http_response_code(400);
                echo json_encode([
                    'status' => 'Create error!',
                    'message' => 'Missing required fields'
                ]);
                break;
            }
            $stmt = $pdo->prepare("DELETE FROM hajok WHERE az=?");
            $stmt->execute([$data['id']]);
            http_response_code(200);
            echo json_encode(['status' => 'Delete success!']);
        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode(['status' => 'Delete error!']);
        }
        break;
    default:
        http_response_code(405);
        echo json_encode([
            'status' => 'Method not allowed'
        ]);
        break;
}
