let members = [
    {
        name: "HANNI",
        imagePath: "images/hanni.jpg",
        realName: "Hanni Pham",
        age: 20,
        dob: "October 6, 2004",
        height: "161.7 cm (5'3\")",
        nationality: "Vietnamese-Australian",
        hobby: "Watching movies"
    },
    {
        name: "HAERIN",
        imagePath: "images/haerin.jpg",
        realName: "Kang Haerin",
        age: 18,
        dob: "May 15, 2006",
        height: "164.5 cm (5'5\")",
        nationality: "Korean",
        hobby: "Listening to music"
    },
    {
        name: "MINJI",
        imagePath: "images/minji.jpg",
        realName: "Kim Minji",
        age: 20,
        dob: "May 7, 2004",
        height: "164 cm (5'5\")",
        nationality: "Korean",
        hobby: "Reading"
    },
    {
        name: "DANIELLE",
        imagePath: "images/danielle.jpg",
        realName: "Danielle Marsh",
        age: 19,
        dob: "April 11, 2005",
        height: "165 cm (5'5\")",
        nationality: "Korean-Australian",
        hobby: "Drawing"
    },
    {
        name: "HYEIN",
        imagePath: "images/hyein.jpg",
        realName: "Lee Hyein",
        age: 16,
        dob: "April 21, 2008",
        height: "170 cm (5'7\")",
        nationality: "Korean",
        hobby: "Taking photos"
    }
];

let images = [];
let positions = [];
let scales = [];
let hoveredIndex = -1;
let selectedIndex = -1;
let transitionProgress = 0;
let robotoMono;

// Add these new variables at the top of your sketch
let closeButtonScale = 1;
let targetCloseButtonScale = 1;
let isCloseButtonHovered = false;
let isCloseButtonClicked = false;

function preload() {
    robotoMono = loadFont("fonts/RobotoMono-Regular.ttf"); // Ensure the font file exists in a "fonts" folder
    for (let i = 0; i < members.length; i++) {
        images[i] = loadImage(members[i].imagePath);
    }
}

function setup() {
    let container = select("#p5-canvas-container");
    let w = container.width;
    let h = container.height;
    
    let canvas = createCanvas(w, h);
    canvas.parent("p5-canvas-container");

    textFont(robotoMono);
    textAlign(CENTER, CENTER);

    let spacing = width / members.length;

    for (let i = 0; i < members.length; i++) {
        positions[i] = { x: spacing * i + spacing / 2, y: height / 2 };
        scales[i] = 1;
    }
}

function draw() {
    clear();

    for (let i = 0; i < members.length; i++) {
        let targetScale = hoveredIndex === i ? 1.2 : (hoveredIndex === -1 ? 1 : 0.8);
        scales[i] = lerp(scales[i], targetScale, 0.1);

        let baseSize = min(width / 6, height / 2);
        let imgSize = baseSize * scales[i];

        let aspectRatio = images[i].width / images[i].height;
        let imgW = imgSize;
        let imgH = imgSize / aspectRatio;

        let nameY = positions[i].y + imgH / 2 + 20;

        if (hoveredIndex === i) {
            positions[i].y = lerp(positions[i].y, height / 2 - 10, 0.1);
        } else {
            positions[i].y = lerp(positions[i].y, height / 2, 0.1);
        }

        imageMode(CENTER);
        image(images[i], positions[i].x, positions[i].y, imgW, imgH);

        fill(0);
        textSize(16 * scales[i]);
        text(members[i].name, positions[i].x, nameY);
    }

    if (selectedIndex !== -1) {
        drawDetailPanel();
    }
}

function drawDetailPanel() {
    transitionProgress = lerp(transitionProgress, 1, 0.1);

    // Draw the original full-screen pop-up panel without an outline
    noStroke(); // Keep this since you didn't like the outline
    fill(0, 0, 0, 150);
    rectMode(CORNER);
    rect(0, 0, width, height); // Back to the original full-screen rectangle

    let member = members[selectedIndex];
    let imageX = lerp(width + 200, width * 0.75, transitionProgress);
    let textX = lerp(-200, width * 0.15, transitionProgress); // Keep the adjusted text position
    let nameY = lerp(-50, 50, transitionProgress);
    let closeY = lerp(height + 50, height - 50, transitionProgress);

    // Draw the member's name (still centered)
    fill(255);
    textFont(robotoMono);
    textSize(32);
    textAlign(CENTER, CENTER);
    text(member.name, width / 2, nameY);

    // Draw the member's image
    let aspectRatio = images[selectedIndex].width / images[selectedIndex].height;
    let imgW = height * 0.8 * aspectRatio;
    let imgH = height * 0.8;
    imageMode(CENTER);
    image(images[selectedIndex], imageX, height / 2, imgW, imgH);

    // Draw the member's information with left alignment
    push();
    textAlign(LEFT, TOP);
    fill(255);
    textSize(18);
    let infoText = `Real Name: ${member.realName}\nAge: ${member.age}\nDOB: ${member.dob}\nHeight: ${member.height}\nNationality: ${member.nationality}\nHobby: ${member.hobby}`;
    let textY = height * 0.25; // Position the text block starting higher
    text(infoText, textX, textY);
    pop();

    // Update close button scale with smooth animation
    if (isCloseButtonClicked) {
        targetCloseButtonScale = 0.9; // Scale down when clicked
    } else if (isCloseButtonHovered) {
        targetCloseButtonScale = 1.1; // Scale up when hovered
    } else {
        targetCloseButtonScale = 1; // Normal size
    }
    
    // Smoothly interpolate to target scale
    closeButtonScale = lerp(closeButtonScale, targetCloseButtonScale, 0.2);

    // Draw Close Button
    push();
    rectMode(CENTER);
    translate(width / 2, closeY);
    scale(closeButtonScale);
    
    // Button background
    fill(200);
    rect(0, 0, 80, 40, 10);
    
    // Button text
    fill(0);
    textSize(18);
    textAlign(CENTER, CENTER);
    text("Close", 0, 0);
    pop();
}

function mouseMoved() {
    // Only update hoveredIndex if the pop-up panel is not open
    if (selectedIndex === -1) {
        hoveredIndex = -1;
        for (let i = 0; i < members.length; i++) {
            let baseSize = min(width / 6, height / 2);
            let imgSize = baseSize * scales[i];
            let aspectRatio = images[i].width / images[i].height;
            let imgW = imgSize;
            let imgH = imgSize / aspectRatio;

            let nameY = positions[i].y + imgH / 2 + 20;

            if (
                dist(mouseX, mouseY, positions[i].x, positions[i].y) < imgW / 2 ||
                (mouseX > positions[i].x - 40 && mouseX < positions[i].x + 40 && mouseY > nameY - 10 && mouseY < nameY + 10)
            ) {
                hoveredIndex = i;
            }
        }
    }

    // Still check for close button hover when the panel is open
    if (selectedIndex !== -1) {
        let closeButtonX = width / 2 - 40 * closeButtonScale;
        let closeButtonY = lerp(height + 50, height - 50, transitionProgress) - 20 * closeButtonScale;
        let closeButtonW = 80 * closeButtonScale;
        let closeButtonH = 40 * closeButtonScale;

        isCloseButtonHovered = (
            mouseX > closeButtonX &&
            mouseX < closeButtonX + closeButtonW &&
            mouseY > closeButtonY &&
            mouseY < closeButtonY + closeButtonH
        );
    } else {
        isCloseButtonHovered = false;
    }
}

// Update mousePressed() to handle the click animation
function mousePressed() {
    if (selectedIndex === -1) {
        // Open the panel when clicking on a member
        for (let i = 0; i < members.length; i++) {
            let baseSize = min(width / 6, height / 2);
            let imgSize = baseSize * scales[i];
            let aspectRatio = images[i].width / images[i].height;
            let imgW = imgSize;
            let imgH = imgSize / aspectRatio;

            if (dist(mouseX, mouseY, positions[i].x, positions[i].y) < imgW / 2) {
                selectedIndex = i;
                transitionProgress = 0;
                break;
            }
        }
    } else {
        // Detect if the close button is clicked
        let closeButtonX = width / 2 - 40 * closeButtonScale;
        let closeButtonY = lerp(height + 50, height - 50, transitionProgress) - 20 * closeButtonScale;
        let closeButtonW = 80 * closeButtonScale;
        let closeButtonH = 40 * closeButtonScale;

        if (
            mouseX > closeButtonX &&
            mouseX < closeButtonX + closeButtonW &&
            mouseY > closeButtonY &&
            mouseY < closeButtonY + closeButtonH
        ) {
            isCloseButtonClicked = true;
            selectedIndex = -1;
            transitionProgress = 0;
        }
    }
}

// Add mouseReleased() to reset the click state
function mouseReleased() {
    isCloseButtonClicked = false;
}

function windowResized() {
    let container = select("#p5-canvas-container");
    resizeCanvas(container.width, container.height);
}
