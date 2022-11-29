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
  | '20,000 Leagues Under the Sea'
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

export interface CourseInterface {
  course: CourseList
  difficulty: 'Easy' | 'Hard'
  alias: CourseAlias
  par: number
  parByHole: number[]
}

export const courseData: CourseInterface[] = [
  {
    course: 'Tourist Trap',
    difficulty: 'Easy',
    alias: 'TTE',
    par: 57,
    parByHole: [2, 2, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 4, 3, 3, 3, 6]
  },
  {
    course: 'Tourist Trap',
    difficulty: 'Hard',
    alias: 'TTH',
    par: 61,
    parByHole: [2, 3, 3, 3, 3, 4, 3, 3, 4, 3, 3, 3, 4, 4, 4, 3, 3, 6]
  },
  {
    course: 'Cherry Blossom',
    difficulty: 'Easy',
    alias: 'CBE',
    par: 63,
    parByHole: [3, 4, 3, 4, 3, 3, 3, 4, 3, 5, 3, 4, 2, 3, 3, 3, 3, 7]
  },
  {
    course: 'Cherry Blossom',
    difficulty: 'Hard',
    alias: 'CBH',
    par: 67,
    parByHole: [3, 4, 3, 4, 3, 3, 3, 4, 3, 8, 3, 3, 2, 4, 3, 4, 4, 6]
  },
  {
    course: 'Seagull Stacks',
    difficulty: 'Easy',
    alias: 'SSE',
    par: 62,
    parByHole: [2, 3, 3, 4, 2, 5, 4, 3, 3, 4, 3, 3, 4, 3, 5, 3, 3, 5]
  },
  {
    course: 'Seagull Stacks',
    difficulty: 'Hard',
    alias: 'SSH',
    par: 67,
    parByHole: [2, 3, 4, 3, 4, 5, 4, 3, 4, 4, 3, 3, 5, 3, 5, 4, 3, 5]
  },
  {
    course: 'Arizona Modern',
    difficulty: 'Easy',
    alias: 'AME',
    par: 66,
    parByHole: [3, 3, 4, 4, 4, 3, 3, 5, 4, 4, 4, 5, 4, 3, 3, 3, 3, 4]
  },
  {
    course: 'Arizona Modern',
    difficulty: 'Hard',
    alias: 'AMH',
    par: 65,
    parByHole: [3, 3, 4, 4, 3, 3, 3, 5, 4, 4, 4, 5, 4, 3, 3, 3, 3, 4]
  },
  {
    course: 'Original Gothic',
    difficulty: 'Easy',
    alias: 'OGE',
    par: 54,
    parByHole: [2, 3, 3, 3, 2, 3, 3, 3, 2, 3, 4, 3, 3, 3, 3, 4, 4, 3]
  },
  {
    course: 'Original Gothic',
    difficulty: 'Hard',
    alias: 'OGH',
    par: 64,
    parByHole: [2, 3, 3, 4, 3, 3, 3, 4, 4, 4, 5, 4, 3, 3, 3, 4, 5, 4]
  },
  {
    course: 'Tethys Station',
    difficulty: 'Easy',
    alias: 'TSE',
    par: 63,
    parByHole: [2, 3, 3, 4, 3, 3, 4, 5, 3, 3, 3, 4, 3, 4, 3, 4, 5, 4]
  },
  {
    course: 'Tethys Station',
    difficulty: 'Hard',
    alias: 'TSH',
    par: 64,
    parByHole: [3, 3, 4, 3, 4, 3, 4, 5, 3, 3, 3, 3, 3, 3, 4, 4, 5, 4]
  },
  {
    course: "Bogey's Bonanza",
    difficulty: 'Easy',
    alias: 'BBE',
    par: 60,
    parByHole: [2, 3, 4, 3, 4, 4, 3, 4, 4, 3, 2, 4, 4, 3, 4, 3, 3, 3]
  },
  {
    course: "Bogey's Bonanza",
    difficulty: 'Hard',
    alias: 'BBH',
    par: 67,
    parByHole: [3, 3, 5, 4, 4, 3, 3, 4, 4, 3, 2, 5, 4, 3, 5, 3, 3, 6]
  },
  {
    course: 'Quixote Valley',
    difficulty: 'Easy',
    alias: 'QVE',
    par: 54,
    parByHole: [2, 2, 3, 4, 3, 3, 3, 3, 3, 3, 2, 3, 3, 4, 3, 3, 3, 4]
  },
  {
    course: 'Quixote Valley',
    difficulty: 'Hard',
    alias: 'QVH',
    par: 60,
    parByHole: [3, 3, 3, 5, 4, 3, 3, 3, 3, 3, 3, 3, 4, 4, 3, 3, 3, 4]
  },
  {
    course: 'Sweetopia',
    difficulty: 'Easy',
    alias: 'SWE',
    par: 55,
    parByHole: [2, 3, 4, 3, 3, 2, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 2, 4]
  },
  {
    course: 'Sweetopia',
    difficulty: 'Hard',
    alias: 'SWH',
    par: 59,
    parByHole: [3, 3, 4, 3, 3, 3, 4, 4, 3, 3, 3, 3, 3, 2, 4, 4, 3, 4]
  },
  {
    course: 'Gardens of Babylon',
    difficulty: 'Easy',
    alias: 'GBE',
    par: 61,
    parByHole: [2, 3, 3, 4, 3, 5, 2, 3, 6, 3, 4, 4, 3, 4, 3, 3, 3, 3]
  },
  {
    course: 'Gardens of Babylon',
    difficulty: 'Hard',
    alias: 'GBH',
    par: 64,
    parByHole: [3, 3, 4, 3, 4, 6, 3, 3, 3, 4, 4, 4, 3, 3, 3, 3, 4, 4]
  },
  {
    course: 'Shangri-La',
    difficulty: 'Easy',
    alias: 'SLE',
    par: 64,
    parByHole: [2, 3, 3, 4, 4, 3, 4, 3, 3, 4, 3, 5, 3, 5, 4, 3, 3, 5]
  },
  {
    course: 'Shangri-La',
    difficulty: 'Hard',
    alias: 'SLH',
    par: 68,
    parByHole: [4, 4, 2, 3, 4, 4, 4, 3, 4, 4, 3, 3, 3, 5, 5, 3, 4, 6]
  },
  {
    course: 'El Dorado',
    difficulty: 'Easy',
    alias: 'EDE',
    par: 62,
    parByHole: [3, 3, 3, 3, 4, 3, 3, 3, 5, 3, 5, 4, 3, 3, 3, 3, 3, 5]
  },
  {
    course: 'El Dorado',
    difficulty: 'Hard',
    alias: 'EDH',
    par: 61,
    parByHole: [3, 3, 3, 3, 4, 4, 3, 3, 5, 3, 4, 3, 3, 3, 3, 3, 3, 5]
  },
  {
    course: 'Labyrinth',
    difficulty: 'Easy',
    alias: 'LBE',
    par: 64,
    parByHole: [3, 3, 4, 5, 3, 3, 3, 4, 4, 3, 3, 3, 3, 4, 4, 3, 3, 6]
  },
  {
    course: 'Labyrinth',
    difficulty: 'Hard',
    alias: 'LBH',
    par: 65,
    parByHole: [3, 3, 4, 5, 3, 3, 3, 3, 5, 3, 3, 4, 3, 5, 4, 3, 4, 4]
  },
  {
    course: '20,000 Leagues Under the Sea',
    difficulty: 'Easy',
    alias: '20E',
    par: 59,
    parByHole: [3, 3, 3, 3, 3, 3, 4, 4, 3, 4, 3, 3, 4, 3, 4, 3, 3, 3]
  },
  {
    course: '20,000 Leagues Under the Sea',
    difficulty: 'Hard',
    alias: '20H',
    par: 60,
    parByHole: [3, 3, 3, 3, 3, 3, 4, 4, 3, 4, 3, 3, 4, 3, 4, 3, 3, 4]
  },
  {
    course: 'Myst',
    difficulty: 'Easy',
    alias: 'MYE',
    par: 61,
    parByHole: [3, 3, 3, 3, 4, 3, 4, 3, 4, 3, 3, 3, 4, 3, 4, 3, 4, 4]
  },
  {
    course: 'Myst',
    difficulty: 'Hard',
    alias: 'MYH',
    par: 63,
    parByHole: [3, 3, 3, 3, 3, 3, 5, 3, 4, 3, 3, 4, 4, 3, 4, 3, 4, 5]
  }
]
