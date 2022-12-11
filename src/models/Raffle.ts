export class Image {
  constructor(
    public id?: number,
    public post_id?: string,
    public path?: string
  ) {}
}

export class Raffle {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public numTicket?: number,
    public price?: number,
    public dateGame?: string,
    public images?: Image[]
  ) {}
}
