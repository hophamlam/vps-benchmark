"use client";

import React from "react";
import {
  Home,
  Trophy,
  Lock,
  Code,
  Bell,
  GitCompare,
} from "lucide-react";
import { useI18n } from "@/components/i18n/i18n-provider";

type FeatureStatus = "available" | "comingSoon";

type Feature = {
  key: string;
  status: FeatureStatus;
  icon: React.ComponentType<{ className?: string }>;
};

const features: Feature[] = [
  { key: "landingPage", status: "available", icon: Home },
  { key: "leaderboard", status: "available", icon: Trophy },
  { key: "auth", status: "comingSoon", icon: Lock },
  { key: "customScript", status: "comingSoon", icon: Code },
  { key: "notifications", status: "comingSoon", icon: Bell },
  { key: "compare", status: "comingSoon", icon: GitCompare },
];

/**
 * Features section hiển thị các tính năng đã có và đang phát triển
 * @returns Phần features với grid layout và badge trạng thái
 */
export const BannerSection: React.FC = () => {
  const { t } = useI18n();

  return (
    <section className="bg-muted/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-14 md:py-20">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {t("features.title")}
          </h2>
          <p className="text-sm text-muted-foreground">
            {t("banner.demo.note")}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.key}
              featureKey={feature.key}
              status={feature.status}
              Icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

type FeatureCardProps = {
  featureKey: string;
  status: FeatureStatus;
  Icon: React.ComponentType<{ className?: string }>;
};

/**
 * Component hiển thị 1 feature card
 * @param featureKey - key của feature trong dictionary
 * @param status - trạng thái (available hoặc comingSoon)
 * @param Icon - icon component từ lucide-react
 * @returns Card hiển thị feature với icon và badge trạng thái
 */
const FeatureCard: React.FC<FeatureCardProps> = ({
  featureKey,
  status,
  Icon,
}) => {
  const { t } = useI18n();

  return (
    <div className="rounded-xl border border-border/80 bg-background/80 p-4 shadow-sm backdrop-blur">
      <div className="mb-3 flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-lg ${
              status === "available"
                ? "bg-primary/10 text-primary"
                : "bg-muted text-muted-foreground"
            }`}
          >
            <Icon className="h-4 w-4" />
          </div>
          <h3 className="text-sm font-semibold tracking-tight">
            {t(`features.${featureKey}.title`)}
          </h3>
        </div>
        <span
          className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-medium ${
            status === "available"
              ? "bg-primary/10 text-primary"
              : "bg-muted text-muted-foreground"
          }`}
        >
          {status === "available"
            ? t("features.badge.available")
            : t("features.badge.comingSoon")}
        </span>
      </div>
      <p className="text-xs text-muted-foreground">
        {t(`features.${featureKey}.description`)}
      </p>
    </div>
  );
};

