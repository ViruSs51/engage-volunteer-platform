
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
}

export type FilterOption = {
  label: string;
  value: string;
};
