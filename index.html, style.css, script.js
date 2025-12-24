<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Download Video Mudah</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<header>
    <h1>Download Video dengan Mudah dan Cepat</h1>
    <p>Tempelkan link video Anda di bawah ini</p>
</header>

<div class="box">
    <input type="text" id="url" placeholder="Tempel tautan video Anda di sini">
    <button onclick="unduh()">Unduh</button>
</div>

<p class="note">
    Website demo UI. Tidak menyediakan layanan unduhan video sebenarnya.
</p>

<footer>
    <p>© 2025 Download Web Demo</p>
</footer>

<script src="script.js"></script>
</body>
</html>
body {
    font-family: Arial, sans-serif;
    background: #f5f5f5;
    text-align: center;
    margin: 0;
}

header {
    padding: 50px 20px;
}

h1 {
    margin-bottom: 10px;
}

.box {
    background: white;
    width: 60%;
    margin: auto;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

input {
    width: 70%;
    padding: 10px;
    font-size: 16px;
}

button {
    padding: 10px 20px;
    background: #4CAF50;
    border: none;
    color: white;
    font-size: 16px;
    cursor: pointer;
}

button:hover {
    background: #45a049;
}

.note {
    margin-top: 20px;
    color: #666;
}

footer {
    margin-top: 60px;
    padding: 20px;
    background: #222;
    color: white;
}
function unduh() {
    const url = document.getElementById("url").value;

    if (url === "") {
        alert("Silakan masukkan link video!");
    } else {
        alert("Ini hanya demo tampilan UI.\nLink Anda:\n" + url);
    }
}
