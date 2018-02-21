import { NgModule } from '@angular/core';
import { DatumPipe } from './datum/datum';
import { UhrzeitPipe } from './uhrzeit/uhrzeit';
import { TerminfilterPipe } from './terminfilter/terminfilter';
@NgModule({
	declarations: [DatumPipe,
    UhrzeitPipe,
    TerminfilterPipe],
	imports: [],
	exports: [DatumPipe,
    UhrzeitPipe,
    TerminfilterPipe]
})
export class PipesModule {}
