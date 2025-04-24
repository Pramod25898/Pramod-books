import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">Kahaniyaan by Pramod</h1>
        <p className="text-lg text-gray-300 mt-2">
          Kalpanaon se bhari kahaniyaan… har jazbaat ko chhooti hui.
        </p>
      </header>

      <section className="grid md:grid-cols-3 gap-6">
        {/* Cards */}
      </section>

      <footer className="mt-20 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Pramod Mehra. All rights reserved.
      </footer>
    </div>
  );
}
