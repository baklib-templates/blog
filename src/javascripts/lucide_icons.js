import { createIcons } from "lucide"
import {
  ArrowLeft,
  CalendarClock,
  ChevronRight,
  CircleCheck,
  CircleX,
  Image,
  Info,
  Layers,
  LayoutGrid,
  Menu,
  Search,
  Tag,
  ThumbsUp,
  TriangleAlert,
  User,
} from "lucide"

export const lucideIcons = {
  ArrowLeft,
  CalendarClock,
  ChevronRight,
  CircleCheck,
  CircleX,
  Image,
  Info,
  Layers,
  LayoutGrid,
  Menu,
  Search,
  Tag,
  ThumbsUp,
  TriangleAlert,
  User,
}

export function initLucideIcons() {
  createIcons({ icons: lucideIcons })
}
