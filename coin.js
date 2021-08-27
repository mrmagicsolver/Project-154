AFRAME.registerComponent("coin", {
  init: function () {
    for (let i = 1; i <= 20; i++) {
      let pos = {
        x: Math.random() * 100 + -50,
        y: Math.random() * 5 + 5,
        z: Math.random() * 60 + -40,
      };
      let id = `coin${i}`;
      this.createCoin(id, pos);
    }
  },
  createCoin: function (id, position) {
    let island = document.querySelector("#some2");
    let coin = document.createElement("a-entity");
    coin.setAttribute("id", id);
    coin.setAttribute("position", position);
    coin.setAttribute("rotation", { x: 0, y: 180, z: 0 });
    coin.setAttribute("scale", { x: 15, y: 15, z: 15 });
    coin.setAttribute("gltf-model", "./assets/coin/scene.gltf");
    coin.setAttribute("static-body", { shape: "box", width: 4, height: 3.3 });
    island.appendChild(coin);
  },
});
