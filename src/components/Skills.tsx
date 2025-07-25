import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cloud, Container, GitBranch, Monitor, Server, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: <Container className="h-8 w-8" />,
      title: "Containerization",
      skills: ["Docker", "Docker Compose"],
      color: "bg-gradient-to-r from-purple-500 to-pink-500"
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Platforms",
      skills: ["AWS", "EC2", "S3"],
      color: "bg-gradient-to-r from-indigo-500 to-purple-500"
    },
    {
      icon: <GitBranch className="h-8 w-8" />,
      title: "CI/CD",
      skills: ["GitHub Actions", "Git"],
      color: "bg-gradient-to-r from-pink-500 to-rose-500"
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Monitoring",
      skills: ["Basic Logging", "System Monitoring"],
      color: "bg-gradient-to-r from-cyan-500 to-blue-500"
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Infrastructure",
      skills: ["Linux", "Basic Networking"],
      color: "bg-gradient-to-r from-violet-500 to-purple-500"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Programming",
      skills: ["Python", "Bash", "YAML"],
      color: "bg-gradient-to-r from-fuchsia-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Technical Skills</h2>
          <p className="text-xl text-gray-300">Learning modern DevOps tools and practices</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up group bg-gray-800/50 border-purple-500/30 backdrop-blur-sm animate-float"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className={`${category.color} text-white p-3 rounded-lg w-fit mb-4 transform group-hover:scale-110 transition-transform duration-300 animate-glow`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-purple-400 transition-colors duration-300">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="bg-purple-600/20 text-purple-300 border-purple-500/30 hover:bg-purple-600/40 hover:text-purple-200 transition-colors duration-300 transform hover:scale-105"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;