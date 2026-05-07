import { Button } from "@/components/ui/Button";

export function BookingPanel({
  title,
  body,
  button,
  href,
  external = true,
}: {
  title: string;
  body: string;
  button: string;
  href: string;
  external?: boolean;
}) {
  return (
    <div className="rounded-lg bg-clay/20 px-5 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
      <h2 className="text-wrap font-serif text-3xl leading-tight text-charcoal sm:text-4xl">{title}</h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-charcoal/72">{body}</p>
      <div className="mt-6 flex">
        <Button href={href} external={external}>
          {button}
        </Button>
      </div>
    </div>
  );
}
