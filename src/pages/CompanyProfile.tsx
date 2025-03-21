
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { 
  MapPin, Mail, Calendar, Clock, Users, Building, Globe,
  ChevronRight, Phone, ExternalLink, MessageSquare, Bookmark
} from 'lucide-react';
import { getCompanyById, getEventsByOrganizer } from '@/lib/data';
import { Company, Event } from '@/lib/types';

const CompanyProfile = () => {
  const { id } = useParams<{ id: string }>();
  const [company, setCompany] = useState<Company | null>(null);
  const [hostedEvents, setHostedEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'about' | 'events'>('about');
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Simulate fetching data
    setIsLoading(true);
    
    setTimeout(() => {
      if (id) {
        const companyData = getCompanyById(id);
        
        if (companyData) {
          setCompany(companyData);
          
          // Get events this company has hosted
          const eventsData = getEventsByOrganizer(id);
          setHostedEvents(eventsData);
        }
      }
      setIsLoading(false);
    }, 500);
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col page-transition">
        <Navbar />
        <main className="flex-grow pt-24 flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="w-24 h-24 rounded-lg bg-muted mb-4"></div>
            <div className="h-6 w-48 bg-muted rounded mb-2"></div>
            <div className="h-4 w-64 bg-muted rounded"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!company) {
    return (
      <div className="min-h-screen flex flex-col page-transition">
        <Navbar />
        <main className="flex-grow pt-24">
          <div className="container-narrow py-16 text-center">
            <h1 className="text-4xl font-bold mb-4">Organization Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The organization profile you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/events-volunteers">
              <Button>Back to Events</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col page-transition">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Profile header */}
        <section className="bg-muted/30 py-12">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden border-4 border-background">
                  <img
                    src={company.avatar || 'https://via.placeholder.com/400'}
                    alt={company.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="flex-grow text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{company.name}</h1>
                
                <div className="flex flex-wrap gap-4 mb-4 justify-center md:justify-start">
                  <div className="flex items-center text-muted-foreground">
                    <Building className="h-4 w-4 mr-1 text-primary" />
                    <span>{company.industry}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1 text-primary" />
                    <span>{company.location}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground max-w-2xl mb-6">{company.description}</p>
                
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <Button className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>Contact</span>
                  </Button>
                  <a href={`https://${company.website}`} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      <span>Website</span>
                    </Button>
                  </a>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>Call</span>
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Bookmark className="h-4 w-4" />
                    <span>Follow</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats */}
        <section className="py-8 border-b">
          <div className="container-wide">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-card rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-primary">{hostedEvents.length}</div>
                <div className="text-sm text-muted-foreground">Events Hosted</div>
              </div>
              <div className="bg-card rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-primary">
                  {hostedEvents.reduce((acc, event) => acc + event.attendees.length, 0)}
                </div>
                <div className="text-sm text-muted-foreground">Volunteers Engaged</div>
              </div>
              <div className="bg-card rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-primary">3</div>
                <div className="text-sm text-muted-foreground">Years Active</div>
              </div>
              <div className="bg-card rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">Volunteer Hours</div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Tabs */}
        <section className="py-6 border-b">
          <div className="container-wide">
            <div className="flex">
              <button
                className={`px-6 py-2 font-medium border-b-2 transition-colors ${
                  activeTab === 'about'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
                onClick={() => setActiveTab('about')}
              >
                About
              </button>
              <button
                className={`px-6 py-2 font-medium border-b-2 transition-colors ${
                  activeTab === 'events'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
                onClick={() => setActiveTab('events')}
              >
                Events ({hostedEvents.length})
              </button>
            </div>
          </div>
        </section>
        
        {/* About tab content */}
        {activeTab === 'about' && (
          <section className="py-12">
            <div className="container-wide">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main content */}
                <div className="lg:col-span-2 space-y-8">
                  {/* About */}
                  <div className="bg-card rounded-lg p-6 shadow-sm">
                    <h2 className="text-2xl font-bold mb-4">About {company.name}</h2>
                    <div className="prose max-w-none text-muted-foreground">
                      <p>{company.description}</p>
                      <p className="mt-4">
                        At {company.name}, we are committed to making a positive impact in our communities through meaningful volunteer initiatives. We believe in the power of bringing people together to address social and environmental challenges.
                      </p>
                      <p className="mt-4">
                        Our mission is to create sustainable change by connecting passionate volunteers with impactful projects. We focus on {company.industry.toLowerCase()} initiatives that create lasting benefits for both the communities we serve and the volunteers who participate.
                      </p>
                    </div>
                    
                    <h3 className="text-xl font-semibold mt-8 mb-4">Our Impact</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-muted rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-primary">{hostedEvents.length}</div>
                        <div className="text-sm text-muted-foreground">Projects Completed</div>
                      </div>
                      <div className="bg-muted rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-primary">12</div>
                        <div className="text-sm text-muted-foreground">Communities Served</div>
                      </div>
                      <div className="bg-muted rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-primary">$125K</div>
                        <div className="text-sm text-muted-foreground">Value Generated</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Values */}
                  <div className="bg-card rounded-lg p-6 shadow-sm">
                    <h2 className="text-2xl font-bold mb-6">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Users className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Community First</h3>
                          <p className="text-muted-foreground">
                            We prioritize community needs and engage local stakeholders in all our initiatives.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Building className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Sustainability</h3>
                          <p className="text-muted-foreground">
                            We design programs that create lasting positive change beyond our initial involvement.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Calendar className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Inclusivity</h3>
                          <p className="text-muted-foreground">
                            We welcome volunteers of all backgrounds and create accessible opportunities for everyone.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Transparency</h3>
                          <p className="text-muted-foreground">
                            We openly share our goals, methods, and results with our volunteers and the broader community.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Testimonials */}
                  <div className="bg-card rounded-lg p-6 shadow-sm">
                    <h2 className="text-2xl font-bold mb-6">Volunteer Testimonials</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-muted rounded-lg p-5">
                        <p className="italic text-muted-foreground mb-4">
                          "Working with {company.name} has been an incredibly rewarding experience. Their team is well-organized, supportive, and truly committed to their mission."
                        </p>
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                            <img
                              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                              alt="Volunteer"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-medium">Alex Johnson</p>
                            <p className="text-sm text-muted-foreground">Volunteer</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-muted rounded-lg p-5">
                        <p className="italic text-muted-foreground mb-4">
                          "I've volunteered with several organizations, and {company.name} stands out for their attention to detail and the meaningful impact they create in communities."
                        </p>
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                            <img
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                              alt="Volunteer"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-medium">Maya Patel</p>
                            <p className="text-sm text-muted-foreground">Volunteer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Contact information */}
                  <div className="bg-card rounded-lg p-6 shadow-sm">
                    <h3 className="font-semibold mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-md">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Email</div>
                          <div>{company.email}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-md">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Phone</div>
                          <div>(555) 987-6543</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-md">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Location</div>
                          <div>{company.location}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-md">
                          <Globe className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Website</div>
                          <a 
                            href={`https://${company.website}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:underline flex items-center"
                          >
                            <span>{company.website}</span>
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Button className="w-full flex items-center justify-center gap-2">
                        <MessageSquare className="h-4 w-4" />
                        <span>Send Message</span>
                      </Button>
                    </div>
                  </div>
                  
                  {/* Upcoming events */}
                  <div className="bg-card rounded-lg p-6 shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-semibold">Upcoming Events</h3>
                      <button 
                        onClick={() => setActiveTab('events')} 
                        className="text-primary hover:underline text-sm flex items-center"
                      >
                        <span>View all</span>
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </button>
                    </div>
                    
                    <div className="space-y-4">
                      {hostedEvents.slice(0, 3).map((event) => (
                        <Link to={`/event/${event.id}`} key={event.id}>
                          <div className="flex gap-3 group">
                            <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                              <img
                                src={event.image || 'https://via.placeholder.com/150'}
                                alt={event.title}
                                className="w-full h-full object-cover transition-transform group-hover:scale-110"
                              />
                            </div>
                            <div>
                              <h4 className="font-medium line-clamp-1 group-hover:text-primary">
                                {event.title}
                              </h4>
                              <div className="text-sm text-muted-foreground">
                                {event.date}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {event.location.city}
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  {/* Social media */}
                  <div className="bg-card rounded-lg p-6 shadow-sm">
                    <h3 className="font-semibold mb-4">Follow Us</h3>
                    <div className="flex justify-between">
                      <a href="#" className="w-12 h-12 rounded-full bg-muted flex items-center justify-center transition-colors hover:bg-muted/80">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                        </svg>
                      </a>
                      <a href="#" className="w-12 h-12 rounded-full bg-muted flex items-center justify-center transition-colors hover:bg-muted/80">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.09-.193-7.715-2.157-10.141-5.126-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.503 14-14v-.617c.943-.676 1.76-1.526 2.41-2.501z" />
                        </svg>
                      </a>
                      <a href="#" className="w-12 h-12 rounded-full bg-muted flex items-center justify-center transition-colors hover:bg-muted/80">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                      <a href="#" className="w-12 h-12 rounded-full bg-muted flex items-center justify-center transition-colors hover:bg-muted/80">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Events tab content */}
        {activeTab === 'events' && (
          <section className="py-12">
            <div className="container-wide">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Events Hosted by {company.name}</h2>
                <p className="text-muted-foreground">
                  Browse upcoming and past events organized by this organization. Join an event to contribute your skills and make a difference.
                </p>
              </div>
              
              {hostedEvents.length === 0 ? (
                <div className="text-center py-16 bg-card rounded-lg">
                  <Building className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No Events Found</h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    This organization hasn't hosted any events yet. Check back later for updates.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {hostedEvents.map((event, index) => (
                    <AnimatedCard key={event.id} delay={index * 50}>
                      <div className="relative h-48 overflow-hidden rounded-t-lg">
                        <img
                          src={event.image || 'https://via.placeholder.com/600x400'}
                          alt={event.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-4 left-4">
                          <div className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                            {event.categories[0]}
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6 space-y-4">
                        <h3 className="text-xl font-semibold line-clamp-2">{event.title}</h3>
                        
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-2 text-primary" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="h-4 w-4 mr-2 text-primary" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4 mr-2 text-primary" />
                            <span>{event.location.city}</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Users className="h-4 w-4 mr-2 text-primary" />
                            <span>
                              {event.attendees.length} volunteer{event.attendees.length !== 1 ? 's' : ''}
                              {event.maxAttendees ? ` / ${event.maxAttendees} spots` : ''}
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground line-clamp-2">{event.description}</p>
                        
                        <Link to={`/event/${event.id}`} className="block mt-4">
                          <Button variant="outline" className="w-full group">
                            <span>View Details</span>
                            <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </Link>
                      </div>
                    </AnimatedCard>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}
        
        {/* Call to action */}
        <section className="py-12 bg-primary text-primary-foreground">
          <div className="container-narrow text-center">
            <h2 className="text-2xl font-bold mb-4">Want to Volunteer with {company.name}?</h2>
            <p className="text-primary-foreground/90 mb-6 max-w-xl mx-auto">
              Sign up as a volunteer to participate in events and help make a difference in your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={hostedEvents.length > 0 ? `/event/${hostedEvents[0].id}` : '/events-volunteers'}>
                <Button variant="accent" size="lg">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Browse Events</span>
                </Button>
              </Link>
              <Link to="/auth?type=signup">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 bg-white/10 hover:bg-white/20"
                >
                  <User className="mr-2 h-4 w-4" />
                  <span>Sign Up as a Volunteer</span>
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CompanyProfile;
