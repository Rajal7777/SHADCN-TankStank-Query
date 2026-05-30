"use client";

import dynamic from "next/dynamic";
import type { PropsWithChildren } from "react";

const ThemeProvider: any = dynamic(
    () => import("./ThemeProvider").then((mod) => mod.ThemeProvider),
    { ssr: false }
);

export default function ThemeProviderWrapper({
    children,
    ...props
}: PropsWithChildren<Record<string, unknown>>) {
    return <ThemeProvider {...props}>{children}</ThemeProvider>;
}
