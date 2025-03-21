
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation as getTranslation } from '@/lib/translations';

export const useTranslation = () => {
  const { language } = useLanguage();
  return getTranslation(language);
};

export default useTranslation;
