// Director interface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Teacher interface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// Teacher class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Union type
type Employee = Director | Teacher;

// Type guard
function isNumber(value: string | number): value is number {
  return typeof value === 'number';
}

// Factory function
function createEmployee(salary: number | string): Employee {
  if (isNumber(salary) && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Tests
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));