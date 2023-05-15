import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="text-zone">
          {" "}
          <h1>Welcome to B File Manager: Your Ultimate Media Companion</h1>
          <p>
            Introducing B File Manager, your go-to solution for effortlessly
            organizing, managing, and accessing your image and video files.
            Whether you're a professional photographer, videographer, or simply
            someone who loves capturing life's moments, B File Manager is here
            to make your media management experience a breeze.
          </p>
        </div>
        <Link
          href="/register"
          className="text-white mt-3 bg-stone-600 hover:bg-stone-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "
        >
          Get started
        </Link>
      </section>
    </main>
  );
}
