import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Activity, LucideIcon } from "lucide-react";
import { SetupNotice } from "../components/SetupNotice";
import Sidebar from "../components/SideBar";
import { Background } from "../components/Background";

import {
  Users,
  Wallet,
  CalendarDays,
  Bell,
  ChartBar,
  Settings,
  Share2,
} from "lucide-react";

export const DASHBOARD_METRICS = [
  {
    title: "Total Members",
    icon: Users,
    value: "2,345",
    change: "+180 from last month",
    subtext: "Active community growth",
  },
  {
    title: "NFT Holders",
    icon: Wallet,
    value: "1,876",
    subtext: "80% holder ratio",
    change: "+45 this week",
  },
  {
    title: "Engagement Rate",
    icon: Activity,
    value: "64%",
    change: "+12% from last month",
    subtext: "Above industry average",
  },
  {
    title: "Upcoming Events",
    icon: CalendarDays,
    value: "8",
    subtext: "Next 30 days",
    change: "+3 new events",
  },
];

export const RECENT_ACTIVITIES = [
  {
    id: 1,
    type: "member",
    title: "New member joined: @cryptowhale",
    timestamp: "2 minutes ago",
    icon: Users,
  },
  {
    id: 2,
    type: "event",
    title: "AMA Session scheduled",
    timestamp: "1 hour ago",
    icon: CalendarDays,
  },
  {
    id: 3,
    type: "engagement",
    title: "Community milestone reached",
    timestamp: "3 hours ago",
    icon: Activity,
  },
  {
    id: 4,
    type: "announcement",
    title: "New roadmap published",
    timestamp: "5 hours ago",
    icon: Bell,
  },
];

export const QUICK_ACTIONS = [
  {
    id: "create-event",
    label: "Create New Event",
    icon: CalendarDays,
    primary: true,
    onClick: () => console.log("Create event clicked"),
  },
  {
    id: "send-announcement",
    label: "Send Announcement",
    icon: Bell,
    onClick: () => console.log("Send announcement clicked"),
  },
  {
    id: "view-analytics",
    label: "View Analytics",
    icon: ChartBar,
    onClick: () => console.log("View analytics clicked"),
  },
  {
    id: "invite-members",
    label: "Invite Members",
    icon: Share2,
    onClick: () => console.log("Invite members clicked"),
  },
  {
    id: "settings",
    label: "Community Settings",
    icon: Settings,
    onClick: () => console.log("Settings clicked"),
  },
];

interface DashboardMetric {
  title: string;
  icon: LucideIcon;
  value: string;
  change?: string;
  subtext?: string;
}

interface Activity {
  id: number;
  type: string;
  title: string;
  timestamp: string;
  icon: LucideIcon;
}

interface QuickAction {
  id: string;
  label: string;
  icon: LucideIcon;
  primary?: boolean;
  onClick?: () => void;
}

const MetricCard: React.FC<DashboardMetric> = ({
  title,
  icon: Icon,
  value,
  change,
  subtext,
}) => (
  <div className="relative overflow-hidden bg-gradient-to-br from-cyan-100 via-white backdrop-blur-md rounded-3xl shadow-lg border border-gray-300 hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 p-8">
    {/* Decorative Background */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/40 to-transparent rounded-full -mr-16 -mt-16 blur-3xl" />
    <div className="absolute bottom-0 left-0 w-28 h-28 bg-gradient-to-tl from-pink-200/20 to-transparent rounded-full -ml-12 -mb-12 blur-3xl" />

    <div className="relative z-10">
      {/* Icon with Animation */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="inline-flex items-center justify-center w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-md border border-gray-300"
      >
        <Icon className="h-7 w-7 text-gray-800" />
      </motion.div>

      {/* Title and Metrics */}
      <div className="space-y-2">
        <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
          {title}
        </h3>
        <div className="flex items-baseline gap-2">
          <div className="text-4xl font-bold text-gray-900">{value}</div>
          {change && (
            <div className="flex items-center gap-1">
              <ArrowUpRight className="h-5 w-5 text-green-500" />
              <p className="text-sm font-medium text-green-500">{change}</p>
            </div>
          )}
        </div>
        {subtext && <p className="text-sm text-gray-500">{subtext}</p>}
      </div>
    </div>
  </div>
);

const ActivityItem: React.FC<Omit<Activity, "type">> = ({
  title,
  timestamp,
  icon: Icon,
}) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    whileHover={{ x: 5 }}
    className="flex items-center gap-4 p-3 rounded-xl hover:bg-zinc-50 transition-colors"
  >
    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-zinc-50 to-zinc-100 flex items-center justify-center">
      <Icon className="h-5 w-5 text-zinc-900" />
    </div>
    <div className="flex-1 min-w-0">
      <p className="font-medium text-zinc-900 truncate">{title}</p>
      <p className="text-sm text-zinc-500">{timestamp}</p>
    </div>
    <motion.button
      whileHover={{ scale: 1.1 }}
      className="p-2 text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 rounded-xl transition-colors"
    >
      <ArrowUpRight className="h-4 w-4" />
    </motion.button>
  </motion.div>
);

const ActionButton: React.FC<QuickAction> = ({
  label,
  icon: Icon,
  primary,
  onClick,
}) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className={`w-full h-12 flex items-center justify-start gap-4 px-4 rounded-xl ${
      primary
        ? "bg-zinc-900 text-white hover:bg-zinc-800"
        : "border-2 border-zinc-900 text-zinc-900 hover:shadow-[3px_3px_0px_rgba(0,0,0,1)]"
    } font-medium focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2`}
  >
    <Icon className="h-5 w-5" />
    {label}
  </motion.button>
);

export default function Home() {
  const isSetup = false;

  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.1,
  //     },
  //   },
  // };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100">
      <Background />
      <div className="flex">
        <div className="hidden lg:block w-20 border-r border-zinc-200 bg-white/80 backdrop-blur-sm fixed top-0 h-screen">
          <Sidebar />
        </div>

        <main className="flex-1 lg:pl-20">
          <motion.div
            initial="hidden"
            animate="visible"
            className="h-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 space-y-6 sm:space-y-8"
          >
            {!isSetup ? (
              <SetupNotice />
            ) : (
              <>
                <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 auto-rows-fr">
                  {DASHBOARD_METRICS.map((metric, index) => (
                    <MetricCard key={index} {...metric} />
                  ))}
                </div>

                <div className="grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-zinc-100 p-6"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-lg font-medium tracking-tight text-zinc-900">
                        Recent Activity
                      </h2>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="text-sm text-zinc-900 hover:text-zinc-700 font-medium"
                      >
                        View All
                      </motion.button>
                    </div>
                    <div className="space-y-6">
                      {RECENT_ACTIVITIES.map((activity) => (
                        <ActivityItem key={activity.id} {...activity} />
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-zinc-100 p-6"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-lg font-medium tracking-tight text-zinc-900">
                        Quick Actions
                      </h2>
                    </div>
                    <div className="space-y-4">
                      {QUICK_ACTIONS.map((action) => (
                        <ActionButton key={action.id} {...action} />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </>
            )}
          </motion.div>
        </main>
      </div>
    </div>
  );
}
