
import Link from "next/link";
import { Header } from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <Header />

      <main className="px-6 pt-20">
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-500 via-yellow-500 to-yellow-500 text-transparent bg-clip-text mb-6">
            Hero. 
          </h1>
          <p className="text-gray-300 mb-8 text-xl">
            Click The Link Below.
          </p>
          <Link href="https://media.discordapp.net/attachments/1312473750892970044/1349452217651826759/Screenshot_2025-03-13-00-00-41-304_com.discord-edit.jpg?ex=6807e2d0&is=68069150&hm=d5474b7df1fc80d8a70ba24252507c4d8e1fb7010e13a163854f5f7d1c0e1043&=&format=webp&width=846&height=881">
            <button className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 rounded-lg text-white button-hover text-lg">
              Click
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}
