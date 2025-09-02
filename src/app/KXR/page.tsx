
import Link from "next/link";
import { Header } from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <Header />

      <main className="px-6 pt-20">
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-red-500 via-red-500 to-red-500 text-transparent bg-clip-text mb-6">
            KXR 
          </h1>
          <p className="text-gray-300 mb-8 text-xl">
            CLICK ITTTTT.
          </p>
          <Link href="https://i.pinimg.com/originals/cc/25/90/cc25903a2e66da0e87944636d3d35c78.gif">
            <button className="px-6 py-3 bg-blue-600 hover:bg-black-700 rounded-lg text-white button-hover text-lg">
              Click
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}
