import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ub-not-found-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="card">
      <div class="card-header">404: Not Found</div>
      <div class="card-body">
        <p>Hey! It looks like this page doesn't exist yet.</p>
      </div>
      <div class="card-footer">
        <button class="btn btn-primary" routerLink="/">Take Me Home</button>
      </div>
    </div>
  `,
  styles: [
    `
    :host {
      text-align: center;
    }
  `,
  ],
})
export class NotFoundPageComponent {}
