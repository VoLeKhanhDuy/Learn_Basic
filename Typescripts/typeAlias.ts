// Type Alias: tạo ra 1 định dạng dữ liệu mới

type StringOrNumber = string | number;
type Student = {
  // cái này không phải Object
  name: string;
  id: StringOrNumber;
};

const studentDetails = (id: StringOrNumber, studentName: string): void => {
  console.log(`Student ${studentName} has id: ${id}`);
};
studentDetails(1, "Duy");

const greett = (user: Student) => {
  console.log(`${user.name} with id ${user.id} says hello`);
};
greett({ name: "abc", id: 123 });
