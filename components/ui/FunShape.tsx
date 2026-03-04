type FunShapeProps = {
  position?: "top-left" | "bottom-right";
};

export default function FunShape({ position = "top-left" }: FunShapeProps) {
  return (
    <div
      aria-hidden
      className={`absolute ${
        position === "top-left"
          ? "top-6 left-6"
          : "bottom-6 right-6"
      } w-24 h-24 rounded-full bg-creativo-magenta/15 blur-xl`}
    />
  );
}
