import { useEffect, useRef } from "react";

export default function PixelAvatar({ src, size = 120 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = src;

    img.onload = () => {
      canvas.width = size;
      canvas.height = size;

      const offscreen = document.createElement("canvas");
      offscreen.width = size;
      offscreen.height = size;
      const offCtx = offscreen.getContext("2d");
      offCtx.drawImage(img, 0, 0, size, size);

      const imageData = offCtx.getImageData(0, 0, size, size);
      const pixels = [];

      for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
          pixels.push({ x, y });
        }
      }

      // shuffle pixels for random reveal
      for (let i = pixels.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pixels[i], pixels[j]] = [pixels[j], pixels[i]];
      }

      let index = 0;
      const batchSize = 80;

      const draw = () => {
        for (let b = 0; b < batchSize && index < pixels.length; b++, index++) {
          const { x, y } = pixels[index];
          const i = (y * size + x) * 4;
          const r = imageData.data[i];
          const g = imageData.data[i + 1];
          const bl = imageData.data[i + 2];
          const a = imageData.data[i + 3] / 255;
          ctx.fillStyle = `rgba(${r},${g},${bl},${a})`;
          ctx.fillRect(x, y, 1, 1);
        }
        if (index < pixels.length) requestAnimationFrame(draw);
      };

      requestAnimationFrame(draw);
    };
  }, [src, size]);

  return <canvas ref={canvasRef} className="pixel-avatar" />;
}
