import Link from "next/link";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

// const classNames = "italic hover:underline underline-offset-4";
const classNames =
  "underline underline-offset-2 decoration-red-200 hover:decoration-inherit";

type LinkProps = {
  href: string;
  children: React.ReactNode;
  scroll?: boolean;
} & HTMLAttributes<HTMLAnchorElement>;

export const ExternalLink: React.FC<LinkProps> = (props) => {
  return (
    <a href={props.href} className={twMerge(classNames, props.className)}>
      {props.children}
    </a>
  );
};

export const InternalLink: React.FC<LinkProps> = (props) => {
  const { className, children, href, ...rest } = props;
  return (
    <Link href={href} {...rest}>
      <div className={twMerge(classNames, className)}>{children}</div>
    </Link>
  );
};

type LinkButtonProps = {
  onClick(): void;
  children: React.ReactNode;
} & HTMLAttributes<HTMLAnchorElement>;

export const LinkButton: React.FC<LinkButtonProps> = (props) => {
  return (
    <button onClick={props.onClick}>
      <div className={twMerge(classNames, props.className)}>
        {props.children}
      </div>
    </button>
  );
};
