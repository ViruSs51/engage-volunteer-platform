import { Volunteer, Company, Event, FilterOption } from './types';

export const volunteers: Volunteer[] = [
  {
    id: 'v1',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b8d21c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    type: 'volunteer',
    skills: ['Teaching', 'Mentoring', 'Tutoring'],
    bio: 'Passionate educator with 10+ years of experience. I love helping students achieve their full potential.',
    location: 'New York, NY',
    availability: ['Weekdays', 'Weekends'],
    interests: ['Education', 'Youth Development', 'Community Outreach'],
    experience: 12,
    eventsAttended: ['e1', 'e3']
  },
  {
    id: 'v2',
    name: 'Bob Williams',
    email: 'bob@example.com',
    avatar: 'https://images.unsplash.com/photo-1534528741702-a0cfae57f6ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
    type: 'volunteer',
    skills: ['Web Development', 'Graphic Design', 'Digital Marketing'],
    bio: 'Creative professional skilled in web development and digital marketing. I enjoy using my skills to support nonprofits.',
    location: 'Boston, MA',
    availability: ['Weekends', 'Evenings'],
    interests: ['Technology', 'Nonprofits', 'Social Impact'],
    experience: 5,
    eventsAttended: ['e2']
  },
  {
    id: 'v3',
    name: 'Carlos Rodriguez',
    email: 'carlos@example.com',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    type: 'volunteer',
    skills: ['Carpentry', 'Construction', 'Project Management'],
    bio: 'Retired contractor who enjoys building homes for families in need. I\'ve worked on over 50 projects across the country.',
    location: 'Houston, TX',
    availability: ['Weekdays', 'Full-time'],
    interests: ['Housing', 'Disaster Relief', 'Community Development'],
    experience: 25,
    eventsAttended: ['e4']
  },
  {
    id: 'v4',
    name: 'Diana Lee',
    email: 'diana@example.com',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80',
    type: 'volunteer',
    skills: ['Event Planning', 'Fundraising', 'Public Relations'],
    bio: 'Experienced event planner and fundraiser. I\'m passionate about supporting causes that make a difference.',
    location: 'San Francisco, CA',
    availability: ['Weekends', 'Part-time'],
    interests: ['Arts & Culture', 'Environment', 'Social Justice'],
    experience: 8,
    eventsAttended: ['e1', 'e5']
  },
  {
    id: 'v5',
    name: 'Ethan Green',
    email: 'ethan@example.com',
    avatar: 'https://images.unsplash.com/photo-1544005313-943cb025c0e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80',
    type: 'volunteer',
    skills: ['Gardening', 'Landscaping', 'Environmental Conservation'],
    bio: 'Avid gardener and environmentalist. I enjoy working outdoors and promoting sustainable practices.',
    location: 'Austin, TX',
    availability: ['Weekdays', 'Part-time'],
    interests: ['Environment', 'Sustainability', 'Community Gardening'],
    experience: 3,
    eventsAttended: ['e3']
  },
  {
    id: 'v6',
    name: 'Fiona White',
    email: 'fiona@example.com',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    type: 'volunteer',
    skills: ['Healthcare', 'Nursing', 'Patient Care'],
    bio: 'Registered nurse with a passion for helping others. I volunteer at local clinics and hospitals.',
    location: 'Washington, DC',
    availability: ['Weekends', 'Full-time'],
    interests: ['Healthcare', 'Public Health', 'Community Service'],
    experience: 7,
    eventsAttended: ['e2', 'e5']
  }
];

export const companies: Company[] = [
  {
    id: 'c1',
    name: 'Green Earth Org',
    email: 'info@greenearth.org',
    logo: 'https://images.unsplash.com/photo-1488419008435-5679c7b0713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    avatar: 'https://images.unsplash.com/photo-1488419008435-5679c7b0713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    type: 'organization',
    description: 'To protect and preserve the environment through education and conservation efforts.',
    mission: 'To protect and preserve the environment through education and conservation efforts.',
    location: 'San Francisco, CA',
    website: 'https://www.greenearth.org',
    categories: ['Environment', 'Conservation', 'Sustainability'],
    employees: 30,
    eventsHosted: ['e1', 'e5'],
    industry: 'Environment'
  },
  {
    id: 'c2',
    name: 'SeniorTech',
    email: 'contact@seniortech.com',
    logo: 'https://images.unsplash.com/photo-1518770660439-464c4c52ef1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    avatar: 'https://images.unsplash.com/photo-1518770660439-464c4c52ef1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    type: 'organization',
    description: 'Empowering seniors through technology education and support.',
    mission: 'Empowering seniors through technology education and support.',
    location: 'Boston, MA',
    website: 'https://www.seniortech.com',
    categories: ['Education', 'Technology', 'Seniors'],
    employees: 15,
    eventsHosted: ['e2'],
    industry: 'Education & Technology'
  },
  {
    id: 'c3',
    name: 'Habitat for All',
    email: 'info@habitatforall.org',
    logo: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f3a800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    avatar: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f3a800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    type: 'organization',
    description: 'Building affordable homes and communities for families in need.',
    mission: 'Building affordable homes and communities for families in need.',
    location: 'Houston, TX',
    website: 'https://www.habitatforall.org',
    categories: ['Housing', 'Construction', 'Community Development'],
    employees: 40,
    eventsHosted: ['e3', 'e4'],
    industry: 'Construction & Housing'
  },
  {
    id: 'c4',
    name: 'HealthFirst',
    email: 'info@healthfirst.org',
    logo: 'https://images.unsplash.com/photo-1532938314630-e96f17bb43e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80',
    avatar: 'https://images.unsplash.com/photo-1532938314630-e96f17bb43e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80',
    type: 'organization',
    description: 'Improving community health through education, prevention, and access to care.',
    mission: 'Improving community health through education, prevention, and access to care.',
    location: 'Washington, DC',
    website: 'https://www.healthfirst.org',
    categories: ['Healthcare', 'Public Health', 'Community Service'],
    employees: 20,
    eventsHosted: ['e6'],
    industry: 'Healthcare'
  }
];

export const events: Event[] = [
  {
    id: 'e1',
    title: 'City Park Clean-Up',
    description: 'Join us for a day of cleaning and beautifying Central Park. We\'ll provide gloves, bags, and refreshments. Great for families and individuals!',
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
    maxAttendees: 50,
    status: 'upcoming'
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
    maxAttendees: 20,
    status: 'upcoming'
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
    maxAttendees: 30,
    status: 'upcoming'
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
    maxAttendees: 40,
    status: 'ongoing'
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
    maxAttendees: 75,
    status: 'upcoming'
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
    maxAttendees: 25,
    status: 'upcoming'
  }
];

export const skillOptions: FilterOption[] = [
  { value: 'Teaching', label: 'Teaching' },
  { value: 'Mentoring', label: 'Mentoring' },
  { value: 'Tutoring', label: 'Tutoring' },
  { value: 'Web Development', label: 'Web Development' },
  { value: 'Graphic Design', label: 'Graphic Design' },
  { value: 'Digital Marketing', label: 'Digital Marketing' },
  { value: 'Carpentry', label: 'Carpentry' },
  { value: 'Construction', label: 'Construction' },
  { value: 'Project Management', label: 'Project Management' },
  { value: 'Event Planning', label: 'Event Planning' },
  { value: 'Fundraising', label: 'Fundraising' },
  { value: 'Public Relations', label: 'Public Relations' },
  { value: 'Gardening', label: 'Gardening' },
  { value: 'Landscaping', label: 'Landscaping' },
  { value: 'Environmental Conservation', label: 'Environmental Conservation' },
  { value: 'Healthcare', label: 'Healthcare' },
  { value: 'Nursing', label: 'Nursing' },
  { value: 'Patient Care', label: 'Patient Care' }
];

export const categoryOptions: FilterOption[] = [
  { value: 'Environment', label: 'Environment' },
  { value: 'Community', label: 'Community' },
  { value: 'Outdoor', label: 'Outdoor' },
  { value: 'Education', label: 'Education' },
  { value: 'Technology', label: 'Technology' },
  { value: 'Seniors', label: 'Seniors' },
  { value: 'Construction', label: 'Construction' },
  { value: 'Housing', label: 'Housing' },
  { value: 'Skilled Labor', label: 'Skilled Labor' },
  { value: 'Community Development', label: 'Community Development' },
  { value: 'Urban Renewal', label: 'Urban Renewal' },
  { value: 'Conservation', label: 'Conservation' },
  { value: 'Healthcare', label: 'Healthcare' },
  { value: 'Community Service', label: 'Community Service' }
];

export const locationOptions: FilterOption[] = [
  { value: 'New York, NY', label: 'New York, NY' },
  { value: 'Boston, MA', label: 'Boston, MA' },
  { value: 'Houston, TX', label: 'Houston, TX' },
  { value: 'San Francisco, CA', label: 'San Francisco, CA' },
  { value: 'Austin, TX', label: 'Austin, TX' },
  { value: 'Washington, DC', label: 'Washington, DC' }
];

export const getVolunteerById = (id: string) => {
  return volunteers.find(volunteer => volunteer.id === id);
};

export const getCompanyById = (id: string) => {
  return companies.find(company => company.id === id);
};

export const getEventsByCategory = (category: string) => {
  return events.filter(event => event.categories.includes(category));
};

export const getEventById = (id: string) => {
  return events.find(event => event.id === id);
};

export const getEventAttendees = (eventId: string) => {
  const event = getEventById(eventId);
  if (!event) return [];
  
  return event.attendees
    .map(attendeeId => getVolunteerById(attendeeId))
    .filter(Boolean) as Volunteer[];
};

export const getEventsByOrganizer = (organizerId: string) => {
  return events.filter(event => event.organizer === organizerId);
};
