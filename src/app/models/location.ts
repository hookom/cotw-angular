export class Location {
  name: string
  lat: number
  long: number
  verified: number
  submitter: string
  home: string

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}