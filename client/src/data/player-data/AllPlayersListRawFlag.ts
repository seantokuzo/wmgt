import { allPlayersList } from './AllPlayersList'
import { season6PlayerList } from './season6FinalPlayerList'
import { season7PlayerList } from './season7PlayerList'

const nonCharacterRegex = /[^a-zA-Z0-9]/g

export const getComboList = () => {
  // console.log(season6PlayerList.length)
  // console.log(season7PlayerList.length)

  const comboList = [...season6PlayerList]
  const renamedPlayers: { season6name: string; season7name: string }[] = []
  season7PlayerList.map((player) => {
    // IF PLAYER EXISTS ON SEASON 6 LIST -> REPLACE WITH SEASON 7 PLAYER OBJ
    if (season6PlayerList.some((p) => p.player === player.player)) {
      const index = comboList.findIndex((p) => p.player === player.player)
      comboList.splice(index, 1, player)
      return ''
    }
    // IF PLAYER CHANGED NAME PUNCTUATION/CAPITALIZATION -> USE SEASON 7 VERSION
    if (
      season6PlayerList.some(
        (p) =>
          p.player.replaceAll(nonCharacterRegex, '').toLowerCase() ===
          player.player.replaceAll(nonCharacterRegex, '').toLowerCase()
      )
    ) {
      const index = comboList.findIndex(
        (p) =>
          p.player.replaceAll(nonCharacterRegex, '').toLowerCase() ===
          player.player.replaceAll(nonCharacterRegex, '').toLowerCase()
      )
      comboList.splice(index, 1, player)
      renamedPlayers.push({
        season6name: season6PlayerList.filter(
          (p) =>
            p.player.replaceAll(nonCharacterRegex, '').toLowerCase() ===
            player.player.replaceAll(nonCharacterRegex, '').toLowerCase()
        )[0].player,
        season7name: player.player
      })
      return ''
    }
    // IF PLAYER ISN'T ON SEASON 6 LIST - PUSH TO NEW LIST
    if (!season6PlayerList.some((p) => p.player === player.player)) {
      comboList.push(player)
      return ''
    }
  })

  const comboListFlags = comboList.map((player) => {
    return {
      player: player.player,
      flag: flagConverter.filter((f) => f.link === player.flag)[0]
        ? flagConverter.filter((f) => f.link === player.flag)[0].flag
        : ''
    }
  })
  const addedPlayers = comboListFlags.filter((p) => {
    return allPlayersList.findIndex((player) => player.player === p.player) < 0
  })

  console.log('Added Players:', addedPlayers)
  console.log('Renamed Players: ', renamedPlayers)
  console.log('Combo List: ', comboListFlags)
}

interface PlayerInterface {
  player: string
  flag: string
}

export const allPlayersListRawFlag: PlayerInterface[] = [
  {
    player: 'INDY',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'his.Dudeness',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'Midaswell',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Bear313',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOPMrHRCu6x7hsphL2jGYDcQQUzZCgdReCurV3BC7uJ-zrf8fijBMpdnLeHzI1kWPJSTrtG5-xQb1EF9NFdrB7RlMg=s26-w26-h20'
  },
  {
    player: 'Zanetti',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNdNT0DdHmaY1TP14-eD4ESBDVjV7DHHjY-tKFEGX1luLFVZoYaAwTLs4T5Gkg3nMq_mQMRyKWKJdPk3x3rfFenvo8=s26-w26-h20'
  },
  {
    player: 'ElJorge',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBO8XRH8h9VzGc3mYcUACgwNTPWhcP77W7153V_qDsvAspeitY9oxzpI4_O1P2FgdgZPfLDx0wAjxjN5fyWgCsB2Rjo=s26-w26-h20'
  },
  {
    player: 'CleverFellow',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'Burn1',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'Calassy',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'GreatGoose',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBP8bNd9zo9J_jGox6eyJF39VWs_bRPhr-IMZROM9ZMhL0zQiT1ZlJ1_CVVgdRtgBKWFxUbXDbl-IkumGwMmtTAELKE=s26-w26-h20'
  },
  {
    player: 'Mau',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPFNowk1LsbJNY2HG3ZsgIvxt70vubyqnKK7nvdoNZ1BCr736qz8-aFrNd53-uRm8n8AJfUCN9GzZMYab_ILVaXA5U=s26-w26-h20'
  },
  {
    player: 'GUS',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPFNowk1LsbJNY2HG3ZsgIvxt70vubyqnKK7nvdoNZ1BCr736qz8-aFrNd53-uRm8n8AJfUCN9GzZMYab_ILVaXA5U=s26-w26-h20'
  },
  {
    player: 'Matt916',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'YUK1N',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOTBLxWSoc5gZQDqsQTNdjubDaNwZQf8I4-r7O3yM7tV-ZDGLePZXdKUvhydkeN5fWJ3v07gDOePu9diJD9naoBp4E=s26-w26-h20'
  },
  {
    player: 'FIRE_321',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPcONDBF10QQcliup2XZnW3tuDfE30qills8OdhvG_SJDhD_UpSiWHrnGNqqlIf40hJpcwunGXMwVlG-Wi-2sj49h8=s26-w26-h20'
  },
  {
    player: 'B8Y',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'rolyt',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'Stewie',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNTw6EpKwphOIP2KC6IuAh6TtkLc8PHcXYgTZEB-uW0KqfT2qYcSA7JRSi35R1UrxDoOVjgt5-vkgVJ3Thn7AF7FGI=s26-w26-h20'
  },
  {
    player: 'Captain_Sr',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBND4pGXnEiAi1v_FZPYlSZUpHmghJwSs7eEIYI-QUXMxoDfq2U9ZMwssX1SsYpmeHELRAts_YowXnU5G25cOKKPt1M=s26-w26-h20'
  },
  {
    player: 'ForRealForReal',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'Blutes87',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'DiscflingerADK',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'SD_Diver',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'TrippinBill',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'Browner',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'KCRob',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'Squeezy_JibbZ',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMp87IHHuYmhBs2WC86hKuPr8j4CkFpXqQvmNw4B7TKVT1msV1gxeRPygXC9p_qINuZ3PUgnY86CaWb4QXBIIK5cA=s26-w26-h20'
  },
  {
    player: 'Toaster',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'StrokeLimitReached',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'Dude_Lebowski',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'Sackdeqb',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'Squidy19',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'ARMY_OF_ONE',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'McLovin',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'DERBY_DAZ',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNTw6EpKwphOIP2KC6IuAh6TtkLc8PHcXYgTZEB-uW0KqfT2qYcSA7JRSi35R1UrxDoOVjgt5-vkgVJ3Thn7AF7FGI=s26-w26-h20'
  },
  {
    player: 'Emill',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOQoYgf1milXF5rG8yuoQIgtilOIFXnKq2aCHYxXSp43XMH-2LRQOmpNZcCPa1sH36dsNs_BnCqCrYl5K95m-7QPiA=s26-w26-h20'
  },
  {
    player: 'TrickyDicky',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBM0pWKL-O5NWeJr2HbEofbzFnFV2yI4g4jojAuNt-bx6-jQSzDWPsCgeWbQM8ysBaGG-2IMlJaZwVfyNkWiStSMB0I=s26-w26-h20'
  },
  {
    player: 'G0nz0nater',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'HBKid',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'JacksonHoleInOne',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'D3bb13',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'FainNeinGudTwain',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNxaUxhnZY38GTe6t5nVy82Ydv1bvWxX9A61UQVwMcDUETDsXMJ74yYBnyI3TbcrdqSiPkFhV9gmUSgpGtW9WsrF5k=s26-w26-h20'
  },
  {
    player: 'ichibuho',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'Jed',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'rainedrop184',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: '4Whlr',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'Old-T',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNdNT0DdHmaY1TP14-eD4ESBDVjV7DHHjY-tKFEGX1luLFVZoYaAwTLs4T5Gkg3nMq_mQMRyKWKJdPk3x3rfFenvo8=s26-w26-h20'
  },
  {
    player: 'deebee64',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOTBLxWSoc5gZQDqsQTNdjubDaNwZQf8I4-r7O3yM7tV-ZDGLePZXdKUvhydkeN5fWJ3v07gDOePu9diJD9naoBp4E=s26-w26-h20'
  },
  {
    player: 'TIGERHOODS',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'Anuebus',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'Autodidactic',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'Bankerpops',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'Bartimaeus',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'BaruMonkey',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'Fatfat42',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Joaquinypunto',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPFNowk1LsbJNY2HG3ZsgIvxt70vubyqnKK7nvdoNZ1BCr736qz8-aFrNd53-uRm8n8AJfUCN9GzZMYab_ILVaXA5U=s26-w26-h20'
  },
  {
    player: 'Sarahloo1971',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'Caramel',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNTw6EpKwphOIP2KC6IuAh6TtkLc8PHcXYgTZEB-uW0KqfT2qYcSA7JRSi35R1UrxDoOVjgt5-vkgVJ3Thn7AF7FGI=s26-w26-h20'
  },
  {
    player: 'Mike190',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'AmberWave',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'Peach',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'Mulligan',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'Nick',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'steven_T',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'Jennem',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'Monsoon',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'Froman',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'chileC.O.W.',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'bogibo',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMsvFUomPZl1HsUy50DHbVTnALekm0WuISLRjxp957ZlPP0QD7FYN2pm01gJsXD8wcP18FAODatuof941adFuvEvwU=s26-w26-h20'
  },
  {
    player: 'ET154',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'Nitroustorm',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'tmoes',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBO9XUo3wGEhxlSHPVA1dtdkq9S9Re4P8Wg3m7cJNHGv2-ehhga-UjuuqWX9dSsrDjPviAlZsvbYfRYw2HCb1DFsKPU=s26-w26-h20'
  },
  {
    player: 'Halfpint',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNTw6EpKwphOIP2KC6IuAh6TtkLc8PHcXYgTZEB-uW0KqfT2qYcSA7JRSi35R1UrxDoOVjgt5-vkgVJ3Thn7AF7FGI=s26-w26-h20'
  },
  {
    player: 'rockthecraft',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNi60J-kQuRQ6KqfO5eM2y-MoVmg9eiBbC9YBrHl1CYGXpB6Zv9hv93Vb5r4Q-7R5CAv_O9VT7qnlAVwW_-0VhuzSk=s26-w26-h20'
  },
  {
    player: 'NuttyGrandpa',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'Brit The Elder',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBM0pWKL-O5NWeJr2HbEofbzFnFV2yI4g4jojAuNt-bx6-jQSzDWPsCgeWbQM8ysBaGG-2IMlJaZwVfyNkWiStSMB0I=s26-w26-h20'
  },
  {
    player: 'Rich8523',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'WickedShack',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOn4KCsfhbIgOnbGOJSuvpRE9mImxf0t-lQE5dvrx91gvREiAf04Z6HwlWIjZOJ-Uao_VTtzbt3ac39hcRXeSo--Q=s26-w26-h20'
  },
  {
    player: 'GREZZA',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNTw6EpKwphOIP2KC6IuAh6TtkLc8PHcXYgTZEB-uW0KqfT2qYcSA7JRSi35R1UrxDoOVjgt5-vkgVJ3Thn7AF7FGI=s26-w26-h20'
  },
  {
    player: 'AndyP1970',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'strype9',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'the_dak',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNTw6EpKwphOIP2KC6IuAh6TtkLc8PHcXYgTZEB-uW0KqfT2qYcSA7JRSi35R1UrxDoOVjgt5-vkgVJ3Thn7AF7FGI=s26-w26-h20'
  },
  {
    player: 'StevieCymru',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMJCFay2O1CYQTs6R7z_BqvKTChSvDYHXzLvwoXiIYh4Kxfh3HTvzmonDmTO43Yax-AEkf7ye8HDdGw3IoW5NvNnDI=s26-w26-h20'
  },
  {
    player: 'Captain_Shook',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'cmdrsven',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPxxQp9yZr11alfwlhWSv-oB2DRIhCsMYb4dCTldoPrBA181oyCXM6FN6ns2ejItOKX4mJx0-TfZASnazvtyRXvOkE=s26-w26-h20'
  },
  {
    player: 'GarfeyUK',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNuxBjH7ajzRkd-Qg9uV6uVSE-t3PNVIpJ-TFaFlco42wGEAyACllfjFJcqw-OYIE1k0yh8zeWdoRlgDqGxa-qPHHg=s26-w26-h20'
  },
  {
    player: 'Gopats37',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Snow',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPcONDBF10QQcliup2XZnW3tuDfE30qills8OdhvG_SJDhD_UpSiWHrnGNqqlIf40hJpcwunGXMwVlG-Wi-2sj49h8=s26-w26-h20'
  },
  {
    player: 'willsy13',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'joshbenesh',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'Yoda',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNTw6EpKwphOIP2KC6IuAh6TtkLc8PHcXYgTZEB-uW0KqfT2qYcSA7JRSi35R1UrxDoOVjgt5-vkgVJ3Thn7AF7FGI=s26-w26-h20'
  },
  {
    player: 'Julian1830',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Aaron5701',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'HarrisonJamesG',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNuxBjH7ajzRkd-Qg9uV6uVSE-t3PNVIpJ-TFaFlco42wGEAyACllfjFJcqw-OYIE1k0yh8zeWdoRlgDqGxa-qPHHg=s26-w26-h20'
  },
  {
    player: 'Sid470',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'The Master',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'Lifeisgood',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'Arizona Flasher',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Jack',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOnUdGoZERgbzKCZhIZTz9TS7uhIvy9mF0qPJGYtQqUTJRzQojOYCTn0YZ_NWcqaOy7d2H7UVmBwb4sNUflxmnuygQ=s26-w26-h20'
  },
  {
    player: 'Lake180',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPcONDBF10QQcliup2XZnW3tuDfE30qills8OdhvG_SJDhD_UpSiWHrnGNqqlIf40hJpcwunGXMwVlG-Wi-2sj49h8=s26-w26-h20'
  },
  {
    player: 'Krys',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'TresWolfe',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBN7ohCe-BpjCD3ScabuhwqOToItMleZChl7mPJ3nBq7SQVVTd04AWNgWcoGxfXf-2-OIB8nhLXilmW09VZZQYnlH4I=s26-w26-h20'
  },
  {
    player: 'Indianchief',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'Beldemar',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBM0pWKL-O5NWeJr2HbEofbzFnFV2yI4g4jojAuNt-bx6-jQSzDWPsCgeWbQM8ysBaGG-2IMlJaZwVfyNkWiStSMB0I=s26-w26-h20'
  },
  {
    player: 'Fathom71',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Awkward3Sauce',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'miketunes',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Southern_jenn_76',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'theYell',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPSXcOANPH0KSEs0x3t9-sdNo54g6ELzGp47QFRiaKkn7s2c6w6ecod71lnIpZR-8_xmPBfVj4FcxGivxF6oW0R0Kw=s26-w26-h20'
  },
  {
    player: 'Wild"it\'s gone left"',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNuxBjH7ajzRkd-Qg9uV6uVSE-t3PNVIpJ-TFaFlco42wGEAyACllfjFJcqw-OYIE1k0yh8zeWdoRlgDqGxa-qPHHg=s26-w26-h20'
  },
  {
    player: 'Ludachris',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNi60J-kQuRQ6KqfO5eM2y-MoVmg9eiBbC9YBrHl1CYGXpB6Zv9hv93Vb5r4Q-7R5CAv_O9VT7qnlAVwW_-0VhuzSk=s26-w26-h20'
  },
  {
    player: 'Otvormeister',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOAddKcgoEhTarEt2AaI7CkxzrjOrHwyc1YaCqSQgtSGj5dAl98RWAMZLtRP-9d-5-8f02uxm_kK3L8DDL6KQUccYQ=s26-w26-h20'
  },
  {
    player: 'skorpzz',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'HeftyLefty',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'wtob',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'BlastForce',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Cliffhanger',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Crudzilla',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBM0iMZBx_z5Zf99L3xGcBwwV-OP2WrCQFRGVwWDAN3FJr-YRhadO5dwevUEnfbNUREOcuB3GNPTtfy3wa7ZRWgZpA=s26-w26-h20'
  },
  {
    player: 'Mickdundee',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNi60J-kQuRQ6KqfO5eM2y-MoVmg9eiBbC9YBrHl1CYGXpB6Zv9hv93Vb5r4Q-7R5CAv_O9VT7qnlAVwW_-0VhuzSk=s26-w26-h20'
  },
  {
    player: 'QuestPete',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBN7ohCe-BpjCD3ScabuhwqOToItMleZChl7mPJ3nBq7SQVVTd04AWNgWcoGxfXf-2-OIB8nhLXilmW09VZZQYnlH4I=s26-w26-h20'
  },
  {
    player: 'CalebD-77',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBM0pWKL-O5NWeJr2HbEofbzFnFV2yI4g4jojAuNt-bx6-jQSzDWPsCgeWbQM8ysBaGG-2IMlJaZwVfyNkWiStSMB0I=s26-w26-h20'
  },
  {
    player: 'CoryDoesShots',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'Shea_No_More',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Domey',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'GingaNinja19',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBN7ohCe-BpjCD3ScabuhwqOToItMleZChl7mPJ3nBq7SQVVTd04AWNgWcoGxfXf-2-OIB8nhLXilmW09VZZQYnlH4I=s26-w26-h20'
  },
  {
    player: 'Antdawg670',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Black_Atom',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'Bob',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Burntthumbs',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'ChristieS727',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'midoriya',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'VR_Rocket007',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPSXcOANPH0KSEs0x3t9-sdNo54g6ELzGp47QFRiaKkn7s2c6w6ecod71lnIpZR-8_xmPBfVj4FcxGivxF6oW0R0Kw=s26-w26-h20'
  },
  {
    player: 'Auzzie_Soldier',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNi60J-kQuRQ6KqfO5eM2y-MoVmg9eiBbC9YBrHl1CYGXpB6Zv9hv93Vb5r4Q-7R5CAv_O9VT7qnlAVwW_-0VhuzSk=s26-w26-h20'
  },
  {
    player: 'Brian411',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'CSUKOVICH727',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Iron Oxide',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'JJ-1',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Mammothrept',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNi60J-kQuRQ6KqfO5eM2y-MoVmg9eiBbC9YBrHl1CYGXpB6Zv9hv93Vb5r4Q-7R5CAv_O9VT7qnlAVwW_-0VhuzSk=s26-w26-h20'
  },
  {
    player: 'Nacho Vega',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'SinfulbeingGC',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Tabbyland',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBN7ohCe-BpjCD3ScabuhwqOToItMleZChl7mPJ3nBq7SQVVTd04AWNgWcoGxfXf-2-OIB8nhLXilmW09VZZQYnlH4I=s26-w26-h20'
  },
  {
    player: 'VenomShadow32',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Warri0rLink',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'RyRy2k22',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBM0pWKL-O5NWeJr2HbEofbzFnFV2yI4g4jojAuNt-bx6-jQSzDWPsCgeWbQM8ysBaGG-2IMlJaZwVfyNkWiStSMB0I=s26-w26-h20'
  },
  {
    player: 'BamaSpoo',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'Dadndan',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNTw6EpKwphOIP2KC6IuAh6TtkLc8PHcXYgTZEB-uW0KqfT2qYcSA7JRSi35R1UrxDoOVjgt5-vkgVJ3Thn7AF7FGI=s26-w26-h20'
  },
  {
    player: 'Duckk',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'Frothin',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'Missi',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'UroPa',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'Chipdancer',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPSXcOANPH0KSEs0x3t9-sdNo54g6ELzGp47QFRiaKkn7s2c6w6ecod71lnIpZR-8_xmPBfVj4FcxGivxF6oW0R0Kw=s26-w26-h20'
  },
  {
    player: 'Century204',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPcONDBF10QQcliup2XZnW3tuDfE30qills8OdhvG_SJDhD_UpSiWHrnGNqqlIf40hJpcwunGXMwVlG-Wi-2sj49h8=s26-w26-h20'
  },
  {
    player: 'noblesquashy',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'hard2imagine81',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'PETER591',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNTw6EpKwphOIP2KC6IuAh6TtkLc8PHcXYgTZEB-uW0KqfT2qYcSA7JRSi35R1UrxDoOVjgt5-vkgVJ3Thn7AF7FGI=s26-w26-h20'
  },
  {
    player: 'SerenityMoon',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'Tiger_Weeds',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'Lynniebodd',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBM0pWKL-O5NWeJr2HbEofbzFnFV2yI4g4jojAuNt-bx6-jQSzDWPsCgeWbQM8ysBaGG-2IMlJaZwVfyNkWiStSMB0I=s26-w26-h20'
  },
  {
    player: 'Oculus_Prime',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'Painkeeng',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'SteveSkillman',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNTCGnazMxhHnC4JdUGt441s0phCE_SNzfdkcvbOiIxiMdAdcGVAapnqwQqcdG4sFyNU1sTbJ030ufBH52npCdhy4Q=s26-w26-h20'
  },
  {
    player: 'RainbowSavage22',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPSXcOANPH0KSEs0x3t9-sdNo54g6ELzGp47QFRiaKkn7s2c6w6ecod71lnIpZR-8_xmPBfVj4FcxGivxF6oW0R0Kw=s26-w26-h20'
  },
  {
    player: 'Molevortex',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNTCGnazMxhHnC4JdUGt441s0phCE_SNzfdkcvbOiIxiMdAdcGVAapnqwQqcdG4sFyNU1sTbJ030ufBH52npCdhy4Q=s26-w26-h20'
  },
  {
    player: 'PotatoSwinger',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPSXcOANPH0KSEs0x3t9-sdNo54g6ELzGp47QFRiaKkn7s2c6w6ecod71lnIpZR-8_xmPBfVj4FcxGivxF6oW0R0Kw=s26-w26-h20'
  },
  {
    player: 'RadiumF',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'Brad.',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBM0pWKL-O5NWeJr2HbEofbzFnFV2yI4g4jojAuNt-bx6-jQSzDWPsCgeWbQM8ysBaGG-2IMlJaZwVfyNkWiStSMB0I=s26-w26-h20'
  },
  {
    player: 'Dandnt65',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBM0pWKL-O5NWeJr2HbEofbzFnFV2yI4g4jojAuNt-bx6-jQSzDWPsCgeWbQM8ysBaGG-2IMlJaZwVfyNkWiStSMB0I=s26-w26-h20'
  },
  {
    player: 'MrTee',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'regislb87',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBN_p0kkh6bvgeNJ5p5ZS424RdSyDmQnOc2j27YdN8NZ9VW3AaRdC6SOcGCPTPoxKAnumAE5qdVfeipH8zgpeew_tg=s26-w26-h20'
  },
  {
    player: 'Hobbo',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20'
  },
  {
    player: 'FugoHallarin#7863',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMMMSzGI4_LjdC9UeUAeDKOmy5xRXK8ULR653v8BHFB-pXB_WSTQysWeMlWDzaaFaSxCkT3Qoz8Tk5SUtz0SB2FYQ=s100-w100-h20'
  },
  {
    player: 'NERD_HULK_HOGAN',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMMMSzGI4_LjdC9UeUAeDKOmy5xRXK8ULR653v8BHFB-pXB_WSTQysWeMlWDzaaFaSxCkT3Qoz8Tk5SUtz0SB2FYQ=s100-w100-h20'
  },
  {
    player: 'akamiked#7904',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMMMSzGI4_LjdC9UeUAeDKOmy5xRXK8ULR653v8BHFB-pXB_WSTQysWeMlWDzaaFaSxCkT3Qoz8Tk5SUtz0SB2FYQ=s100-w100-h20'
  },
  {
    player: 'crowsteve',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMMMSzGI4_LjdC9UeUAeDKOmy5xRXK8ULR653v8BHFB-pXB_WSTQysWeMlWDzaaFaSxCkT3Qoz8Tk5SUtz0SB2FYQ=s100-w100-h20'
  },
  {
    player: 'Ptarmigan61',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMMMSzGI4_LjdC9UeUAeDKOmy5xRXK8ULR653v8BHFB-pXB_WSTQysWeMlWDzaaFaSxCkT3Qoz8Tk5SUtz0SB2FYQ=s100-w100-h20'
  },
  {
    player: 'CHI CHI RODRIGUEZ',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMMMSzGI4_LjdC9UeUAeDKOmy5xRXK8ULR653v8BHFB-pXB_WSTQysWeMlWDzaaFaSxCkT3Qoz8Tk5SUtz0SB2FYQ=s100-w100-h20'
  },
  {
    player: 'gavinthehole',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMyiMhOl5Lx4VyRgo7yF7TX1UECzRliVhgdkEGRMMdcQEEmDnBp4_XPLjunoeJdFU6kP8d_s0aXlYuaT02uNxfijQo=s100-w100-h20'
  },
  {
    player: 'Kinghenryclub',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNae8KTiNu3qTAYMuK2Z-1ul-qlOBvxq08N9SVFpDQVNrozFiaju36xP2-xqtOuN_PHFsKVoMeB2qbWlT6OHNjFsYk=s100-w100-h20'
  },
  {
    player: 'TheRick',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMMMSzGI4_LjdC9UeUAeDKOmy5xRXK8ULR653v8BHFB-pXB_WSTQysWeMlWDzaaFaSxCkT3Qoz8Tk5SUtz0SB2FYQ=s100-w100-h20'
  },
  {
    player: 'HunterT',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMMMSzGI4_LjdC9UeUAeDKOmy5xRXK8ULR653v8BHFB-pXB_WSTQysWeMlWDzaaFaSxCkT3Qoz8Tk5SUtz0SB2FYQ=s100-w100-h20'
  },
  {
    player: 'Iro',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMMMSzGI4_LjdC9UeUAeDKOmy5xRXK8ULR653v8BHFB-pXB_WSTQysWeMlWDzaaFaSxCkT3Qoz8Tk5SUtz0SB2FYQ=s100-w100-h20'
  },
  {
    player: 'seppe',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBO-p6KPL2_gyIXwJClVcwMGYpDmLHjn84AjxCy8oF6QEp83zfhYcdcJEvgUfJlIkPEzsqpuCZzMJuSGJ8DuP4uayuc=s100-w100-h20'
  },
  {
    player: 'SherlockJake',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMMMSzGI4_LjdC9UeUAeDKOmy5xRXK8ULR653v8BHFB-pXB_WSTQysWeMlWDzaaFaSxCkT3Qoz8Tk5SUtz0SB2FYQ=s100-w100-h20'
  },
  {
    player: 'AvaKor',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMMMSzGI4_LjdC9UeUAeDKOmy5xRXK8ULR653v8BHFB-pXB_WSTQysWeMlWDzaaFaSxCkT3Qoz8Tk5SUtz0SB2FYQ=s100-w100-h20'
  },
  {
    player: 'PlanetXtreme',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMMMSzGI4_LjdC9UeUAeDKOmy5xRXK8ULR653v8BHFB-pXB_WSTQysWeMlWDzaaFaSxCkT3Qoz8Tk5SUtz0SB2FYQ=s100-w100-h20'
  },
  {
    player: 'WaltSobchak',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMMMSzGI4_LjdC9UeUAeDKOmy5xRXK8ULR653v8BHFB-pXB_WSTQysWeMlWDzaaFaSxCkT3Qoz8Tk5SUtz0SB2FYQ=s100-w100-h20'
  },
  {
    player: 'Asylum',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMMMSzGI4_LjdC9UeUAeDKOmy5xRXK8ULR653v8BHFB-pXB_WSTQysWeMlWDzaaFaSxCkT3Qoz8Tk5SUtz0SB2FYQ=s100-w100-h20'
  },
  {
    player: 'DarthGrogu187',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMMMSzGI4_LjdC9UeUAeDKOmy5xRXK8ULR653v8BHFB-pXB_WSTQysWeMlWDzaaFaSxCkT3Qoz8Tk5SUtz0SB2FYQ=s100-w100-h20'
  },
  {
    player: 'Karrrrrrdo',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMMMSzGI4_LjdC9UeUAeDKOmy5xRXK8ULR653v8BHFB-pXB_WSTQysWeMlWDzaaFaSxCkT3Qoz8Tk5SUtz0SB2FYQ=s100-w100-h20'
  },
  {
    player: 'MaxPikachu',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMMMSzGI4_LjdC9UeUAeDKOmy5xRXK8ULR653v8BHFB-pXB_WSTQysWeMlWDzaaFaSxCkT3Qoz8Tk5SUtz0SB2FYQ=s100-w100-h20'
  },
  {
    player: 'Philadelphia1510',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPWblI7Vf6bce6XLzGeVyr-gXpMQKOFQfUjX9h9quwpiJwvcUFwV6LuxyzBlCbskkL_Rjl3MiRluI0XOjyQzNeVGAM=s100-w100-h20'
  },
  {
    player: 'ReflectingStorms',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMMMSzGI4_LjdC9UeUAeDKOmy5xRXK8ULR653v8BHFB-pXB_WSTQysWeMlWDzaaFaSxCkT3Qoz8Tk5SUtz0SB2FYQ=s100-w100-h20'
  },
  {
    player: 'SoupSpoon#5195',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMH2yp-O5tHZeqCgkXVkOxMk1_3KwGlWU4P1sgI9q2wxjv_8lEMqHIzloNzE96-AqECWm4c_UuQSWA8kIXXrW0JLAE=s100-w100-h20'
  },
  {
    player: 'Talisman-',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMMMSzGI4_LjdC9UeUAeDKOmy5xRXK8ULR653v8BHFB-pXB_WSTQysWeMlWDzaaFaSxCkT3Qoz8Tk5SUtz0SB2FYQ=s100-w100-h20'
  },
  {
    player: 'Birdie1951',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMMMSzGI4_LjdC9UeUAeDKOmy5xRXK8ULR653v8BHFB-pXB_WSTQysWeMlWDzaaFaSxCkT3Qoz8Tk5SUtz0SB2FYQ=s100-w100-h20'
  },
  {
    player: 'Davex73',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMMMSzGI4_LjdC9UeUAeDKOmy5xRXK8ULR653v8BHFB-pXB_WSTQysWeMlWDzaaFaSxCkT3Qoz8Tk5SUtz0SB2FYQ=s100-w100-h20'
  },
  {
    player: 'Derrick.healey5',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMMMSzGI4_LjdC9UeUAeDKOmy5xRXK8ULR653v8BHFB-pXB_WSTQysWeMlWDzaaFaSxCkT3Qoz8Tk5SUtz0SB2FYQ=s100-w100-h20'
  },
  {
    player: 'Kirbo',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMMMSzGI4_LjdC9UeUAeDKOmy5xRXK8ULR653v8BHFB-pXB_WSTQysWeMlWDzaaFaSxCkT3Qoz8Tk5SUtz0SB2FYQ=s100-w100-h20'
  },
  {
    player: 'Olsums',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMyiMhOl5Lx4VyRgo7yF7TX1UECzRliVhgdkEGRMMdcQEEmDnBp4_XPLjunoeJdFU6kP8d_s0aXlYuaT02uNxfijQo=s100-w100-h20'
  },
  {
    player: 'Southern_jenn_76',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMMMSzGI4_LjdC9UeUAeDKOmy5xRXK8ULR653v8BHFB-pXB_WSTQysWeMlWDzaaFaSxCkT3Qoz8Tk5SUtz0SB2FYQ=s100-w100-h20'
  },
  {
    player: 'VegasPickles',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMMMSzGI4_LjdC9UeUAeDKOmy5xRXK8ULR653v8BHFB-pXB_WSTQysWeMlWDzaaFaSxCkT3Qoz8Tk5SUtz0SB2FYQ=s100-w100-h20'
  }
]

export const flagConverter = [
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20',
    flag: '🇺🇸'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMQuyi0sBjss81Gk-LdA0agu8n3vSl8jeuvs4X2y2T6167y6AT6MhlEMhGo3aN-7cCvwsMPCZUGR-H_SBEFI7L7ng=s26-w26-h20',
    flag: '🇺🇸'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPf6t-Mvt-r0EC5Wr8vXH8Yeda3XRzc-rsVX9SPCbPqzNjGu5QmTDUHg0tZGBs82U2BZkSaH_nT-wRm9ZYGVyJIXg=s26-w26-h20',
    flag: '🇺🇸'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPSR0Q_risXKPxZWNNgNNno2YfHplJQCVcyj2FShjv9WcMjNgRbHzSwWXLoiStOkL4hSVJLF0Jua6QtFlyc1cLPuw=s26-w26-h20',
    flag: '🇺🇸'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMMMSzGI4_LjdC9UeUAeDKOmy5xRXK8ULR653v8BHFB-pXB_WSTQysWeMlWDzaaFaSxCkT3Qoz8Tk5SUtz0SB2FYQ=s100-w100-h20',
    flag: '🇺🇸'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPxxQp9yZr11alfwlhWSv-oB2DRIhCsMYb4dCTldoPrBA181oyCXM6FN6ns2ejItOKX4mJx0-TfZASnazvtyRXvOkE=s26-w26-h20',
    flag: '🇸🇪'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPOPACE_jXXfSOeqa7uua8HimhMRvvhKYA9BbcH_ytqh95BpaK2mYM657zeTizugyuBfD53frmnT5r4pBqM-GA2P7c=s26-w26-h20',
    flag: '🇸🇪'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNdNT0DdHmaY1TP14-eD4ESBDVjV7DHHjY-tKFEGX1luLFVZoYaAwTLs4T5Gkg3nMq_mQMRyKWKJdPk3x3rfFenvo8=s26-w26-h20',
    flag: '🇸🇪'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOhCXDSwa3j7K51OYth-G9mar5YC-QTrR_oqjq7w1Ne-gDpzflD8eiTd258w_obJqvivbLyyyDT5GPKGWah6RVDlQA=s26-w26-h20',
    flag: '🇸🇪'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMkJ1QcExN5yQmGm4agq9pc6jNjKaI2iL8IN-HToBWOjhsGBp-JQKB6p23eleLKsTo4lFVFzjZCz44QTSRdILoNQyo=s26-w26-h20',
    flag: '🇬🇧'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOnUdGoZERgbzKCZhIZTz9TS7uhIvy9mF0qPJGYtQqUTJRzQojOYCTn0YZ_NWcqaOy7d2H7UVmBwb4sNUflxmnuygQ=s26-w26-h20',
    flag: '🇬🇧'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBM0pWKL-O5NWeJr2HbEofbzFnFV2yI4g4jojAuNt-bx6-jQSzDWPsCgeWbQM8ysBaGG-2IMlJaZwVfyNkWiStSMB0I=s26-w26-h20',
    flag: '🇬🇧'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPMVTRcE50Le_cE4DxUQK6mErskNXbWWdKoqiAdmSC_3zChkfXNEnfZcCwsSsslLxGiP9W2UD-uVFIJZN3jsJ-HxpI=s26-w26-h20',
    flag: '🇬🇧'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBN_e-EUbF-M0ejBu48-PnVcYMOMW-JtN4KsAiZXZ54kWyqsZKIutjdbQ1Vcsbif_47nstd9DzpKUGsyRqoL84rNjMQ=s26-w26-h20',
    flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNuxBjH7ajzRkd-Qg9uV6uVSE-t3PNVIpJ-TFaFlco42wGEAyACllfjFJcqw-OYIE1k0yh8zeWdoRlgDqGxa-qPHHg=s26-w26-h20',
    flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNTw6EpKwphOIP2KC6IuAh6TtkLc8PHcXYgTZEB-uW0KqfT2qYcSA7JRSi35R1UrxDoOVjgt5-vkgVJ3Thn7AF7FGI=s26-w26-h20',
    flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMyiMhOl5Lx4VyRgo7yF7TX1UECzRliVhgdkEGRMMdcQEEmDnBp4_XPLjunoeJdFU6kP8d_s0aXlYuaT02uNxfijQo=s100-w100-h20',
    flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPDLQoXqlMsTdIifouJrtpOfIswFM6P0NT9EID3Y-Fn7Vb80-cdRuIKl1fcQZJYoEGp8BeFlIPbR6g0G5Fsbv63nQ=s26-w26-h20',
    flag: '🇵🇳'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMp87IHHuYmhBs2WC86hKuPr8j4CkFpXqQvmNw4B7TKVT1msV1gxeRPygXC9p_qINuZ3PUgnY86CaWb4QXBIIK5cA=s26-w26-h20',
    flag: '🇵🇳'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMaNVuBvwncM9KaVX69B8--XeaVg_mn3pp8pcrUKjz2MVzDpDx2vCIa5PqmMX5mmSAG2XYnfQpq-sUYRXI3S2ZTCUM=s26-w26-h20',
    flag: '🇵🇷'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMNjR1lGnE9mMgtC9-6jDLefny2Kaw8sC024Sq0sDjk3NJeM0qtnjC0dW18zT9F__U0Pv6CKQSzcmnx_UHUjsvg60I=s26-w26-h20',
    flag: '🇵🇷'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBP8bNd9zo9J_jGox6eyJF39VWs_bRPhr-IMZROM9ZMhL0zQiT1ZlJ1_CVVgdRtgBKWFxUbXDbl-IkumGwMmtTAELKE=s26-w26-h20',
    flag: '🇵🇷'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPLfauWVy9iwVwQjyqgZEFNF65VuKFzf4RXo2QB1pqiRaosJaKL_QhJS9EbZ6NXMnjDzvvbassf2Tg0c4sZ5Bpvxxc=s26-w26-h20',
    flag: '🇸🇰'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPyTpvh85gBC3DnLcAKEmCd1EzB6d6RkLUsy3mYCW-SZz_jvvuJ5zumqp05keHOOZCYQrO0xLnDHdgfDLHV_fs2pEE=s26-w26-h20',
    flag: '🇸🇰'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOPMrHRCu6x7hsphL2jGYDcQQUzZCgdReCurV3BC7uJ-zrf8fijBMpdnLeHzI1kWPJSTrtG5-xQb1EF9NFdrB7RlMg=s26-w26-h20',
    flag: '🇸🇰'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNxaUxhnZY38GTe6t5nVy82Ydv1bvWxX9A61UQVwMcDUETDsXMJ74yYBnyI3TbcrdqSiPkFhV9gmUSgpGtW9WsrF5k=s26-w26-h20',
    flag: '🇪🇸'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNw6-LY7vDoMXi6zucqc51gCIJv8SRIkZx0flTo6zYMtBxftucQn5V9cOsaGyutgwM0VqXHQUO-GcudSLxHtw5OIZI=s26-w26-h20',
    flag: '🇪🇸'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPFNowk1LsbJNY2HG3ZsgIvxt70vubyqnKK7nvdoNZ1BCr736qz8-aFrNd53-uRm8n8AJfUCN9GzZMYab_ILVaXA5U=s26-w26-h20',
    flag: '🇪🇸'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMbDA2rCAJ6nUm1ycKpIAtTt-Sk0kANzNrpMYcKhJpz672iMGZJGuixaFFTlzE6WQOBJKkDStskZLGVmqPMjlWZchc=s26-w26-h20',
    flag: '🇲🇽'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBM-7lA939Y44zkCUI-8bgD_wCFyr1r0yGO53ze3MWCoIxkHm7k6R6z2yjlH5qFKu6zKkW97dJmEX9QB41UA4iqpOiQ=s26-w26-h20',
    flag: '🇲🇽'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBO8XRH8h9VzGc3mYcUACgwNTPWhcP77W7153V_qDsvAspeitY9oxzpI4_O1P2FgdgZPfLDx0wAjxjN5fyWgCsB2Rjo=s26-w26-h20',
    flag: '🇲🇽'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMowTH8SlOui80CIuXUS1BIybRG3u_lVDOxG9Ru-EfOv-FKMgdfS0n-mJ5vO-c4FfHBCLxzCsROffKhTggupJRj3wE=s26-w26-h20',
    flag: '🇷🇴'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOxWQ-MtLUftpqoD0prkWi1wIryhVXJNkuwhHsM3Mdxsvn9iwdiAYHrAiGGSiiEanQD9njNOWtkDRG9I2fxMrtw79U=s26-w26-h20',
    flag: '🇷🇴'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBND4pGXnEiAi1v_FZPYlSZUpHmghJwSs7eEIYI-QUXMxoDfq2U9ZMwssX1SsYpmeHELRAts_YowXnU5G25cOKKPt1M=s26-w26-h20',
    flag: '🇷🇴'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOOMq_tlQNCbMLy0SWYO88PuqQ4H7tPgJVaP4oS7l2zWIBKdkDCRQIiY5yXRWilAsvv_Zs_7Yxi0fkEzQ_a4Tc0RwU=s26-w26-h20',
    flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMJ7heS_RwXqHNR2HhwizBQvKe75WWkVYSLDHZgPmtXpYb45Gtfyi9y6xZIw0HG1Ed4rzgoBPPu1x7y2AidxrJ4hs0=s26-w26-h20',
    flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOTBLxWSoc5gZQDqsQTNdjubDaNwZQf8I4-r7O3yM7tV-ZDGLePZXdKUvhydkeN5fWJ3v07gDOePu9diJD9naoBp4E=s26-w26-h20',
    flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBN7ohCe-BpjCD3ScabuhwqOToItMleZChl7mPJ3nBq7SQVVTd04AWNgWcoGxfXf-2-OIB8nhLXilmW09VZZQYnlH4I=s26-w26-h20',
    flag: '🇨🇦'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNUMLhdFmzt651-_OyDtp3HI5mxg9EfPgIR3ttUP-xdChO-jqJw7RD4kgDON5H1ZVG-1JTkF1GIk41zIpzEJdOSY40=s26-w26-h20',
    flag: '🇨🇦'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPcONDBF10QQcliup2XZnW3tuDfE30qills8OdhvG_SJDhD_UpSiWHrnGNqqlIf40hJpcwunGXMwVlG-Wi-2sj49h8=s26-w26-h20',
    flag: '🇨🇦'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOAGH2dyW80dDvnPLP72oaWT1CkoKI4yU-MlYiHNqv4vIi2YX8oCGjgjykCp3fIBei0M9Ftpc73Sikm1A4oIeG7U0I=s26-w26-h20',
    flag: '🇨🇦'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMH2yp-O5tHZeqCgkXVkOxMk1_3KwGlWU4P1sgI9q2wxjv_8lEMqHIzloNzE96-AqECWm4c_UuQSWA8kIXXrW0JLAE=s100-w100-h20',
    flag: '🇨🇦'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPwiJu8vHRZLB9vOM_zKnwHkCYH-JuOmNA5_HPMVA9Ixmd6RzJQ3wtSDGaEpq3K0Bit9JemviznxDFc7_smgEK6wEA=s26-w26-h20',
    flag: '🇻🇪'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPBMrUHjqVSzTFPdRFEwKKxsHfP8bah2ZqXIWB3-j3ZzpjdPFRIU6VywKHcLna87VDud1tmik0smRTmkNZy33GV-Ik=s26-w26-h20',
    flag: '🇻🇪'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOQoYgf1milXF5rG8yuoQIgtilOIFXnKq2aCHYxXSp43XMH-2LRQOmpNZcCPa1sH36dsNs_BnCqCrYl5K95m-7QPiA=s26-w26-h20',
    flag: '🇻🇪'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPPsz1kMxsZWPZH7JCbwvCIKDWHNyViD4Dz5newYsYC3qF7ISpRKm2X3WeuO3IuwSx08odVukCULfKi7P3uKYSOMA=s26-w26-h20',
    flag: '🇨🇻'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMhS8y1AOVTlH4I8t-cLwSYhSg8N9GXlYaguAhp3RFrOhZ-_6SSY2oSRdKD9wO1BunyMRETz1ZcQ1sKl4l1kRvUrtg=s26-w26-h20',
    flag: '🇨🇻'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMsvFUomPZl1HsUy50DHbVTnALekm0WuISLRjxp957ZlPP0QD7FYN2pm01gJsXD8wcP18FAODatuof941adFuvEvwU=s26-w26-h20',
    flag: '🇨🇻'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNVBdxr094wa71F0RS-1jlRq8BS7cAKmeSNyO85o6zYgVtqJCZXvV_MIMurXy62R5hnnbmhplubJn43hgnI3MPMp1k=s26-w26-h20',
    flag: '🇨🇿'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPYlJq0g1ZbhDht4uRlTq5By70p18edz_DwbOsCRF8_AD4BW5NFNhpI1zpcsgw2VQFYZHfIuhx21P4Y2gMiWeVq50I=s26-w26-h20',
    flag: '🇨🇿'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOAddKcgoEhTarEt2AaI7CkxzrjOrHwyc1YaCqSQgtSGj5dAl98RWAMZLtRP-9d-5-8f02uxm_kK3L8DDL6KQUccYQ=s26-w26-h20',
    flag: '🇨🇿'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20',
    flag: '🇩🇪'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNtu9GL--Q03UrAd2CGbadpbONvXumf6JsJ-WaLTp8F36A3PqcZ3wptLc10Haph01WwXL0udGCBJp8EdRiqPcAOdA=s26-w26-h20',
    flag: '🇩🇪'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOn4KCsfhbIgOnbGOJSuvpRE9mImxf0t-lQE5dvrx91gvREiAf04Z6HwlWIjZOJ-Uao_VTtzbt3ac39hcRXeSo--Q=s26-w26-h20',
    flag: '🇩🇪'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNFk3l9dJVshBioH16g-WOGFLw_D8w44uPGiVcrjDkztWRL7zMnpwjZMkGnBu_1mM8T49gjH2REqGKUJ1fVUiruUw=s26-w26-h20',
    flag: '🇩🇪'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPKWF4MeMCZOBrPkO05pWeBIGGYzlaB-To0TWqWw9wsY1O9y7BGmFw_BBU-8eG7X9VmLvUVYOltCNaMsmZTzwsxvi8=s26-w26-h20',
    flag: '🇩🇰'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOhSW6wQnprLg9UvDlVKphT4_Cl2dJodAlLoa1nxqEstzK6MIzeiA7fkeOXrH3qbJ8fcO60-LWQvIm-mbKy3reTU7o=s26-w26-h20',
    flag: '🇩🇰'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBO9XUo3wGEhxlSHPVA1dtdkq9S9Re4P8Wg3m7cJNHGv2-ehhga-UjuuqWX9dSsrDjPviAlZsvbYfRYw2HCb1DFsKPU=s26-w26-h20',
    flag: '🇩🇰'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOXYvF0q5ZSSCFk_xuXsG-MSH8n4ZG_wbaCavO_PZTnj8YuBs8ax0i5DLut9U8ZsZP_JkChhATATLt4Jyp0i7sCu5U=s26-w26-h20',
    flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMJCFay2O1CYQTs6R7z_BqvKTChSvDYHXzLvwoXiIYh4Kxfh3HTvzmonDmTO43Yax-AEkf7ye8HDdGw3IoW5NvNnDI=s26-w26-h20',
    flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNTCGnazMxhHnC4JdUGt441s0phCE_SNzfdkcvbOiIxiMdAdcGVAapnqwQqcdG4sFyNU1sTbJ030ufBH52npCdhy4Q=s26-w26-h20',
    flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMfwI0X19QiySOTeAtCS2AuizwpHfLS9Ru-v2jlcrTzfwmJhRtIBR-GlJhV4O-Fj_9m6urzoeeRUXsiR7WIddQYYdo=s26-w26-h20',
    flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPWblI7Vf6bce6XLzGeVyr-gXpMQKOFQfUjX9h9quwpiJwvcUFwV6LuxyzBlCbskkL_Rjl3MiRluI0XOjyQzNeVGAM=s100-w100-h20',
    flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNLKWHY6gNMlHdDpFz0mSH-3uSwrQEOeKY-QfsQTlAXBMKiiKPqBAKOZuhF87crjJCk_8VQpo4i3-PQS4p5395B_A=s26-w26-h20',
    flag: '🇯🇵'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOUl4g2EnCUW-qAEAV_oGNmCM_1I0Vx9Abd5eZSwlfI0kNsl7MOQIeLDqZEZronAGXX_O8Qc0Ua-gPlPgyr24k6XQ=s26-w26-h20',
    flag: '🇯🇵'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBM0iMZBx_z5Zf99L3xGcBwwV-OP2WrCQFRGVwWDAN3FJr-YRhadO5dwevUEnfbNUREOcuB3GNPTtfy3wa7ZRWgZpA=s26-w26-h20',
    flag: '🇯🇵'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPp38F_XbUF5hOHErlXQ1ynJA-SQAj_M85IIFHOCFlhHeaSWnHHYC4V_sqwu2LuKGKz7e35qTp5qJGsX4cF4fTfif8=s26-w26-h20',
    flag: '🇦🇺'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNi60J-kQuRQ6KqfO5eM2y-MoVmg9eiBbC9YBrHl1CYGXpB6Zv9hv93Vb5r4Q-7R5CAv_O9VT7qnlAVwW_-0VhuzSk=s26-w26-h20',
    flag: '🇦🇺'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPSXcOANPH0KSEs0x3t9-sdNo54g6ELzGp47QFRiaKkn7s2c6w6ecod71lnIpZR-8_xmPBfVj4FcxGivxF6oW0R0Kw=s26-w26-h20',
    flag: '🇦🇺'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNae8KTiNu3qTAYMuK2Z-1ul-qlOBvxq08N9SVFpDQVNrozFiaju36xP2-xqtOuN_PHFsKVoMeB2qbWlT6OHNjFsYk=s100-w100-h20',
    flag: '🇦🇺'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBP5KAZcYYmtr7vBYe2MsRuopu2tLbv0N7LMPI2JdadsCzEAYFkQ3utoFpUvX0cjDmKXjAgMjv6fk4BbLYBDBONCZQ=s26-w26-h20',
    flag: '🇵🇱'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBN_p0kkh6bvgeNJ5p5ZS424RdSyDmQnOc2j27YdN8NZ9VW3AaRdC6SOcGCPTPoxKAnumAE5qdVfeipH8zgpeew_tg=s26-w26-h20',
    flag: '🇵🇱'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMO7ro5s-d0UKl1QXsIHYQ6zsw1ezuSBVhCsYQK-EDz7PtHMwxKI5NLlLrmo5YlHDJf7up2Ijxtvm9cLkrWqPo8gao=s26-w26-h20',
    flag: '🇮🇪'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBO4A-Lijecok3hzlNEhS8oOVaAZ9b53SbyrusWNXXZqe-2rOotelZgtSohZ39Twmxc0VS0ZsyjZ3oZ4j8XODcWnPlk=s26-w26-h20',
    flag: '🇮🇪'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNOhjYbL7BcdyvIb-JkbPPoVKAg-Eoslfy9tV6-_BTBRCwQZc3joe-G_1k_EZ8pQuLxe3_8SEusVtqRP8VuHlPgDCQ=s26-w26-h20',
    flag: '🇮🇲'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPeldCqZCGm_bunAvrE3_RKnQQYLIGCObUhK_GBM7u9LmJnb8y11-f-vCyBDNqTPhdRJ_xoD4wMBzCxrljwLNb9Tso=s26-w26-h20',
    flag: '🇿🇦'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOZx8pgs5b5cwGxcRtJZT-RDONGy9IHGiH5sLNT4-TkjN-7mpB2EtLM8B6inYQD_pczvl6UUuhkzjh5bz50ReXv3g=s26-w26-h20',
    flag: '🇳🇴'
  },
  {
    link: 'https://lh3.googleusercontent.com/docsubipk/ADszHBO-p6KPL2_gyIXwJClVcwMGYpDmLHjn84AjxCy8oF6QEp83zfhYcdcJEvgUfJlIkPEzsqpuCZzMJuSGJ8DuP4uayuc=s100-w100-h20',
    flag: '🇵🇪'
  }
  // {
  //   link: '',
  //   flag: ''
  // }
]
