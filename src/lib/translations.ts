
import { Language } from './types';

// Type for all translatable strings in the app
type TranslationKeys = {
  // Navbar
  home: string;
  volunteers: string;
  events: string;
  eventMap: string;
  contact: string;
  login: string;
  signUp: string;
  
  // Hero section
  heroTagline: string;
  heroTitle: string;
  heroSubtitle: string;
  findVolunteers: string;
  exploreEvents: string;
  activeVolunteers: string;
  partnerOrganizations: string;
  eventsCompleted: string;
  volunteerHours: string;
  
  // CTA section
  readyToMakeADifference: string;
  ctaSubtitle: string;
  joinAsVolunteer: string;
  registerAsOrganization: string;
  
  // Testimonials
  whatPeopleSay: string;
  hearFromVolunteers: string;
  readMoreStories: string;
  
  // Language selector
  language: string;
  english: string;
  russian: string;
  romanian: string;
};

// Translations object
const translations: Record<Language, TranslationKeys> = {
  en: {
    // Navbar
    home: 'Home',
    volunteers: 'Volunteers',
    events: 'Events',
    eventMap: 'Event Map',
    contact: 'Contact',
    login: 'Login',
    signUp: 'Sign Up',
    
    // Hero section
    heroTagline: 'Making a difference, one volunteer at a time',
    heroTitle: 'Connecting Passionate People with Meaningful Causes',
    heroSubtitle: 'Join our community of volunteers and organizations working together to create positive change. Find opportunities that match your skills and interests.',
    findVolunteers: 'Find Volunteers',
    exploreEvents: 'Explore Events',
    activeVolunteers: 'Active Volunteers',
    partnerOrganizations: 'Partner Organizations',
    eventsCompleted: 'Events Completed',
    volunteerHours: 'Volunteer Hours',
    
    // CTA section
    readyToMakeADifference: 'Ready to Make a Difference?',
    ctaSubtitle: 'Whether you\'re looking to volunteer your skills or find capable volunteers for your cause, we\'re here to help you connect and create impact.',
    joinAsVolunteer: 'Join as a Volunteer',
    registerAsOrganization: 'Register as an Organization',
    
    // Testimonials
    whatPeopleSay: 'What People Say',
    hearFromVolunteers: 'Hear from volunteers and organizations who have used our platform to create impact.',
    readMoreStories: 'Read more volunteer stories',
    
    // Language selector
    language: 'Language',
    english: 'English',
    russian: 'Russian',
    romanian: 'Romanian',
  },
  
  ru: {
    // Navbar
    home: 'Главная',
    volunteers: 'Волонтеры',
    events: 'События',
    eventMap: 'Карта событий',
    contact: 'Контакты',
    login: 'Вход',
    signUp: 'Регистрация',
    
    // Hero section
    heroTagline: 'Меняем мир к лучшему, один волонтер за раз',
    heroTitle: 'Соединяем увлеченных людей с важными делами',
    heroSubtitle: 'Присоединяйтесь к нашему сообществу волонтеров и организаций, работающих вместе для создания позитивных изменений. Найдите возможности, соответствующие вашим навыкам и интересам.',
    findVolunteers: 'Найти волонтеров',
    exploreEvents: 'Изучить события',
    activeVolunteers: 'Активных волонтеров',
    partnerOrganizations: 'Партнерских организаций',
    eventsCompleted: 'Завершенных событий',
    volunteerHours: 'Волонтерских часов',
    
    // CTA section
    readyToMakeADifference: 'Готовы изменить мир к лучшему?',
    ctaSubtitle: 'Независимо от того, хотите ли вы предложить свои навыки в качестве волонтера или найти способных волонтеров для вашего дела, мы здесь, чтобы помочь вам установить связи и создать положительное влияние.',
    joinAsVolunteer: 'Стать волонтером',
    registerAsOrganization: 'Зарегистрировать организацию',
    
    // Testimonials
    whatPeopleSay: 'Что говорят люди',
    hearFromVolunteers: 'Узнайте, что говорят волонтеры и организации, которые использовали нашу платформу для создания положительного влияния.',
    readMoreStories: 'Прочитать больше историй волонтеров',
    
    // Language selector
    language: 'Язык',
    english: 'Английский',
    russian: 'Русский',
    romanian: 'Румынский',
  },
  
  ro: {
    // Navbar
    home: 'Acasă',
    volunteers: 'Voluntari',
    events: 'Evenimente',
    eventMap: 'Harta evenimentelor',
    contact: 'Contact',
    login: 'Autentificare',
    signUp: 'Înregistrare',
    
    // Hero section
    heroTagline: 'Facem o diferență, un voluntar pe rând',
    heroTitle: 'Conectăm oameni pasionați cu cauze importante',
    heroSubtitle: 'Alătură-te comunității noastre de voluntari și organizații care lucrează împreună pentru a crea schimbări pozitive. Găsește oportunități care se potrivesc abilităților și intereselor tale.',
    findVolunteers: 'Găsește voluntari',
    exploreEvents: 'Explorează evenimente',
    activeVolunteers: 'Voluntari activi',
    partnerOrganizations: 'Organizații partenere',
    eventsCompleted: 'Evenimente finalizate',
    volunteerHours: 'Ore de voluntariat',
    
    // CTA section
    readyToMakeADifference: 'Ești gata să faci o diferență?',
    ctaSubtitle: 'Fie că dorești să îți oferi abilitățile ca voluntar sau să găsești voluntari capabili pentru cauza ta, suntem aici pentru a te ajuta să te conectezi și să creezi impact.',
    joinAsVolunteer: 'Înscrie-te ca voluntar',
    registerAsOrganization: 'Înregistrează o organizație',
    
    // Testimonials
    whatPeopleSay: 'Ce spun oamenii',
    hearFromVolunteers: 'Află de la voluntari și organizații care au folosit platforma noastră pentru a crea impact.',
    readMoreStories: 'Citește mai multe povești ale voluntarilor',
    
    // Language selector
    language: 'Limbă',
    english: 'Engleză',
    russian: 'Rusă',
    romanian: 'Română',
  }
};

export const t = (key: keyof TranslationKeys, language: Language): string => {
  return translations[language][key] || key;
};

export default translations;
