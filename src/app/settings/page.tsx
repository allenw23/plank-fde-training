import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { commit, env } from "@/lib/config";

export const metadata: Metadata = { title: "Settings" };

export default function Settings() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-6 pt-16 pb-16">
      <h1 className="text-2xl font-semibold tracking-tight">Settings</h1>
      <Card className="max-w-xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <h2>Deployment</h2>
            <Badge variant="secondary">{env}</Badge>
          </CardTitle>
          <CardDescription>
            The environment this instance runs in and the commit it serves.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <dl className="grid grid-cols-[5rem_1fr]">
            <dt className="text-muted-foreground">Commit</dt>
            <dd className="font-mono">{commit}</dd>
          </dl>
        </CardContent>
      </Card>
    </main>
  );
}
