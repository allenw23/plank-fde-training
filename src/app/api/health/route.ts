import { commit } from "@/lib/config";

export function GET() {
  return Response.json({ status: "ok", commit });
}
