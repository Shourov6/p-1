import React from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  CheckCircle,
  Eye,
  EyeOff,
  Info,
  Lightbulb,
  X,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/**
 * DesignIssueExplainer Component
 *
 * This component explains why other sections appear blurry compared to the landing page.
 *
 * ISSUE: The blur effect comes from:
 * 1. `glass-effect` CSS class which uses `backdrop-blur-md`
 * 2. Background blur elements (blur-2xl, blur-3xl) for decorative effects
 * 3. FloatingCodeBackground has layered blur effects for depth
 *
 * SOLUTION OPTIONS:
 * - Remove `glass-effect` class from cards if not needed
 * - Reduce blur values in background decorative elements
 * - Adjust the backdrop-blur intensity in index.css
 */

interface IssueItem {
  title: string;
  description: string;
  location: string;
  cssClass: string;
  solution: string;
}

const blurIssues: IssueItem[] = [
  {
    title: "Glass Effect on Cards",
    description:
      "Cards in sections use 'glass-effect' class which applies backdrop-blur-md",
    location: "src/index.css (line ~90)",
    cssClass: "glass-effect → backdrop-blur-md bg-slate-800/30",
    solution:
      "Remove 'glass-effect' class OR change 'backdrop-blur-md' to 'backdrop-blur-none'",
  },
  {
    title: "Background Decorative Blurs",
    description:
      "Sections have background orbs with blur-2xl and blur-3xl effects",
    location: "AboutSection, ProjectsSection, SectionsContainer",
    cssClass: "bg-neon-purple/10 rounded-full blur-2xl",
    solution:
      "Reduce blur values (blur-xl instead of blur-3xl) or remove decorative elements",
  },
  {
    title: "FloatingCodeBackground Layers",
    description:
      "Hero section background has 3 layers with different blur levels for depth effect",
    location: "src/components/FloatingCodeBackground.tsx",
    cssClass: "filter: blur(0px) to blur(3px) based on layer",
    solution:
      "This is intentional for parallax depth - hero remains sharp on layer 2",
  },
];

const DesignIssueExplainer: React.FC = () => {
  return <></>;
};

export default DesignIssueExplainer;
