
export default function PawIcon({
  size = 20,
  color = "currentColor",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill={color}>
      <ellipse cx="50" cy="75" rx="22" ry="18" />
      <ellipse cx="20" cy="55" rx="12" ry="15" transform="rotate(-15 20 55)" />
      <ellipse cx="80" cy="55" rx="12" ry="15" transform="rotate(15 80 55)" />
      <ellipse cx="32" cy="35" rx="10" ry="13" transform="rotate(-10 32 35)" />
      <ellipse cx="68" cy="35" rx="10" ry="13" transform="rotate(10 68 35)" />
    </svg>
  );
}
 