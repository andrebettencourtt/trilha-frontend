import { useState } from "react";

export function useForm(steps: React.ReactNode[]) {
  const [currentStep, setCurrentStep] = useState(0);

  function changeStep(i: number, e: React.FormEvent) {
    e.preventDefault();

    if (i < 0 || i >= steps.length) return;

    setCurrentStep(i);
  }

  return {
    currentStep,
    currentComponent: steps[currentStep],
    changeStep,
  };
}
