import {Component, Inject, Optional} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {EVENT_BUS, MfeEventBus} from "mfe-tools";

@Component({
    selector: 'app-feature',
    templateUrl: './feature.component.html',
    styleUrls: ['./feature.component.scss']
})
export class FeatureComponent {
    public patientForm = this.fb.group({
        name: this.fb.control('', [Validators.required]),
        surname: this.fb.control('', [Validators.required]),
        appointmentDate: this.fb.control('', [Validators.required])
    });

    constructor(
        private readonly fb: FormBuilder,
        // Tight coupled version
        // @Inject('patients') private readonly patientsService: any,
        // Lose coupled version

        @Inject(EVENT_BUS) private readonly eventBus: MfeEventBus
    ) {
    }

    public addPatient(): void {
        // Tight coupled version

        // this.patientsService.addPatient(this.patientForm.value);value


        // Lose coupled version

        this.eventBus.dispatchEvent({
            eventType: 'addPatient',
            payload: this.patientForm.value
        })

        this.patientForm.reset();
    }
}
