"use client";

import React from "react";
import { Terminal, Zap, BarChart3 } from "lucide-react";
import { useI18n } from "@/components/i18n/i18n-provider";

type Step = {
  number: string;
  icon: React.ComponentType<{ className?: string }>;
  titleKey: string;
  bodyKey: string;
};

const steps: Step[] = [
  {
    number: "01",
    icon: Terminal,
    titleKey: "banner.howItWorks.step1.title",
    bodyKey: "banner.howItWorks.step1.body",
  },
  {
    number: "02",
    icon: Zap,
    titleKey: "banner.howItWorks.step2.title",
    bodyKey: "banner.howItWorks.step2.body",
  },
  {
    number: "03",
    icon: BarChart3,
    titleKey: "banner.howItWorks.step3.title",
    bodyKey: "banner.howItWorks.step3.body",
  },
];

/**
 * How it works section hiển thị 3 bước chính của quy trình benchmark
 * @returns Section với layout 3 cột, mỗi cột là 1 bước
 */
export const HowItWorksSection: React.FC = () => {
  const { t } = useI18n();

  return (
    <section className="border-b border-border/60 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-14 md:py-20">
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {t("banner.howItWorks.title")}
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
            {t("banner.demo.note")}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <StepCard
              key={step.number}
              step={step}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

type StepCardProps = {
  step: Step;
  isLast: boolean;
};

/**
 * Component hiển thị 1 bước trong "How it works"
 * @param step - thông tin bước (number, icon, titleKey, bodyKey)
 * @param isLast - có phải bước cuối cùng không (để ẩn connector)
 * @returns Card hiển thị 1 bước với icon và mô tả
 */
const StepCard: React.FC<StepCardProps> = ({ step, isLast }) => {
  const { t } = useI18n();
  const Icon = step.icon;

  return (
    <div className="relative flex flex-col">
      <div className="rounded-xl border border-border/80 bg-card/90 p-6 shadow-sm backdrop-blur">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-sm font-semibold text-primary">
            {step.number}
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
            <Icon className="h-5 w-5 text-muted-foreground" />
          </div>
        </div>
        <h3 className="mb-2 text-sm font-semibold tracking-tight">
          {t(step.titleKey)}
        </h3>
        <p className="text-xs text-muted-foreground">
          {t(step.bodyKey)}
        </p>
      </div>
      {!isLast && (
        <div className="absolute -right-3 top-12 hidden h-0.5 w-6 bg-border md:block" />
      )}
    </div>
  );
};

