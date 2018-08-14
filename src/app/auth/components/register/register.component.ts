import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'usta-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    form: FormGroup;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.setupForm();
    }

    get username(): FormControl {
        return this.form.get('username') as FormControl;
    }

    get password(): FormControl {
        return this.form.get('password') as FormControl;
    }

    private setupForm() {
        this.form = this.formBuilder.group({
            username: ['', Validators.compose([Validators.email, Validators.required])],
            password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
        });
    }
}
