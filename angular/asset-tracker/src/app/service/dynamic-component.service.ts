import { ApplicationRef, ComponentFactoryResolver, ComponentRef, Injectable, Injector,Type } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentService {


  constructor(private injector:Injector,
    private resolver:ComponentFactoryResolver,
    private appRef:ApplicationRef) { }

    public injectComponent<T>(component: Type<T>,propertySetter?:(type: T)=>void):HTMLDivElement{

      const compFactory = this.resolver.resolveComponentFactory(component);
      var compRef = compFactory.create(this.injector);

      if (propertySetter)
          propertySetter(compRef.instance);

      this.appRef.attachView(compRef.hostView);

      let div = document.createElement('div');
      div.appendChild(compRef.location.nativeElement);

      return div;
    }
}
