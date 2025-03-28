
export interface Volunteer {
  id: string;
  name: string;
  email: string;
  avatar: string;
  type: 'volunteer' | 'organization';
  skills: string[];
  bio: string;
  location: string;
  availability: string[];
  interests: string[];
  experience: number;
  eventsAttended: string[];
}

export interface Company {
  id: string;
  name: string;
  email: string;
  logo: string;
  avatar?: string; // Added for compatibility with existing code
  type: 'volunteer' | 'organization';
  description: string;
  location: string;
  website: string;
  categories: string[];
  employees: number;
  eventsHosted: string[];
  industry?: string; // Added for compatibility with existing code
  mission?: string; // Added for compatibility with existing code
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: {
    address: string;
    city: string;
    coordinates: [number, number];
  };
  organizer: string;
  categories: string[];
  image: string;
  attendees: string[];
  maxAttendees: number;
  status: 'upcoming' | 'ongoing' | 'completed' | 'canceled';
}

export type Language = 'en' | 'ru' | 'ro';

export interface FilterOption {
  value: string;
  label: string;
}
