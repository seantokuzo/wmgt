export type CourseList =
  | 'Tourist Trap'
  | 'Cherry Blossom'
  | 'Seagull Stacks'
  | 'Arizona Modern'
  | 'Original Gothic'
  | 'Tethys Station'
  | "Bogey's Bonanza"
  | 'Quixote Valley'
  | 'Sweetopia'
  | 'Gardens of Babylon'
  | 'Shangri-La'
  | 'El Dorado'
  | 'Labyrinth'
  | '20K Leagues'
  | 'Myst'

export type CourseAlias =
  | 'TTE'
  | 'TTH'
  | 'CBE'
  | 'CBH'
  | 'SSE'
  | 'SSH'
  | 'AME'
  | 'AMH'
  | 'OGE'
  | 'OGH'
  | 'TSE'
  | 'TSH'
  | 'BBE'
  | 'BBH'
  | 'QVE'
  | 'QVH'
  | 'SWE'
  | 'SWH'
  | 'GBE'
  | 'GBH'
  | 'SLE'
  | 'SLH'
  | 'EDE'
  | 'EDH'
  | 'LBE'
  | 'LBH'
  | '20E'
  | '20H'
  | 'MYE'
  | 'MYH'

export enum CourseMoji {
  TouristTrap = '🌴',
  CherryBlossom = '🌸',
  SeagullStacks = '🪨',
  ArizonaModern = '🌵',
  OriginalGothic = '🪦',
  TethysStation = '🛰',
  BogeysBonanza = '🤠',
  QuixoteValley = '💨',
  Sweetopia = '🍭',
  GardensofBabylon = '🌱',
  ShangriLa = '🏮',
  ElDorado = '🐊',
  Labyrinth = '🦉',
  TwentyK = '🐙',
  Myst = '📚'
}

export interface CourseInterface {
  course: CourseList
  difficulty: 'Easy' | 'Hard'
  alias: CourseAlias
  courseMoji: CourseMoji
  par: number
  parByHole: number[]
}

export const courseData: CourseInterface[] = [
  {
    course: 'Tourist Trap',
    difficulty: 'Easy',
    alias: 'TTE',
    courseMoji: CourseMoji.TouristTrap,
    par: 57,
    parByHole: [2, 2, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 4, 3, 3, 3, 6]
  },
  {
    course: 'Tourist Trap',
    difficulty: 'Hard',
    alias: 'TTH',
    courseMoji: CourseMoji.TouristTrap,
    par: 61,
    parByHole: [2, 3, 3, 3, 3, 4, 3, 3, 4, 3, 3, 3, 4, 4, 4, 3, 3, 6]
  },
  {
    course: 'Cherry Blossom',
    difficulty: 'Easy',
    alias: 'CBE',
    courseMoji: CourseMoji.CherryBlossom,
    par: 63,
    parByHole: [3, 4, 3, 4, 3, 3, 3, 4, 3, 5, 3, 4, 2, 3, 3, 3, 3, 7]
  },
  {
    course: 'Cherry Blossom',
    difficulty: 'Hard',
    alias: 'CBH',
    courseMoji: CourseMoji.CherryBlossom,
    par: 67,
    parByHole: [3, 4, 3, 4, 3, 3, 3, 4, 3, 8, 3, 3, 2, 4, 3, 4, 4, 6]
  },
  {
    course: 'Seagull Stacks',
    difficulty: 'Easy',
    alias: 'SSE',
    courseMoji: CourseMoji.SeagullStacks,
    par: 62,
    parByHole: [2, 3, 3, 4, 2, 5, 4, 3, 3, 4, 3, 3, 4, 3, 5, 3, 3, 5]
  },
  {
    course: 'Seagull Stacks',
    difficulty: 'Hard',
    alias: 'SSH',
    courseMoji: CourseMoji.SeagullStacks,
    par: 67,
    parByHole: [2, 3, 4, 3, 4, 5, 4, 3, 4, 4, 3, 3, 5, 3, 5, 4, 3, 5]
  },
  {
    course: 'Arizona Modern',
    difficulty: 'Easy',
    alias: 'AME',
    courseMoji: CourseMoji.ArizonaModern,
    par: 66,
    parByHole: [3, 3, 4, 4, 4, 3, 3, 5, 4, 4, 4, 5, 4, 3, 3, 3, 3, 4]
  },
  {
    course: 'Arizona Modern',
    difficulty: 'Hard',
    alias: 'AMH',
    courseMoji: CourseMoji.ArizonaModern,
    par: 65,
    parByHole: [3, 3, 4, 4, 3, 3, 3, 5, 4, 4, 4, 5, 4, 3, 3, 3, 3, 4]
  },
  {
    course: 'Original Gothic',
    difficulty: 'Easy',
    alias: 'OGE',
    courseMoji: CourseMoji.OriginalGothic,
    par: 54,
    parByHole: [2, 3, 3, 3, 2, 3, 3, 3, 2, 3, 4, 3, 3, 3, 3, 4, 4, 3]
  },
  {
    course: 'Original Gothic',
    difficulty: 'Hard',
    alias: 'OGH',
    courseMoji: CourseMoji.OriginalGothic,
    par: 64,
    parByHole: [2, 3, 3, 4, 3, 3, 3, 4, 4, 4, 5, 4, 3, 3, 3, 4, 5, 4]
  },
  {
    course: 'Tethys Station',
    difficulty: 'Easy',
    alias: 'TSE',
    courseMoji: CourseMoji.TethysStation,
    par: 63,
    parByHole: [2, 3, 3, 4, 3, 3, 4, 5, 3, 3, 3, 4, 3, 4, 3, 4, 5, 4]
  },
  {
    course: 'Tethys Station',
    difficulty: 'Hard',
    alias: 'TSH',
    courseMoji: CourseMoji.TethysStation,
    par: 64,
    parByHole: [3, 3, 4, 3, 4, 3, 4, 5, 3, 3, 3, 3, 3, 3, 4, 4, 5, 4]
  },
  {
    course: "Bogey's Bonanza",
    difficulty: 'Easy',
    alias: 'BBE',
    courseMoji: CourseMoji.BogeysBonanza,
    par: 60,
    parByHole: [2, 3, 4, 3, 4, 4, 3, 4, 4, 3, 2, 4, 4, 3, 4, 3, 3, 3]
  },
  {
    course: "Bogey's Bonanza",
    difficulty: 'Hard',
    alias: 'BBH',
    courseMoji: CourseMoji.BogeysBonanza,
    par: 67,
    parByHole: [3, 3, 5, 4, 4, 3, 3, 4, 4, 3, 2, 5, 4, 3, 5, 3, 3, 6]
  },
  {
    course: 'Quixote Valley',
    difficulty: 'Easy',
    alias: 'QVE',
    courseMoji: CourseMoji.QuixoteValley,
    par: 54,
    parByHole: [2, 2, 3, 4, 3, 3, 3, 3, 3, 3, 2, 3, 3, 4, 3, 3, 3, 4]
  },
  {
    course: 'Quixote Valley',
    difficulty: 'Hard',
    alias: 'QVH',
    courseMoji: CourseMoji.QuixoteValley,
    par: 60,
    parByHole: [3, 3, 3, 5, 4, 3, 3, 3, 3, 3, 3, 3, 4, 4, 3, 3, 3, 4]
  },
  {
    course: 'Sweetopia',
    difficulty: 'Easy',
    alias: 'SWE',
    courseMoji: CourseMoji.Sweetopia,
    par: 55,
    parByHole: [2, 3, 4, 3, 3, 2, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 2, 4]
  },
  {
    course: 'Sweetopia',
    difficulty: 'Hard',
    alias: 'SWH',
    courseMoji: CourseMoji.Sweetopia,
    par: 59,
    parByHole: [3, 3, 4, 3, 3, 3, 4, 4, 3, 3, 3, 3, 3, 2, 4, 4, 3, 4]
  },
  {
    course: 'Gardens of Babylon',
    difficulty: 'Easy',
    alias: 'GBE',
    courseMoji: CourseMoji.GardensofBabylon,
    par: 61,
    parByHole: [2, 3, 3, 4, 3, 5, 2, 3, 6, 3, 4, 4, 3, 4, 3, 3, 3, 3]
  },
  {
    course: 'Gardens of Babylon',
    difficulty: 'Hard',
    alias: 'GBH',
    courseMoji: CourseMoji.GardensofBabylon,
    par: 64,
    parByHole: [3, 3, 4, 3, 4, 6, 3, 3, 3, 4, 4, 4, 3, 3, 3, 3, 4, 4]
  },
  {
    course: 'Shangri-La',
    difficulty: 'Easy',
    alias: 'SLE',
    courseMoji: CourseMoji.ShangriLa,
    par: 64,
    parByHole: [2, 3, 3, 4, 4, 3, 4, 3, 3, 4, 3, 5, 3, 5, 4, 3, 3, 5]
  },
  {
    course: 'Shangri-La',
    difficulty: 'Hard',
    alias: 'SLH',
    courseMoji: CourseMoji.ShangriLa,
    par: 68,
    parByHole: [4, 4, 2, 3, 4, 4, 4, 3, 4, 4, 3, 3, 3, 5, 5, 3, 4, 6]
  },
  {
    course: 'El Dorado',
    difficulty: 'Easy',
    alias: 'EDE',
    courseMoji: CourseMoji.ElDorado,
    par: 62,
    parByHole: [3, 3, 3, 3, 4, 3, 3, 3, 5, 3, 5, 4, 3, 3, 3, 3, 3, 5]
  },
  {
    course: 'El Dorado',
    difficulty: 'Hard',
    alias: 'EDH',
    courseMoji: CourseMoji.ElDorado,
    par: 61,
    parByHole: [3, 3, 3, 3, 4, 4, 3, 3, 5, 3, 4, 3, 3, 3, 3, 3, 3, 5]
  },
  {
    course: 'Labyrinth',
    difficulty: 'Easy',
    alias: 'LBE',
    courseMoji: CourseMoji.Labyrinth,
    par: 64,
    parByHole: [3, 3, 4, 5, 3, 3, 3, 4, 4, 3, 3, 3, 3, 4, 4, 3, 3, 6]
  },
  {
    course: 'Labyrinth',
    difficulty: 'Hard',
    alias: 'LBH',
    courseMoji: CourseMoji.Labyrinth,
    par: 65,
    parByHole: [3, 3, 4, 5, 3, 3, 3, 3, 5, 3, 3, 4, 3, 5, 4, 3, 4, 4]
  },
  {
    course: '20K Leagues',
    difficulty: 'Easy',
    alias: '20E',
    courseMoji: CourseMoji.TwentyK,
    par: 59,
    parByHole: [3, 3, 3, 3, 3, 3, 4, 4, 3, 4, 3, 3, 4, 3, 4, 3, 3, 3]
  },
  {
    course: '20K Leagues',
    difficulty: 'Hard',
    alias: '20H',
    courseMoji: CourseMoji.TwentyK,
    par: 60,
    parByHole: [3, 3, 3, 3, 3, 3, 4, 4, 3, 4, 3, 3, 4, 3, 4, 3, 3, 4]
  },
  {
    course: 'Myst',
    difficulty: 'Easy',
    alias: 'MYE',
    courseMoji: CourseMoji.Myst,
    par: 61,
    parByHole: [3, 3, 3, 3, 4, 3, 4, 3, 4, 3, 3, 3, 4, 3, 4, 3, 4, 4]
  },
  {
    course: 'Myst',
    difficulty: 'Hard',
    alias: 'MYH',
    courseMoji: CourseMoji.Myst,
    par: 63,
    parByHole: [3, 3, 3, 3, 3, 3, 5, 3, 4, 3, 3, 4, 4, 3, 4, 3, 4, 5]
  }
]

export const courseHoleImgLink =
  'https://wmgt-stats.s3.us-west-1.amazonaws.com/course-assets/<COURSE>/hole-img/<COURSE>_H<HOLE>.JPG'

export const courseFullImgLink =
  'https://wmgt-stats.s3.us-west-1.amazonaws.com/course-assets/full-course-img/<COURSE>_FULL.JPG'

export type Hole = '' | number

export const coursesWithImages: CourseAlias[] = [
  'TTE',
  'TTH',
  'CBE',
  'CBH',
  'SSE',
  'SSH',
  'AME',
  'AMH',
  'OGE',
  'OGH',
  'TSE',
  'TSH',
  'BBE',
  // 'BBH',
  'QVE',
  // 'QVH',
  'SWE',
  // 'SWH',
  'LBE',
  'LBH',
  'MYE',
  // 'MYH',
  'GBE',
  'GBH',
  'SLE',
  // 'SLH',
  'EDE',
  // 'EDH',
  '20E'
  // '20H'
]
