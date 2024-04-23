import { NgModule } from '@angular/core';

import { HeaderContainerBaseModule } from './header-container.base.module';
import { HeaderContainerComponent } from './header-container.component';

@NgModule({
  imports: [HeaderContainerBaseModule],
  declarations: [HeaderContainerComponent],
  providers: [
    {
      provide: 'components',
      useValue: [HeaderContainerComponent],
      multi: true
    }
  ],
  entryComponents: [HeaderContainerComponent]
})
export class ContactContainerModule {}
