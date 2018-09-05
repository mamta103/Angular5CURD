import { Validator, AbstractControl, NG_VALIDATORS } from "@angular/forms";
import { Directive, Input } from "@angular/core";

@Directive({
    selector: '[appSelectValidator]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: SelectRequiredValidatorDirective,
            multi: true
        }
    ]
})
export class SelectRequiredValidatorDirective implements Validator {
    @Input('appSelectValidator') defultValue:string;
    validate(control: AbstractControl): { [key: string]: any } | null {
        return control.value === this.defultValue ? { 'defaultSelected': true } : null;


    }
}