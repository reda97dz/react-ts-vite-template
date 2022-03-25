import {
  AppShell,
  Burger,
  Header,
  MediaQuery,
  Navbar,
  ScrollArea,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { FC, useState } from "react";

import useStyles from "./Layout.styles";
import navlinks from "./nav-links";
import { NavbarCategory } from "./NavbarCategory";

export const Layout: FC = props => {
  const { children } = props;
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  const { classes } = useStyles();

  return (
    <AppShell
      fixed
      navbarOffsetBreakpoint="sm"
      padding={0}
      navbar={
        <Navbar hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 250 }}>
          <ScrollArea style={{ height: "100vh" }} type="scroll">
            <div className={classes.body}>
              <div className={classes.links}>
                {navlinks.map(group => (
                  <NavbarCategory
                    key={group.name}
                    group={group}
                    onLinkClick={() => setOpened(false)}
                  />
                ))}
              </div>
            </div>
          </ScrollArea>
        </Navbar>
      }
      header={
        <Header p="sm" height={50}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
                onClick={() => setOpened(o => !o)}
              />
            </MediaQuery>
            <Text> Title </Text>
            <Text> </Text>
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
};
