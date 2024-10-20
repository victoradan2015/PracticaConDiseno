<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $jsonData = file_get_contents('php://input');
    $nuevaDivisa = json_decode($jsonData, true);

    if ($nuevaDivisa) {
        $rutaArchivo = './jsons/TiposCambios.json';
        $contenidoActual = file_get_contents($rutaArchivo);
        $data = json_decode($contenidoActual, true);

        $data['divisas'][] = $nuevaDivisa;

        file_put_contents($rutaArchivo, json_encode($data, JSON_PRETTY_PRINT));

        echo json_encode(['success' => true, 'message' => 'Divisa agregada con éxito']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Datos de divisa inválidos']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
}
?>
