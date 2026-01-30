

// Basic Information

const CONFIG = {
valentineName: "joel"                    // Your Valentine's name
pageTitle: "will you pretty pretty please be my valentine? 💝" // Browser tab title

// Floating Background Elements
floatingEmojis: {
    hearts: ['😽', '🏹', '💕', '😵‍💫', '🩷'],  // Heart emojis in background
    bears: ['🧸', '🍫']                       // Bear emojis in background
}

// Questions and Buttons
questions: {
    first: {
        text: "do you like me?",                   // First question
        yesBtn: "yes..",                             // Yes button text
        noBtn: "nuh uh...",                               // No button text
        secretAnswer: "i don't like you...i literally love you! ❤️"  // Hidden message
    },
    second: {
        text: "now how much do you love me?",          // Second question
        startText: "thhhiiissss much!",                   // Text before percentage
        nextBtn: "next ❤️"                         // Next button text
    },
    third: {
        text: "will you pretty please 🐝 my valentine...?",      // Final question
        yesBtn: "yyyyessss!",                            // Yes button text
        noBtn: "still no 🙄"                                // No button text
    }
}

// Love Meter Messages
loveMessages: {
    extreme: "WOOOOW You love me that much??!! 🥰🚀💝",  // Shows above 5000%
    high: "to infinity and beyond! 🚀💝",              // Shows above 1000%
    normal: "and beyond! 🥰"                           // Shows above 100%
}

// Final Celebration
celebration: {
    title: "yyyyyyayyy! i'm the luckiest person everrrr!",     // Celebration title
    message: "now come get your gift...",          // Celebration message
    emojis: "🎁💖🤗💝💋❤️💕"                        // Celebration emojis
}

// Website Colors
colors: {
    backgroundStart: "#ffafbd",      // Background gradient start
    backgroundEnd: "#ffc3a0",        // Background gradient end
    buttonBackground: "#ff6b6b",     // Button color
    buttonHover: "#ff8787",          // Button hover color
    textColor: "#ff4757"            // Text color
}

// Animation Settings
animations: {
    floatDuration: "15s",           // How long hearts float (10-20s)
    floatDistance: "50px",          // Sideways movement (30-70px)
    bounceSpeed: "0.5s",            // Bounce animation speed (0.3-0.7s)
    heartExplosionSize: 1.5         // Final heart explosion size (1.2-2.0)
};
