AFRAME.registerComponent("scuba-diver-rotation-reader", {
  schema: {
    speedOfRotation: {
      type: "number",
      default: 0,
    },
    moveY: {
      type: "number",
      default: 0,
    },
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      this.data.speedOfRotation = this.el.getAttribute("rotation");
      this.data.moveY = this.el.getAttribute("position");
      if (e.key === "ArrowUp") {
        if (this.data.speedOfRotation.z < 20) {
          this.data.speedOfRotation.z += 0.5;
        }
        if (this.data.moveY.y < 2) {
          this.data.moveY.y += 0.01;
        }
      }
      if (e.key === "ArrowDown") {
        if (this.data.speedOfRotation.z > -20) {
          this.data.speedOfRotation.z -= 0.5;
        }
        if (this.data.moveY.y > -2) {
          this.data.moveY.y -= 0.01;
        }
      }
      if (e.key === "ArrowRight") {
        if (this.data.speedOfRotation.x < 10) {
          this.data.speedOfRotation.x += 0.5;
        }
      }
      if (e.key === "ArrowLeft") {
        if (this.data.speedOfRotation.x > -10) {
          this.data.speedOfRotation.x -= 0.5;
        }
      }
      this.el.setAttribute("rotation", this.data.speedOfRotation);
      this.el.setAttribute("position", this.data.moveY);
    });
  },
});
