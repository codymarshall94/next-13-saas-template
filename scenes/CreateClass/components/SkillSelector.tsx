import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface SkillSelectorProps {
  options: string[];
  onSelect: (value: string) => void;
  placeholder: string;
}

export default function SkillSelector({
  options,
  onSelect,
  placeholder,
}: SkillSelectorProps) {
  return (
    <Select onValueChange={onSelect}>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option, index) => (
          <SelectItem key={index} value={option}>
            {option.slice(0, 1).toUpperCase() + option.slice(1)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
