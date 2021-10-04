export type DiffResponse = {
  latest: string
  diff: Dataset1
}

export type Dataset1 = {
  _version: 1
  cat: {
    [CATALOGUE_NUMBER: string]: {
      juno: Info
      redeye: Info
    }
  }
  labels: {
    [LABEL_ID: string]: {
      [CATALOGUE_NUMBER: string]: boolean
    }
  }
  artists: {
    [ARTIST_ID: string]: {
      [CATALOGUE_NUMBER: string]: boolean
    }
  }
}

// export type Dataset2 = {
//   _version: 2
//   cat: {
//     [CATALOGUE_NUMBER: string]: {
//       juno: Info
//       redeye: Info
//     }
//   }
//   labels: {
//     [LABEL_ID: string]: string[]
//   }
//   artists: {
//     [ARTIST_ID: string]: string[]
//   }
// }

export type Info = {
  expected?: string
  outOfStock: boolean
  lowStock?: boolean
  artist: string
  label: string
  cat: string
  link: string
  title: string
}

export type Release = {
  cat: string
  info: Info
}
