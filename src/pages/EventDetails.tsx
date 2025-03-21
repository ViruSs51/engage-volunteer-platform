
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import { 
  Calendar, Clock, MapPin, Users, Target, Award, Building, 
  ChevronRight, Share2, Bookmark, ArrowLeft, Check, X
} from 'lucide-react';
import { events, getEventById, getCompanyById, getEventAttendees } from '@/lib/data';
import { Event, Company, Volunteer } from '@/lib/types';
import AnimatedCard from '@/components/ui/AnimatedCard';

const EventDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [organizer, setOrganizer] = useState<Company | null>(null);
  const [attendees, setAttendees] = useState<Volunteer[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSignedUp, setIsSignedUp] = useState(false);

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Simulate fetching data
    setIsLoading(true);
    
    setTimeout(() => {
      if (id) {
        const eventData = getEventById(id);
        if (eventData) {
          setEvent(eventData);
          
          // Get organizer data
          const organizerData = getCompanyById(eventData.organizer);
          setOrganizer(organizerData || null);
          
          // Get attendees data
          const attendeesData = getEventAttendees(id);
          setAttendees(attendeesData);
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
            <div className="w-16 h-16 rounded-full bg-muted mb-4"></div>
            <div className="h-6 w-32 bg-muted rounded mb-2"></div>
            <div className="h-4 w-64 bg-muted rounded"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col page-transition">
        <Navbar />
        <main className="flex-grow pt-24">
          <div className="container-narrow py-16 text-center">
            <h1 className="text-4xl font-bold mb-4">Event Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The event you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/events-volunteers">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Events
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const isFull = event.maxAttendees !== undefined && event.attendees.length >= event.maxAttendees;
  
  const handleSignUp = () => {
    // In a real app, this would make an API call to sign up
    setIsSignedUp(!isSignedUp);
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="min-h-screen flex flex-col page-transition">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero section */}
        <section className="relative">
          <div className="h-64 md:h-96 overflow-hidden">
            <img
              src={event.image || 'https://via.placeholder.com/1200x400'}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent"></div>
          </div>
          
          <div className="container-wide relative -mt-16 md:-mt-24">
            <div className="bg-card shadow-lg rounded-lg overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Event details */}
                  <div className="flex-grow">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {event.categories.map((category) => (
                        <span
                          key={category}
                          className="bg-primary/10 text-primary px-3 py-1 text-sm font-medium rounded-full"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                    
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">{event.title}</h1>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-5 w-5 mr-3 text-primary" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="h-5 w-5 mr-3 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-5 w-5 mr-3 text-primary" />
                        <span>{event.location.address}, {event.location.city}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Users className="h-5 w-5 mr-3 text-primary" />
                        <span>
                          {event.attendees.length} volunteer{event.attendees.length !== 1 ? 's' : ''}
                          {event.maxAttendees ? ` / ${event.maxAttendees} spots` : ''}
                        </span>
                      </div>
                    </div>
                    
                    {organizer && (
                      <div className="flex items-center mb-6">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                          <img
                            src={organizer.avatar || 'https://via.placeholder.com/150'}
                            alt={organizer.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Organized by</p>
                          <Link 
                            to={`/company/${organizer.id}`} 
                            className="font-medium text-primary hover:underline"
                          >
                            {organizer.name}
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex flex-col gap-3 md:min-w-[280px]">
                    <Button
                      size="lg"
                      className="w-full"
                      onClick={handleSignUp}
                      variant={isSignedUp ? 'outline' : 'default'}
                      disabled={!isSignedUp && isFull}
                    >
                      {isSignedUp ? (
                        <>
                          <Check className="mr-2 h-4 w-4" />
                          <span>Signed Up</span>
                        </>
                      ) : isFull ? (
                        <>
                          <X className="mr-2 h-4 w-4" />
                          <span>Event Full</span>
                        </>
                      ) : (
                        <>
                          <Users className="mr-2 h-4 w-4" />
                          <span>Sign Up to Volunteer</span>
                        </>
                      )}
                    </Button>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="outline" className="w-full">
                        <Share2 className="mr-2 h-4 w-4" />
                        <span>Share</span>
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Bookmark className="mr-2 h-4 w-4" />
                        <span>Save</span>
                      </Button>
                    </div>
                    
                    <div className="bg-muted rounded-lg p-4 mt-2">
                      <h3 className="font-medium mb-2">Event Status</h3>
                      {event.maxAttendees && (
                        <div className="mb-2">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Spots filled</span>
                            <span>{event.attendees.length}/{event.maxAttendees}</span>
                          </div>
                          <div className="w-full h-2 bg-muted-foreground/20 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-primary rounded-full"
                              style={{
                                width: `${(event.attendees.length / event.maxAttendees) * 100}%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      )}
                      <p className="text-sm text-muted-foreground">
                        {isFull
                          ? 'This event is currently full. Check back later as spots may open up.'
                          : 'Spots are still available for this event. Sign up now to secure your place!'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Event details and sidebar */}
        <section className="py-12">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Description */}
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <h2 className="text-2xl font-bold mb-4">About This Event</h2>
                  <div className="prose max-w-none text-muted-foreground">
                    <p>{event.description}</p>
                    <p className="mt-4">
                      Join us for this impactful event where volunteers like you can make a real difference. Whether this is your first time volunteering or you're a seasoned volunteer, your contribution will help us achieve our goals and create positive change in the community.
                    </p>
                    <p className="mt-4">
                      No special skills are required, just your enthusiasm and willingness to help. All necessary training and materials will be provided on the day of the event.
                    </p>
                  </div>
                </div>
                
                {/* What to expect */}
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <h2 className="text-2xl font-bold mb-4">What to Expect</h2>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Target className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Goals</h3>
                        <p className="text-muted-foreground">
                          Our primary goal is to complete this project with the help of dedicated volunteers while building community connections and having fun.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Time Commitment</h3>
                        <p className="text-muted-foreground">
                          The event will last for approximately {event.time.split('-')[1].trim().startsWith('1') ? 'three' : 'four'} hours. You're welcome to participate for the entire duration or for as long as you're able.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Award className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Skills & Requirements</h3>
                        <p className="text-muted-foreground">
                          No specific skills are required for this event. We welcome volunteers of all experience levels. Just bring your enthusiasm and willingness to help!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Attendees */}
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Volunteers ({attendees.length})</h2>
                    <Link to="/volunteer-search" className="text-primary hover:underline text-sm flex items-center">
                      <span>View all volunteers</span>
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                  
                  {attendees.length === 0 ? (
                    <div className="text-center py-6">
                      <p className="text-muted-foreground">No volunteers have signed up yet. Be the first!</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {attendees.map((attendee) => (
                        <div key={attendee.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                          <div className="relative w-12 h-12 rounded-full overflow-hidden">
                            <img
                              src={attendee.avatar || 'https://via.placeholder.com/150'}
                              alt={attendee.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <Link 
                              to={`/volunteer/${attendee.id}`} 
                              className="font-medium hover:text-primary"
                            >
                              {attendee.name}
                            </Link>
                            <div className="text-sm text-muted-foreground">
                              {attendee.skills[0]}
                              {attendee.skills.length > 1 ? ` & ${attendee.skills.length - 1} more` : ''}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="space-y-6">
                {/* Map */}
                <div className="bg-card rounded-lg shadow-sm overflow-hidden">
                  <div className="h-56 bg-muted relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-muted-foreground">Map will be displayed here</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-muted-foreground">{event.location.address}, {event.location.city}</p>
                    <Button variant="outline" className="w-full mt-3 text-sm">
                      Get Directions
                    </Button>
                  </div>
                </div>
                
                {/* Organizer */}
                {organizer && (
                  <div className="bg-card rounded-lg p-6 shadow-sm">
                    <h3 className="font-semibold mb-4">About the Organizer</h3>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <img
                          src={organizer.avatar || 'https://via.placeholder.com/150'}
                          alt={organizer.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <Link 
                          to={`/company/${organizer.id}`} 
                          className="font-medium hover:text-primary"
                        >
                          {organizer.name}
                        </Link>
                        <div className="text-sm text-muted-foreground">{organizer.industry}</div>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                      {organizer.description}
                    </p>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Building className="h-4 w-4 text-primary" />
                      <span>{organizer.location}</span>
                    </div>
                    <Link to={`/company/${organizer.id}`} className="block mt-4">
                      <Button variant="outline" className="w-full text-sm">
                        View Organization Profile
                      </Button>
                    </Link>
                  </div>
                )}
                
                {/* Similar events */}
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold">Similar Events</h3>
                    <Link to="/events-volunteers" className="text-primary hover:underline text-sm flex items-center">
                      <span>View all</span>
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                  
                  <div className="space-y-4">
                    {events
                      .filter(e => e.id !== event.id && e.categories.some(c => event.categories.includes(c)))
                      .slice(0, 3)
                      .map((similarEvent) => (
                        <Link to={`/event/${similarEvent.id}`} key={similarEvent.id}>
                          <div className="flex gap-3 group">
                            <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                              <img
                                src={similarEvent.image || 'https://via.placeholder.com/150'}
                                alt={similarEvent.title}
                                className="w-full h-full object-cover transition-transform group-hover:scale-110"
                              />
                            </div>
                            <div>
                              <h4 className="font-medium line-clamp-1 group-hover:text-primary">
                                {similarEvent.title}
                              </h4>
                              <div className="text-sm text-muted-foreground">
                                {similarEvent.date}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {similarEvent.location.city}
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to action */}
        <section className="py-12 bg-primary text-primary-foreground">
          <div className="container-narrow text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Make an Impact?</h2>
            <p className="text-primary-foreground/90 mb-6 max-w-xl mx-auto">
              Join this event and contribute your skills to make a difference in your community.
            </p>
            <Button
              variant="accent"
              size="lg"
              onClick={handleSignUp}
              disabled={!isSignedUp && isFull}
            >
              {isSignedUp ? 'Cancel Registration' : isFull ? 'Event Full' : 'Sign Up Now'}
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EventDetails;
