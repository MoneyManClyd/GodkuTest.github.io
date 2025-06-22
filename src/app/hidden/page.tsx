import Link from "next/link";
import { Header } from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <Header />

      <main className="px-6 pt-20">
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-black-500 via-black-500 to-black-500 text-transparent bg-clip-text mb-6">
            WHY DID YOU CLICK. 
          </h1>
          <p className="text-gray-300 mb-8 text-xl">
            CLICK BACK.
          </p>
          <Link href="/">
            <button className="px-6 py-3 bg-white-600 hover:bg-white-700 rounded-lg text-white button-hover text-lg">
              Jonlovesyou
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}
