import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import type { CvContactKind } from "@/data/cv";

export const contactIcons: Record<CvContactKind, React.ComponentType<{ className?: string }>> = {
    location: MapPin,
    phone: Phone,
    email: Mail,
    website: Globe,
    linkedin: FaLinkedin,
    github: FaGithub,
};
