import { defineMessages } from 'react-intl';

export const scope = 'app.components.common';
export default defineMessages({
  headerBlogs: {
    id: `${scope}.header.blogs`,
    defaultMessage: 'Blogs',
  },
  headerProjects: {
    id: `${scope}.header.projects`,
    defaultMessage: 'Projects',
  },
  headerAboutMe: {
    id: `${scope}.header.about_me`,
    defaultMessage: 'About me',
  },
  headerContact: {
    id: `${scope}.header.contact`,
    defaultMessage: 'Contact',
  },
  headerTribute: {
    id: `${scope}.header.tribute`,
    defaultMessage: 'Tribute',
  },
  changeLanguageLabel: {
    id: `${scope}.change_language_label`,
    defaultMessage: 'The current language is:',
  },
  languageHindi: {
    id: `${scope}.language_hi`,
    defaultMessage: 'Hindi',
  },
  languageEnglish: {
    id: `${scope}.language_en`,
    defaultMessage: 'English',
  },
});
