export const scoreDecoration = (score: number, outer: boolean, darkMode: boolean) => {
  if (score === 0) return ''
  const decorations = 'border-[1px]'
  if (score <= -5) {
    if (outer) return decorations + ' border-blue-400 bg-blue-400 rounded-full'
    return decorations + ' border-blue-700 bg-blue-700 rounded-full text-white'
  }
  if (score === -4) {
    return decorations + ' border-blue-400 bg-blue-400 rounded-full text-white'
  }
  if (score === -3) {
    if (outer) return decorations + ' border-red-400 bg-red-400 rounded-[50%]'
    return decorations + ` border-red-400 rounded-[50%] ${darkMode ? 'bg-black' : 'bg-white'}`
  }
  if (score === -2) {
    return decorations + ' border-red-400 rounded-[50%]'
  }
  if (score === -1) {
    if (outer) return ''
    return decorations + ' border-red-400 border-[1px] rounded-[50%]'
  }
  if (score === 1) {
    if (outer) return ''
    return decorations + ' border-lime-700'
  }
  if (score === 2) {
    return decorations + ' border-lime-700'
  }
  if (score === 3) {
    if (outer) return decorations + 'border-lime-700 bg-lime-700'
    return decorations + ` border-lime-700 ${darkMode ? 'bg-black' : 'bg-white'}`
  }
  if (score >= 4) {
    if (!outer) return 'text-white'
    return decorations + 'border-lime-700 bg-lime-700'
  }
}
