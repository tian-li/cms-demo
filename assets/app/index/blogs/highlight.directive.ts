import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  AfterViewChecked,
  NgZone
} from '@angular/core';
import * as hljs from 'highlight.js';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements AfterViewChecked {
  @Input('appHighlight') highlightSelector: string;
  private done = false;

  constructor(private elementRef: ElementRef, private zone: NgZone) {}

  ngAfterViewChecked() {
    if (!this.done) {
      const selector = this.highlightSelector || 'pre';

      if (
        this.elementRef.nativeElement.innerHTML &&
        this.elementRef.nativeElement.querySelector
      ) {
        const snippets = this.elementRef.nativeElement.querySelectorAll(
          selector
        );
        this.zone.runOutsideAngular(() => {
          for (const snippet of snippets) {
            hljs.highlightBlock(snippet);
          }
        });
        this.done = true;
      }
    }
  }
}
