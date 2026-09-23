export type NavSection = 'home' | 'parinti' | 'lupisori' | 'albume' | 'calendar' | 'metriza' | 'contact' | 'auth';

export interface Leader {
  id: string;
  totemName: string; // e.g. Akela, Baloo, Bagheera
  civilName: string;
  role: string;
  quote: string;
  avatar: string;
  phone?: string;
  email?: string;
  responsibilities: string[];
}

export interface ScoutEvent {
  id: string;
  title: string;
  type: 'Ieșire de o zi' | 'Camp de weekend' | 'Tabără de Vară' | 'Reuniune săptămânală' | 'Eveniment Parohial';
  date: string;
  location: string;
  description: string;
  theme: string;
  equipmentRequired: string[];
  departureTime: string;
  returnTime: string;
  rsvpCount: number;
}

export interface PhotoAlbum {
  id: string;
  title: string;
  date: string;
  location: string;
  coverImage: string;
  photos: {
    url: string;
    caption: string;
  }[];
}

export interface Sizaine {
  name: string;
  colorName: string;
  colorHex: string;
  motto: string;
  sizenier: string;
  membersCount: number;
}

export interface UserSession {
  isLoggedIn: boolean;
  role: 'vizitator' | 'parinte' | 'sef_ceata' | 'lupisor';
  name: string;
  sizaine?: string;
}
