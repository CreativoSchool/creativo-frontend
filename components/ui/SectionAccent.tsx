type SectionAccentProps = {
  align?: "left" | "center";
};

export default function SectionAccent({
  align = "left",
}: SectionAccentProps) {
  return (
    <div
      className={
        align === "center"
          ? "h-[3px] w-10 rounded-full bg-creativo-magenta mx-auto mt-4"
          : "h-[3px] w-10 rounded-full bg-creativo-magenta mt-4"
      }
    />
  );
}
