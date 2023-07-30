export default function PlayerStats(ctx, player, canvas) {

    // Lives
    ctx.font = "20px Arial";
    ctx.fillStyle = "red";
    let gap = 0;
    for (let i = 0; i < player.lives; i++) {
      ctx.fillText("❤️", canvas.width - 150 + gap, 30);
      gap += 30;
    }
  
    // Score
    ctx.font = "20px Arial";
    ctx.fillStyle = "#1B93FA";
    ctx.fillText(`Score: ${player.score}`, 20, 30);
}