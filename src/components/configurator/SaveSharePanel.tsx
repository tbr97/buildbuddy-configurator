import { Copy, Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface SaveSharePanelProps {
  exportConfig: () => string;
  shareLink: () => string;
  clearAll: () => void;
  selectedCount: number;
}

const SaveSharePanel = ({ exportConfig, shareLink, clearAll, selectedCount }: SaveSharePanelProps) => {
  const handleExport = () => {
    const text = exportConfig();
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "configurazione-techlab.txt";
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Configurazione esportata!");
  };

  const handleShare = () => {
    const link = shareLink();
    navigator.clipboard.writeText(link);
    toast.success("Link copiato negli appunti!");
  };

  const handleCopy = () => {
    const text = exportConfig();
    navigator.clipboard.writeText(text);
    toast.success("Configurazione copiata!");
  };

  return (
    <div className="flex flex-wrap gap-2">
      <Button
        size="sm"
        variant="outline"
        onClick={handleCopy}
        disabled={selectedCount === 0}
      >
        <Copy className="mr-1.5 h-3.5 w-3.5" />
        Copia
      </Button>
      <Button
        size="sm"
        variant="outline"
        onClick={handleExport}
        disabled={selectedCount === 0}
      >
        <Download className="mr-1.5 h-3.5 w-3.5" />
        Esporta
      </Button>
      <Button
        size="sm"
        variant="outline"
        onClick={handleShare}
        disabled={selectedCount === 0}
      >
        <Share2 className="mr-1.5 h-3.5 w-3.5" />
        Condividi
      </Button>
      <Button
        size="sm"
        variant="ghost"
        onClick={clearAll}
        disabled={selectedCount === 0}
        className="text-destructive hover:text-destructive"
      >
        Resetta
      </Button>
    </div>
  );
};

export default SaveSharePanel;
