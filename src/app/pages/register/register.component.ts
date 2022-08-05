import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { Register } from 'src/app/models/register';
import { PeakService } from 'src/app/services/peak.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public formGroup: FormGroup;
  public response: string;

  constructor(private formBuilder: FormBuilder, private peakService: PeakService) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      value: [0, [Validators.required, Validators.pattern(/(\d+,.{1}\d)/)]],
      times: [0, [Validators.required, Validators.pattern(/\d/)]]
    });
  }

  save() : void {
    if(!this.formGroup.valid) return;

    const valueControl = this.formGroup.get('value');

    const register: Register = {
      value: valueControl?.value.replace(',', '.'),
      times: this.formGroup.get('times')?.value
    };

    this.peakService.save(register).pipe(take(1)).subscribe(res => {
      this.response = res;
    });

  }

}
