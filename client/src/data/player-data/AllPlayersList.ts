import { season6PlayerList } from './season6FinalPlayerList'
import { season7PlayerList } from './season7PlayerList'

export const getComboList = () => {
  console.log(season6PlayerList.length)
  console.log(season7PlayerList.length)

  const comboList = [...season6PlayerList]
  season7PlayerList.map((player) => {
    if (!season6PlayerList.some((p) => p.player === player.player)) {
      comboList.push(player)
    }
  })
  console.log(comboList)
}

export interface PlayerInterface {
  player: string
  flag: string
}

export const allPlayersList: PlayerInterface[] = [
  {
    player: 'INDY',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'his_Dudeness',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Midaswell',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Bear313',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPLfauWVy9iwVwQjyqgZEFNF65VuKFzf4RXo2QB1pqiRaosJaKL_QhJS9EbZ6NXMnjDzvvbassf2Tg0c4sZ5Bpvxxc=s26-w26-h20'
  },
  {
    player: 'Zanetti',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPxxQp9yZr11alfwlhWSv-oB2DRIhCsMYb4dCTldoPrBA181oyCXM6FN6ns2ejItOKX4mJx0-TfZASnazvtyRXvOkE=s26-w26-h20'
  },
  {
    player: 'ElJorge',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMbDA2rCAJ6nUm1ycKpIAtTt-Sk0kANzNrpMYcKhJpz672iMGZJGuixaFFTlzE6WQOBJKkDStskZLGVmqPMjlWZchc=s26-w26-h20'
  },
  {
    player: 'CleverFellow',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Burn1',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Calassy',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'GreatGoose',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMaNVuBvwncM9KaVX69B8--XeaVg_mn3pp8pcrUKjz2MVzDpDx2vCIa5PqmMX5mmSAG2XYnfQpq-sUYRXI3S2ZTCUM=s26-w26-h20'
  },
  {
    player: 'Mau',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNxaUxhnZY38GTe6t5nVy82Ydv1bvWxX9A61UQVwMcDUETDsXMJ74yYBnyI3TbcrdqSiPkFhV9gmUSgpGtW9WsrF5k=s26-w26-h20'
  },
  {
    player: 'GUS',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNxaUxhnZY38GTe6t5nVy82Ydv1bvWxX9A61UQVwMcDUETDsXMJ74yYBnyI3TbcrdqSiPkFhV9gmUSgpGtW9WsrF5k=s26-w26-h20'
  },
  {
    player: 'Matt916',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'YUK1N',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOOMq_tlQNCbMLy0SWYO88PuqQ4H7tPgJVaP4oS7l2zWIBKdkDCRQIiY5yXRWilAsvv_Zs_7Yxi0fkEzQ_a4Tc0RwU=s26-w26-h20'
  },
  {
    player: 'FIRE_321',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBN7ohCe-BpjCD3ScabuhwqOToItMleZChl7mPJ3nBq7SQVVTd04AWNgWcoGxfXf-2-OIB8nhLXilmW09VZZQYnlH4I=s26-w26-h20'
  },
  {
    player: 'B8Y',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Rolyt',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Stewie',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNuxBjH7ajzRkd-Qg9uV6uVSE-t3PNVIpJ-TFaFlco42wGEAyACllfjFJcqw-OYIE1k0yh8zeWdoRlgDqGxa-qPHHg=s26-w26-h20'
  },
  {
    player: 'Captain_Sr',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMowTH8SlOui80CIuXUS1BIybRG3u_lVDOxG9Ru-EfOv-FKMgdfS0n-mJ5vO-c4FfHBCLxzCsROffKhTggupJRj3wE=s26-w26-h20'
  },
  {
    player: 'ForRealForReal',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Blutes87',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'DiscflingerADK',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'SD_Diver',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'TrippinBill',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Browner',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'KCRob',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'SqueezyJibbz',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNOhjYbL7BcdyvIb-JkbPPoVKAg-Eoslfy9tV6-_BTBRCwQZc3joe-G_1k_EZ8pQuLxe3_8SEusVtqRP8VuHlPgDCQ=s26-w26-h20'
  },
  {
    player: 'Toaster',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'StrokeLimitReached',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Dude_Lebowski',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Sackdeqb',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Squidy19',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'ARMY_OF_ONE',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'McLovin',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'DERBY_DAZ',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNuxBjH7ajzRkd-Qg9uV6uVSE-t3PNVIpJ-TFaFlco42wGEAyACllfjFJcqw-OYIE1k0yh8zeWdoRlgDqGxa-qPHHg=s26-w26-h20'
  },
  {
    player: 'Emill',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPwiJu8vHRZLB9vOM_zKnwHkCYH-JuOmNA5_HPMVA9Ixmd6RzJQ3wtSDGaEpq3K0Bit9JemviznxDFc7_smgEK6wEA=s26-w26-h20'
  },
  {
    player: 'TrickyDicky',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOnUdGoZERgbzKCZhIZTz9TS7uhIvy9mF0qPJGYtQqUTJRzQojOYCTn0YZ_NWcqaOy7d2H7UVmBwb4sNUflxmnuygQ=s26-w26-h20'
  },
  {
    player: 'G0nz0nater',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'HBKid',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'JacksonHoleInOne',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'D3bb13',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'FainNeinGudTwain',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNxaUxhnZY38GTe6t5nVy82Ydv1bvWxX9A61UQVwMcDUETDsXMJ74yYBnyI3TbcrdqSiPkFhV9gmUSgpGtW9WsrF5k=s26-w26-h20'
  },
  {
    player: 'ichibuho',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Jed',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Rainedrop184',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: '4whlr',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Old-T',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPxxQp9yZr11alfwlhWSv-oB2DRIhCsMYb4dCTldoPrBA181oyCXM6FN6ns2ejItOKX4mJx0-TfZASnazvtyRXvOkE=s26-w26-h20'
  },
  {
    player: 'deebee64',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOOMq_tlQNCbMLy0SWYO88PuqQ4H7tPgJVaP4oS7l2zWIBKdkDCRQIiY5yXRWilAsvv_Zs_7Yxi0fkEzQ_a4Tc0RwU=s26-w26-h20'
  },
  {
    player: 'TIGERHOODS',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Anuebus',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Autodidactic',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'BANKERPOPS',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Bartimaeus',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'BaruMonkey',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Fatfat42',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Joaquinypunto',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNxaUxhnZY38GTe6t5nVy82Ydv1bvWxX9A61UQVwMcDUETDsXMJ74yYBnyI3TbcrdqSiPkFhV9gmUSgpGtW9WsrF5k=s26-w26-h20'
  },
  {
    player: 'Sarahloo1971',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Caramel',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOnUdGoZERgbzKCZhIZTz9TS7uhIvy9mF0qPJGYtQqUTJRzQojOYCTn0YZ_NWcqaOy7d2H7UVmBwb4sNUflxmnuygQ=s26-w26-h20'
  },
  {
    player: 'Mike190',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'AmberWave',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Peach',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Mulligan',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Nick',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'steven_T',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Jennem',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Monsoon',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Froman',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'chileC.O.W.',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'bogibo',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPPsz1kMxsZWPZH7JCbwvCIKDWHNyViD4Dz5newYsYC3qF7ISpRKm2X3WeuO3IuwSx08odVukCULfKi7P3uKYSOMA=s26-w26-h20'
  },
  {
    player: 'ET154',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Nitroustorm',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Tmoes',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPKWF4MeMCZOBrPkO05pWeBIGGYzlaB-To0TWqWw9wsY1O9y7BGmFw_BBU-8eG7X9VmLvUVYOltCNaMsmZTzwsxvi8=s26-w26-h20'
  },
  {
    player: 'Halfpint',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNuxBjH7ajzRkd-Qg9uV6uVSE-t3PNVIpJ-TFaFlco42wGEAyACllfjFJcqw-OYIE1k0yh8zeWdoRlgDqGxa-qPHHg=s26-w26-h20'
  },
  {
    player: 'rockthecraft',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNi60J-kQuRQ6KqfO5eM2y-MoVmg9eiBbC9YBrHl1CYGXpB6Zv9hv93Vb5r4Q-7R5CAv_O9VT7qnlAVwW_-0VhuzSk=s26-w26-h20'
  },
  {
    player: 'NuttyGrandpa',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Brit_The_Elder',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOnUdGoZERgbzKCZhIZTz9TS7uhIvy9mF0qPJGYtQqUTJRzQojOYCTn0YZ_NWcqaOy7d2H7UVmBwb4sNUflxmnuygQ=s26-w26-h20'
  },
  {
    player: 'RICH8523',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'WickedShack',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Grezza',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNuxBjH7ajzRkd-Qg9uV6uVSE-t3PNVIpJ-TFaFlco42wGEAyACllfjFJcqw-OYIE1k0yh8zeWdoRlgDqGxa-qPHHg=s26-w26-h20'
  },
  {
    player: 'AndyP1970',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'strype9',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'the_dak',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNuxBjH7ajzRkd-Qg9uV6uVSE-t3PNVIpJ-TFaFlco42wGEAyACllfjFJcqw-OYIE1k0yh8zeWdoRlgDqGxa-qPHHg=s26-w26-h20'
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
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBN7ohCe-BpjCD3ScabuhwqOToItMleZChl7mPJ3nBq7SQVVTd04AWNgWcoGxfXf-2-OIB8nhLXilmW09VZZQYnlH4I=s26-w26-h20'
  },
  {
    player: 'willsy13',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'joshbenesh',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Yoda',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNuxBjH7ajzRkd-Qg9uV6uVSE-t3PNVIpJ-TFaFlco42wGEAyACllfjFJcqw-OYIE1k0yh8zeWdoRlgDqGxa-qPHHg=s26-w26-h20'
  },
  {
    player: 'Julian1830',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Aaron5701',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
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
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Lifeisgood',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
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
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBN7ohCe-BpjCD3ScabuhwqOToItMleZChl7mPJ3nBq7SQVVTd04AWNgWcoGxfXf-2-OIB8nhLXilmW09VZZQYnlH4I=s26-w26-h20'
  },
  {
    player: 'Krys',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'TresWolfe',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBN7ohCe-BpjCD3ScabuhwqOToItMleZChl7mPJ3nBq7SQVVTd04AWNgWcoGxfXf-2-OIB8nhLXilmW09VZZQYnlH4I=s26-w26-h20'
  },
  {
    player: 'Indianchief',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Beldemar',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMO7ro5s-d0UKl1QXsIHYQ6zsw1ezuSBVhCsYQK-EDz7PtHMwxKI5NLlLrmo5YlHDJf7up2Ijxtvm9cLkrWqPo8gao=s26-w26-h20'
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
    player: 'theYell',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNi60J-kQuRQ6KqfO5eM2y-MoVmg9eiBbC9YBrHl1CYGXpB6Zv9hv93Vb5r4Q-7R5CAv_O9VT7qnlAVwW_-0VhuzSk=s26-w26-h20'
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
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNVBdxr094wa71F0RS-1jlRq8BS7cAKmeSNyO85o6zYgVtqJCZXvV_MIMurXy62R5hnnbmhplubJn43hgnI3MPMp1k=s26-w26-h20'
  },
  {
    player: 'Skorpzz',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
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
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNLKWHY6gNMlHdDpFz0mSH-3uSwrQEOeKY-QfsQTlAXBMKiiKPqBAKOZuhF87crjJCk_8VQpo4i3-PQS4p5395B_A=s26-w26-h20'
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
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNuxBjH7ajzRkd-Qg9uV6uVSE-t3PNVIpJ-TFaFlco42wGEAyACllfjFJcqw-OYIE1k0yh8zeWdoRlgDqGxa-qPHHg=s26-w26-h20'
  },
  {
    player: 'CoryDoesShots',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Shea_No_More',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'Domey',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
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
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
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
    player: 'Midoriya',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOV9mcIyCEU3E_8qOoqzfvbqNfcbzhXOHc3uXqChFs0mIcYgVWXACVwRK_-JtgAB_oyc3pe3AXEmDKIl_MiJH_MFQ=s26-w26-h20'
  },
  {
    player: 'VR_Rocket007',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNi60J-kQuRQ6KqfO5eM2y-MoVmg9eiBbC9YBrHl1CYGXpB6Zv9hv93Vb5r4Q-7R5CAv_O9VT7qnlAVwW_-0VhuzSk=s26-w26-h20'
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
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMkJ1QcExN5yQmGm4agq9pc6jNjKaI2iL8IN-HToBWOjhsGBp-JQKB6p23eleLKsTo4lFVFzjZCz44QTSRdILoNQyo=s26-w26-h20'
  },
  {
    player: 'BamaSpoo',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMQuyi0sBjss81Gk-LdA0agu8n3vSl8jeuvs4X2y2T6167y6AT6MhlEMhGo3aN-7cCvwsMPCZUGR-H_SBEFI7L7ng=s26-w26-h20'
  },
  {
    player: 'Frothin',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMQuyi0sBjss81Gk-LdA0agu8n3vSl8jeuvs4X2y2T6167y6AT6MhlEMhGo3aN-7cCvwsMPCZUGR-H_SBEFI7L7ng=s26-w26-h20'
  },
  {
    player: 'Dadndan',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBN_e-EUbF-M0ejBu48-PnVcYMOMW-JtN4KsAiZXZ54kWyqsZKIutjdbQ1Vcsbif_47nstd9DzpKUGsyRqoL84rNjMQ=s26-w26-h20'
  },
  {
    player: 'UroPa',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMQuyi0sBjss81Gk-LdA0agu8n3vSl8jeuvs4X2y2T6167y6AT6MhlEMhGo3aN-7cCvwsMPCZUGR-H_SBEFI7L7ng=s26-w26-h20'
  },
  {
    player: 'Missi',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMQuyi0sBjss81Gk-LdA0agu8n3vSl8jeuvs4X2y2T6167y6AT6MhlEMhGo3aN-7cCvwsMPCZUGR-H_SBEFI7L7ng=s26-w26-h20'
  },
  {
    player: 'noblesquashy',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMQuyi0sBjss81Gk-LdA0agu8n3vSl8jeuvs4X2y2T6167y6AT6MhlEMhGo3aN-7cCvwsMPCZUGR-H_SBEFI7L7ng=s26-w26-h20'
  },
  {
    player: 'hard2imagine81',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMQuyi0sBjss81Gk-LdA0agu8n3vSl8jeuvs4X2y2T6167y6AT6MhlEMhGo3aN-7cCvwsMPCZUGR-H_SBEFI7L7ng=s26-w26-h20'
  },
  {
    player: 'PETER591',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBN_e-EUbF-M0ejBu48-PnVcYMOMW-JtN4KsAiZXZ54kWyqsZKIutjdbQ1Vcsbif_47nstd9DzpKUGsyRqoL84rNjMQ=s26-w26-h20'
  },
  {
    player: 'SerenityMoon',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMQuyi0sBjss81Gk-LdA0agu8n3vSl8jeuvs4X2y2T6167y6AT6MhlEMhGo3aN-7cCvwsMPCZUGR-H_SBEFI7L7ng=s26-w26-h20'
  },
  {
    player: 'Tiger_Weeds',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMQuyi0sBjss81Gk-LdA0agu8n3vSl8jeuvs4X2y2T6167y6AT6MhlEMhGo3aN-7cCvwsMPCZUGR-H_SBEFI7L7ng=s26-w26-h20'
  },
  {
    player: 'Chipdancer',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPp38F_XbUF5hOHErlXQ1ynJA-SQAj_M85IIFHOCFlhHeaSWnHHYC4V_sqwu2LuKGKz7e35qTp5qJGsX4cF4fTfif8=s26-w26-h20'
  },
  {
    player: 'Painkeeng',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMQuyi0sBjss81Gk-LdA0agu8n3vSl8jeuvs4X2y2T6167y6AT6MhlEMhGo3aN-7cCvwsMPCZUGR-H_SBEFI7L7ng=s26-w26-h20'
  },
  {
    player: 'SteveSkillman',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOXYvF0q5ZSSCFk_xuXsG-MSH8n4ZG_wbaCavO_PZTnj8YuBs8ax0i5DLut9U8ZsZP_JkChhATATLt4Jyp0i7sCu5U=s26-w26-h20'
  },
  {
    player: 'Duckk',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMQuyi0sBjss81Gk-LdA0agu8n3vSl8jeuvs4X2y2T6167y6AT6MhlEMhGo3aN-7cCvwsMPCZUGR-H_SBEFI7L7ng=s26-w26-h20'
  },
  {
    player: 'Lynniebodd',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMkJ1QcExN5yQmGm4agq9pc6jNjKaI2iL8IN-HToBWOjhsGBp-JQKB6p23eleLKsTo4lFVFzjZCz44QTSRdILoNQyo=s26-w26-h20'
  },
  {
    player: 'RainbowSavage22',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPp38F_XbUF5hOHErlXQ1ynJA-SQAj_M85IIFHOCFlhHeaSWnHHYC4V_sqwu2LuKGKz7e35qTp5qJGsX4cF4fTfif8=s26-w26-h20'
  },
  {
    player: 'southren_jenn_76',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMQuyi0sBjss81Gk-LdA0agu8n3vSl8jeuvs4X2y2T6167y6AT6MhlEMhGo3aN-7cCvwsMPCZUGR-H_SBEFI7L7ng=s26-w26-h20'
  },
  {
    player: 'Century204',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBNUMLhdFmzt651-_OyDtp3HI5mxg9EfPgIR3ttUP-xdChO-jqJw7RD4kgDON5H1ZVG-1JTkF1GIk41zIpzEJdOSY40=s26-w26-h20'
  },
  {
    player: 'Molevortex',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBOXYvF0q5ZSSCFk_xuXsG-MSH8n4ZG_wbaCavO_PZTnj8YuBs8ax0i5DLut9U8ZsZP_JkChhATATLt4Jyp0i7sCu5U=s26-w26-h20'
  },
  {
    player: 'Oculus_Prime',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMQuyi0sBjss81Gk-LdA0agu8n3vSl8jeuvs4X2y2T6167y6AT6MhlEMhGo3aN-7cCvwsMPCZUGR-H_SBEFI7L7ng=s26-w26-h20'
  },
  {
    player: 'RadiumF',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMQuyi0sBjss81Gk-LdA0agu8n3vSl8jeuvs4X2y2T6167y6AT6MhlEMhGo3aN-7cCvwsMPCZUGR-H_SBEFI7L7ng=s26-w26-h20'
  },
  {
    player: 'PotatoSwinger',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBPp38F_XbUF5hOHErlXQ1ynJA-SQAj_M85IIFHOCFlhHeaSWnHHYC4V_sqwu2LuKGKz7e35qTp5qJGsX4cF4fTfif8=s26-w26-h20'
  },
  {
    player: 'Brad.',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMkJ1QcExN5yQmGm4agq9pc6jNjKaI2iL8IN-HToBWOjhsGBp-JQKB6p23eleLKsTo4lFVFzjZCz44QTSRdILoNQyo=s26-w26-h20'
  },
  {
    player: 'Dandnt65',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMkJ1QcExN5yQmGm4agq9pc6jNjKaI2iL8IN-HToBWOjhsGBp-JQKB6p23eleLKsTo4lFVFzjZCz44QTSRdILoNQyo=s26-w26-h20'
  },
  {
    player: 'midoriya',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMQuyi0sBjss81Gk-LdA0agu8n3vSl8jeuvs4X2y2T6167y6AT6MhlEMhGo3aN-7cCvwsMPCZUGR-H_SBEFI7L7ng=s26-w26-h20'
  },
  {
    player: 'regislb87',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBP5KAZcYYmtr7vBYe2MsRuopu2tLbv0N7LMPI2JdadsCzEAYFkQ3utoFpUvX0cjDmKXjAgMjv6fk4BbLYBDBONCZQ=s26-w26-h20'
  },
  {
    player: 'skorpzz',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMQuyi0sBjss81Gk-LdA0agu8n3vSl8jeuvs4X2y2T6167y6AT6MhlEMhGo3aN-7cCvwsMPCZUGR-H_SBEFI7L7ng=s26-w26-h20'
  },
  {
    player: 'Jamsamamsa',
    flag: 'https://lh3.googleusercontent.com/docsubipk/ADszHBMQuyi0sBjss81Gk-LdA0agu8n3vSl8jeuvs4X2y2T6167y6AT6MhlEMhGo3aN-7cCvwsMPCZUGR-H_SBEFI7L7ng=s26-w26-h20'
  }
]
