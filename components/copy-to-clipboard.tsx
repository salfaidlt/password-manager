"use client"

import { Button } from "@/components/ui/button"; // Assuming you're using the Shadcn Button component
import { CircleCheck, Copy } from "lucide-react";
import { useState } from "react";

const CopyToClipboard = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyText = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000); // Reset the success message after 2 seconds
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="flex items-center space-y-2">
      <Button variant="ghost" onClick={() => copyText("This is the text to copy")}>
        {copySuccess ? <CircleCheck /> : <Copy />}
      </Button>
    </div>
  );
};

export default CopyToClipboard;
