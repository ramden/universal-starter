import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'usta-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {
    @ViewChild('emailInput')
    private usernameElementRef: ElementRef;

    loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.setupForm();
    }

    get username(): FormControl {
        return this.loginForm.get('username') as FormControl;
    }

    get password(): FormControl {
        return this.loginForm.get('password') as FormControl;
    }

    public ngAfterViewInit(): void {
        this.usernameElementRef.nativeElement.focus();
    }

    private setupForm() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.compose([Validators.email, Validators.required])],
            password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
        });
    }
}
