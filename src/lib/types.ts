
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  type: 'volunteer' | 'company';
}

export interface Volunteer extends User {
  type: 'volunteer';
  skills: string[];
  bio: string;
  location: string;
  availability: string[];
  interests: string[];
  experience: number; // years
  eventsAttended: string[]; // event ids
}

export interface Company extends User {
  type: 'company';
  description: string;
  industry: string;
  location: string;
  website: string;
  eventsHosted: string[]; // event ids
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
    coordinates: [number, number]; // [longitude, latitude]
  };
  organizer: string; // company id
  categories: string[];
  image?: string;
  attendees: string[]; // volunteer ids
  maxAttendees?: number;
  requirements?: string[];
  contact?: {
    name: string;
    email: string;
    phone?: string;
  };
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
}

export type FilterOption = {
  label: string;
  value: string;
};

export interface EventRegistration {
  eventId: string;
  userId: string;
  registrationDate: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  notes?: string;
}

export interface Review {
  id: string;
  userId: string; // reviewer ID
  targetId: string; // event ID or user ID being reviewed
  targetType: 'event' | 'volunteer' | 'company';
  rating: number; // 1-5
  comment: string;
  date: string;
}
