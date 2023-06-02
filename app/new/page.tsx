import { prisma } from "@/prisma/client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

async function createTodo(data: FormData) {
  "use server";
  const title = data.get("title")!.toString();

  if (title.length == 0 || typeof title !== "string") {
    alert("Invalid title");
  }

  await prisma.todo.create({ data: { title } });

  redirect("/");
}
function NewPage() {
  return (
    <>
      <header className="flex gap-4 items-center mb-4">
        <Link href="/">
          <FaArrowLeft />
        </Link>
        <h1 className="text-2xl font-semibold">New</h1>
      </header>

      <form action={createTodo} className="flex gap-2 flex-col">
        <div className="flex gap-2 mb-2">
          <input
            type="text"
            name="title"
            placeholder="Your task..."
            className="border w-full border-slate-300 rounded bg-transparent px-4 py-1.5 outline-none focus-within:border-slate-100"
          />
          <button
            type="submit"
            className="border border-slate-300 text-slate-300 px-3.5 py-1.5 rounded hover:bg-slate-700 outline-none transition"
          >
            ADD
          </button>
        </div>
      </form>
    </>
  );
}

export default NewPage;
