export const scoreDecoration = (score: number, outer: boolean, darkMode: boolean) => {
  if (score === 0) return ''
  const border1px = 'border-[1px]'
  if (score <= -5) {
    if (outer) return border1px + ' fiveUnder rounded-full'
    return border1px + ' brdr-fiveUnder bg-condor rounded-full'
  }
  if (score === -4) {
    if (outer) return border1px + ' brdr-condor bg-condor rounded-full'
    return 'bg-none rounded-full'
  }
  if (score === -3) {
    if (outer) return border1px + ' brdr-underPar bg-underPar rounded-[50%]'
    return `rounded-[50%] ${darkMode ? 'bg-black' : 'bg-white'}`
  }
  if (score === -2) {
    return border1px + ' brdr-underPar rounded-[50%]'
  }
  if (score === -1) {
    if (outer) return ''
    return border1px + ' brdr-underPar rounded-[50%]'
  }
  if (score === 1) {
    if (outer) return ''
    return border1px + ' brdr-overPar'
  }
  if (score === 2) {
    return border1px + ' brdr-overPar'
  }
  if (score === 3) {
    if (outer) return border1px + 'brdr-overPar bg-overPar'
    return border1px + ` brdr-overPar ${darkMode ? 'bg-black' : 'bg-white'}`
  }
  if (score >= 4) {
    if (!outer) return 'text-white'
    return border1px + 'brdr-overPar bg-overPar'
  }
}
