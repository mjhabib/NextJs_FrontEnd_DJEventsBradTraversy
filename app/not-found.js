import Link from "next/link";
import classes from "@/styles/not-found.module.css";
import WarningIcon from "@mui/icons-material/Warning";

export default function NotFoundPage() {
  return (
    <div className={classes.error}>
      <h1>
        <WarningIcon style={{ fontSize: '2rem' }}/>
        404 - Page Not Found
      </h1>
      <h4>Sorry, there is nothing here</h4>
      <Link href="/">Go Back Home</Link>
    </div>
  );
}
