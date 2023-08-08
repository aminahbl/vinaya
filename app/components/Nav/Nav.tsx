import { HomeOutlined } from "@ant-design/icons";

import Link from "next/link";

import styles from "./Nav.module.css";

const Nav = ({ navItems }: { navItems: any[] }) => {
  const defaultIconStyles = {
    fontSize: 36,
    color: "#606",
  };

  return (
    <nav className={styles.nav}>
      {navItems.map((item: any) => {
        const { href, id, Icon, styles } = item;

        const iconStyles = styles
          ? {
              ...defaultIconStyles,
              ...styles,
            }
          : defaultIconStyles;

        return (
          <Link key={id} href={href}>
            <Icon style={iconStyles} />
          </Link>
        );
      })}
      <Link href="/">
        <HomeOutlined style={defaultIconStyles} />
      </Link>
    </nav>
  );
};

export default Nav;
