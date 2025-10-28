import { cravecrafters } from "./projects/cravecrafters";
import TicketManagementSystemDetails from "./projects/TicketManagementSystemDetails";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  detailsUrl: string;
  // component may accept props (like project) so keep it flexible
  component?: React.FC<any>;
  // optional readme for richer project entries
  readme?: string;
  screenshots?: {
    admin: string[];
    mobile: string[];
  };
}

export const projects: Project[] = [cravecrafters, {
  id: "ticketmanagementsystem",
  title: "Ticket Management System",
  subtitle: "FieldSync: Enterprise Field Service Management Platform",
  description:
    "A production-grade field service management platform built from scratch to solve real operational challenges. This enterprise SaaS solution handles the complete lifecycle of field operations—from automated ticket creation through email parsing, real-time engineer tracking with background GPS, instant multi-party communication, to secure payment processing across Stripe and Razorpay.",
  features: [
    "Multi-Tenant Data Architecture",
    "Automated Email-to-Ticket System",
    "Real-Time Location Tracking",
    "Real-Time Chat System",
    "Intelligent Ticket Workflow",
    "Analytics Dashboard",
    "Dual Payment Gateway Integration",
  ],
  tech: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Socket.IO",
    "GraphQL",
    "React",
    "React Native",
    "AWS S3",
    "Cloudinary",
    "Stripe",
    "Razorpay",
  ],
  liveUrl: "",
  githubUrl: "",
  detailsUrl: "/project/ticketmanagementsystem",
  component: TicketManagementSystemDetails,
  screenshots: {
    admin: [
      new URL("../assets/Screenshots/admin-panel/AllUsers.png", import.meta.url).href,
      new URL("../assets/Screenshots/admin-panel/Chats.png", import.meta.url).href,
      new URL("../assets/Screenshots/admin-panel/Company.png", import.meta.url).href,
      new URL("../assets/Screenshots/admin-panel/Dashboard.png", import.meta.url).href,
      new URL("../assets/Screenshots/admin-panel/Engineers.png", import.meta.url).href,
      new URL("../assets/Screenshots/admin-panel/TIcketCrea1.png", import.meta.url).href,
      new URL("../assets/Screenshots/admin-panel/TicketCrea2.png", import.meta.url).href,
      new URL("../assets/Screenshots/admin-panel/TicketCrea3.png", import.meta.url).href,
      new URL("../assets/Screenshots/admin-panel/Tickets.png", import.meta.url).href,
      // keep 10th as placeholder for now
      "../assets/Screenshots/admin-panel/Screenshot 10.png",
    ],
    mobile: [
      "https://via.placeholder.com/400x800.png?text=Mobile+App+Screenshot+1",
      "https://via.placeholder.com/400x800.png?text=Mobile+App+Screenshot+2",
      "https://via.placeholder.com/400x800.png?text=Mobile+App+Screenshot+3",
      "https://via.placeholder.com/400x800.png?text=Mobile+App+Screenshot+4",
      "https://via.placeholder.com/400x800.png?text=Mobile+App+Screenshot+5",
      "https://via.placeholder.com/400x800.png?text=Mobile+App+Screenshot+6",
      "https://via.placeholder.com/400x800.png?text=Mobile+App+Screenshot+7",
      "https://via.placeholder.com/400x800.png?text=Mobile+App+Screenshot+8",
      "https://via.placeholder.com/400x800.png?text=Mobile+App+Screenshot+9",
      "https://via.placeholder.com/400x800.png?text=Mobile+App+Screenshot+10",
    ],
  },
}];
