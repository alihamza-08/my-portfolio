import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Docker Learning Project",
      description: "Simple web application containerized with Docker. Learning basic containerization concepts and deployment workflows.",
      tech: ["Docker", "HTML/CSS", "GitHub"],
      image: "bg-gradient-to-br from-purple-400 to-pink-400"
    },
    {
      title: "AWS EC2 Deployment",
      description: "Basic web server deployment on AWS EC2 instance. Learning cloud fundamentals and server management.",
      tech: ["AWS EC2", "Linux", "Nginx"],
      image: "bg-gradient-to-br from-indigo-400 to-purple-400"
    },
    {
      title: "GitHub Actions CI/CD",
      description: "Automated deployment pipeline using GitHub Actions. Learning continuous integration and deployment practices.",
      tech: ["GitHub Actions", "Docker", "YAML"],
      image: "bg-gradient-to-br from-pink-400 to-rose-400"
    },
    {
      title: "Python Automation Scripts",
      description: "Collection of automation scripts for system administration tasks. Learning scripting and automation fundamentals.",
      tech: ["Python", "Bash", "Linux"],
      image: "bg-gradient-to-br from-cyan-400 to-blue-400"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Learning Projects</h2>
          <p className="text-xl text-gray-300">Hands-on projects during my DevOps journey</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up group overflow-hidden bg-gray-800/50 border-purple-500/30 backdrop-blur-sm"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`h-48 ${project.image} rounded-t-lg flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500 animate-glow`}>
                <div className="text-white text-6xl font-bold opacity-30 transform group-hover:scale-110 transition-transform duration-500">
                  {index + 1}
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-white group-hover:text-purple-400 transition-colors duration-300">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline"
                      className="bg-purple-600/20 text-purple-300 border-purple-500/30 hover:bg-purple-600/40 hover:text-purple-200 transition-all duration-300 transform hover:scale-105"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3 pt-4">
                  <Button size="sm" variant="outline" className="border-purple-400 text-purple-300 hover:bg-purple-800 transform hover:scale-105 transition-all duration-300">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;