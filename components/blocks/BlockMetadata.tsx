import { Input } from "../ui/Input";
import { Textarea } from "../ui/TextArea";
import { Select } from "../ui/Select";
import { BadgeInfo } from "lucide-react";
import { SUPPORTED_LANGUAGES } from "@/constants/languages";

interface BlockMetadataProps {
  title: string;
  description: string;
  language:string;
  onChange: (field: string, value: string) => void;
}

export const BlockMetadata = ({
  title,
  description,
  language,
  onChange,
}: BlockMetadataProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex gap-2 items-center">
          <BadgeInfo className="text-primary-500 h-6 w-6 "/>
          Block Details
        </h2>
      </div>

      <div className="space-y-4">
        <Input
          label="Title"
          value={title}
          onChange={(e) => onChange("title", e.target.value)}
          placeholder="Enter a descriptive title for your block"
          required
        />

        <Textarea
          label="Description"
          value={description}
          onChange={(e) => onChange("description", e.target.value)}
          placeholder="Describe what this block of snippets is about"
          rows={3}
        />
        <Select
          label="Language or Framework"
          value={language}
          onChange={(e) => onChange("language", e.target.value)}
          required
        >
          <option value="">Select</option>
          {SUPPORTED_LANGUAGES.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.label}
            </option>
          ))}
        </Select>
      </div>
    </div>
  );
};
