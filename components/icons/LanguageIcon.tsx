import clsx from "clsx";

type LanguageIconProps = {
  language: string;
  className?: string;
};

export default function LanguageIcon({
  language,
  className,
}: LanguageIconProps) {
  return (
    <i
      className={clsx(`devicon-${language}-plain colored text-xl`, className)}
    ></i>
  );
}
