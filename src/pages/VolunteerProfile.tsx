
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { 
  MapPin, Mail, Calendar, Clock, Users, User, Award,
  Star, ChevronRight, Phone, Download, MessageSquare, Bookmark
} from 'lucide-react';
import { getVolunteerById, events, getEventById } from '@/lib/data';
import { Volunteer, Event } from '@/lib/types';

const VolunteerProfile = () => {
  const { id } = useParams<{ id: string }>();
  const [volunteer, setVolunteer] = useState<Volunteer | null>(null);
  const [attendedEvents, setAttendedEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Simulate fetching data
    setIsLoading(true);
    
    setTimeout(() => {
      if (id) {
        const volunteerData = getVolunteerById(id);
        
        if (volunteerData) {
          setVolunteer(volunteerData);
          
          // Get events this volunteer has attended
          const eventsData = volunteerData.eventsAttended.map(eventId => {
            const event = getEventById(eventId);
            return event;
          }).filter((event): event is Event => event !== undefined);
          
          setAttendedEvents(eventsData);
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
            <div className="w-24 h-24 rounded-full bg-muted mb-4"></div>
            <div className="h-6 w-48 bg-muted rounded mb-2"></div>
            <div className="h-4 w-64 bg-muted rounded"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!volunteer) {
    return (
      <div className="min-h-screen flex flex-col page-transition">
        <Navbar />
        <main className="flex-grow pt-24">
          <div className="container-narrow py-16 text-center">
            <h1 className="text-4xl font-bold mb-4">Volunteer Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The volunteer profile you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/volunteer-search">
              <Button>Back to Volunteer Search</Button>
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
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-background">
                  <img
                    src={volunteer.avatar || 'https://via.placeholder.com/400'}
                    alt={volunteer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="flex-grow text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{volunteer.name}</h1>
                
                <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1 text-primary" />
                    <span>{volunteer.location}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${star <= 4 ? 'text-yellow-500 fill-yellow-500' : 'text-muted-foreground'}`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground ml-1">(12 reviews)</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground max-w-2xl mb-6">{volunteer.bio}</p>
                
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <Button className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>Contact Me</span>
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>Call</span>
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    <span>Download Resume</span>
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Bookmark className="h-4 w-4" />
                    <span>Save Profile</span>
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
                <div className="text-3xl font-bold text-primary">{volunteer.experience}</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="bg-card rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-primary">{volunteer.eventsAttended.length}</div>
                <div className="text-sm text-muted-foreground">Events Attended</div>
              </div>
              <div className="bg-card rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-primary">{volunteer.skills.length}</div>
                <div className="text-sm text-muted-foreground">Skills</div>
              </div>
              <div className="bg-card rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-primary">36</div>
                <div className="text-sm text-muted-foreground">Volunteer Hours</div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Profile details */}
        <section className="py-12">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Skills */}
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <h2 className="text-2xl font-bold mb-4">Skills & Expertise</h2>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {volunteer.skills.map((skill) => (
                      <div
                        key={skill}
                        className="bg-muted px-3 py-1.5 rounded-md text-sm font-medium"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">Experience Level</h3>
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Overall Experience</span>
                      <span>{volunteer.experience} years</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{
                          width: `${Math.min(volunteer.experience * 10, 100)}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {volunteer.interests.map((interest) => (
                      <div
                        key={interest}
                        className="bg-primary/10 text-primary px-3 py-1.5 rounded-md text-sm font-medium"
                      >
                        {interest}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Past events */}
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Past Events</h2>
                    <Link to="/events-volunteers" className="text-primary hover:underline text-sm flex items-center">
                      <span>View all events</span>
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                  
                  {attendedEvents.length === 0 ? (
                    <div className="text-center py-6">
                      <p className="text-muted-foreground">No events attended yet.</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {attendedEvents.map((event) => (
                        <AnimatedCard key={event.id} className="overflow-hidden">
                          <div className="relative h-40 overflow-hidden">
                            <img
                              src={event.image || 'https://via.placeholder.com/400'}
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
                          
                          <div className="p-4">
                            <h3 className="text-lg font-semibold line-clamp-1">{event.title}</h3>
                            
                            <div className="mt-2 space-y-1">
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Calendar className="h-3.5 w-3.5 mr-2 text-primary" />
                                <span>{event.date}</span>
                              </div>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <MapPin className="h-3.5 w-3.5 mr-2 text-primary" />
                                <span>{event.location.city}</span>
                              </div>
                            </div>
                            
                            <Link to={`/event/${event.id}`} className="block mt-3">
                              <Button variant="outline" size="sm" className="w-full">
                                View Event
                              </Button>
                            </Link>
                          </div>
                        </AnimatedCard>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Reviews section */}
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <h2 className="text-2xl font-bold mb-4">Reviews</h2>
                  
                  <div className="space-y-6">
                    <div className="border-b pb-4">
                      <div className="flex items-start gap-4">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden">
                          <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                            alt="Reviewer"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="flex items-center mb-1">
                            <h4 className="font-medium">Michael Johnson</h4>
                            <span className="mx-2 text-muted-foreground">•</span>
                            <span className="text-sm text-muted-foreground">2 months ago</span>
                          </div>
                          <div className="flex mb-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`h-4 w-4 ${star <= 5 ? 'text-yellow-500 fill-yellow-500' : 'text-muted-foreground'}`}
                              />
                            ))}
                          </div>
                          <p className="text-muted-foreground">
                            {volunteer.name} was incredibly helpful during our community cleanup event. They were punctual, enthusiastic, and a great team player. Would definitely recommend working with them!
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-b pb-4">
                      <div className="flex items-start gap-4">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden">
                          <img
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                            alt="Reviewer"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="flex items-center mb-1">
                            <h4 className="font-medium">Sarah Williams</h4>
                            <span className="mx-2 text-muted-foreground">•</span>
                            <span className="text-sm text-muted-foreground">3 months ago</span>
                          </div>
                          <div className="flex mb-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`h-4 w-4 ${star <= 4 ? 'text-yellow-500 fill-yellow-500' : 'text-muted-foreground'}`}
                              />
                            ))}
                          </div>
                          <p className="text-muted-foreground">
                            {volunteer.name} brought great energy and skills to our fundraising event. They went above and beyond what was expected. Their communication skills were excellent, and they were very reliable.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <Link to="#" className="text-primary hover:underline text-sm flex items-center">
                      <span>Read all 12 reviews</span>
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="space-y-6">
                {/* Availability */}
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold mb-4">Availability</h3>
                  <div className="space-y-3">
                    {volunteer.availability.map((time) => (
                      <div key={time} className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-primary flex-shrink-0"></div>
                        <span>{time}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button className="w-full flex items-center justify-center gap-2">
                      <MessageSquare className="h-4 w-4" />
                      <span>Contact for Availability</span>
                    </Button>
                  </div>
                </div>
                
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
                        <div>{volunteer.email}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-md">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Phone</div>
                        <div>(555) 123-4567</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-md">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Location</div>
                        <div>{volunteer.location}</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Badges and achievements */}
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold mb-4">Badges & Achievements</h3>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <span className="text-xs font-medium">Star Volunteer</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <span className="text-xs font-medium">30+ Hours</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <span className="text-xs font-medium">Team Player</span>
                    </div>
                  </div>
                </div>
                
                {/* Similar volunteers */}
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold">Similar Volunteers</h3>
                    <Link to="/volunteer-search" className="text-primary hover:underline text-sm flex items-center">
                      <span>View all</span>
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                  
                  <div className="space-y-4">
                    {[...Array(3)].map((_, index) => {
                      const similarVolunteer = (volunteer.id === 'v1') ? 
                        { id: `v${index + 2}`, name: ['Maya Patel', 'Carlos Rodriguez', 'Sophia Kim'][index] } : 
                        { id: 'v1', name: 'Alex Johnson' };
                      
                      return (
                        <Link to={`/volunteer/${similarVolunteer.id}`} key={index}>
                          <div className="flex gap-3 group">
                            <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                              <img
                                src={`https://images.unsplash.com/photo-${1500648767791 + index * 1000}-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80`}
                                alt={similarVolunteer.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="font-medium group-hover:text-primary">
                                {similarVolunteer.name}
                              </h4>
                              <div className="text-sm text-muted-foreground">
                                {['Graphic Design', 'Construction', 'Marketing'][index]}
                              </div>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to action */}
        <section className="py-12 bg-primary text-primary-foreground">
          <div className="container-narrow text-center">
            <h2 className="text-2xl font-bold mb-4">Looking for More Amazing Volunteers?</h2>
            <p className="text-primary-foreground/90 mb-6 max-w-xl mx-auto">
              Discover talented individuals ready to contribute to your projects and events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/volunteer-search">
                <Button variant="accent" size="lg">
                  <User className="mr-2 h-4 w-4" />
                  <span>Find Volunteers</span>
                </Button>
              </Link>
              <Link to="/events-volunteers">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 bg-white/10 hover:bg-white/20"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Explore Events</span>
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

export default VolunteerProfile;
