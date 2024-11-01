<!DOCTYPE html>
<html>

<head>
    <title>Email and URL Validation Example</title>
</head>

<body>
    <h1>Email and URL Validation</h1>
    <form method="POST" action="">
        <input type="text" name="url" placeholder="Enter the URL" value="<?= $_POST['url'] ?? '' ?>" /> <br> <br>
        <input type="text" name="email" placeholder="Enter the email" value="<?= $_POST['email'] ?? '' ?>" /> <br> <br>
        <?php
        if (isset($_POST["url"]) && isset($_POST["email"])) {
            if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL))
                trigger_error('Invalid email');
            else
                echo 'Valid email: ' . $_POST['email'] . '<br>';

            if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i", $_POST['url']))
                trigger_error('Invalid URL');
            else
                echo 'Valid URL: <a href = "' . $_POST['email'] . '">' . $_POST['url'] . '</a><br>';
        }
        ?>
        <br>
        <button type="submit">Submit</button>
    </form>
</body>

</html>