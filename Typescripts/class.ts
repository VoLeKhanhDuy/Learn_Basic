class Employee {
  public name: string;
  private stk: number;
  readonly male: boolean;

  constructor(name: string, stk: number, male: boolean) {
    this.name = name;
    this.stk = stk;
    this.male = male;
  }

  // constructor(
  //   public name: string,
  //   private stk: number,
  //   readonly male: boolean
  // ) {}
}

const henry = new Employee("henry", 20, true);
const bob = new Employee("bob", 22, false);

const employees: Employee[] = [];
employees.push(henry);
employees.push(bob);

employees.forEach((employee) => console.log(employee.name, employee.male));
