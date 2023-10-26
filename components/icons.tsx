'use client';

import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Command,
  CreditCard,
  File,
  FileText,
  HelpCircle,
  Image,
  Laptop,
  Loader2,
  Moon,
  MoreVertical,
  Pizza,
  Plus,
  Settings,
  SunMedium,
  Trash,
  User,
  X,
  LogOut,
} from 'lucide-react';

export const Icons = ({ icon }: { icon: string }): JSX.Element => {
  switch (icon) {
    case 'alert-triangle':
      return <AlertTriangle />;
    case 'arrow-right':
      return <ArrowRight />;
    case 'check':
      return <Check />;
    case 'chevron-left':
      return <ChevronLeft />;
    case 'chevron-right':
      return <ChevronRight />;
    case 'log-out':
      return <LogOut />;
    case 'command':
      return <Command />;
    case 'credit-card':
      return <CreditCard />;
    case 'file':
      return <File />;
    case 'file-text':
      return <FileText />;
    case 'help-circle':
      return <HelpCircle />;
    case 'image':
      return <Image />;
    case 'laptop':
      return <Laptop />;
    case 'loader2':
      return <Loader2 />;
    case 'moon':
      return <Moon />;
    case 'more-vertical':
      return <MoreVertical />;
    case 'pizza':
      return <Pizza />;
    case 'plus':
      return <Plus />;
    case 'settings':
      return <Settings />;
    case 'sun-medium':
      return <SunMedium />;
    case 'trash':
      return <Trash />;
    case 'user':
      return <User />;
    case 'x':
      return <X />;
    default:
      return <></>;
  }
};
