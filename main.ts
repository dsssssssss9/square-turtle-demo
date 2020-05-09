turtle.setPosition(0, 0)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        turtle.turnRight()
        turtle.pen(TurtlePenMode.Down)
        turtle.forward(4)
    }
})
