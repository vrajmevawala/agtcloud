import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ScheduleDemoModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
}

const ScheduleDemoModal = ({ open, onClose }: ScheduleDemoModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] h-[90vh] p-0">
        <iframe
          width="100%"
          height="100%"
          src="https://book.agtpl.in/portal-embed#/173519000000029008"
          frameBorder="0"
          allowFullScreen
        />
      </DialogContent>
    </Dialog>
  );
};

export default ScheduleDemoModal; 