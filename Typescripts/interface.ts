interface Person {
  name: string;
  age: number;
  speak(lang: string): void;
  spend(amount: number): number;
}

const henrys: Person = {
  name: "henry",
  age: 15,
  speak(text: string): void {
    console.log(text);
  },
  spend(amt: number): number {
    return amt;
  },
};
