export interface TodoProp {
  id: string;
  title: string;
  completed: boolean;
  toggleCompleted: (id: string, isCompleted: boolean) => void;
}
