import { tv } from "tailwind-variants"

export const ButtonTheme = tv({
  base: "rounded-full border bg-opacity-100 px-4 py-2.5 font-medium transition-all duration-300 hover:bg-opacity-100 hover:text-white hover:scale-105 active:opacity-90 disabled:cursor-not-allowed disabled:opacity-80 dark:bg-opacity-10 dark:hover:bg-opacity-100",
  variants: {
    variant: {
      primary: "border-primary-500 bg-primary-100 text-primary-500 hover:bg-primary-500 dark:bg-primary-500",
      // secondary:
      //   "text-secondary-500 bg-secondary-100 dark:bg-secondary-500 border-secondary-500 hover:bg-secondary-500",
      // success: "text-success-500 bg-success-100 dark:bg-success-500 border-success-500 hover:bg-success-500",
      // danger: "text-danger-500 bg-danger-100 dark:bg-danger-500 border-danger-500 hover:bg-danger-500",
      // warning: "text-warning-500 bg-warning-100 dark:bg-warning-500 border-warning-500 hover:bg-warning-500",
      // info: "text-info-500 bg-info-100 dark:bg-info-500 border-info-500 hover:bg-info-500",
      // light: "bg-secondary-50 dark:bg-secondary-50/10 border-secondary-50/10 hover:bg-secondary-500",
      // dark: "text-dark-500 dark:text-dark-100 bg-dark-100 dark:bg-dark-500 border-dark-500 hover:bg-dark-500",
    },
    dark: {
      true: "bg-opacity-100 dark:bg-opacity-100",
    },
    outline: {
      true: "bg-transparent dark:bg-transparent",
      false: "border-transparent text-white dark:border-transparent",
    },
  },
  // compoundVariants: [
  //   {
  //     variant: "link",
  //     class: "text-primary-500 hover:underline hover:text-primary-500",
  //   },
  //   // {
  //   //   variant: "link",
  //   //   dark: true,
  //   //   class: "text-primary-500 hover:text-primary-500 hover:underline",
  //   // },
  //   // {
  //   //   variant: 'light',
  //   //   dark: true,
  //   //   class: `bg-secondary-500`,
  //   // },
  //   ...["primary", "secondary", "success", "danger", "warning", "info", "dark"].map((variant) => ({
  //     variant: variant as unknown as BUTTON_VARIANTS,
  //     dark: true,
  //     class: `bg-${variant}-500`,
  //   })),
  // ],
  defaultVariants: {
    variant: "primary",
  },
})
