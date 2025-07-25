import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Get In Touch</h2>
          <p className="text-xl text-gray-300">Let's connect and discuss opportunities</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 transform hover:scale-105 transition-transform duration-300">
                  <div className="bg-purple-600/20 p-3 rounded-lg animate-float border border-purple-500/30">
                    <Mail className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-gray-300">alihamza@example.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 transform hover:scale-105 transition-transform duration-300">
                  <div className="bg-pink-600/20 p-3 rounded-lg animate-float border border-pink-500/30" style={{ animationDelay: '0.5s' }}>
                    <Phone className="h-6 w-6 text-pink-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <p className="text-gray-300">Available on request</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 transform hover:scale-105 transition-transform duration-300">
                  <div className="bg-indigo-600/20 p-3 rounded-lg animate-float border border-indigo-500/30" style={{ animationDelay: '1s' }}>
                    <MapPin className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Location</p>
                    <p className="text-gray-300">Remote</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Follow Me</h3>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="border-purple-400 text-purple-300 hover:bg-purple-800 transform hover:scale-110 transition-all duration-300">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="border-purple-400 text-purple-300 hover:bg-purple-800 transform hover:scale-110 transition-all duration-300">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          
          <Card className="animate-fade-in-up transform hover:shadow-2xl transition-all duration-500 bg-gray-800/50 border-purple-500/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="First Name" className="bg-gray-700/50 border-purple-500/30 text-white placeholder-gray-400" />
                  <Input placeholder="Last Name" className="bg-gray-700/50 border-purple-500/30 text-white placeholder-gray-400" />
                </div>
                <Input type="email" placeholder="Email" className="bg-gray-700/50 border-purple-500/30 text-white placeholder-gray-400" />
                <Input placeholder="Subject" className="bg-gray-700/50 border-purple-500/30 text-white placeholder-gray-400" />
                <Textarea placeholder="Message" className="min-h-[120px] bg-gray-700/50 border-purple-500/30 text-white placeholder-gray-400" />
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;