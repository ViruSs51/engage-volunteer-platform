
import { Volunteer, Company, Event } from './types';

export const volunteers: Volunteer[] = [
  {
    id: 'v1',
    name: 'Alex Johnson',
    email: 'alex@example.com',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    type: 'volunteer',
    skills: ['Programming', 'Graphic Design', 'Event Planning'],
    bio: 'Passionate about using technology to create positive social impact. I have 5 years of experience in web development and enjoy mentoring others.',
    location: 'San Francisco, CA',
    availability: ['Weekends', 'Evenings'],
    interests: ['Education', 'Environment', 'Technology'],
    experience: 5,
    eventsAttended: ['e1', 'e3']
  },
  {
    id: 'v2',
    name: 'Maya Patel',
    email: 'maya@example.com',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    type: 'volunteer',
    skills: ['Teaching', 'Language Translation', 'First Aid'],
    bio: 'Former educator with a passion for helping immigrant communities. I speak 4 languages and love connecting people across cultures.',
    location: 'Chicago, IL',
    availability: ['Weekdays', 'Mornings'],
    interests: ['Immigration', 'Education', 'Health'],
    experience: 8,
    eventsAttended: ['e2']
  },
  {
    id: 'v3',
    name: 'Carlos Rodriguez',
    email: 'carlos@example.com',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    type: 'volunteer',
    skills: ['Carpentry', 'Construction', 'Project Management'],
    bio: 'Retired contractor who enjoys building homes for families in need. I've worked on over 50 projects across the country.',
    location: 'Houston, TX',
    availability: ['Weekdays', 'Full-time'],
    interests: ['Housing', 'Disaster Relief', 'Community Development'],
    experience: 25,
    eventsAttended: ['e4']
  },
  {
    id: 'v4',
    name: 'Sophia Kim',
    email: 'sophia@example.com',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80',
    type: 'volunteer',
    skills: ['Marketing', 'Social Media', 'Event Planning'],
    bio: 'Digital marketing specialist with a knack for storytelling. I help nonprofits amplify their message and reach new audiences.',
    location: 'New York, NY',
    availability: ['Weekends', 'Remote'],
    interests: ['Arts', 'Youth Programs', 'Animal Welfare'],
    experience: 7,
    eventsAttended: ['e5', 'e1']
  },
  {
    id: 'v5',
    name: 'David Wilson',
    email: 'david@example.com',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    type: 'volunteer',
    skills: ['Cooking', 'Food Safety', 'Nutrition'],
    bio: 'Trained chef dedicated to fighting food insecurity. I organize community kitchens and teach cooking classes to low-income families.',
    location: 'Seattle, WA',
    availability: ['Evenings', 'Weekends'],
    interests: ['Food Security', 'Nutrition Education', 'Community Building'],
    experience: 12,
    eventsAttended: ['e3']
  },
  {
    id: 'v6',
    name: 'Aisha Hassan',
    email: 'aisha@example.com',
    avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    type: 'volunteer',
    skills: ['Nursing', 'Medical Assistance', 'Health Education'],
    bio: 'Registered nurse passionate about providing healthcare access to underserved communities. I volunteer at free clinics and health fairs.',
    location: 'Atlanta, GA',
    availability: ['Weekends', 'Some Weekdays'],
    interests: ['Healthcare Access', 'Public Health', 'Medical Outreach'],
    experience: 15,
    eventsAttended: ['e2', 'e5']
  }
];

export const companies: Company[] = [
  {
    id: 'c1',
    name: 'GreenEarth Foundation',
    email: 'contact@greenearth.org',
    avatar: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    type: 'company',
    description: 'Nonprofit focused on environmental conservation and sustainable practices. We organize clean-ups, tree planting events, and environmental education.',
    industry: 'Environmental Conservation',
    location: 'San Francisco, CA',
    website: 'www.greenearth.org',
    eventsHosted: ['e1', 'e5']
  },
  {
    id: 'c2',
    name: 'TechForGood',
    email: 'info@techforgood.com',
    avatar: 'https://images.unsplash.com/photo-1596720426673-e4e14290f0cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    type: 'company',
    description: 'Social enterprise connecting tech volunteers with nonprofits. We believe in using technology to solve social challenges.',
    industry: 'Technology',
    location: 'Boston, MA',
    website: 'www.techforgood.com',
    eventsHosted: ['e2']
  },
  {
    id: 'c3',
    name: 'HomeBuilders Alliance',
    email: 'contact@homebuildersalliance.org',
    avatar: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    type: 'company',
    description: 'Nonprofit dedicated to building affordable housing for families in need. We work with volunteers to construct and renovate homes across the country.',
    industry: 'Housing & Construction',
    location: 'Austin, TX',
    website: 'www.homebuildersalliance.org',
    eventsHosted: ['e3', 'e4']
  },
  {
    id: 'c4',
    name: 'Global Health Initiative',
    email: 'info@globalhealth.org',
    avatar: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80',
    type: 'company',
    description: 'International organization improving healthcare access in underserved regions. We organize medical missions, health education programs, and clinic setups.',
    industry: 'Healthcare',
    location: 'Washington, DC',
    website: 'www.globalhealth.org',
    eventsHosted: ['e6']
  }
];

export const events: Event[] = [
  {
    id: 'e1',
    title: 'City Park Clean-Up',
    description: 'Join us for a day of cleaning and beautifying Central Park. We'll provide gloves, bags, and refreshments. Great for families and individuals!',
    date: '2023-10-15',
    time: '9:00 AM - 1:00 PM',
    location: {
      address: '100 Central Park West',
      city: 'New York, NY',
      coordinates: [-73.9654, 40.7829]
    },
    organizer: 'c1',
    categories: ['Environment', 'Community', 'Outdoor'],
    image: 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    attendees: ['v1', 'v4'],
    maxAttendees: 50
  },
  {
    id: 'e2',
    title: 'Tech Workshop for Seniors',
    description: 'Help seniors learn basic computer skills, smartphone usage, and internet safety. No technical expertise required, just patience and good communication!',
    date: '2023-10-22',
    time: '2:00 PM - 5:00 PM',
    location: {
      address: '500 Main Street',
      city: 'Boston, MA',
      coordinates: [-71.0589, 42.3601]
    },
    organizer: 'c2',
    categories: ['Education', 'Technology', 'Seniors'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80',
    attendees: ['v2', 'v6'],
    maxAttendees: 20
  },
  {
    id: 'e3',
    title: 'Home Building Project',
    description: 'Help construct homes for families in need. All skill levels welcome - we provide training for those new to construction. Lunch and tools provided.',
    date: '2023-11-04',
    time: '8:00 AM - 4:00 PM',
    location: {
      address: '2200 Builder Lane',
      city: 'Austin, TX',
      coordinates: [-97.7431, 30.2672]
    },
    organizer: 'c3',
    categories: ['Construction', 'Housing', 'Skilled Labor'],
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    attendees: ['v1', 'v5'],
    maxAttendees: 30
  },
  {
    id: 'e4',
    title: 'Neighborhood Revitalization',
    description: 'Join our week-long project to revitalize the East Side neighborhood. Activities include painting, repairs, landscaping, and community space creation.',
    date: '2023-11-13',
    time: '9:00 AM - 5:00 PM',
    location: {
      address: '300 East Main Street',
      city: 'Houston, TX',
      coordinates: [-95.3698, 29.7604]
    },
    organizer: 'c3',
    categories: ['Community Development', 'Construction', 'Urban Renewal'],
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    attendees: ['v3'],
    maxAttendees: 40
  },
  {
    id: 'e5',
    title: 'Beach Cleanup Day',
    description: 'Help preserve our beautiful coastline by joining our beach cleanup effort. Meet like-minded volunteers while making a tangible difference for marine life.',
    date: '2023-11-25',
    time: '10:00 AM - 2:00 PM',
    location: {
      address: 'Ocean Beach',
      city: 'San Francisco, CA',
      coordinates: [-122.5111, 37.7594]
    },
    organizer: 'c1',
    categories: ['Environment', 'Outdoor', 'Conservation'],
    image: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    attendees: ['v4', 'v6'],
    maxAttendees: 75
  },
  {
    id: 'e6',
    title: 'Community Health Fair',
    description: 'Volunteer at our health fair providing free screenings, health education, and resources to underserved communities. Medical and non-medical volunteers needed.',
    date: '2023-12-02',
    time: '11:00 AM - 4:00 PM',
    location: {
      address: '1200 Constitution Ave',
      city: 'Washington, DC',
      coordinates: [-77.0365, 38.8977]
    },
    organizer: 'c4',
    categories: ['Healthcare', 'Community Service', 'Education'],
    image: 'https://images.unsplash.com/photo-1631815588090-d1bcbe9b4b01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80',
    attendees: [],
    maxAttendees: 25
  }
];

export const skillOptions = [
  { label: 'Programming', value: 'programming' },
  { label: 'Graphic Design', value: 'graphic-design' },
  { label: 'Teaching', value: 'teaching' },
  { label: 'Marketing', value: 'marketing' },
  { label: 'Construction', value: 'construction' },
  { label: 'Cooking', value: 'cooking' },
  { label: 'Medical', value: 'medical' },
  { label: 'Translation', value: 'translation' },
  { label: 'Event Planning', value: 'event-planning' },
  { label: 'Social Media', value: 'social-media' },
];

export const categoryOptions = [
  { label: 'Environment', value: 'environment' },
  { label: 'Education', value: 'education' },
  { label: 'Technology', value: 'technology' },
  { label: 'Healthcare', value: 'healthcare' },
  { label: 'Community', value: 'community' },
  { label: 'Construction', value: 'construction' },
  { label: 'Animal Welfare', value: 'animal-welfare' },
  { label: 'Arts & Culture', value: 'arts-culture' },
  { label: 'Disaster Relief', value: 'disaster-relief' },
  { label: 'Youth Programs', value: 'youth-programs' },
];

export const locationOptions = [
  { label: 'San Francisco, CA', value: 'san-francisco' },
  { label: 'New York, NY', value: 'new-york' },
  { label: 'Boston, MA', value: 'boston' },
  { label: 'Austin, TX', value: 'austin' },
  { label: 'Chicago, IL', value: 'chicago' },
  { label: 'Seattle, WA', value: 'seattle' },
  { label: 'Atlanta, GA', value: 'atlanta' },
  { label: 'Houston, TX', value: 'houston' },
  { label: 'Washington, DC', value: 'washington' },
  { label: 'Los Angeles, CA', value: 'los-angeles' },
];

export function getVolunteerById(id: string): Volunteer | undefined {
  return volunteers.find(volunteer => volunteer.id === id);
}

export function getCompanyById(id: string): Company | undefined {
  return companies.find(company => company.id === id);
}

export function getEventById(id: string): Event | undefined {
  return events.find(event => event.id === id);
}

export function getEventsByCategory(category: string): Event[] {
  return events.filter(event => event.categories.includes(category));
}

export function getEventsByOrganizer(organizerId: string): Event[] {
  return events.filter(event => event.organizer === organizerId);
}

export function getVolunteersBySkill(skill: string): Volunteer[] {
  return volunteers.filter(volunteer => volunteer.skills.includes(skill));
}

export function getVolunteersByLocation(location: string): Volunteer[] {
  return volunteers.filter(volunteer => volunteer.location.includes(location));
}

export function getEventAttendees(eventId: string): Volunteer[] {
  const event = getEventById(eventId);
  if (!event) return [];
  return volunteers.filter(volunteer => event.attendees.includes(volunteer.id));
}
