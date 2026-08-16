// The "Aperture" mark (handoff option 1a): concentric squares, the inner one
// opened on its right edge — pure geometry, outer stroke in ink, inner in
// gold. Decorative (aria-hidden); the wordmark or page title carries the name.

export function Mark({ size = 22 }: { size?: number }) {
  return (
    <span
      className="mark"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <span className="mark-outer" />
      <span className="mark-inner" />
    </span>
  );
}
