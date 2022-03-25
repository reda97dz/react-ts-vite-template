import { createStyles, MantineTheme } from "@mantine/core";

export const NAVBAR_BREAKPOINT = 760;

export default createStyles((theme: MantineTheme) => ({
  body: {
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.xl * 2,
    paddingLeft: theme.spacing.md,
    paddingTop: theme.spacing.md,

    [`@media (max-width: ${NAVBAR_BREAKPOINT}px)`]: {
      paddingBottom: 120,
    },
  },

  links: {
    marginTop: theme.spacing.lg,
  },
}));
