
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import { Link } from 'react-router-dom';
import { 
  Search, X, Filter, MapPin, Calendar, Clock, Users,
  ChevronDown, Tag, Plus, Minus, List, Map, ChevronRight
} from 'lucide-react';
import { events, categoryOptions, locationOptions } from '@/lib/data';
import { Event } from '@/lib/types';

const EventMap = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(events);
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter events based on search and filter criteria
  useEffect(() => {
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
    
    // If we had a selected event that's no longer in the filtered list, clear it
    if (selectedEvent && !filtered.find(e => e.id === selectedEvent.id)) {
      setSelectedEvent(null);
    }
  }, [searchTerm, selectedCategories, selectedLocations, selectedEvent]);

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

  return (
    <div className="min-h-screen flex flex-col page-transition">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Header */}
        <section className="py-12 bg-muted/30">
          <div className="container-narrow text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Event Map</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover volunteering opportunities near you. Use the map to find events in your area and filter by category or location.
            </p>
          </div>
        </section>

        {/* View mode toggle and search */}
        <section className="py-8 border-b">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row justify-between mb-6">
              {/* View mode toggle */}
              <div className="mb-4 md:mb-0">
                <div className="inline-flex rounded-md shadow-sm">
                  <button
                    type="button"
                    onClick={() => setViewMode('map')}
                    className={`px-6 py-2 text-sm font-medium rounded-l-lg flex items-center ${
                      viewMode === 'map'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    <Map className="h-4 w-4 mr-2" />
                    <span>Map View</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode('list')}
                    className={`px-6 py-2 text-sm font-medium rounded-r-lg flex items-center ${
                      viewMode === 'list'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    <List className="h-4 w-4 mr-2" />
                    <span>List View</span>
                  </button>
                </div>
              </div>
              
              {/* Total events count */}
              <div className="hidden md:block">
                <span className="font-medium">{filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''} found</span>
              </div>
            </div>
            
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
                  placeholder="Search events by title, description, or location..."
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
                    <span>Categories</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                  <div className="absolute right-0 mt-2 w-56 p-2 bg-card rounded-lg shadow-lg border border-border invisible group-hover:visible z-50">
                    <div className="px-2 py-1.5 text-sm font-medium">Event categories</div>
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
                    <h3 className="text-sm font-medium mb-2">Categories</h3>
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

        {/* Map view */}
        {viewMode === 'map' && (
          <section className="py-8">
            <div className="container-wide">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Event list */}
                <div className="order-2 lg:order-1 bg-card rounded-lg border border-border overflow-hidden shadow-sm">
                  <div className="p-4 border-b">
                    <h2 className="font-semibold">{filteredEvents.length} Event{filteredEvents.length !== 1 ? 's' : ''}</h2>
                  </div>
                  <div className="overflow-y-auto" style={{ maxHeight: 'calc(100vh - 400px)' }}>
                    {filteredEvents.length === 0 ? (
                      <div className="p-6 text-center">
                        <p className="text-muted-foreground">No events found. Try changing your filters.</p>
                      </div>
                    ) : (
                      <div className="space-y-1">
                        {filteredEvents.map((event) => (
                          <div 
                            key={event.id}
                            className={`p-4 hover:bg-muted/50 cursor-pointer transition-colors ${
                              selectedEvent?.id === event.id ? 'bg-primary/10' : ''
                            }`}
                            onClick={() => setSelectedEvent(event)}
                          >
                            <div className="flex gap-3">
                              <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                                <img
                                  src={event.image || 'https://via.placeholder.com/150'}
                                  alt={event.title}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div>
                                <h3 className="font-medium line-clamp-1">{event.title}</h3>
                                <div className="flex items-center text-xs text-muted-foreground">
                                  <Calendar className="h-3 w-3 mr-1" />
                                  <span>{event.date}</span>
                                </div>
                                <div className="flex items-center text-xs text-muted-foreground">
                                  <MapPin className="h-3 w-3 mr-1" />
                                  <span>{event.location.city}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Map */}
                <div className="order-1 lg:order-2 lg:col-span-2">
                  <div className="bg-muted rounded-lg overflow-hidden shadow-sm relative" style={{ height: 'calc(100vh - 400px)', minHeight: '400px' }}>
                    {/* This is where a real map would be integrated */}
                    <div className="absolute inset-0 flex items-center justify-center bg-muted flex-col">
                      <MapPin className="h-8 w-8 text-muted-foreground mb-2" />
                      <p className="text-muted-foreground">Interactive map will be displayed here</p>
                    </div>
                    
                    {/* Map controls */}
                    <div className="absolute top-4 right-4 bg-card shadow-md rounded-lg overflow-hidden">
                      <button className="p-2 hover:bg-muted transition-colors">
                        <Plus className="h-5 w-5" />
                      </button>
                      <div className="h-px bg-border"></div>
                      <button className="p-2 hover:bg-muted transition-colors">
                        <Minus className="h-5 w-5" />
                      </button>
                    </div>
                    
                    {/* Selected event info */}
                    {selectedEvent && (
                      <div className="absolute bottom-4 left-4 right-4 bg-card shadow-md rounded-lg overflow-hidden">
                        <div className="p-4">
                          <div className="flex gap-3">
                            <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                              <img
                                src={selectedEvent.image || 'https://via.placeholder.com/150'}
                                alt={selectedEvent.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-grow">
                              <h3 className="font-medium">{selectedEvent.title}</h3>
                              <div className="flex items-center text-xs text-muted-foreground mb-1">
                                <Calendar className="h-3 w-3 mr-1" />
                                <span>{selectedEvent.date}</span>
                                <span className="mx-1">•</span>
                                <Clock className="h-3 w-3 mr-1" />
                                <span>{selectedEvent.time}</span>
                              </div>
                              <div className="flex items-center text-xs text-muted-foreground">
                                <MapPin className="h-3 w-3 mr-1" />
                                <span>{selectedEvent.location.address}, {selectedEvent.location.city}</span>
                              </div>
                            </div>
                            <div>
                              <Link to={`/event/${selectedEvent.id}`}>
                                <Button size="sm">View</Button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* List view */}
        {viewMode === 'list' && (
          <section className="py-8">
            <div className="container-wide">
              {filteredEvents.length === 0 ? (
                <div className="text-center py-16 bg-card rounded-lg shadow-sm">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No Events Found</h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    We couldn't find any events matching your criteria. Try adjusting your filters or search term.
                  </p>
                  <Button variant="outline" onClick={clearFilters} className="mt-4">
                    Clear all filters
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredEvents.map((event) => (
                    <div key={event.id} className="bg-card rounded-lg shadow-sm overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4 h-48 md:h-auto relative">
                          <img
                            src={event.image || 'https://via.placeholder.com/400'}
                            alt={event.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-2 left-2">
                            <div className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                              {event.categories[0]}
                            </div>
                          </div>
                        </div>
                        <div className="p-6 md:w-3/4">
                          <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                          
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
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
                          
                          <p className="text-muted-foreground mb-4 line-clamp-2">{event.description}</p>
                          
                          <div className="flex justify-between items-center">
                            <div className="flex flex-wrap gap-2">
                              {event.categories.slice(1, 3).map((category) => (
                                <span
                                  key={category}
                                  className="bg-muted px-2 py-1 rounded-md text-xs font-medium"
                                >
                                  {category}
                                </span>
                              ))}
                              {event.categories.length > 3 && (
                                <span className="bg-muted px-2 py-1 rounded-md text-xs font-medium">
                                  +{event.categories.length - 3} more
                                </span>
                              )}
                            </div>
                            <Link to={`/event/${event.id}`}>
                              <Button className="flex items-center gap-1">
                                <span>View Details</span>
                                <ChevronRight className="h-4 w-4" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}
        
        {/* Call to action */}
        <section className="py-12 bg-primary text-primary-foreground">
          <div className="container-narrow text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h2>
            <p className="text-primary-foreground/90 mb-6 max-w-xl mx-auto">
              Join one of our volunteer events or sign up as a volunteer to get notified about new opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/events-volunteers">
                <Button variant="accent" size="lg">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>View All Events</span>
                </Button>
              </Link>
              <Link to="/auth?type=signup">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 bg-white/10 hover:bg-white/20"
                >
                  <Users className="mr-2 h-4 w-4" />
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

export default EventMap;
