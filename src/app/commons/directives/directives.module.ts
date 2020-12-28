import { NgModule } from '@angular/core';
import { OnlyNumberDirective } from './only-number.directive';
import { OnlyLettersDirective } from './only-letters.directive';
import { AlphaNumericDirective } from './alpha-numeric.directive';
import { PasswordTextDirective } from './password-text.directive';


var directives = [
OnlyNumberDirective,
OnlyLettersDirective,
AlphaNumericDirective,
PasswordTextDirective,
];
@NgModule({
	declarations: directives,
	imports: [], 
	exports: directives
})
export class DirectivesModule {}
