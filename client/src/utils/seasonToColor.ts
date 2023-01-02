const seasonColors = {
  s7: 'indigo-500',
  s6: 'emerald-500',
  s5: 'orange-400',
  s4: 'red-400',
  s3: 'sky-500',
  s2: 'purple-400',
  s1: 'stone-500'
}

export const seasonToColor = (season: number) => {
    switch (season) {
      case 7:
        return seasonColors.s7
      case 6:
        return seasonColors.s6
      case 5:
        return seasonColors.s5
      case 4:
        return seasonColors.s4
      case 3:
        return seasonColors.s3
      case 2:
        return seasonColors.s2
      case 1:
        return seasonColors.s1
      default:
        return seasonColors.s7
    }

}
