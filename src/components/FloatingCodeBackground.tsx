import React, { useMemo } from "react";

interface CodeElement {
  id: number;
  text: string;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  color: string;
}

const codeSnippets = [
  "def main():", "useState()", "useEffect", "() => {}",
  "async/await", ".map()", "<Component />", "React.FC",
  "#include", "int main()", "SELECT *", "className=",
  "model.fit()", "tensor.shape", "gradient", "optimizer",
  "{ }", "=>", "===", "...", "//", "import numpy",
  "export default", "Promise.all", "std::vector", "@Override",
  "neural_net", "batch_size", "display: flex", "grid-cols",
];

const colors = [
  "rgba(59, 130, 246, 0.7)",
  "rgba(139, 92, 246, 0.7)",
  "rgba(99, 102, 241, 0.7)",
  "rgba(14, 165, 233, 0.6)",
  "rgba(249, 115, 22, 0.6)",
  "rgba(34, 211, 238, 0.6)",
];

const FloatingCodeBackground: React.FC = () => {
  const elements = useMemo<CodeElement[]>(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      text: codeSnippets[i % codeSnippets.length],
      x: (i * 3.3) % 100,
      y: (i * 7.7) % 100,
      size: 13 + (i % 3) * 3,
      opacity: 0.3 + (i % 3) * 0.2,
      duration: 20 + (i % 5) * 8,
      delay: -(i * 2.3),
      color: colors[i % colors.length],
    }));
  }, []);

  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950" />
      
      {/* Static gradient overlay - no animation for performance */}
      <div 
        className="absolute inset-0 opacity-70"
        style={{
          background: "radial-gradient(ellipse at 20% 30%, rgba(59, 130, 246, 0.2) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)",
        }}
      />
      
      {/* Floating code elements - CSS animations only for better perf */}
      {elements.map((el) => (
        <div
          key={el.id}
          className="absolute font-mono whitespace-nowrap select-none"
          style={{
            left: `${el.x}%`,
            top: `${el.y}%`,
            fontSize: `${el.size}px`,
            color: el.color,
            opacity: el.opacity,
            textShadow: `0 0 12px ${el.color}`,
            animation: `floatUp ${el.duration}s ${el.delay}s linear infinite`,
            willChange: "transform",
          }}
        >
          {el.text}
        </div>
      ))}
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(rgba(59,130,246,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.6) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
};

export default FloatingCodeBackground;

