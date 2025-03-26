// script.js
document.addEventListener("DOMContentLoaded", function() {
    // यह फंक्शन तब चलेगा जब पेज पूरी तरह लोड हो जाए
    var button = document.getElementById("myButton");
    if (button) {
        button.addEventListener("click", function() {
            alert("यह External JavaScript से आया है!");
        });
    }
});
<!DOCTYPE html>
<html lang="hi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KillerWeb</title>
</head>
<body>
    <h1>अस्सलामु अलैकुम!</h1>
    <button id="myButton">Click Me</button>

    <!-- नीचे यह लाइन जोड़ें -->
    <script src="script.js"></script>
</body>
</html>
