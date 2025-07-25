import React from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Code, Cloud, User, Briefcase, Mail } from 'lucide-react';

const Navigation: React.FC = () => {
  const navItems = [
    { name: 'About', icon: <User className="h-4 w-4" />, href: '#about' },
    { name: 'Skills', icon: <Code className="h-4 w-4" />, href: '#skills' },
    { name: 'Projects', icon: <Cloud className="h-4 w-4" />, href: '#projects' },
    { name: 'Experience', icon: <Briefcase className="h-4 w-4" />, href: '#experience' },
    { name: 'Contact', icon: <Mail className="h-4 w-4" />, href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-2 rounded-lg">
              <Cloud className="h-6 w-6" />
            </div>
            <span className="ml-3 text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              DevOps Portfolio
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {item.icon}
                <span>{item.name}</span>
              </button>
            ))}
          </div>
          
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="flex items-center space-x-3 text-left p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    >
                      {item.icon}
                      <span className="text-lg">{item.name}</span>
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;