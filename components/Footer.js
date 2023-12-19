import Link from "next/link";
import classes from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <p>Copyright &copy; DJ Events {new Date().getFullYear()}</p>
      <p>
        <Link href="/about">About this project</Link>
      </p>
    </footer>
  );
}
