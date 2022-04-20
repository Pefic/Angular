import { Directive, ElementRef, Host, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMiad]'
})
export class MiadDirective {
  private numeroclick:number=0;
  @Input() private colore:string='blue';
  constructor(private el:ElementRef) {
    // console.log(el);
    // el.nativeElement.style.color= 'red';
   }
   @HostListener('click') onClick(){
    this.numeroclick++;
   }
   @HostListener('mouseenter') onMouseEnter(){
     if(this.numeroclick<5){
      this.el.nativeElement.style.background=this.colore;
     } else {
      this.el.nativeElement.style.background='coral';
     }
   }
   @HostListener('mouseleave') onMouseLeave(){
     this.el.nativeElement.style.background='none';
   }
}
