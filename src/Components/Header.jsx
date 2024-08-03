import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import classes from "../styles/header.module.css"
import { Link } from "react-router-dom";


const Header = () => {

    const [opened, { toggle }] = useDisclosure();

    return (<>
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
            padding="md"
        >
            <AppShell.Header>
                <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="sm"
                    size="sm"
                />
                <ul className={classes.header}>
                    <li> <Link to="/" className={classes.Navlink}>Logo</Link></li>
                    <li> <Link to="/" className={classes.Navlink}>Home</Link></li>
                    <li> <Link to="/projects" className={classes.Navlink}>Projects</Link></li>
                    <li> <Link to="/about" className={classes.Navlink}> About</Link> </li>
                    <li> <Link to="/contact" className={classes.Navlink}>Contact</Link></li>
                </ul>
            </AppShell.Header>

            <AppShell.Main className={classes.main}>Main</AppShell.Main>
        </AppShell>
    </>);
}

export default Header;