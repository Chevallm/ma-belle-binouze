import { Moment } from 'moment';

export interface Biere {
  nom: string
  photo?: string
  brasserie?: string
  style?: string
  degre?: number
  dateAcquisistion?: Moment
}
