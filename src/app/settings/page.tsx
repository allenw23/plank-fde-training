import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { commit, env } from "@/lib/config";

export default function Settings() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center p-4">
      <Card>
        <CardHeader>
          <CardTitle>
            <h1>Deployment</h1>
          </CardTitle>
          <CardDescription>Where this build is running.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Environment</span>
            <Badge>{env}</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Commit</span>
            <code className="font-mono">{commit}</code>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
