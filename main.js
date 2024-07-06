
class Vector2 {
    constructor(x, y) {
        this.X = x;
        this.Y = y;
    };
};


class Figure {

    Position = new Vector2(0, 0);

    constructor() {
        const htmlfigure = document.createElement("span");
        document.body.appendChild(htmlfigure);
        this.figureref = htmlfigure;
    };

    getPosition() {
        return this.Position;
    };

    setPosition(position) {
        this.Position = position;
        this.figureref.style.left = position.X+"px";
        this.figureref.style.top = position.Y+"px";
    };

    
};

const figure1 = new Figure();
const figure2 = new Figure();
const figure3 = new Figure();
const figure4 = new Figure();
const figure5 = new Figure();
const figure6 = new Figure();

const figure7 = new Figure();

var toRotate = [figure1, figure2, figure3, figure4, figure5, figure6];

const toRotate_len = toRotate.length;

figure7.setPosition(new Vector2(window.innerWidth / 2, window.innerHeight / 2));

function loop() {
    const speed = 0.5;
    const radius = 200;
    const center = new Vector2(figure7.getPosition().X, figure7.getPosition().Y);
    const screenCenter = new Vector2(window.innerWidth / 2, window.innerHeight / 2);

    const moveBy = Math.cos(new Date().getTime() / 1000) * 500;

    figure7.setPosition(new Vector2(screenCenter.X+moveBy, screenCenter.Y));

    const angle_between = 360 * ( Math.PI/180) / toRotate.length;

    toRotate.forEach((element, index) => {

        const angle = speed * new Date().getTime() / 1000 + index * angle_between;

        const offsetX = radius * Math.cos(angle);
        const offsetY = radius * Math.sin(angle);

        element.setPosition(new Vector2(
            center.X + offsetX,
            center.Y + offsetY
        ));
    });

    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
