import { Sequence } from '../../definition';
import { StepsConfiguration } from '../../designer-configuration';
import { Component, Placeholder, StepComponent } from '../component';
import { StopComponentView } from './stop-component-view';

export class StopComponent implements Component {
	public static create(parent: SVGElement, sequence: Sequence, configuration: StepsConfiguration): StopComponent {
		const view = StopComponentView.create(parent, sequence, configuration);
		return new StopComponent(view);
	}

	private constructor(public view: StopComponentView) {}

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
