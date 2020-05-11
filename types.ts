export interface State {
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

export interface Info {
  expected: string
  outOfStock: boolean
  artist: string
  label: string
  cat: string
  link: string
  title: string
}

export interface Release {
  cat: string
  info: Info
}
