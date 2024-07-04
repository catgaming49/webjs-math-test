
class Vector2 {
    constructor(x, y) {
        this.X = x
        this.Y = y
    }
}


class Figure {

    Position = new Vector2(0, 0)
    //X = 0 // +Right, -Left
    //Y = 0 // +down, -up


    constructor(name) {
        const htmlfigure = document.createElement("span")
        document.body.appendChild(htmlfigure)
        this.figureref = htmlfigure
    }

    getPosition() {
        return this.Position
    }

    setPosition(position) {
        this.Position = position
        this.figureref.style.left = position.X+"px"
        this.figureref.style.top = position.Y+"px"
    }

    
}

const figure1 = new Figure("yo1")
const figure2 = new Figure("yo2")
const figure3 = new Figure("yo3")
const figure4 = new Figure("yo4")
const figure5 = new Figure("yo5")
const figure6 = new Figure("yo6")

toRotate = [figure1, figure2, figure3, figure4, figure5, figure6]

function loop() {

    const speed = 1
    const radius = 300


    var time = new Date().getTime() / 1000

    var i = 0

    toRotate.forEach(element => {
        var cosinus = radius * Math.cos((time+i)*speed)
        var sinus = radius * Math.sin((time+i)*speed)
        element.setPosition(new Vector2(window.innerWidth / 2, window.innerHeight / 2))
        element.setPosition(new Vector2(element.getPosition().X+cosinus, element.getPosition().Y+sinus))
        i += 1
    })

    requestAnimationFrame(loop)
}

requestAnimationFrame(loop)