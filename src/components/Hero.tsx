import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import ProfileImage from './ProfileImage';
import AnimatedText from './AnimatedText';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Profile Image */}
        <div className="animate-fade-in-up">
          <ProfileImage size="xl" className="mx-auto mb-6" />
        </div>
        
        <div className="space-y-4">
          <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-purple-400 text-purple-300">
              DevOps Intern
            </Badge>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              <AnimatedText text="Hi, I'm Ali Hamza" delay={600} />
            </h1>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '800ms' }}>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Learning DevOps fundamentals at Vital Steer Technologies. 
              Passionate about automation, cloud technologies, and continuous learning.
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300">
            <Mail className="mr-2 h-4 w-4" />
            Get In Touch
          </Button>
          <Button variant="outline" size="lg" className="border-purple-400 text-purple-300 hover:bg-purple-800 transform hover:scale-105 transition-all duration-300">
            <Github className="mr-2 h-4 w-4" />
            View Projects
          </Button>
          <Button variant="outline" size="lg" className="border-purple-400 text-purple-300 hover:bg-purple-800 transform hover:scale-105 transition-all duration-300">
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>
        </div>
        
        <div className="animate-bounce mt-12" style={{ animationDelay: '1200ms' }}>
          <ChevronDown className="h-8 w-8 mx-auto text-purple-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;