declare module "react" {
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}

export * from "./Author";
export * from "./Linker";
export * from "./Post";
