import { tv } from "tailwind-variants";

export const AlertTheme = tv({
  base: "rounded-lg border border-opacity-20 bg-opacity-20 px-5 py-3 transition-all",
  variants: {
    variant: {
      primary: "border-primary-500 bg-primary-500 text-primary-800",
      secondary:
        "border-secondary-500 bg-secondary-500 text-secondary-800 dark:text-secondary-200",
      success:
        "border-success-500 border-opacity-10 bg-success-500 bg-opacity-10 text-success-800",
      danger: "border-danger-500 bg-danger-500 text-danger-800",
      warning: "border-warning-500 bg-warning-500 text-warning-800",
      info: "border-info-500 bg-info-500 text-info-800",
      light: "",
      dark: "border-dark-500 bg-dark-500 text-dark-800 dark:text-dark-200",
      link: "",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
