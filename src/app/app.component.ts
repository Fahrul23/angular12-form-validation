import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'form-validation';

  exform !: FormGroup;

  ngOnInit(): void {
      this.exform = new FormGroup({
        'name': new FormControl('', Validators.required),
        'email': new FormControl('', [Validators.required, Validators.email]),
        'phone': new FormControl(
          '',
          [
            Validators.required,
            Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
          ]
        ),
        'message': new FormControl('', [Validators.required, Validators.minLength(10)]),
      })
  }
  handleSubmit() {
    alert("ok, message succcess");
    console.log(this.exform.value);
    this.exform.reset();
  }
}
