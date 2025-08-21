import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      {/* Logo */}
      <div className="flex flex-col items-center mb-6">
        <Image
          src="/logo-ad-meliorem.png"
          alt="Ad Meliorem Logo"
          width={120}
          height={120}
        />
        <h1 className="text-2xl font-bold mt-2">Ad Meliorem</h1>
        <h2 className="text-lg">Alberto R. Melgoza, PhD</h2>
      </div>

      {/* Hero Image */}
      <div className="mb-6">
        <Image
          src="/hero-here-to-help.jpg"
          alt="Here to Help"
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Contact Button */}
      <a
        href="mailto:your-email@example.com"
        className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition"
      >
        Contact Me
      </a>
    </main>
  );
}
