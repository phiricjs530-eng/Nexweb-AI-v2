/* =========================================
   NEXWEB AI — MAIN JAVASCRIPT
   ========================================= */

// Get elements from the HTML
const promptInput = document.getElementById("promptInput");
const generateBtn = document.getElementById("generateBtn");
const clearBtn = document.getElementById("clearBtn");
const newProjectBtn = document.getElementById("newProjectBtn");
const preview = document.getElementById("preview");


// =========================================
// CREATE PREVIEW
// =========================================

function createPreview(userPrompt) {

    const safePrompt = userPrompt
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    preview.innerHTML = `
        <div style="
            min-height: 330px;
            padding: 40px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            background: linear-gradient(
                135deg,
                #111827,
                #18233a
            );
        ">

            <div style="
                width: 64px;
                height: 64px;
                border-radius: 18px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: rgba(108, 99, 255, 0.15);
                border: 1px solid rgba(108, 99, 255, 0.3);
                color: #a9a4ff;
                font-size: 28px;
                margin-bottom: 20px;
            ">
                ✦
            </div>

            <h2 style="
                color: white;
                margin-bottom: 10px;
                font-size: 26px;
            ">
                Website Concept Created
            </h2>

            <p style="
                color: #9ba8bd;
                max-width: 600px;
                margin-bottom: 20px;
                line-height: 1.7;
            ">
                Nexweb AI received your website idea and is ready
                to turn it into a complete website.
            </p>

            <div style="
                width: 100%;
                max-width: 650px;
                padding: 18px;
                border-radius: 12px;
                background: rgba(0, 0, 0, 0.2);
                border: 1px solid rgba(255, 255, 255, 0.08);
                color: #cbd5e1;
                text-align: left;
                font-size: 14px;
            ">
                <strong style="color: white;">
                    Your idea:
                </strong>

                <br><br>

                ${safePrompt}
            </div>

            <p style="
                color: #68758b;
                font-size: 13px;
                margin-top: 20px;
            ">
                AI generation will be connected next.
            </p>

        </div>
    `;
}


// =========================================
// GENERATE BUTTON
// =========================================

generateBtn.addEventListener("click", () => {

    const userPrompt = promptInput.value.trim();

    if (!userPrompt) {

        promptInput.focus();

        promptInput.style.borderColor = "#ff6b6b";

        setTimeout(() => {
            promptInput.style.borderColor = "";
        }, 1200);

        return;
    }


    // Change button while processing
    generateBtn.disabled = true;

    generateBtn.innerHTML = `
        <span>Preparing...</span>
        <span class="arrow">⟳</span>
    `;


    // Small delay to simulate processing
    setTimeout(() => {

        createPreview(userPrompt);

        generateBtn.disabled = false;

        generateBtn.innerHTML = `
            <span>Generate Website</span>
            <span class="arrow">→</span>
        `;

        // Scroll to preview
        document.getElementById("previewSection").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 700);

});


// =========================================
// CLEAR BUTTON
// =========================================

clearBtn.addEventListener("click", () => {

    promptInput.value = "";

    preview.innerHTML = `
        <div class="preview-empty">

            <div class="preview-icon">✦</div>

            <h3>
                No website generated yet
            </h3>

            <p>
                Enter an idea above and click
                <strong>Generate Website</strong>.
            </p>

        </div>
    `;

    promptInput.focus();

});


// =========================================
// NEW PROJECT BUTTON
// =========================================

newProjectBtn.addEventListener("click", () => {

    promptInput.value = "";

    preview.innerHTML = `
        <div class="preview-empty">

            <div class="preview-icon">✦</div>

            <h3>
                No website generated yet
            </h3>

            <p>
                Enter an idea above and click
                <strong>Generate Website</strong>.
            </p>

        </div>
    `;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    setTimeout(() => {
        promptInput.focus();
    }, 400);

});


// =========================================
// ENTER KEY SUPPORT
// =========================================

promptInput.addEventListener("keydown", (event) => {

    // Ctrl + Enter generates the website
    if (event.ctrlKey && event.key === "Enter") {
        generateBtn.click();
    }

});


// =========================================
// INITIAL STATE
// =========================================

console.log("Nexweb AI loaded successfully.");
