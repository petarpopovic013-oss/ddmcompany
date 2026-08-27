type ArrowIconProps = {
  direction?: "up-right" | "down";
};

export function ArrowIcon({ direction = "up-right" }: ArrowIconProps) {
  const path = direction === "down"
    ? "M4 6.5 8 10.5l4-4"
    : "M4.5 11.5 11.5 4.5M6 4.5h5.5V10";

  return (
    <svg
      className="arrow-icon"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d={path}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
