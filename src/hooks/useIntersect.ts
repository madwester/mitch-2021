import { useEffect, useMemo, useState } from "react";

export const useIntersect = ({
  root,
  rootMargin,
  threshold,
  targets,
}: IntersectionObserverInit & {
  targets: Array<HTMLElement>;
}) => {
  const [targetRatios, setTargetRatios] = useState<
    ReadonlyMap<Element, { intersectionRatio: number; isIntersecting: boolean }>
  >(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setTargetRatios((current) => {
          const updated = new Map(current.entries());
          entries.forEach((entry) => {
            updated.set(entry.target, { intersectionRatio: entry.intersectionRatio, isIntersecting: entry.isIntersecting });
          });
          return updated;
        });
      },
      {
        root,
        rootMargin,
        threshold,
      },
    );

    targets.map((targetElement) => {
      observer.observe(targetElement);
    });

    return () => observer.disconnect();
  }, [root, rootMargin, targets, threshold, setTargetRatios]);

  const current = useMemo(() => {
    const sorted = Array.from(targetRatios.entries())
      .filter(([_key, value]) => value.isIntersecting)
      .sort(([_aKey, aValue], [_bKey, bValue]) => aValue.intersectionRatio - bValue.intersectionRatio);

    if (sorted.length > 0) {
      return sorted[0][0];
    }
  }, [targetRatios]);

  return { current };
};
