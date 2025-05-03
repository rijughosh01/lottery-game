import "./Fireworks.css";

export default function Fireworks() {
  const fireworkColors = ["#ff6b6b", "#f06595", "#845ef7", "#5c7cfa", "#22b8cf", "#51cf66"];

  return (
    <div className="fireworks-container">
      {Array.from({ length: 10 }).map((_, idx) => {
        const randomColor = fireworkColors[Math.floor(Math.random() * fireworkColors.length)];
        const randomSize = Math.random() * 20 + 10;
        const randomLeft = Math.random() * 100;
        const randomTop = Math.random() * 100;
        const randomDelay = Math.random() * 2;

        return (
          <div
            className="firework"
            key={idx}
            style={{
              backgroundColor: randomColor,
              width: `${randomSize}px`,
              height: `${randomSize}px`,
              left: `${randomLeft}%`,
              top: `${randomTop}%`,
              animationDelay: `${randomDelay}s`,
            }}
          ></div>
        );
      })}
    </div>
  );
}