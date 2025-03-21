
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnimatedCard from '@/components/ui/AnimatedCard';
import Button from '@/components/ui/Button';
import { Link } from 'react-router-dom';
import { 
  Search, X, Filter, MapPin, Calendar, Clock, Users, ChevronRight,
  ChevronDown, Tag, User
} from 'lucide-react';
import { events, volunteers, categoryOptions, locationOptions } from '@/lib/data';
import { Event, Volunteer } from '@/lib/types';

type ViewMode = 'events' | 'volunteers';

const EventsVolunteers = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('events');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(events);
  const [filteredVolunteers, setFilteredVolunteers] = useState<Volunteer[]>(volunteers);
  const [showFilters, setShowFilters] = useState(false);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter events based on search and filter criteria
  useEffect(() => {
    if (viewMode === 'events') {
      const filtered = events.filter(event => {
        // Search term filter
        const searchMatch = searchTerm === '' || 
          event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.location.city.toLowerCase().includes(searchTerm.toLowerCase());
        
        // Categories filter
        const categoriesMatch = selectedCategories.length === 0 || 
          selectedCategories.some(category => event.categories.includes(category));
        
        // Location filter
        const locationMatch = selectedLocations.length === 0 || 
          selectedLocations.some(location => event.location.city.includes(location));
        
        return searchMatch && categoriesMatch && locationMatch;
      });
      
      setFilteredEvents(filtered);
    } else {
      // Filter volunteers
      const filtered = volunteers.filter(volunteer => {
        // Search term filter
        const searchMatch = searchTerm === '' || 
          volunteer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          volunteer.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
          volunteer.bio.toLowerCase().includes(searchTerm.toLowerCase());
        
        // Categories filter - match skills to categories for volunteers
        const categoriesMatch = selectedCategories.length === 0 || 
          selectedCategories.some(category => 
            volunteer.skills.some(skill => skill.toLowerCase().includes(category.toLowerCase()))
          );
        
        // Location filter
        const locationMatch = selectedLocations.length === 0 || 
          selectedLocations.some(location => volunteer.location.includes(location));
        
        return searchMatch && categoriesMatch && locationMatch;
      });
      
      setFilteredVolunteers(filtered);
    }
  }, [searchTerm, selectedCategories, selectedLocations, viewMode]);

  const handleCategoryToggle = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleLocationToggle = (location: string) => {
    if (selectedLocations.includes(location)) {
      setSelectedLocations(selectedLocations.filter(l => l !== location));
    } else {
      setSelectedLocations([...selectedLocations, location]);
    }
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategories([]);
    setSelectedLocations([]);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const switchViewMode = (mode: ViewMode) => {
    setViewMode(mode);
    // Clear filters when switching views
    clearFilters();
  };

  return (
    <div className="min-h-screen flex flex-col page-transition">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Header */}
        <section className="py-12 bg-muted/30">
          <div className="container-narrow text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {viewMode === 'events' ? 'Explore Events' : 'Discover Volunteers'}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {viewMode === 'events'
                ? 'Find volunteering opportunities that match your interests and availability.'
                : 'Connect with talented volunteers who can contribute to your cause.'}
            </p>
            
            {/* View mode toggle */}
            <div className="flex justify-center mt-8">
              <div className="inline-flex rounded-md shadow-sm">
                <button
                  type="button"
                  onClick={() => switchViewMode('events')}
                  className={`px-6 py-2 text-sm font-medium rounded-l-lg ${
                    viewMode === 'events'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  Events
                </button>
                <button
                  type="button"
                  onClick={() => switchViewMode('volunteers')}
                  className={`px-6 py-2 text-sm font-medium rounded-r-lg ${
                    viewMode === 'volunteers'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  Volunteers
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Search and filters */}
        <section className="py-8 border-b">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search bar */}
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={viewMode === 'events' 
                    ? "Search events by title, description, or location..." 
                    : "Search volunteers by name, skills, or keywords..."}
                  className="w-full rounded-lg border border-input bg-background pl-10 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {searchTerm && (
                  <button
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                    onClick={() => setSearchTerm('')}
                  >
                    <X className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                  </button>
                )}
              </div>
              
              {/* Filter toggle button (mobile) */}
              <div className="md:hidden">
                <Button 
                  variant="outline" 
                  onClick={toggleFilters}
                  className="w-full flex items-center justify-center gap-2"
                >
                  <Filter className="h-4 w-4" />
                  <span>Filters</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                </Button>
              </div>
              
              {/* Desktop filter buttons */}
              <div className="hidden md:flex gap-4">
                <div className="relative group">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Tag className="h-4 w-4" />
                    <span>{viewMode === 'events' ? 'Categories' : 'Skills'}</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                  <div className="absolute right-0 mt-2 w-56 p-2 bg-card rounded-lg shadow-lg border border-border invisible group-hover:visible z-50">
                    <div className="px-2 py-1.5 text-sm font-medium">
                      {viewMode === 'events' ? 'Event categories' : 'Volunteer skills'}
                    </div>
                    <div className="space-y-1 mt-1">
                      {categoryOptions.map((option) => (
                        <div key={option.value} className="flex items-center px-2 py-1 rounded-md hover:bg-muted">
                          <input
                            type="checkbox"
                            id={`category-${option.value}`}
                            checked={selectedCategories.includes(option.label)}
                            onChange={() => handleCategoryToggle(option.label)}
                            className="h-4 w-4 rounded border-input"
                          />
                          <label
                            htmlFor={`category-${option.value}`}
                            className="ml-2 text-sm cursor-pointer"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="relative group">
                  <Button variant="outline" className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Location</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                  <div className="absolute right-0 mt-2 w-56 p-2 bg-card rounded-lg shadow-lg border border-border invisible group-hover:visible z-50">
                    <div className="px-2 py-1.5 text-sm font-medium">Select locations</div>
                    <div className="space-y-1 mt-1">
                      {locationOptions.map((option) => (
                        <div key={option.value} className="flex items-center px-2 py-1 rounded-md hover:bg-muted">
                          <input
                            type="checkbox"
                            id={`location-${option.value}`}
                            checked={selectedLocations.includes(option.label)}
                            onChange={() => handleLocationToggle(option.label)}
                            className="h-4 w-4 rounded border-input"
                          />
                          <label
                            htmlFor={`location-${option.value}`}
                            className="ml-2 text-sm cursor-pointer"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {(searchTerm || selectedCategories.length > 0 || selectedLocations.length > 0) && (
                  <Button variant="ghost" onClick={clearFilters} className="flex items-center gap-2">
                    <X className="h-4 w-4" />
                    <span>Clear filters</span>
                  </Button>
                )}
              </div>
            </div>
            
            {/* Mobile filters (collapsible) */}
            {showFilters && (
              <div className="md:hidden mt-4 p-4 bg-card rounded-lg border border-border animate-fade-in">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium mb-2">
                      {viewMode === 'events' ? 'Categories' : 'Skills'}
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {categoryOptions.slice(0, 6).map((option) => (
                        <div key={option.value} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`mobile-category-${option.value}`}
                            checked={selectedCategories.includes(option.label)}
                            onChange={() => handleCategoryToggle(option.label)}
                            className="h-4 w-4 rounded border-input"
                          />
                          <label
                            htmlFor={`mobile-category-${option.value}`}
                            className="ml-2 text-sm cursor-pointer"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium mb-2">Location</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {locationOptions.slice(0, 6).map((option) => (
                        <div key={option.value} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`mobile-location-${option.value}`}
                            checked={selectedLocations.includes(option.label)}
                            onChange={() => handleLocationToggle(option.label)}
                            className="h-4 w-4 rounded border-input"
                          />
                          <label
                            htmlFor={`mobile-location-${option.value}`}
                            className="ml-2 text-sm cursor-pointer truncate"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {(searchTerm || selectedCategories.length > 0 || selectedLocations.length > 0) && (
                    <Button
                      variant="outline"
                      onClick={clearFilters}
                      className="w-full flex items-center justify-center gap-2"
                    >
                      <X className="h-4 w-4" />
                      <span>Clear all filters</span>
                    </Button>
                  )}
                </div>
              </div>
            )}
            
            {/* Active filters */}
            {(selectedCategories.length > 0 || selectedLocations.length > 0) && (
              <div className="flex flex-wrap gap-2 mt-4">
                {selectedCategories.map(category => (
                  <div
                    key={category}
                    className="bg-muted px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1"
                  >
                    <span>{category}</span>
                    <button onClick={() => handleCategoryToggle(category)}>
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
                {selectedLocations.map(location => (
                  <div
                    key={location}
                    className="bg-muted px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1"
                  >
                    <span>{location}</span>
                    <button onClick={() => handleLocationToggle(location)}>
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Results section - Events */}
        {viewMode === 'events' && (
          <section className="py-12">
            <div className="container-wide">
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-xl font-semibold">
                  {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''} found
                </h2>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Sort by:</span>
                  <select className="text-sm border border-input rounded-md bg-transparent px-2 py-1 focus:outline-none focus:ring-1 focus:ring-primary">
                    <option value="date-asc">Date (Earliest first)</option>
                    <option value="date-desc">Date (Latest first)</option>
                    <option value="title-asc">Title (A-Z)</option>
                    <option value="attendees">Most Attendees</option>
                  </select>
                </div>
              </div>

              {filteredEvents.length === 0 ? (
                <div className="text-center py-16">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                    <Search className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No events found</h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    We couldn't find any events matching your criteria. Try adjusting your filters or search term.
                  </p>
                  <Button variant="outline" onClick={clearFilters} className="mt-4">
                    Clear all filters
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredEvents.map((event, index) => (
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
              
              {/* Pagination - would be dynamic in a real app */}
              {filteredEvents.length > 0 && (
                <div className="mt-12 flex justify-center">
                  <nav className="flex items-center gap-1">
                    <Button variant="outline" size="sm" disabled>
                      Previous
                    </Button>
                    <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                      1
                    </Button>
                    <Button variant="outline" size="sm">
                      2
                    </Button>
                    <Button variant="outline" size="sm">
                      Next
                    </Button>
                  </nav>
                </div>
              )}
            </div>
          </section>
        )}
        
        {/* Results section - Volunteers */}
        {viewMode === 'volunteers' && (
          <section className="py-12">
            <div className="container-wide">
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-xl font-semibold">
                  {filteredVolunteers.length} volunteer{filteredVolunteers.length !== 1 ? 's' : ''} found
                </h2>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Sort by:</span>
                  <select className="text-sm border border-input rounded-md bg-transparent px-2 py-1 focus:outline-none focus:ring-1 focus:ring-primary">
                    <option value="name-asc">Name (A-Z)</option>
                    <option value="name-desc">Name (Z-A)</option>
                    <option value="experience-high">Experience (High to Low)</option>
                    <option value="experience-low">Experience (Low to High)</option>
                  </select>
                </div>
              </div>

              {filteredVolunteers.length === 0 ? (
                <div className="text-center py-16">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                    <Search className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No volunteers found</h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    We couldn't find any volunteers matching your criteria. Try adjusting your filters or search term.
                  </p>
                  <Button variant="outline" onClick={clearFilters} className="mt-4">
                    Clear all filters
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredVolunteers.map((volunteer, index) => (
                    <AnimatedCard key={volunteer.id} delay={index * 50}>
                      <div className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                            <img
                              src={volunteer.avatar || 'https://via.placeholder.com/150'}
                              alt={volunteer.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold">{volunteer.name}</h3>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <MapPin className="h-3 w-3 mr-1" />
                              <span>{volunteer.location}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4">
                          <p className="text-muted-foreground line-clamp-2">{volunteer.bio}</p>
                        </div>
                        
                        <div className="mt-4">
                          <h4 className="text-sm font-medium mb-2">Skills</h4>
                          <div className="flex flex-wrap gap-2">
                            {volunteer.skills.map((skill) => (
                              <span
                                key={skill}
                                className="bg-muted px-2 py-1 rounded-md text-xs font-medium"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mt-4">
                          <h4 className="text-sm font-medium mb-2">Experience</h4>
                          <div className="flex items-center">
                            <div className="flex-grow h-2 bg-muted rounded overflow-hidden">
                              <div 
                                className="h-full bg-primary rounded"
                                style={{ width: `${Math.min(volunteer.experience * 10, 100)}%` }}
                              ></div>
                            </div>
                            <span className="ml-2 text-sm">{volunteer.experience} years</span>
                          </div>
                        </div>
                        
                        <div className="mt-6">
                          <Link to={`/volunteer/${volunteer.id}`} className="block">
                            <Button variant="default" className="w-full flex items-center justify-center gap-2">
                              <User className="h-4 w-4" />
                              <span>View Profile</span>
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </AnimatedCard>
                  ))}
                </div>
              )}
              
              {/* Pagination - would be dynamic in a real app */}
              {filteredVolunteers.length > 0 && (
                <div className="mt-12 flex justify-center">
                  <nav className="flex items-center gap-1">
                    <Button variant="outline" size="sm" disabled>
                      Previous
                    </Button>
                    <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                      1
                    </Button>
                    <Button variant="outline" size="sm">
                      2
                    </Button>
                    <Button variant="outline" size="sm">
                      Next
                    </Button>
                  </nav>
                </div>
              )}
            </div>
          </section>
        )}
        
        {/* Call to action */}
        <section className="py-12 bg-primary text-primary-foreground">
          <div className="container-narrow text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to get involved?</h2>
            <p className="text-primary-foreground/90 mb-6 max-w-xl mx-auto">
              {viewMode === 'events'
                ? 'Sign up as a volunteer to participate in events and make a difference in your community.'
                : 'Register your organization to connect with talented volunteers for your events and projects.'}
            </p>
            <Link to={viewMode === 'events' ? '/auth?type=signup' : '/auth?type=signup&company=true'}>
              <Button variant="accent" size="lg">
                {viewMode === 'events' ? 'Sign Up as a Volunteer' : 'Register Your Organization'}
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EventsVolunteers;
