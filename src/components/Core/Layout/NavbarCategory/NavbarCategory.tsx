import { Text } from "@mantine/core";
import { ChevronDownIcon } from "@modulz/radix-icons";
import { FC, useState } from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";

import { GroupInterface } from "../nav-links";
import useStyles from "./NavbarCategory.style";

interface NavbarCategoryProps {
  group: GroupInterface;
  onLinkClick(): void;
}

function hasActiveLink(group: GroupInterface, pathname: string) {
  if (group.links.some(link => link.path === pathname)) {
    return true;
  }
  return false;
}

export const NavbarCategory: FC<NavbarCategoryProps> = ({
  group,
  onLinkClick,
}) => {
  const { pathname } = useLocation();
  const [collapsed, setCollapsed] = useState(!hasActiveLink(group, pathname));
  const { classes, cx } = useStyles();

  const uncategorized = group.links.map(link => (
    <NavLink
      key={link.text}
      to={link.path}
      className={data =>
        `${classes.link} ${data.isActive && classes.linkActive}`
      }
      onClick={onLinkClick}
    >
      {link.text}
    </NavLink>
  ));

  return (
    <div key={group.name} className={classes.category}>
      <button
        className={classes.header}
        type="button"
        onClick={() => setCollapsed(c => !c)}
      >
        <ChevronDownIcon
          className={cx(classes.icon, { [classes.iconCollapsed]: collapsed })}
        />
        <Text
          className={classes.title}
          weight={700}
          size="xs"
          transform="uppercase"
        >
          {group.name}
        </Text>
      </button>
      {!collapsed && uncategorized}
    </div>
  );
};
