
import { Language } from './types';

type TranslationKey = 
  | 'common.loading'
  | 'common.error'
  | 'common.notFound'
  | 'common.goBack'
  | 'common.readMore'
  | 'common.seeAll'
  | 'common.search'
  | 'common.filter'
  | 'common.signUp'
  | 'common.login'
  | 'common.logout'
  | 'common.save'
  | 'common.cancel'
  | 'common.apply'
  | 'common.share'
  | 'common.bookmark'
  | 'nav.home'
  | 'nav.events'
  | 'nav.volunteers'
  | 'nav.companies'
  | 'nav.contact'
  | 'home.hero.title'
  | 'home.hero.subtitle'
  | 'home.hero.cta'
  | 'home.about.title'
  | 'home.about.description'
  | 'home.featuredEvents.title'
  | 'events.title'
  | 'events.filter.category'
  | 'events.filter.location'
  | 'events.filter.date'
  | 'events.filter.status'
  | 'events.notFound'
  | 'event.signUp'
  | 'event.cancel'
  | 'event.full'
  | 'event.aboutTitle'
  | 'event.attendees'
  | 'event.organizer'
  | 'event.location'
  | 'event.similar'
  | 'event.cta'
  | 'volunteers.title'
  | 'volunteers.filter.skills'
  | 'volunteers.filter.location'
  | 'volunteers.filter.experience'
  | 'volunteers.notFound'
  | 'volunteer.skills'
  | 'volunteer.experience'
  | 'volunteer.interests'
  | 'volunteer.events'
  | 'volunteer.availability'
  | 'companies.title'
  | 'companies.filter.category'
  | 'companies.filter.location'
  | 'companies.notFound'
  | 'company.description'
  | 'company.events'
  | 'company.volunteers'
  | 'company.website'
  | 'contact.title'
  | 'contact.form.name'
  | 'contact.form.email'
  | 'contact.form.message'
  | 'contact.form.submit'
  | 'contact.success';

const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    'common.loading': 'Loading...',
    'common.error': 'An error occurred',
    'common.notFound': 'Not found',
    'common.goBack': 'Go back',
    'common.readMore': 'Read more',
    'common.seeAll': 'See all',
    'common.search': 'Search',
    'common.filter': 'Filter',
    'common.signUp': 'Sign up',
    'common.login': 'Login',
    'common.logout': 'Logout',
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.apply': 'Apply',
    'common.share': 'Share',
    'common.bookmark': 'Bookmark',
    'nav.home': 'Home',
    'nav.events': 'Events',
    'nav.volunteers': 'Volunteers',
    'nav.companies': 'Organizations',
    'nav.contact': 'Contact',
    'home.hero.title': 'Make a Difference in Your Community',
    'home.hero.subtitle': 'Find volunteer opportunities that match your skills and interests',
    'home.hero.cta': 'Find Opportunities',
    'home.about.title': 'About Our Platform',
    'home.about.description': 'We connect passionate volunteers with organizations making a difference in communities around the world.',
    'home.featuredEvents.title': 'Featured Events',
    'events.title': 'Volunteer Events',
    'events.filter.category': 'Category',
    'events.filter.location': 'Location',
    'events.filter.date': 'Date',
    'events.filter.status': 'Status',
    'events.notFound': 'No events found',
    'event.signUp': 'Sign up to volunteer',
    'event.cancel': 'Cancel registration',
    'event.full': 'Event full',
    'event.aboutTitle': 'About this event',
    'event.attendees': 'Volunteers',
    'event.organizer': 'Organizer',
    'event.location': 'Location',
    'event.similar': 'Similar events',
    'event.cta': 'Ready to make an impact?',
    'volunteers.title': 'Find Volunteers',
    'volunteers.filter.skills': 'Skills',
    'volunteers.filter.location': 'Location',
    'volunteers.filter.experience': 'Experience',
    'volunteers.notFound': 'No volunteers found',
    'volunteer.skills': 'Skills',
    'volunteer.experience': 'Experience',
    'volunteer.interests': 'Interests',
    'volunteer.events': 'Events attended',
    'volunteer.availability': 'Availability',
    'companies.title': 'Organizations',
    'companies.filter.category': 'Category',
    'companies.filter.location': 'Location',
    'companies.notFound': 'No organizations found',
    'company.description': 'About',
    'company.events': 'Events',
    'company.volunteers': 'Volunteers needed',
    'company.website': 'Website',
    'contact.title': 'Contact Us',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send message',
    'contact.success': 'Message sent successfully'
  },
  ru: {
    'common.loading': 'Загрузка...',
    'common.error': 'Произошла ошибка',
    'common.notFound': 'Не найдено',
    'common.goBack': 'Назад',
    'common.readMore': 'Подробнее',
    'common.seeAll': 'Смотреть все',
    'common.search': 'Поиск',
    'common.filter': 'Фильтр',
    'common.signUp': 'Зарегистрироваться',
    'common.login': 'Войти',
    'common.logout': 'Выйти',
    'common.save': 'Сохранить',
    'common.cancel': 'Отмена',
    'common.apply': 'Применить',
    'common.share': 'Поделиться',
    'common.bookmark': 'Сохранить',
    'nav.home': 'Главная',
    'nav.events': 'Мероприятия',
    'nav.volunteers': 'Волонтеры',
    'nav.companies': 'Организации',
    'nav.contact': 'Контакты',
    'home.hero.title': 'Внесите свой вклад в общество',
    'home.hero.subtitle': 'Найдите волонтерские возможности, соответствующие вашим навыкам и интересам',
    'home.hero.cta': 'Найти возможности',
    'home.about.title': 'О нашей платформе',
    'home.about.description': 'Мы связываем увлеченных волонтеров с организациями, которые вносят изменения в сообщества по всему миру.',
    'home.featuredEvents.title': 'Популярные мероприятия',
    'events.title': 'Волонтерские мероприятия',
    'events.filter.category': 'Категория',
    'events.filter.location': 'Местоположение',
    'events.filter.date': 'Дата',
    'events.filter.status': 'Статус',
    'events.notFound': 'Мероприятия не найдены',
    'event.signUp': 'Записаться волонтером',
    'event.cancel': 'Отменить регистрацию',
    'event.full': 'Мероприятие заполнено',
    'event.aboutTitle': 'Об этом мероприятии',
    'event.attendees': 'Волонтеры',
    'event.organizer': 'Организатор',
    'event.location': 'Местоположение',
    'event.similar': 'Похожие мероприятия',
    'event.cta': 'Готовы внести свой вклад?',
    'volunteers.title': 'Найти волонтеров',
    'volunteers.filter.skills': 'Навыки',
    'volunteers.filter.location': 'Местоположение',
    'volunteers.filter.experience': 'Опыт',
    'volunteers.notFound': 'Волонтеры не найдены',
    'volunteer.skills': 'Навыки',
    'volunteer.experience': 'Опыт',
    'volunteer.interests': 'Интересы',
    'volunteer.events': 'Посещенные мероприятия',
    'volunteer.availability': 'Доступность',
    'companies.title': 'Организации',
    'companies.filter.category': 'Категория',
    'companies.filter.location': 'Местоположение',
    'companies.notFound': 'Организации не найдены',
    'company.description': 'О компании',
    'company.events': 'Мероприятия',
    'company.volunteers': 'Требуются волонтеры',
    'company.website': 'Веб-сайт',
    'contact.title': 'Связаться с нами',
    'contact.form.name': 'Имя',
    'contact.form.email': 'Электронная почта',
    'contact.form.message': 'Сообщение',
    'contact.form.submit': 'Отправить сообщение',
    'contact.success': 'Сообщение успешно отправлено'
  },
  ro: {
    'common.loading': 'Se încarcă...',
    'common.error': 'A apărut o eroare',
    'common.notFound': 'Nu a fost găsit',
    'common.goBack': 'Înapoi',
    'common.readMore': 'Citește mai mult',
    'common.seeAll': 'Vezi toate',
    'common.search': 'Caută',
    'common.filter': 'Filtrează',
    'common.signUp': 'Înregistrare',
    'common.login': 'Autentificare',
    'common.logout': 'Deconectare',
    'common.save': 'Salvează',
    'common.cancel': 'Anulează',
    'common.apply': 'Aplică',
    'common.share': 'Distribuie',
    'common.bookmark': 'Salvează',
    'nav.home': 'Acasă',
    'nav.events': 'Evenimente',
    'nav.volunteers': 'Voluntari',
    'nav.companies': 'Organizații',
    'nav.contact': 'Contact',
    'home.hero.title': 'Fă o diferență în comunitatea ta',
    'home.hero.subtitle': 'Găsește oportunități de voluntariat care se potrivesc abilităților și intereselor tale',
    'home.hero.cta': 'Găsește oportunități',
    'home.about.title': 'Despre platforma noastră',
    'home.about.description': 'Conectăm voluntari pasionați cu organizații care fac o diferență în comunitățile din întreaga lume.',
    'home.featuredEvents.title': 'Evenimente recomandate',
    'events.title': 'Evenimente de voluntariat',
    'events.filter.category': 'Categorie',
    'events.filter.location': 'Locație',
    'events.filter.date': 'Dată',
    'events.filter.status': 'Status',
    'events.notFound': 'Nu s-au găsit evenimente',
    'event.signUp': 'Înscrie-te ca voluntar',
    'event.cancel': 'Anulează înregistrarea',
    'event.full': 'Eveniment complet',
    'event.aboutTitle': 'Despre acest eveniment',
    'event.attendees': 'Voluntari',
    'event.organizer': 'Organizator',
    'event.location': 'Locație',
    'event.similar': 'Evenimente similare',
    'event.cta': 'Ești gata să faci o schimbare?',
    'volunteers.title': 'Găsește voluntari',
    'volunteers.filter.skills': 'Abilități',
    'volunteers.filter.location': 'Locație',
    'volunteers.filter.experience': 'Experiență',
    'volunteers.notFound': 'Nu s-au găsit voluntari',
    'volunteer.skills': 'Abilități',
    'volunteer.experience': 'Experiență',
    'volunteer.interests': 'Interese',
    'volunteer.events': 'Evenimente participante',
    'volunteer.availability': 'Disponibilitate',
    'companies.title': 'Organizații',
    'companies.filter.category': 'Categorie',
    'companies.filter.location': 'Locație',
    'companies.notFound': 'Nu s-au găsit organizații',
    'company.description': 'Despre',
    'company.events': 'Evenimente',
    'company.volunteers': 'Voluntari necesari',
    'company.website': 'Website',
    'contact.title': 'Contactează-ne',
    'contact.form.name': 'Nume',
    'contact.form.email': 'Email',
    'contact.form.message': 'Mesaj',
    'contact.form.submit': 'Trimite mesaj',
    'contact.success': 'Mesaj trimis cu succes'
  }
};

export const useTranslation = (language: Language) => {
  return {
    t: (key: TranslationKey) => translations[language][key] || key
  };
};
