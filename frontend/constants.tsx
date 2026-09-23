import { Leader, ScoutEvent, PhotoAlbum, Sizaine } from './types';

export const SCOUT_UNIT_NAME = "CEATA DE LUPIȘORI";
export const SCOUT_SUBTITLE = "„SF. ANTON DE PADOVA”";
export const SCOUT_GROUP_NAME = "Grupul „Fericitul Iuliu Hossu” • Cercetașii Munților";
export const SCOUT_PARISH = "Catedrala Martirilor și Mărturisitorilor Sec. XX";
export const SCOUT_FEDERATION = "Asociația Cercetașii Munților — Federata la UIGSE-FSE";

export const HERO_QUOTE = "„Pedagogia acestei grupe de vârstă se bazează pe Cartea Junglei. Prin fiecare poveste trăită, Mowgli, sub îndrumarea Bătrânilor Lupi, descoperă valori, virtuți, principii pozitive, menite să îi inspire pe lupișori.”";
export const HERO_CHARACTERS = "Akela • Baloo • Bagheera • Sahi • Hathi • Chil • Cartea Junglei";

export const HERO_STATS = [
  {
    value: "30",
    label: "Lupișori în Ceată"
  },
  {
    value: "5 ECHIPE",
    label: "Alb, Gri, Negru, Maro, Roșcat"
  },
  {
    value: "100%",
    label: "Natură - Joc - Responsabilitate"
  },
  {
    value: "DIN 1996",
    label: "Cercetașii Munților"
  }
];

export const TEXTUL_PROMISIUNII = "„Promit să fac tot ce-mi stă în putință pentru a fi credincios lui Dumnezeu, patriei, părinților, Legii Cetei, și pentru a ajuta în fiecare zi pe cineva.”";

export const LEGEA_HAITEI = [
  "Lupișorul îl ascultă pe Vechiul Lup (Akela).",
  "Lupișorul nu se ascultă pe sine însuși."
];

export const MAXIMA_LUPISORILOR = "Un lupișor deschide bine ochii și urechile; un lupișor este întotdeauna curat și vesel; un lupișor spune întotdeauna adevărul!";

export const SALUTUL = "„Din răsputeri!” (De notre mieux!)";

export const RUGACIUNEA = `Doamne Isuse Cristoase,
care pentru noi Te-ai făcut copil,
învață-ne să urmăm exemplul Tău,
să fim curați și veseli,
să ascultăm din toată inima
și să ne iubim unii pe alții.
Sfântă Fecioară Maria, ocrotește haita noastră!
Sfinte Antoane de Padova, roagă-te pentru noi!
Amin.`;

export const SIZAINE_LIST: Sizaine[] = [
  {
    name: "Sizaina Lupilor Albi",
    colorName: "Alb Curat",
    colorHex: "#F1F5F9",
    motto: "Lumină în Pădure!",
    sizenier: "Matei D. (Lup cu Stea)",
    membersCount: 6
  },
  {
    name: "Sizaina Lupilor Gri (Cenușii)",
    colorName: "Gri Cenușiu",
    colorHex: "#64748B",
    motto: "Vigilenți și iuți!",
    sizenier: "Tudor M. (Lup cu Două Stele)",
    membersCount: 6
  },
  {
    name: "Sizaina Lupilor Negri",
    colorName: "Negru Nobil",
    colorHex: "#1E293B",
    motto: "Înaintăm cu bărbăție!",
    sizenier: "Alexandru V.",
    membersCount: 6
  },
  {
    name: "Sizaina Lupilor Maro",
    colorName: "Brun de Pădure",
    colorHex: "#78350F",
    motto: "Prieteni credincioși!",
    sizenier: "Radu P. (Lup cu Două Stele)",
    membersCount: 6
  },
  {
    name: "Sizaina Lupilor Roșcați",
    colorName: "Roșcat Viguros",
    colorHex: "#B45309",
    motto: "Focul cel viu al haitei!",
    sizenier: "David S.",
    membersCount: 6
  }
];

export const LEADERS: Leader[] = [
  {
    id: '1',
    totemName: 'Akela',
    civilName: 'Bogdan Maier',
    role: 'Șef de Unitate',
    quote: '„Privește bine, o, Lupule!” — datoria noastră este să-i învățăm să vadă frumosul din natură și din aproapele lor.',
    avatar: 'https://cdn.phototourl.com/free/2026-09-22-cdbbe856-44e3-40b0-8327-d39483c1ddf5.jpg',
    phone: '+40 774 575 087',
    email: 'akelalupacmcj@gmail.com',
    responsibilities: ['Conducerea unității', 'Pedagogia Ramurii Galbene', 'Relația cu părinții']
  },
  {
    id: '2',
    totemName: 'Baloo',
    civilName: 'Andrei Androhovici',
    role: 'Asistent de Unitate',
    quote: '„Legea este pavăza noastră. Cu zâmbetul pe buze trecem peste orice obstacol din junglă!”',
    avatar: 'https://cdn.phototourl.com/free/2026-09-22-805e84b8-04e4-4549-b1cd-da5aa35b52e9.png',
    phone: '+40 738 417 723',
    responsibilities: ['Jocuri mari de pădure', 'Învățarea Legii Haitei', 'Muzică și cântece de foc de tabără']
  },
  {
    id: '3',
    totemName: 'Bagheera',
    civilName: 'Iuliu Cosmovici',
    role: 'Asistent de Unitate',
    quote: '„Pasul lupișorului este furișat, ochiul ager și inima curajoasă.”',
    avatar: 'https://cdn.phototourl.com/free/2026-09-22-dbef06a2-1768-4371-abb7-8a5adec11bb4.jpg',
    phone: '+40 728 011 383',
    responsibilities: ['Tehnici de campare', 'Noduri & Orientare', 'Trasee montane']
  },
  {
    id: '4',
    totemName: 'Sahi',
    civilName: 'Ioan-Vasile Danca',
    role: 'Asistent de Unitate',
    quote: '„Un cercetaș este fidel credinței sale și mândru de Biserica sa.”',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
    phone: '+40 768 262 522',
    email: 'spiritual.sfanton@cercetasii-muntilor.ro',
    responsibilities: ['Sfânta Liturghie în aer liber', 'Meditații la Stânca Sfatului', 'Formarea caracterului creștin']
  }
];

export const EVENTS: ScoutEvent[] = [
  {
    id: 'ev-1',
    title: 'Marea Ieșire la Pădurea Snagov — Vânătoarea lui Mowgli',
    type: 'Ieșire de o zi',
    date: 'Sâmbătă, 22 Martie 2025',
    location: 'Pădurea Snagov (Transfer autocar Parohia Sf. Anton)',
    description: 'O zi plină de jocuri de orientare cu busola, căutarea urmelor lăsate de Shere Khan și atelier de noduri marinărești.',
    theme: 'Cartea Junglei — Mowgli intră în Haită',
    equipmentRequired: ['Uniforma completă (beretă, cămașă bleu, eșarfă roșu-galben)', 'Rucsac mic de zi', 'Pelerină ploaie', 'Sticlă apă 1L', 'Sandviș de prânz', 'Caiet de vânătoare & creion'],
    departureTime: '08:30 (Parcare Biserică)',
    returnTime: '17:30 (Întoarcere parcare)',
    rsvpCount: 28
  },
  {
    id: 'ev-2',
    title: 'Praznicul Patronului Cetei — Sfântul Anton de Padova',
    type: 'Eveniment Parohial',
    date: 'Duminică, 13 Aprilie 2025',
    location: 'Biserica Sfântul Anton de Padova, Colentina',
    description: 'Sfânta Liturghie solemnă a Cetei cu reînnoirea Promisiunilor de Lupișor și acordarea primelor Stele ale lupișorilor.',
    theme: 'Fidelitate și Slujire',
    equipmentRequired: ['Uniformă impecabilă călcată', 'Carnet de lupișor'],
    departureTime: '10:00',
    returnTime: '13:00 (include agapă cu părinții)',
    rsvpCount: 30
  },
  {
    id: 'ev-3',
    title: 'Ieșire de Weekend la Munte: Stânca Sfatului la Cheile Dâmbovicioarei',
    type: 'Camp de weekend',
    date: '09 - 11 Mai 2025',
    location: 'Căminul Montan Dâmbovicioara / Piatra Craiului',
    description: 'Camp de două nopți pentru lupișorii din anii 2 și 3. Drumeție pe poteci sigure, foc de tabără, scenete nocturne și povești de la Akela.',
    theme: 'Frații lui Mowgli',
    equipmentRequired: ['Sac de dormit de munte', 'Bocanci de munte robuști', 'Schimburi calde de lână/polar', 'Lanternă frontală', 'Trusă de igienă personală'],
    departureTime: 'Vineri 16:00',
    returnTime: 'Duminică 18:00',
    rsvpCount: 25
  },
  {
    id: 'ev-4',
    title: 'Marea Tabără de Vară a Cetei — „Ținutul Seeonee”',
    type: 'Tabără de Vară',
    date: '14 - 20 Iulie 2025',
    location: 'Valea Avrigului, Munții Făgăraș',
    description: 'Punctul culminant al anului cercetășesc! O săptămână în inima naturii, învățând viața în comunitate, gătit la foc mic, ceremonii de promisiune și marea vânătoare.',
    theme: 'Împărăția Junglei Libere',
    equipmentRequired: ['Rucsac mare 50-60L', 'Echipament complet de tabără conform broșurii părinților'],
    departureTime: 'Luni 07:00',
    returnTime: 'Duminică 19:30',
    rsvpCount: 30
  }
];

export const PHOTO_ALBUMS: PhotoAlbum[] = [
  {
    id: 'alb-1',
    title: 'Tabăra de Vară 2024 — „Izvoarele Argeșului”',
    date: 'Iulie 2024',
    location: 'Arefu, Argeș',
    coverImage: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80',
    photos: [
      { url: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1000&q=80', caption: 'Ceremonia Marelui Urlat la răsărit pe platou' },
      { url: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1000&q=80', caption: 'Sizaina Lupilor Cenușii construind adăpostul de ramuri' },
      { url: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1000&q=80', caption: 'Focul de tabără și cântecele vesele ale haitei' },
      { url: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1000&q=80', caption: 'Drumeția spre Cascada Capra — pas cu pas' }
    ]
  },
  {
    id: 'alb-2',
    title: 'Depunerea Promisiunilor de Lupișor — Biserica Sf. Anton',
    date: 'Octombrie 2024',
    location: 'București',
    coverImage: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80',
    photos: [
      { url: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1000&q=80', caption: 'Momentul solemn al promisiunii cu mâna ridicată la salut' },
      { url: 'https://images.unsplash.com/photo-1464207687429-750718492370?auto=format&fit=crop&w=1000&q=80', caption: 'Akela așază eșarfa pe umerii noului lupișor' },
      { url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=80', caption: 'Bucuria părinților și binecuvântarea asistentului spiritual' }
    ]
  },
  {
    id: 'alb-3',
    title: 'Ieșirea de Toamnă în Pădurea Comana',
    date: 'Noiembrie 2024',
    location: 'Parcul Natural Comana',
    coverImage: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80',
    photos: [
      { url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=80', caption: 'Frunziș de aur și căutarea urmelor de animale' },
      { url: 'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1000&q=80', caption: 'Marele joc de strategie dintre cete' },
      { url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80', caption: 'Rugăciunea de mulțumire la asfințit' }
    ]
  }
];

export const UNIFORM_ITEMS = [
  { item: 'Beretă de lupișor', note: 'Verde închis cu capul de lup brodat galben pe frunte' },
  { item: 'Cămașă cercetășească bleu ciel', note: 'Mânecă lungă, buzunare cu clapetă' },
  { item: 'Eșarfă de Ceată', note: 'Culori specifice cetei și parohiei' },
  { item: 'Inel de eșarfă din piele', note: 'Nodul „Cap de turc” din piele naturală' },
  { item: 'Pantalon scurt / lung bleumarin', note: 'Doc rezistent pentru activități în natură' },
  { item: 'Curea de piele FSE', note: 'Cataramă cu crucea cercetășească a FSE' },
  { item: 'Bocanci de munte / ghete comode', note: 'Impermeabili, susținere fermă a gleznei' }
];

export const FAQ_PARENTS = [
  {
    q: "Ce este ramura Lupișorilor din Cercetașii Munților?",
    a: "Ramura Lupișorilor (băieți cu vârste între 8 și 12 ani) folosește pedagogia junglei imaginată de Lord Baden-Powell și preluată din „Cartea Junglei” de Rudyard Kipling. Printr-o atmosferă caldă, de familie, sub îndrumarea lui Akela și a Vechilor Lupi, copilul învață ascultarea bucuroasă, jocul corect, viața în aer liber și spiritul de întrajutorare creștin."
  },
  {
    q: "Cât de des au loc activitățile și ce implică?",
    a: "În mod obișnuit avem 2-3 reuniuni sâmbăta pe lună (la sediul parohial sau în parcuri, 3 ore), o ieșire de o zi la pădure pe lună, o ieșire cu cortul sau la cabană pe trimestru și Marea Tabără de Vară (6-7 zile în iulie)."
  },
  {
    q: "Cum este asigurată siguranța copiilor în drumeții?",
    a: "Fiecare activitate este condusă de lideri instruiți în cadrul taberelor naționale de formare (Cursurile Macolin/Gilwell FSE), cu asistenți calificați în prim-ajutor. Păstrăm un raport de cel puțin un lider adult la fiecare 5-6 lupișori."
  },
  {
    q: "Ce facem dacă copilul nu are încă echipamentul complet?",
    a: "În primele 2-3 luni de probă („Rătăcitor”), lupișorul vine în haine comode sport/outdoor. Uniforma și eșarfa se achiziționează treptat înainte de Marea Promisiune a Lupișorului."
  }
];
