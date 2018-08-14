import {
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    OnInit,
    ViewChild
} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'usta-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {
    @ViewChild('emailInput')
    private usernameElementRef: ElementRef;

    @Input()
    socialLoginEnabled: boolean;

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

    public ngAfterViewInit(): void {
        this.usernameElementRef.nativeElement.focus();
    }

    private setupForm() {
        this.form = this.formBuilder.group({
            username: [
                '',
                Validators.compose([Validators.email, Validators.required])
            ],
            password: [
                '',
                Validators.compose([
                    Validators.required,
                    Validators.minLength(8)
                ])
            ]
        });
    }
}
