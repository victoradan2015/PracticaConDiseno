<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
    <link rel="stylesheet" href="css/style.css" />
    <title>Dev'CoUee PWA</title>
</head>
<body>
<main>
        <div class="card">
            <h1>Operación Compra - Venta</h1>
            <br>
            <div class="input-container">
                <label for="amount">Cantidad:</label>
                <input type="number" id="amount" placeholder="Ingresa la cantidad" />
            </div>
            <br>
            <div class="select-container">
                <label for="currency-from">De:</label>
                <select id="currency-from"></select>
                <br><br>
                <label for="currency-to">A:</label>
                <select id="currency-to"></select>
            </div>
            <br>
            <div class="result-container">
                <p>Total: <span id="result">0.00</span></p>
            </div>
            <div class="button-container">
                <button class="btn">Compra</button>
                <button class="btn">Venta</button>
            </div>
        </div>
    </main>
  
    <?php include 'scripts/footer.php'; ?>

    <script src="js/app.js"></script>
    <script src="js/Operaciones.js"></script>

</body>
</html>
