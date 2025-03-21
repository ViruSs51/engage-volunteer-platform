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
  type: 'volunteer' | 'organization';
  description: string;
  location: string;
  website: string;
  categories: string[];
  employees: number;
  eventsHosted: string[];
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
