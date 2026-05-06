import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-svh items-center justify-center bg-ivory px-5 text-center">
      <div>
        <h1 className="font-serif text-5xl text-charcoal">Page not found</h1>
        <Link className="mt-6 inline-block text-olive underline" href="/el">
          Return home
        </Link>
      </div>
    </main>
  );
}
