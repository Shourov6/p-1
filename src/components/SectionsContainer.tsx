import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import {
  BookOpen,
  Briefcase,
  Code,
  Lightbulb,
  Languages,
  Wrench,
  Users,
  Search,
  FileText,
  Palette,
  TestTube,
  Rocket,
  ArrowRight,
  TrendingUp,
  Award,
  Brain,
  Activity,
  Microscope,
} from "lucide-react";

interface SectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const Section = ({ title, icon, children }: SectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 rounded-full bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 text-neon-blue border border-neon-blue/30 shadow-lg shadow-neon-blue/25">
          {icon}
        </div>
        <h2 className="text-3xl font-bold text-gradient">{title}</h2>
      </div>
      {children}
    </motion.div>
  );
};

const ExperienceCard = ({
  title,
  role,
  duration,
  description,
}: {
  title: string;
  role: string;
  duration: string;
  description?: string;
}) => {
  return (
    <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 hover:border-neon-blue/50 transition-all duration-500 hover-lift glass-effect group relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <CardContent className="p-6 relative z-10">
        <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-gradient transition-all duration-300">
          {title}
        </h3>
        <p className="text-neon-orange mb-2 font-medium">{role}</p>
        <p className="text-gray-400 text-sm mb-2 group-hover:text-gray-300 transition-colors duration-300">
          {duration}
        </p>
        {description && (
          <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
            {description}
          </p>
        )}
      </CardContent>
      <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </Card>
  );
};

const LeadershipCard = ({
  title,
  role,
  description,
}: {
  title: string;
  role: string;
  description: string;
}) => {
  return (
    <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 hover:border-neon-orange/50 transition-all duration-500 hover-lift glass-effect group relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-neon-orange/5 via-transparent to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <CardContent className="p-6 relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <Users className="text-neon-orange" size={20} />
          <h3 className="text-lg font-semibold text-white group-hover:text-gradient transition-all duration-300">
            {title}
          </h3>
        </div>
        <p className="text-neon-orange mb-2 font-medium">{role}</p>
        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>
      </CardContent>
      <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </Card>
  );
};

const WorkflowStep = ({
  step,
  title,
  description,
  icon: Icon,
  isLast,
}: {
  step: number;
  title: string;
  description: string;
  icon: React.ElementType;
  isLast?: boolean;
}) => {
  return (
    <div className="flex items-start gap-4 relative">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 border border-neon-blue/50 flex items-center justify-center text-neon-blue font-bold">
          <Icon size={20} />
        </div>
        {!isLast && (
          <div className="w-0.5 h-16 bg-gradient-to-b from-neon-blue/50 to-transparent mt-2"></div>
        )}
      </div>
      <div className="flex-1 pt-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-neon-orange font-bold text-sm">Step {step}</span>
          {!isLast && <ArrowRight className="text-gray-600" size={14} />}
        </div>
        <h4 className="text-white font-semibold mb-1">{title}</h4>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

const EducationCard = ({
  institution,
  degree,
  courses,
}: {
  institution: string;
  degree: string;
  courses: string;
}) => {
  return (
    <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 hover:border-neon-purple/50 transition-all duration-500 hover-lift glass-effect group relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 via-transparent to-neon-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <CardContent className="p-6 relative z-10">
        <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-gradient transition-all duration-300">
          {institution}
        </h3>
        <p className="text-neon-orange mb-3 font-medium">{degree}</p>
        <p className="text-gray-300 text-sm font-medium">
          Relevant coursework:
        </p>
        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
          {courses}
        </p>
      </CardContent>
      <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </Card>
  );
};

const LanguageBar = ({
  language,
  level,
  percentage,
}: {
  language: string;
  level: string;
  percentage: number;
}) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-white">{language}</span>
        <span className="text-gray-400">{level}</span>
      </div>
      <Progress value={percentage} className="h-2" />
    </div>
  );
};

const SkillIcon = ({ name, icon }: { name: string; icon: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center gap-2 group">
      <div className="p-4 rounded-full bg-gradient-to-br from-gray-800/80 to-gray-900/80 text-neon-orange hover:bg-gradient-to-br hover:from-neon-blue/20 hover:to-neon-purple/20 hover:text-neon-blue transition-all duration-300 border border-gray-700/50 hover:border-neon-blue/50 shadow-lg hover:shadow-neon-blue/25 hover-lift">
        {icon}
      </div>
      <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
        {name}
      </span>
    </div>
  );
};

const SectionsContainer = () => {
  // Working style tags
  const workingStyles = [
    "Problem-Solver",
    "Creative Thinker",
    "Attention to Detail",
    "Teamwork",
    "Curious & Fast Learner",
  ];

  // Workflow steps
  const workflowSteps = [
    { title: "Understand Requirements", description: "Analyze project needs, gather requirements, and define clear objectives.", icon: Search },
    { title: "Research & Plan", description: "Research best approaches, select technologies, and create detailed project roadmap.", icon: FileText },
    { title: "Design & Develop", description: "Create UI/UX designs, write clean code, and build functional components.", icon: Palette },
    { title: "Test & Optimize", description: "Perform thorough testing, fix bugs, and optimize for performance.", icon: TestTube },
    { title: "Deploy & Iterate", description: "Deploy to production, gather feedback, and continuously improve.", icon: Rocket },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900 text-white py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-40 right-20 w-80 h-80 bg-neon-blue/5 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-pink/5 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl relative z-10">
        {/* Impact & Achievements Section */}
        <Section title="Impact & Achievements" icon={<TrendingUp size={24} />}>
          <p className="text-gray-300 mb-8">Highlights of my professional journey</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 border-neon-blue/30 hover:border-neon-blue/60 transition-all duration-500 hover-lift glass-effect group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-6 relative z-10 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center border border-neon-blue/50">
                  <Brain className="text-neon-blue" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">3+</h3>
                <p className="text-neon-blue font-medium mb-1">ML Models Deployed</p>
                <p className="text-gray-400 text-sm">Multiple machine learning models built and deployed for real-world applications</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-neon-orange/10 to-yellow-500/10 border-neon-orange/30 hover:border-neon-orange/60 transition-all duration-500 hover-lift glass-effect group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-orange/5 via-transparent to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-6 relative z-10 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-neon-orange/20 to-yellow-500/20 flex items-center justify-center border border-neon-orange/50">
                  <Users className="text-neon-orange" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">10+</h3>
                <p className="text-neon-orange font-medium mb-1">Global Freelance Clients</p>
                <p className="text-gray-400 text-sm">Delivered professional websites for clients worldwide via Fiverr</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-neon-purple/10 to-neon-pink/10 border-neon-purple/30 hover:border-neon-purple/60 transition-all duration-500 hover-lift glass-effect group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 via-transparent to-neon-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-6 relative z-10 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 flex items-center justify-center border border-neon-purple/50">
                  <Activity className="text-neon-purple" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">5+</h3>
                <p className="text-neon-purple font-medium mb-1">Live Streamlit Apps</p>
                <p className="text-gray-400 text-sm">Deployed data-driven web applications on Streamlit cloud</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-500 hover-lift glass-effect group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-6 relative z-10 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/50">
                  <Microscope className="text-cyan-400" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">2+</h3>
                <p className="text-cyan-400 font-medium mb-1">Research Projects</p>
                <p className="text-gray-400 text-sm">Academic AI/ML research including breast cancer grade classification</p>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* Research & AI Focus Section */}
        <Section title="Research & AI Focus" icon={<Microscope size={24} />}>
          <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 hover:border-neon-blue/50 transition-all duration-500 glass-effect group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="p-8 relative z-10">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center border border-neon-blue/50 shadow-lg shadow-neon-blue/25">
                    <Brain className="text-neon-blue" size={40} />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    My research interests center on <span className="text-neon-blue font-semibold">AI-powered healthcare solutions</span>, including work on <span className="text-neon-purple font-semibold">Breast Cancer Grade Classification</span> using deep learning techniques. I'm passionate about developing <span className="text-neon-orange font-semibold">decision-support systems</span> that leverage machine learning to assist medical professionals and improve diagnostic accuracy.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="outline" className="bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 text-neon-blue border-neon-blue/50 px-4 py-2 text-sm transition-all duration-300 glass-effect hover:shadow-lg hover:shadow-neon-blue/25">
                      Medical AI
                    </Badge>
                    <Badge variant="outline" className="bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 text-neon-purple border-neon-purple/50 px-4 py-2 text-sm transition-all duration-300 glass-effect hover:shadow-lg hover:shadow-neon-purple/25">
                      Deep Learning
                    </Badge>
                    <Badge variant="outline" className="bg-gradient-to-r from-neon-orange/20 to-yellow-500/20 text-neon-orange border-neon-orange/50 px-4 py-2 text-sm transition-all duration-300 glass-effect hover:shadow-lg hover:shadow-neon-orange/25">
                      Decision Support Systems
                    </Badge>
                    <Badge variant="outline" className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/50 px-4 py-2 text-sm transition-all duration-300 glass-effect hover:shadow-lg hover:shadow-cyan-500/25">
                      Image Classification
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Section>

        {/* Experience Section */}
        <Section title="Experience" icon={<Briefcase size={24} />}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ExperienceCard
              title="Freelancer (Fiverr)"
              role="Web Developer (Wix & Squarespace)"
              duration="2021–Present"
              description="Delivered professional websites for international clients, focusing on responsive design, SEO optimization, and brand-focused layouts."
            />
            <ExperienceCard
              title="Academic Research Projects"
              role="Machine Learning & AI"
              duration="2022–Present"
              description="Developed ML models for healthcare applications including breast cancer detection, Parkinson's prediction, and currency recognition systems."
            />
            <ExperienceCard
              title="Team Projects"
              role="Android Apps & Web Platforms"
              duration="University Projects"
              description="Collaborated on full-stack web applications and Android development projects, applying software engineering best practices."
            />
          </div>
        </Section>

        {/* Leadership Section */}
        <Section title="Leadership & Activities" icon={<Users size={24} />}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <LeadershipCard
              title="Green University Club for Languages"
              role="President"
              description="Leading initiatives to promote language learning and cultural exchange among students, organizing workshops and events."
            />
            <LeadershipCard
              title="Social Services & Blood Donation Club"
              role="Event Secretary"
              description="Coordinating blood donation drives and community service events, making a positive impact on society."
            />
          </div>
        </Section>

        {/* Education Section */}
        <Section title="Education" icon={<BookOpen size={24} />}>
          <div className="grid grid-cols-1 gap-6">
            <EducationCard
              institution="Green University of Bangladesh"
              degree="B.Sc. in Computer Science & Engineering (Ongoing)"
              courses="Machine Learning, Cryptography, Web Development"
            />
          </div>
        </Section>

        {/* Working Style Section */}
        <Section title="How I Work" icon={<Lightbulb size={24} />}>
          <div className="mb-8">
            <p className="text-gray-300 mb-6">My problem-solving workflow ensures quality delivery from concept to deployment:</p>
            <div className="space-y-6">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <WorkflowStep
                    step={index + 1}
                    title={step.title}
                    description={step.description}
                    icon={step.icon}
                    isLast={index === workflowSteps.length - 1}
                  />
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <p className="text-gray-400 mb-4 font-medium">My Working Style:</p>
            <div className="flex flex-wrap gap-3">
              {workingStyles.map((style, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 text-white border-gray-700/50 hover:border-neon-orange hover:bg-neon-orange/20 hover:text-neon-orange px-4 py-2 text-sm transition-all duration-300 glass-effect hover:shadow-lg hover:shadow-neon-orange/25"
                >
                  {style}
                </Badge>
              ))}
            </div>
          </div>
        </Section>

        {/* Languages Section */}
        <Section title="Languages" icon={<Languages size={24} />}>
          <div className="max-w-md">
            <LanguageBar language="English" level="High" percentage={85} />
            <LanguageBar language="Bangla" level="Native" percentage={100} />
          </div>
        </Section>

        {/* Skills Section */}
        <Section title="Skills & Tools" icon={<Wrench size={24} />}>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
            <SkillIcon name="Python" icon={<i className="text-2xl">🐍</i>} />
            <SkillIcon name="Java" icon={<i className="text-2xl">☕</i>} />
            <SkillIcon name="C++" icon={<i className="text-2xl">🔧</i>} />
            <SkillIcon name="HTML" icon={<i className="text-2xl">🌐</i>} />
            <SkillIcon name="CSS" icon={<i className="text-2xl">🎨</i>} />
            <SkillIcon
              name="JavaScript"
              icon={<i className="text-2xl">📜</i>}
            />
            <SkillIcon name="React" icon={<i className="text-2xl">⚛️</i>} />
            <SkillIcon name="Node.js" icon={<i className="text-2xl">🟢</i>} />
            <SkillIcon name="Figma" icon={<i className="text-2xl">🖌️</i>} />
            <SkillIcon name="Photoshop" icon={<i className="text-2xl">📸</i>} />
            <SkillIcon
              name="Illustrator"
              icon={<i className="text-2xl">✏️</i>}
            />
            <SkillIcon name="Office" icon={<i className="text-2xl">📊</i>} />
          </div>
        </Section>

        <Separator className="my-8 bg-gray-800" />
      </div>
    </div>
  );
};

export default SectionsContainer;
