import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appReloadcomponent]'
})
export class ReloadcomponentDirective implements OnChanges {

  @Input() appReload!: Array<any>;

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {
    this.viewContainerRef.createEmbeddedView(this.templateRef);
  }

  ngOnChanges(changes: SimpleChanges):void{

    if(changes['appReload']){
      this.viewContainerRef.clear();
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }

  }

}
