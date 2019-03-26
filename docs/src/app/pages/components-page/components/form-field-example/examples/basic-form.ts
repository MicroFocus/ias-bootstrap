import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-basic-form',
    templateUrl: './basic-form.html',
    styleUrls: ['./basic-form.scss']
})
export class BasicFormComponent implements OnInit {
    nameFormControl: FormControl;
    emailFormControl: FormControl;
    regionFormControl: FormControl;
    rememberMeFormControl: FormControl;

    formDisabled = false;

    constructor() {
    }

    ngOnInit() {
        this.nameFormControl = new FormControl();
        this.emailFormControl = new FormControl();
        this.regionFormControl = new FormControl('north');
        this.rememberMeFormControl = new FormControl();
    }

    toggleFormEnabled() {
        this.formDisabled = !this.formDisabled;

        this.setFormControlDisabled(this.nameFormControl, this.formDisabled);
        this.setFormControlDisabled(this.emailFormControl, this.formDisabled);
        this.setFormControlDisabled(this.regionFormControl, this.formDisabled);
        this.setFormControlDisabled(this.rememberMeFormControl, this.formDisabled);
    }

    setFormControlDisabled(formControl: FormControl, disabled: boolean) {
        if (disabled) {
            formControl.disable();
        } else {
            formControl.enable();
        }
    }
}
