const canvas = document.getElementById('game');

function draw() {
    console.log("fired")
    if (canvas.getContext) {
        const canvasContext = canvas.getContext('2d');
        game(canvasContext);
    }
}

const game = (ctx) => {
    // draw background
    
    // create player

    // 
}
