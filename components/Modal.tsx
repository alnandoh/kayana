import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect } from "react";
import { motion } from "motion/react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  children: React.ReactNode;
  layoutId: string;
  currentIndex: number;
  totalImages: number;
}

export function Modal({
  isOpen,
  onClose,
  children,
  onNext,
  onPrev,
  layoutId,
  currentIndex,
  totalImages,
}: ModalProps) {
  const handleEscape = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, handleEscape]);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80"
      onClick={onClose}
    >
      <motion.div
        layoutId={layoutId}
        className="relative max-w-4xl w-full h-[80vh] bg-natural-cream rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-1 right-1 sm:top-4 sm:right-4 z-10 flex items-center gap-4">
          <span className="px-3 py-1 rounded-full bg-black/50 text-natural-cream text-sm">
            {currentIndex} / {totalImages}
          </span>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-black/50 text-natural-cream hover:bg-black/75 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>

        <button
          onClick={onPrev}
          className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-natural-cream hover:bg-black/75 transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={onNext}
          className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-natural-cream hover:bg-black/75 transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </motion.div>
    </motion.div>
  );
}
