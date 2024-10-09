
class Vector2 { // Vector 2 dataclass to store a position
    constructor(x, y) {
        this.X = x;
        this.Y = y;
    };
};


class Figure { // An individual circle

    Position = new Vector2(0, 0);

    constructor() {
        const htmlfigure = document.createElement("span");
        document.body.appendChild(htmlfigure);
        this.figureref = htmlfigure;
    };

    // Get X, Y position of figure in the form of a Vector2
    getPosition() {
        return this.Position;
    };

    // Sets the position of figure using the supplied Vector2
    setPosition(position) {
        this.Position = position;
        this.figureref.style.left = position.X+"px";
        this.figureref.style.top = position.Y+"px";
    };

    
};

// Sorrounding circles
const figure1 = new Figure();
const figure2 = new Figure();
const figure3 = new Figure();
const figure4 = new Figure();
const figure5 = new Figure();
const figure6 = new Figure();

// Middle circle
const figure7 = new Figure();


var toRotate = [figure1, figure2, figure3, figure4, figure5, figure6]; // Rotate these circle around the middle circle

const toRotate_len = toRotate.length; // Get amount of circles in the rotation array

figure7.setPosition(new Vector2(window.innerWidth / 2, window.innerHeight / 2)); //Set middle circle to center of screen 

function loop() {
    const speed = 0.5; // How fast the middle circle moves
    const radius = 200; // Radius specifies how far away from the middle the circle ends up with the provided angle
    const screenCenter = new Vector2(window.innerWidth / 2, window.innerHeight / 2); // Middle of screen
    const moveBy = Math.cos(new Date().getTime() / 1000) * 500; // How much to move the middle circle by from the center of the screen
    const angle_between = 360 * ( Math.PI/180) / toRotate.length; // The angle between each circle sorrounding the middle circle

    // TODO add clamp to stop middle circle from moving offscreen
    figure7.setPosition(new Vector2(screenCenter.X+moveBy, screenCenter.Y)); // Update position of middle circle to center of screen if screen size changes

    const center = new Vector2(figure7.getPosition().X, figure7.getPosition().Y); // Get position of middle circle
    
    toRotate.forEach((element, index) => {

        const angle = speed * new Date().getTime() / 1000 + index * angle_between; // The specific position the current element will end up at

        const offsetX = radius * Math.cos(angle);
        const offsetY = radius * Math.sin(angle);

        element.setPosition(new Vector2(
            center.X + offsetX,
            center.Y + offsetY
        ));
    });

    requestAnimationFrame(loop);
}

requestAnimationFrame(loop); // Request a frame so the animation isnt running too quickly
