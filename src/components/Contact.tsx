
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import { toast } from 'sonner';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! I'll get back to you soon.");
    // In a real implementation, we would send the form data to a server
    // For now, just clear the form
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <section id="contact" className="py-20 bg-tech-gray/20">
      <div className="section-container">
        <div className="flex flex-col items-center mb-12">
          <h2 className="section-title">Get In Touch</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-tech-purple to-tech-blue rounded-full mt-1"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 animate-fade-in">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6">Send Me A Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium">Name</label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">Email</label>
                    <Input id="email" type="email" placeholder="Your email" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
                  <Input id="subject" placeholder="Subject" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">Message</label>
                  <Textarea id="message" placeholder="Your message" rows={5} required />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-6 animate-fade-in" style={{animationDelay: "0.2s"}}>
            <Card>
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="bg-tech-purple text-white p-3 rounded-full">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a href="mailto:gsanjeev432@gmail.com" className="text-sm text-tech-purple hover:underline">gsanjeev432@gmail.com</a>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="bg-tech-purple text-white p-3 rounded-full">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <a href="tel:+919762767218" className="text-sm text-tech-purple hover:underline">+91 97627 67218</a>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="bg-tech-purple text-white p-3 rounded-full">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-sm">Pune, Maharashtra, India</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Social Profiles</h4>
                <div className="flex space-x-3">
                  <a 
                    href="https://www.linkedin.com/in/sanjiv-gupta" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-tech-lightPurple text-tech-purple p-2 rounded-full hover:bg-tech-purple hover:text-white transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a 
                    href="https://github.com/gsanjeev432" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-tech-lightPurple text-tech-purple p-2 rounded-full hover:bg-tech-purple hover:text-white transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a 
                    href="mailto:gsanjeev432@gmail.com" 
                    className="bg-tech-lightPurple text-tech-purple p-2 rounded-full hover:bg-tech-purple hover:text-white transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
