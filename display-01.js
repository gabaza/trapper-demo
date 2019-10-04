const Display = function(canvas) {

    this.buffer = document.createElement("canvas").getContext("2d"),
    this.context = cancas.getContext("2d");

    this.renderColor = function(color) {
        this.buffer.fillStyle = color;
        this.buffer.fillRect(0, 0, this.buffer.canvas.width, this.buffer.canvas.height);
    }
}