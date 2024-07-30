def get_home_message():
    html_content = """
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Innovators Backend</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f0f0f0;
                color: #333;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
            }
            .container {
                text-align: center;
                background: #fff;
                padding: 5rem;
                border-radius: 10px;
                box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
            }
            h1 {
                color: #007bff;
                font-size: 5rem;
            }
            p {
                font-size: 2rem;
                margin-top: 2rem;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Welcome!</h1>
            <p>The innovators backend is up and running</p>
        </div>
    </body>
    </html>
    """
    return html_content
