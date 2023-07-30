export default {
    ballObj: {
      x: 20,
      y: 300,
      dx: 2,
      dy: 2,
      rad: 10,
      speed: 10,
    },
    brickObj: {
      x: 0.5,
      y: 50,
      height: 20,
      density: 2,
      colors: ["red", `hsl(${Math.random() * 360},50%,50%)`],
    },
    player: {
      lives: 5,
      score: 0,
      level: 1,
    },
    paddleProps: {
      height: 20,
      width: 100,
      x: 100,
      color: "#1B93FA",
    },
  };