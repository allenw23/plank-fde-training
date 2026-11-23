import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const teams = [
  {
    name: "Operations",
    description:
      "Answers policy questions and files requests from any channel.",
  },
  {
    name: "Finance",
    description:
      "Explains invoices and expense rules, and tracks what needs approval.",
  },
  {
    name: "Support",
    description:
      "Drafts replies from the knowledge base, with sources, for a person to send.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="border-b">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-3.5">
          <span className="font-semibold">WorkBot</span>
          <Link
            href="/settings"
            className={buttonVariants({ variant: "ghost", size: "sm" })}
          >
            Settings
          </Link>
        </div>
      </header>
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-20 px-6 pt-24 pb-16">
        <section className="flex max-w-2xl flex-col gap-6">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            An assistant for the teams that keep a company running
          </h1>
          <p className="text-lg text-muted-foreground">
            WorkBot answers questions, files requests and runs workflows for
            operations, finance and support teams, and for the customers they
            serve.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/settings" className={buttonVariants({ size: "lg" })}>
              Open settings
              <ArrowRight />
            </Link>
            <a
              href="/api/health"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Health check
            </a>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          {teams.map((team) => (
            <Card key={team.name}>
              <CardHeader>
                <CardTitle>
                  <h2>{team.name}</h2>
                </CardTitle>
                <CardDescription>{team.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </section>
      </main>
    </div>
  );
}
