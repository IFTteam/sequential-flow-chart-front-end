import { Sequence } from "../../definition";
import { StepsConfiguration } from "../../designer-configuration";
import { Component, Placeholder, StepComponent } from "../component";
import { StartComponentView } from "./start-component-view";

export class StartComponent implements Component {
  public static create(
    parent: SVGElement,
    sequence: Sequence,
    configuration: StepsConfiguration
  ): StartComponent {
    const view = StartComponentView.create(parent, sequence, configuration);
    return new StartComponent(view);
  }

  private constructor(public readonly view: StartComponentView) {}

  public findByElement(element: Element): StepComponent | null {
    return this.view.component.findByElement(element);
  }

  public findById(stepId: string): StepComponent | null {
    return this.view.component.findById(stepId);
  }

  public getPlaceholders(result: Placeholder[]) {
    this.view.component.getPlaceholders(result);
  }

  public setIsDragging(isDragging: boolean) {
    this.view.component.setIsDragging(isDragging);
  }

  public validate(): boolean {
    return this.view.component.validate();
  }
}
