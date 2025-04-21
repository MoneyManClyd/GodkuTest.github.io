import Link from "next/link";
import { Header } from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <Header />

      <main className="px-6 pt-20">
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-500 via-yellow-500 to-yellow-500 text-transparent bg-clip-text mb-6">
            Cheese. 
          </h1>
          <p className="text-gray-300 mb-8 text-xl">
            GET OUT.
          </p>
          <Link href="/">
            <button className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 rounded-lg text-white button-hover text-lg">
              Jonlovesyou
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}
