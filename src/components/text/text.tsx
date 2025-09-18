import styles from "@/components/text/text.module.css";

type TextProps = {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "label";
  variant: "body" | "heading" | "link";
  className?: string;
  children: React.ReactNode;
};

function getStyle(variant: TextProps["variant"]) {
  switch (variant) {
    case "body":
      return styles.body;
    case "heading":
      return styles.heading;
    default:
      return "";
  }
}

export default function Text({ tag, variant, className, children }: TextProps) {
  const Tag = tag;

  return <Tag className={`${getStyle(variant)} ${className}`}>{children}</Tag>;
}
