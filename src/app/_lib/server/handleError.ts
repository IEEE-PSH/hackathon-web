import { TRPCError } from "@trpc/server";
import { BaseError, redirectToSignInWithError } from "../server-utils";
import { type NextRequest } from "next/server";

export default function (req: NextRequest, cause: unknown) {
  if (cause instanceof BaseError) {
    return redirectToSignInWithError(req, cause);
  }

  if (cause instanceof TRPCError) {
    const trpc_error = new BaseError({
      error_title: cause.code,
      error_desc: cause.message,
    });

    return redirectToSignInWithError(req, trpc_error);
  }

  const unknown_error = new BaseError({
    error_title: "Unknown Error",
    error_desc: null,
  });

  return redirectToSignInWithError(req, unknown_error);
}
