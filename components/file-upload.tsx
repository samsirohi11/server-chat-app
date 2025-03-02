"user client";

import { X } from "lucide-react";
import Image from "next/image";

import { UploadDropzone } from "@/lib/uploadthing";

interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "messageFile" | "serverImage";
  onError: (message: string) => void;
}

const FileUpload = ({
  onChange,
  value,
  endpoint,
  onError,
}: FileUploadProps) => {
  const fileType = value?.split(".").pop();

  if (value && fileType !== "pdf") {
    return (
      <div className="relative h-24 w-24">
        <Image fill src={value} alt="Upload" className="rounded-full" />
        <button
          onClick={() => onChange("")}
          className="bg-rose-600 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
        onError("");
      }}
      onUploadError={(error: Error) => {
        let errorMessage = error.message;
        console.log(errorMessage);
        if (errorMessage.includes("Invalid config: FileSizeMismatch")) {
          errorMessage = "File size too big";
        }
        onError(errorMessage);
      }}
    />
  );
};

export default FileUpload;
