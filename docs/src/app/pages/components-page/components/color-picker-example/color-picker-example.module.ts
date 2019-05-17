import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonComponentsModule } from '../../../../components/common-components.module';
import { ColorPickerExampleComponent } from './color-picker-example.component';
import { ColorPickerBasicModule } from './color-picker-basic/color-picker-basic.module';

@NgModule({
  declarations: [
      ColorPickerExampleComponent,
  ],
    imports: [
        CommonModule,
        CommonComponentsModule,
        ColorPickerBasicModule,
    ],
    exports: [
      ColorPickerExampleComponent
    ],
})
export class ColorPickerExampleModule { }
