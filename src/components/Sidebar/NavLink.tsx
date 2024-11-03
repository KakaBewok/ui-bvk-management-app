import { Link } from "react-router-dom";

export default function NavLink({
  active = false,
  url,
  className = "",
  children,
}: {
  active?: boolean;
  url: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={url}
      className={
        "group relative flex items-center gap-3 rounded-sm py-2 px-4 font-medium text-slate-300 duration-200 ease-in-out hover:bg-slate-700 hover:text-slate-300 " +
        (active ? "bg-slate-700 dark:bg-slate-700 " : "") +
        className
      }
    >
      {children}
    </Link>
  );
}
