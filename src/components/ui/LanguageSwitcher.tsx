
import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/lib/types';
import { t } from '@/lib/translations';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const languageOptions: { value: Language; label: string; flag: string }[] = [
    { value: 'en', label: t('english', language), flag: '🇬🇧' },
    { value: 'ru', label: t('russian', language), flag: '🇷🇺' },
    { value: 'ro', label: t('romanian', language), flag: '🇷🇴' },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="sr-only md:not-sr-only md:inline-block">
            {languageOptions.find(option => option.value === language)?.flag}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languageOptions.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => setLanguage(option.value)}
            className={`flex items-center gap-2 ${language === option.value ? 'font-medium bg-accent/50' : ''}`}
          >
            <span>{option.flag}</span>
            <span>{option.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
