import { FormEvent, ReactNode, useState } from "react";

export function useForm(steps: ReactNode[]) {
  const [currentStep, setCurrentStep] = useState(0);

  function changeStep(i: number, e: FormEvent) {
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
