export abstract class RenderObject {
  protected abstract _id: string;

  constructor(public x: number, public y: number) {}

  protected abstract get id(): string;

  abstract update(): void;
}
