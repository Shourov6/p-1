import React, { useMemo } from "react";
import { motion } from "framer-motion";

interface CodeElement {
  id: number;
  text: string;
  x: number;
  y: number;
  size: number;
  opacity: number;
  blur: number;
  duration: number;
  delay: number;
  color: string;
  direction: "diagonal" | "vertical";
  layer: number;
}

const codeSnippets = [
  // Python
  "def main():",
  "import numpy",
  "for i in range:",
  "lambda x:",
  "class Model:",
  "yield data",
  "async def",
  "**kwargs",
  "self.train()",
  
  // JavaScript/React
  "const App",
  "useState()",
  "useEffect",
  "export default",
  "() => {}",
  "async/await",
  "Promise.all",
  ".map()",
  "fetch()",
  "<Component />",
  "props",
  "React.FC",
  
  // C++
  "#include",
  "std::vector",
  "int main()",
  "template<T>",
  "nullptr",
  "auto",
  
  // Java
  "public class",
  "extends",
  "implements",
  "@Override",
  "new Object()",
  
  // SQL
  "SELECT *",
  "FROM table",
  "WHERE id =",
  "JOIN ON",
  "INSERT INTO",
  "GROUP BY",
  
  // HTML/CSS
  "<div>",
  "</section>",
  "className=",
  "display: flex",
  "grid-cols",
  "@media",
  
  // AI/ML
  "model.fit()",
  "neural_net",
  "tensor.shape",
  "gradient",
  "loss_fn",
  "optimizer",
  "epochs",
  "batch_size",
  "accuracy",
  "prediction",
  
  // Symbols
  "{ }",
  "[ ]",
  "< />",
  "=>",
  "===",
  "&&",
  "||",
  "::",
  "...",
  "/**/",
  "//",
  "#",
];

const colors = [
  "rgba(59, 130, 246, 1)",     // blue - full opacity
  "rgba(139, 92, 246, 1)",     // purple - full opacity
  "rgba(99, 102, 241, 1)",     // indigo - full opacity
  "rgba(14, 165, 233, 0.9)",   // sky
  "rgba(168, 85, 247, 0.9)",   // violet
  "rgba(79, 70, 229, 0.9)",    // indigo darker
  "rgba(249, 115, 22, 0.9)",   // orange accent
  "rgba(34, 211, 238, 0.9)",   // cyan
];

const FloatingCodeBackground: React.FC = () => {
  const elements = useMemo<CodeElement[]>(() => {
    const generated: CodeElement[] = [];
    const elementCount = 65; // Increased count for more visibility
    
    for (let i = 0; i < elementCount; i++) {
      const layer = Math.floor(Math.random() * 3); // 0 = far, 1 = mid, 2 = near
      const layerConfig = {
        0: { blur: 2, opacity: 0.35, sizeRange: [12, 16], speedMultiplier: 0.7 },
        1: { blur: 0.5, opacity: 0.55, sizeRange: [14, 20], speedMultiplier: 1 },
        2: { blur: 0, opacity: 0.85, sizeRange: [18, 24], speedMultiplier: 1.3 },
      }[layer]!;
      
      generated.push({
        id: i,
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: layerConfig.sizeRange[0] + Math.random() * (layerConfig.sizeRange[1] - layerConfig.sizeRange[0]),
        opacity: layerConfig.opacity * (0.8 + Math.random() * 0.2),
        blur: layerConfig.blur,
        duration: (25 + Math.random() * 20) / layerConfig.speedMultiplier,
        delay: Math.random() * -30,
        color: colors[Math.floor(Math.random() * colors.length)],
        direction: Math.random() > 0.4 ? "diagonal" : "vertical",
        layer,
      });
    }
    return generated;
  }, []);

  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
      style={{ willChange: "auto" }}
    >
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950" />
      
      {/* Animated gradient overlay */}
      <div 
        className="absolute inset-0 opacity-70"
        style={{
          background: "radial-gradient(ellipse at 20% 30%, rgba(59, 130, 246, 0.25) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(139, 92, 246, 0.25) 0%, transparent 50%), radial-gradient(ellipse at 50% 50%, rgba(249, 115, 22, 0.1) 0%, transparent 40%)",
        }}
      />
      
      {/* Light wave effect */}
      <motion.div
        className="absolute inset-0 opacity-50"
        animate={{
          background: [
            "linear-gradient(45deg, transparent 0%, rgba(59, 130, 246, 0.12) 25%, transparent 50%, rgba(139, 92, 246, 0.12) 75%, transparent 100%)",
            "linear-gradient(45deg, transparent 0%, rgba(139, 92, 246, 0.12) 25%, transparent 50%, rgba(59, 130, 246, 0.12) 75%, transparent 100%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />
      
      {/* Floating code elements */}
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute font-mono whitespace-nowrap select-none"
          initial={{
            x: `${element.x}vw`,
            y: `${element.y}vh`,
          }}
          animate={
            element.direction === "diagonal"
              ? {
                  x: [`${element.x}vw`, `${element.x + 30}vw`, `${element.x}vw`],
                  y: [`${element.y}vh`, `${(element.y + 40) % 100}vh`, `${element.y}vh`],
                }
              : {
                  y: [`${element.y}vh`, `${(element.y + 50) % 100}vh`, `${element.y}vh`],
                }
          }
          transition={{
            duration: element.duration,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            delay: element.delay,
          }}
          style={{
            fontSize: `${element.size}px`,
            color: element.color,
            opacity: element.opacity,
            filter: element.blur > 0 ? `blur(${element.blur}px)` : undefined,
            zIndex: element.layer,
            textShadow: element.layer === 2 
              ? `0 0 15px ${element.color}, 0 0 30px ${element.color}, 0 0 45px ${element.color.replace("1)", "0.5)")}`
              : element.layer === 1
              ? `0 0 10px ${element.color}, 0 0 20px ${element.color.replace("1)", "0.4)")}`
              : `0 0 8px ${element.color.replace("1)", "0.3)")}`,
            fontWeight: element.layer === 2 ? 600 : 400,
          }}
        >
          {element.text}
        </motion.div>
      ))}
      
      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.6) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      
      {/* Vignette effect for depth - reduced for more visibility */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 30%, rgba(15, 23, 42, 0.25) 100%)",
        }}
      />
    </div>
  );
};

export default FloatingCodeBackground;
