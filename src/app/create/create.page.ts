import { Component, OnInit, NgZone } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BookeventService } from './../services/bookevent.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})

export class CreatePage implements OnInit {

  bookeventForm: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private bookeventService:  BookeventService
  ) {
    this.bookeventForm = this.formBuilder.group({
      name: [''],
      pickup: [''],
      hdrop: [''],
      weight: [''],
      phone: [''],

    });
  }

  ngOnInit() { }

  onSubmit() {
    if (!this.bookeventForm.valid) {
      return false;
    } else {
      this.bookeventService.createBookEvent(this.bookeventForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.bookeventForm.reset();
            this.router.navigate(['/trips']);
          });
        });
    }
  }

}
