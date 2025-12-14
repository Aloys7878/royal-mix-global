export class BaseAgent {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  act(input: string) {
    return `${this.name} processed: ${input}`;
  }
}
