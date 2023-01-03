const seasonColors = {
  s7: 'indigo-500',
  s6: 'emerald-500',
  s5: 'orange-400',
  s4: 'red-400',
  s3: 'sky-500',
  s2: 'purple-400',
  s1: 'stone-500'
}

export const seasonToColor = (
  season: number,
  type: 'bg' | 'border' | 'text',
  transparency: string
) => {
  if (type === 'bg') {
    switch (season) {
      case 7:
        return `${type}-${seasonColors.s7}/[${transparency}]`
      case 6:
        return `${type}-${seasonColors.s6}/[${transparency}]`
      case 5:
        return `${type}-${seasonColors.s5}/[${transparency}]`
      case 4:
        return `${type}-${seasonColors.s4}/[${transparency}]`
      case 3:
        return `${type}-${seasonColors.s3}/[${transparency}]`
      case 2:
        return `${type}-${seasonColors.s2}/[${transparency}]`
      case 1:
        return `${type}-${seasonColors.s1}/[${transparency}]`
      default:
        return `${type}-${seasonColors.s7}/[${transparency}]`
    }
  }
}
