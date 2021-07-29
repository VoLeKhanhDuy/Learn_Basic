// Generic: cho khai báo trước dạng của 1 biến (khai báo kiểu của biến đó)

type strArr = Array<string>;

type numArr = Array<number>;

const last = (arr: Array<number>) => arr[arr.length - 1];

// truyền vào dạng gì thì nó sẽ hiểu và trả ra dạng đó
const lastT = <T>(arr: Array<T>) => arr[arr.length - 1];
const l1 = lastT([1, 2, 3]);
const l2 = lastT([1, true, "abc"]);
const l3 = lastT<string>(["a", "b"]);

/* ------------------------------------ */

const makeArr = (x: number) => [x];
const m = makeArr(5);

const makeArrT = <T>(x: T) => [x];
const n = makeArrT("abc");
const z = makeArrT(1);

/* ------------------------------------ */

const makeArrXY = (x: number, y: string) => [x, y];

const makeArrXYT = <X, Y>(x: X, y: Y) => [x, y];
const t1 = makeArrXYT(1, "abc");

const makeArrTuple = <X, Y>(x: X, y: Y): [X, Y] => [x, y];
const t2 = makeArrTuple(1, 2);
const t3 = makeArrTuple(1, "a");
const t4 = makeArrTuple<string, number>("zxcz", 4);
const t5 = makeArrTuple<string | null, number>(null, 2);

const makeTupleWithDefault = <X, Y = number>(x: X, y: Y): [X, Y] => [x, y];
const t6 = makeTupleWithDefault<string | null>("abc", 6);

/* --------------------------- GENERICS EXTENDS --------------------------- */
const makeFullName = (obj) => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`,
});

const makeFullNameConstraint = (obj: {
  firstName: string;
  lastName: string;
}) => ({ ...obj, fullName: `${obj.firstName} ${obj.lastName}` });
const o1 = makeFullNameConstraint({ firstName: "dyyyy", lastName: "khánh" });

//GENERIC-----
const makeFullNameConstraintGeneric = <
  T extends { firstName: string; lastName: string } // bắt buộc phải truyền vào 1 object có dạng như vậy
>(
  obj: T
) => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`,
});
const o2 = makeFullNameConstraintGeneric({
  firstName: "Khánh",
  lastName: "Duy",
  age: 23,
});

//--------------------

const addNewEmployee = (employee: object) => {
  const uid = Math.floor(Math.random() * 100);
  return {
    ...employee,
    uid,
  };
};
const emOne = addNewEmployee({ name: "Duy", age: 22 });
console.log(emOne.name); // lỗi

const addNewEmployeeT = <T extends object>(employee: T) => {
  const uid = Math.floor(Math.random() * 100);
  return {
    ...employee,
    uid,
  };
};
const emTwo = addNewEmployeeT({ name: "Duy", age: 25, male: true });
console.log(emTwo.name);

/* -------------------- GENERIC IN INTERFACE ---------------------- */
interface Resource<T> {
  uid: number;
  name: string;
  data: T; // T là kiểu gì thì value của data là kiểu đó
}

const resourceOne: Resource<string> = {
  uid: 1,
  name: "Duyy",
  data: "abccc",
};
