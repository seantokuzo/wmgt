const nonCharacterRegex = /[^a-zA-Z0-9]/g

const regexPlayerName = (player) => {
  return player.replaceAll(nonCharacterRegex, "").toLowerCase()
}

export const playerNameExceptions = (name) => {
  if (regexPlayerName(name) === regexPlayerName("FugoHallerin")) return "FugoHallarin"
  if (regexPlayerName(name) === regexPlayerName("southren_jenn_76")) return "Southern_jenn_76"
  if (regexPlayerName(name) === regexPlayerName("seppemarotta")) return "seppe"
  if (regexPlayerName(name) === regexPlayerName("b0gibo")) return "bogibo"
  if (regexPlayerName(name) === regexPlayerName("Snowraver1")) return "Snow"
  if (regexPlayerName(name) === regexPlayerName("Jorge")) return "ElJorge"
  if (regexPlayerName(name) === regexPlayerName("seve15")) return "Seve"
  if (regexPlayerName(name) === regexPlayerName("GinjaNinja")) return "GingaNinja19"
  if (regexPlayerName(name) === regexPlayerName("TrickDicky")) return "TrickyDicky"
  if (regexPlayerName(name) === regexPlayerName("StevieCymru")) return "SteveSkillman"
  if (regexPlayerName(name) === regexPlayerName("Toaster87")) return "Toaster"

  return name
}
