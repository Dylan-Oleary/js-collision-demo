const canvas = document.createElement("canvas");
const ctx = canvas?.getContext("2d") as CanvasRenderingContext2D;

function resizeCanvas(height: number, width: number): void {
  canvas.height = height;
  canvas.width = width;
}

export { canvas, ctx, resizeCanvas };
