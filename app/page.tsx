import { prisma } from "@/prisma/client";
import Link from "next/link";
import TodoItem from "./components/TodoItem";

function getTodods() {
  return prisma.todo.findMany({ orderBy: { createdAt: "desc" } });
}

async function toggleCompleted(id: string, isCompleted: boolean) {
  "use server";
  await prisma.todo.update({
    data: { completed: isCompleted },
    where: { id },
  });
}

async function HomePage() {
  const todos = await getTodods();
  return (
    <>
      <header className="flex justify-between mb-4">
        <h1 className="text-2xl font-semibold">Todos</h1>
        <Link
          href="/new"
          className="border border-slate-300 text-slate-300 px-3.5 py-1.5 rounded hover:bg-slate-700 outline-none transition"
        >
          New
        </Link>
      </header>
      <ul>
        {todos.map((todo) => (
          <>
            <TodoItem
              key={todo.id}
              {...todo}
              toggleCompleted={toggleCompleted}
            />
          </>
        ))}
      </ul>
    </>
  );
}

export default HomePage;
