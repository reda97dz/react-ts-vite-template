import { createStyles } from "@mantine/core";

export default createStyles(theme => ({
  category: {
    marginBottom: theme.spacing.xs,
  },

  categoryCollapsed: {
    marginBottom: 0,
  },

  header: {
    ...theme.fn.focusStyles(),
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    width: `calc(100% + ${theme.spacing.md}px)`,
    color: theme.colorScheme === "dark" ? theme.white : theme.colors.gray[7],
    height: 32,
    border: 0,
    padding: `0 ${theme.spacing.md}px`,
    paddingLeft: 0,
    cursor: "pointer",
  },

  icon: {
    width: 15,
    height: 15,
    marginRight: theme.spacing.md,
    transform: "rotate(0deg)",
    transition: "transform 150ms ease",
  },

  iconCollapsed: {
    transform: "rotate(-90deg)",
  },

  innerCategory: {
    paddingTop: 15,
  },

  innerCategoryIcon: {
    marginRight: 10,
    width: 14,
    height: 14,
  },

  link: {
    ...theme.fn.focusStyles(),
    WebkitTapHighlightColor: "transparent",
    borderLeft: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[3]
    }`,
    outline: 0,
    display: "block",
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[7],
    paddingLeft: 23,
    paddingRight: theme.spacing.md,
    marginLeft: 7,
    height: 34,
    lineHeight: "34px",
    borderTopRightRadius: theme.radius.sm,
    borderBottomRightRadius: theme.radius.sm,
    fontSize: theme.fontSizes.sm,
    userSelect: "none",
  },

  linkActive: {
    borderLeftColor: theme.colors.blue[7],
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors.blue[9], 0.45)
        : theme.colors.blue[0],
    color:
      theme.colorScheme === "dark"
        ? theme.colors.blue[1]
        : theme.colors.blue[8],
    fontWeight: 500,
  },

  title: {
    userSelect: "none",
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    paddingTop: 4,
    color: theme.colorScheme === "dark" ? theme.white : theme.colors.gray[7],
    letterSpacing: 0.5,
    wordSpacing: 1,
  },
}));
