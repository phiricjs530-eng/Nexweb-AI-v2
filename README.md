# Nexweb-AI-v2
AI website creator 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Nexweb AI</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }

        body {
            background: #f5f7fb;
            color: #111827;
            min-height: 100vh;
        }

        /* TOP BAR */
        .topbar {
            width: 100%;
            height: 70px;
            background: white;
            border-bottom: 1px solid #e5e7eb;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 25px;
            position: sticky;
            top: 0;
            z-index: 10;
        }

        .logo {
            font-size: 22px;
            font-weight: bold;
        }

        .logo span {
            color: #6366f1;
        }

        .top-button {
            background: #111827;
            color: white;
            border: none;
            padding: 10px 18px;
            border-radius: 8px;
            cursor: pointer;
        }

        /* MAIN */
        .container {
            max-width: 1100px;
            margin: auto;
            padding: 60px 20px;
        }

        .hero {
            text-align: center;
            margin-bottom: 50px;
        }

        .hero h1 {
            font-size: 48px;
            line-height: 1.1;
            margin-bottom: 18px;
        }

        .hero h1 span {
            color: #6366f1;
        }

        .hero p {
            max-width: 650px;
            margin: auto;
            color: #6b7280;
            font-size: 18px;
            line-height: 1.6;
        }

        /* AI INPUT */
        .creator-box {
            background: white;
            border: 1px solid #e5e7eb;
            border-radius: 18px;
            padding: 25px;
            max-width: 800px;
            margin: auto;
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.06);
        }

        .creator-box textarea {
            width: 100%;
            min-height: 140px;
            border: 1px solid #d1d5db;
            border-radius: 12px;
            padding: 16px;
            font-size: 16px;
            resize: vertical;
            outline: none;
        }

        .creator-box textarea:focus {
            border-color: #6366f1;
        }

        .creator-actions {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 15px;
            gap: 10px;
        }

        .generate-button {
            background: #6366f1;
            color: white;
            border: none;
            padding: 13px 22px;
            border-radius: 10px;
            font-size: 15px;
            font-weight: bold;
            cursor: pointer;
        }

        .generate-button:hover {
            background: #4f46e5;
        }

        /* FEATURES */
        .features {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-top: 50px;
        }

        .feature {
            background: white;
            padding: 25px;
            border-radius: 15px;
            border: 1px solid #e5e7eb;
        }

        .feature-icon {
            font-size: 30px;
            margin-bottom: 15px;
        }

        .feature h3 {
            margin-bottom: 10px;
        }

        .feature p {
            color: #6b7280;
            line-height: 1.5;
        }

        /* PREVIEW */
        .preview {
            margin-top: 50px;
            background: #111827;
            color: white;
            border-radius: 18px;
            padding: 25px;
        }

        .preview-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
        }

        .preview-screen {
            background: white;
            color: #111827;
            min-height: 180px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 20px;
        }

        /* MOBILE */
        @media (max-width: 700px) {

            .topbar {
                padding: 0 15px;
            }

            .hero h1 {
                font-size: 36px;
            }

            .hero p {
                font-size: 16px;
            }

            .features {
                grid-template-columns: 1fr;
            }

            .creator-actions {
                flex-direction: column;
                align-items: stretch;
            }

            .generate-button {
                width: 100%;
            }
        }
    </style>
</head>

<body>

    <!-- TOP BAR -->
    <header class="topbar">
        <div class="logo">
            Nexweb <span>AI</span>
        </div>

        <button class="top-button">
            Sign In
        </button>
    </header>


    <!-- MAIN CONTENT -->
    <main class="container">

        <!-- HERO -->
        <section class="hero">
            <h1>
                Build websites with <span>AI.</span>
            </h1>

            <p>
                Describe the website you want and Nexweb AI
                will help you turn your idea into a working website.
            </p>
        </section>


        <!-- AI CREATOR -->
        <section class="creator-box">

            <textarea
                placeholder="Describe the website you want to create..."
            ></textarea>

            <div class="creator-actions">

                <span>
                    ✨ AI Website Generator
                </span>

                <button class="generate-button">
                    Generate Website
                </button>

            </div>

        </section>


        <!-- FEATURES -->
        <section class="features">

            <div class="feature">
                <div class="feature-icon">🤖</div>

                <h3>AI Generation</h3>

                <p>
                    Describe your idea in normal language
                    and turn it into a website.
                </p>
            </div>


            <div class="feature">
                <div class="feature-icon">⚡</div>

                <h3>Fast Creation</h3>

                <p>
                    Create website layouts quickly without
                    starting everything from scratch.
                </p>
            </div>


            <div class="feature">
                <div class="feature-icon">📱</div>

                <h3>Responsive Design</h3>

                <p>
                    Build websites that can work across
                    phones, tablets and computers.
                </p>
            </div>

        </section>


        <!-- PREVIEW -->
        <section class="preview">

            <div class="preview-header">
                <strong>Website Preview</strong>

                <span>Live Preview</span>
            </div>

            <div class="preview-screen">
                Your generated website will appear here.
            </div>

        </section>

    </main>

</body>
</html>
