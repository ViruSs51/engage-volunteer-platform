
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnimatedCard from '@/components/ui/AnimatedCard';
import Button from '@/components/ui/Button';
import { Link } from 'react-router-dom';
import { 
  Search, X, Filter, MapPin, Clock, Award, ChevronDown, 
  Star, Mail, Download, Phone
} from 'lucide-react';
import { volunteers, skillOptions, locationOptions } from '@/lib/data';
import { Volunteer, FilterOption } from '@/lib/types';

const VolunteerSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [experienceLevel, setExperienceLevel] = useState<string>('');
  const [filteredVolunteers, setFilteredVolunteers] = useState<Volunteer[]>(volunteers);
  const [showFilters, setShowFilters] = useState(false);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter volunteers based on search and filter criteria
  useEffect(() => {
    const filtered = volunteers.filter(volunteer => {
      // Search term filter
      const searchMatch = searchTerm === '' || 
        volunteer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        volunteer.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
        volunteer.bio.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Skills filter
      const skillsMatch = selectedSkills.length === 0 || 
        selectedSkills.some(skill => volunteer.skills.includes(skill));
      
      // Location filter
      const locationMatch = selectedLocations.length === 0 || 
        selectedLocations.some(location => volunteer.location.includes(location));
      
      // Experience level filter
      let experienceMatch = true;
      if (experienceLevel === 'beginner') {
        experienceMatch = volunteer.experience < 3;
      } else if (experienceLevel === 'intermediate') {
        experienceMatch = volunteer.experience >= 3 && volunteer.experience < 7;
      } else if (experienceLevel === 'expert') {
        experienceMatch = volunteer.experience >= 7;
      }
      
      return searchMatch && skillsMatch && locationMatch && experienceMatch;
    });
    
    setFilteredVolunteers(filtered);
  }, [searchTerm, selectedSkills, selectedLocations, experienceLevel]);

  const handleSkillToggle = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
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
    setSelectedSkills([]);
    setSelectedLocations([]);
    setExperienceLevel('');
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Volunteers</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with skilled volunteers ready to contribute to your cause. Use filters to find the perfect match for your projects.
            </p>
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
                  placeholder="Search volunteers by name, skills, or keywords..."
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
                    <Award className="h-4 w-4" />
                    <span>Skills</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                  <div className="absolute right-0 mt-2 w-56 p-2 bg-card rounded-lg shadow-lg border border-border invisible group-hover:visible z-50">
                    <div className="px-2 py-1.5 text-sm font-medium">Select skills</div>
                    <div className="space-y-1 mt-1">
                      {skillOptions.map((option) => (
                        <div key={option.value} className="flex items-center px-2 py-1 rounded-md hover:bg-muted">
                          <input
                            type="checkbox"
                            id={`skill-${option.value}`}
                            checked={selectedSkills.includes(option.label)}
                            onChange={() => handleSkillToggle(option.label)}
                            className="h-4 w-4 rounded border-input"
                          />
                          <label
                            htmlFor={`skill-${option.value}`}
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
                
                <div className="relative group">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>Experience</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                  <div className="absolute right-0 mt-2 w-56 p-2 bg-card rounded-lg shadow-lg border border-border invisible group-hover:visible z-50">
                    <div className="px-2 py-1.5 text-sm font-medium">Experience level</div>
                    <div className="space-y-1 mt-1">
                      <div className="flex items-center px-2 py-1 rounded-md hover:bg-muted">
                        <input
                          type="radio"
                          id="experience-any"
                          name="experience"
                          checked={experienceLevel === ''}
                          onChange={() => setExperienceLevel('')}
                          className="h-4 w-4 border-input"
                        />
                        <label htmlFor="experience-any" className="ml-2 text-sm cursor-pointer">
                          Any experience
                        </label>
                      </div>
                      <div className="flex items-center px-2 py-1 rounded-md hover:bg-muted">
                        <input
                          type="radio"
                          id="experience-beginner"
                          name="experience"
                          checked={experienceLevel === 'beginner'}
                          onChange={() => setExperienceLevel('beginner')}
                          className="h-4 w-4 border-input"
                        />
                        <label htmlFor="experience-beginner" className="ml-2 text-sm cursor-pointer">
                          Beginner (0-2 years)
                        </label>
                      </div>
                      <div className="flex items-center px-2 py-1 rounded-md hover:bg-muted">
                        <input
                          type="radio"
                          id="experience-intermediate"
                          name="experience"
                          checked={experienceLevel === 'intermediate'}
                          onChange={() => setExperienceLevel('intermediate')}
                          className="h-4 w-4 border-input"
                        />
                        <label
                          htmlFor="experience-intermediate"
                          className="ml-2 text-sm cursor-pointer"
                        >
                          Intermediate (3-6 years)
                        </label>
                      </div>
                      <div className="flex items-center px-2 py-1 rounded-md hover:bg-muted">
                        <input
                          type="radio"
                          id="experience-expert"
                          name="experience"
                          checked={experienceLevel === 'expert'}
                          onChange={() => setExperienceLevel('expert')}
                          className="h-4 w-4 border-input"
                        />
                        <label htmlFor="experience-expert" className="ml-2 text-sm cursor-pointer">
                          Expert (7+ years)
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                
                {(searchTerm || selectedSkills.length > 0 || selectedLocations.length > 0 || experienceLevel) && (
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
                    <h3 className="text-sm font-medium mb-2">Skills</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {skillOptions.slice(0, 6).map((option) => (
                        <div key={option.value} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`mobile-skill-${option.value}`}
                            checked={selectedSkills.includes(option.label)}
                            onChange={() => handleSkillToggle(option.label)}
                            className="h-4 w-4 rounded border-input"
                          />
                          <label
                            htmlFor={`mobile-skill-${option.value}`}
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
                  
                  <div>
                    <h3 className="text-sm font-medium mb-2">Experience</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="mobile-experience-any"
                          name="mobile-experience"
                          checked={experienceLevel === ''}
                          onChange={() => setExperienceLevel('')}
                          className="h-4 w-4 border-input"
                        />
                        <label htmlFor="mobile-experience-any" className="ml-2 text-sm cursor-pointer">
                          Any experience
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="mobile-experience-beginner"
                          name="mobile-experience"
                          checked={experienceLevel === 'beginner'}
                          onChange={() => setExperienceLevel('beginner')}
                          className="h-4 w-4 border-input"
                        />
                        <label
                          htmlFor="mobile-experience-beginner"
                          className="ml-2 text-sm cursor-pointer"
                        >
                          Beginner (0-2 years)
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="mobile-experience-intermediate"
                          name="mobile-experience"
                          checked={experienceLevel === 'intermediate'}
                          onChange={() => setExperienceLevel('intermediate')}
                          className="h-4 w-4 border-input"
                        />
                        <label
                          htmlFor="mobile-experience-intermediate"
                          className="ml-2 text-sm cursor-pointer"
                        >
                          Intermediate (3-6 years)
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="mobile-experience-expert"
                          name="mobile-experience"
                          checked={experienceLevel === 'expert'}
                          onChange={() => setExperienceLevel('expert')}
                          className="h-4 w-4 border-input"
                        />
                        <label htmlFor="mobile-experience-expert" className="ml-2 text-sm cursor-pointer">
                          Expert (7+ years)
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  {(searchTerm || selectedSkills.length > 0 || selectedLocations.length > 0 || experienceLevel) && (
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
            {(selectedSkills.length > 0 || selectedLocations.length > 0 || experienceLevel) && (
              <div className="flex flex-wrap gap-2 mt-4">
                {selectedSkills.map(skill => (
                  <div
                    key={skill}
                    className="bg-muted px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1"
                  >
                    <span>{skill}</span>
                    <button onClick={() => handleSkillToggle(skill)}>
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
                {experienceLevel && (
                  <div className="bg-muted px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <span>
                      {experienceLevel === 'beginner'
                        ? 'Beginner (0-2 years)'
                        : experienceLevel === 'intermediate'
                        ? 'Intermediate (3-6 years)'
                        : 'Expert (7+ years)'}
                    </span>
                    <button onClick={() => setExperienceLevel('')}>
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Results section */}
        <section className="py-12">
          <div className="container-wide">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-xl font-semibold">
                {filteredVolunteers.length} volunteer{filteredVolunteers.length !== 1 ? 's' : ''} found
              </h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <select className="text-sm border border-input rounded-md bg-transparent px-2 py-1 focus:outline-none focus:ring-1 focus:ring-primary">
                  <option value="relevant">Most Relevant</option>
                  <option value="experience-high">Experience (High to Low)</option>
                  <option value="experience-low">Experience (Low to High)</option>
                  <option value="name-asc">Name (A-Z)</option>
                  <option value="name-desc">Name (Z-A)</option>
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
                      <div className="flex items-start gap-4">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                          <img
                            src={volunteer.avatar || 'https://via.placeholder.com/150'}
                            alt={volunteer.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-xl font-semibold">{volunteer.name}</h3>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="h-3 w-3 mr-1" />
                            <span>{volunteer.location}</span>
                          </div>
                          <div className="flex items-center mt-1">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < 4 ? 'text-yellow-500 fill-yellow-500' : 'text-muted-foreground'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-muted-foreground ml-1">(12 reviews)</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <p className="text-muted-foreground line-clamp-2">{volunteer.bio}</p>
                      </div>
                      
                      <div className="mt-4">
                        <h4 className="text-sm font-medium mb-2">Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {volunteer.skills.slice(0, 3).map((skill) => (
                            <span
                              key={skill}
                              className="bg-muted px-2 py-1 rounded-md text-xs font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                          {volunteer.skills.length > 3 && (
                            <span className="bg-muted px-2 py-1 rounded-md text-xs font-medium">
                              +{volunteer.skills.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <h4 className="text-sm font-medium mb-2">Availability</h4>
                        <div className="flex flex-wrap gap-2">
                          {volunteer.availability.map((time) => (
                            <span
                              key={time}
                              className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-medium"
                            >
                              {time}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-6 flex gap-2">
                        <Link to={`/volunteer/${volunteer.id}`} className="flex-1">
                          <Button variant="default" className="w-full">
                            View Profile
                          </Button>
                        </Link>
                        <Button variant="outline" className="px-3">
                          <Mail className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" className="px-3">
                          <Download className="h-4 w-4" />
                        </Button>
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
                    3
                  </Button>
                  <span className="mx-1">...</span>
                  <Button variant="outline" size="sm">
                    8
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </nav>
              </div>
            )}
          </div>
        </section>
        
        {/* Call to action */}
        <section className="py-12 bg-muted/30">
          <div className="container-narrow text-center">
            <h2 className="text-2xl font-bold mb-4">Are you a volunteer?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Create a profile to connect with organizations and find opportunities that match your skills and interests.
            </p>
            <Link to="/auth?type=signup">
              <Button size="lg">
                Sign Up as a Volunteer
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default VolunteerSearch;
