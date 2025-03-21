
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import { Mail, Phone, MapPin, Send, MessageSquare, Users } from 'lucide-react';

const Contact = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here
    alert('Message sent successfully! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen flex flex-col page-transition">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Header */}
        <section className="py-16 bg-muted/30">
          <div className="container-narrow text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions about volunteering or our platform? We're here to help you connect with the right opportunities and resources.
            </p>
          </div>
        </section>

        {/* Contact info & form */}
        <section className="py-16">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div className="space-y-10">
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Email Us</h3>
                      <p className="text-muted-foreground">For general inquiries:</p>
                      <a href="mailto:contact@engage-platform.org" className="text-primary hover:underline">
                        contact@engage-platform.org
                      </a>
                      <p className="text-muted-foreground mt-2">For volunteer support:</p>
                      <a href="mailto:volunteers@engage-platform.org" className="text-primary hover:underline">
                        volunteers@engage-platform.org
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Call Us</h3>
                      <p className="text-muted-foreground">Monday to Friday, 9am to 5pm ET</p>
                      <a href="tel:+15551234567" className="text-primary hover:underline">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Visit Us</h3>
                      <p className="text-muted-foreground">
                        123 Volunteer Street<br />
                        San Francisco, CA 94110<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold">How We Can Help</h3>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <MessageSquare className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">General Platform Support</h4>
                      <p className="text-muted-foreground">
                        Get help with using our platform, account issues, or general questions about our services.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Users className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Partnership Opportunities</h4>
                      <p className="text-muted-foreground">
                        Interested in partnering with us? We collaborate with organizations to expand volunteer opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-card p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full rounded-lg border border-input bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full rounded-lg border border-input bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      className="w-full rounded-lg border border-input bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      className="w-full rounded-lg border border-input bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    ></textarea>
                  </div>
                  
                  <Button type="submit" className="w-full flex items-center justify-center gap-2">
                    <Send className="h-4 w-4" />
                    <span>Send Message</span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map section - In a real app, you would integrate a map here */}
        <section className="py-16 bg-muted/30">
          <div className="container-wide">
            <div className="bg-card rounded-lg shadow-md overflow-hidden h-96 relative">
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <p className="text-muted-foreground">Interactive map will be displayed here</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ section */}
        <section className="py-16">
          <div className="container-narrow">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">How do I sign up as a volunteer?</h3>
                <p className="text-muted-foreground">
                  You can register as a volunteer by clicking the "Sign Up" button in the navigation menu and following the registration process. You'll be able to create a profile, list your skills, and set your availability.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Can organizations post volunteer opportunities?</h3>
                <p className="text-muted-foreground">
                  Yes, organizations can register on our platform and post volunteer opportunities. After creating an account, you'll be able to create event listings, specify required skills, and manage volunteer applications.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Is there a fee to use the platform?</h3>
                <p className="text-muted-foreground">
                  Our basic services are free for both volunteers and organizations. We offer premium features for organizations that need additional tools for volunteer management and event coordination.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">How are volunteers vetted?</h3>
                <p className="text-muted-foreground">
                  We have a basic verification process for all users. Organizations can set additional requirements like background checks for specific volunteer roles. We also have a rating and review system to help build trust.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
