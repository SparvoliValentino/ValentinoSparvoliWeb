export type Locale = 'es' | 'en';

/** A value that differs per supported locale. Used across content data files. */
export type Localized<T> = Record<Locale, T>;

export interface IdCardDictionary {
  title: string;
  roleLabel: string;
  roleValue: string;
  specialtyLabel: string;
  specialtyValue: string;
  experienceLabel: string;
  experienceValue: string;
  englishLabel: string;
  englishValue: string;
  locationLabel: string;
  locationValue: string;
  statusLabel: string;
  statusValue: string;
}

export interface Dictionary {
  nav: {
    experience: string;
    projects: string;
    stack: string;
    education: string;
    contact: string;
    menuLabel: string;
    langLabel: string;
  };
  hero: {
    availability: string;
    headlineLine1: string;
    headlineLine2: string;
    roles: string[];
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    githubLabel: string;
    linkedinLabel: string;
    portraitMetaLabel: string;
    portraitMetaValue: string;
    card: IdCardDictionary;
  };
  metrics: { num: string; label: string }[];
  experience: {
    kicker: string;
    title: string;
    sub: string;
  };
  projects: {
    kicker: string;
    title: string;
    sub: string;
    liveLabel: string;
    codeLabel: string;
    moreLabel: string;
    placeholderLabel: string;
  };
  stack: {
    kicker: string;
    title: string;
    sub: string;
    dailyUse: string;
    agile: string;
  };
  education: {
    kicker: string;
    title: string;
    sub: string;
    certLabel: string;
  };
  contact: {
    headlinePrefix: string;
    headlineHighlight: string;
    headlineSuffix: string;
    sub: string;
    ctaEmail: string;
    ctaLinkedin: string;
    ctaCV: string;
    emailLabel: string;
    phoneLabel: string;
    linkedinLabel: string;
    githubLabel: string;
  };
  footer: {
    status: string;
    location: string;
    top: string;
  };
}
