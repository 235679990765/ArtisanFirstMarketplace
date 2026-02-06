const SectionDivider = ({ variant = "default" }: { variant?: "default" | "wave" | "tribal" }) => {
  if (variant === "wave") {
    return (
      <div className="relative h-24 overflow-hidden bg-transparent">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full text-muted/30"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C50,80,200,90,321.39,56.44Z"
            fill="currentColor"
          />
        </svg>
      </div>
    );
  }

  if (variant === "tribal") {
    return (
      <div className="py-12 flex items-center justify-center gap-4">
        <span className="w-16 h-px bg-border" />
        <svg width="24" height="24" viewBox="0 0 24 24" className="text-secondary">
          <path
            d="M12 2 L22 12 L12 22 L2 12 Z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
        <span className="w-16 h-px bg-border" />
      </div>
    );
  }

  return (
    <div className="py-8 flex items-center justify-center">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-secondary/40" />
        <span className="w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <span className="w-2 h-2 rounded-full bg-primary/40" />
        <span className="w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <span className="w-2 h-2 rounded-full bg-secondary/40" />
      </div>
    </div>
  );
};

export default SectionDivider;
