import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "DevOps Intern",
      company: "Vital Steer Technologies",
      location: "Remote",
      period: "4 months (2024)",
      achievements: [
        "Learned Docker containerization and basic deployment workflows",
        "Assisted in setting up CI/CD pipelines using GitHub Actions",
        "Gained hands-on experience with AWS EC2 and S3 services",
        "Participated in infrastructure monitoring and logging setup"
      ],
      tech: ["Docker", "GitHub Actions", "AWS", "Linux"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Professional Experience</h2>
          <p className="text-xl text-gray-300">Starting my journey in DevOps and cloud technologies</p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up group bg-gray-800/50 border-purple-500/30 backdrop-blur-sm animate-glow"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">{exp.title}</h3>
                    <p className="text-xl text-purple-400 font-semibold mb-2">{exp.company}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-300">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-purple-400" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-purple-400" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start group-hover:text-gray-200 transition-colors duration-300">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:bg-pink-500 transition-colors duration-300 animate-pulse"></div>
                      <span className="text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary"
                      className="bg-purple-600/20 text-purple-300 border-purple-500/30 hover:bg-purple-600/40 hover:text-purple-200 transition-all duration-300 transform hover:scale-105"
                    >
                      {tech}
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

export default Experience;