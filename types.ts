export interface Targets {
  aboutMe : string
  skills : string
  archiving? : string
  projects? : string
  career? : string
  contact : string
}

export type RedirectButtonType = {
  path : string;
  text? : string | number;
  className? : string;
}