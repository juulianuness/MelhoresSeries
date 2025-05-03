import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  results: any[] = [];
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      hour: '',
      showOther: false
    });
  }

  onSubmit(): void {
    console.log("submit", this.formGroup.value);
  }

  onClean(): void {
    this.formGroup.reset({
      hour: '',
      showOther: false
    });
    console.log("clean");
  }
}
