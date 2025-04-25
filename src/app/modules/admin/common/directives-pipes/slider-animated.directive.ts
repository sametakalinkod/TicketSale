import { Directive, ElementRef, HostListener, OnDestroy, Renderer2 } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[appSliderAnimated]'
})
export class SliderAnimatedDirective {
  private destroy$: Subject<void> = new Subject<void>();
  private items!: HTMLCollectionOf<Element>;
  private intervalSubscription: any;

  constructor(
    public _el: ElementRef,
    public _renderer: Renderer2
  ) { }


  @HostListener('click')
  onClick() {
    // const currentIndex = this.getActiveIndex();
    // const nextIndex = (currentIndex + 1) % this.items.length;
    // this.activate(nextIndex);

    var option = document.getElementsByClassName('option');
    for (let index = 0; index < option.length; index++) {
      option[index].classList.remove('active');

    }
    this._el.nativeElement.classList.add('active');


    // console.log('clicked', this._el)
    // var option = document.getElementsByClassName('option');
    // let mainIndex: number = 0;
    // for (let index = 0; index < option.length; index++) {
    //   if (option[index].classList.contains('active')) {
    //     option[index].classList.remove('active');
    //     mainIndex = index;
    //     break; // Stop the loop once the 'active' class is removed
    //   }
    // }
    // const nextIndex: number = (mainIndex + 1) % this.items.length;
    // this.items[nextIndex].classList.add('active');
  }

  private activate(index: number) {

    for (let i = 0; i < this.items.length; i++) {
      this.items[i].classList.remove('active');
    }
    const nextIndex: number = (index + 1) % this.items.length;
    this.items[nextIndex].classList.add('active');
  }

  ngOnInit() {
    // Retrieve all items
    this.items = document.getElementsByClassName('option');

    // Activate initially
    this.activate(0);

    // this.intervalSubscription = interval(3000)
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe(() => {
    //     const currentIndex = this.getActiveIndex();
    //     const nextIndex = (currentIndex + 1) % this.items.length;
    //     //this.activate(nextIndex);
    //     console.log('curr', currentIndex)
    //     console.log('next', nextIndex)
    //   });
    // interval(3000)
    // .pipe(takeUntil(this.destroy$))
    // .subscribe(() => {
    //    
    //   const currentIndex = this.getActiveIndex();
    //   const nextIndex = (currentIndex + 1) % this.items.length;

    //   this.activate(nextIndex);
    // });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }

  hasActiveClass(): boolean {
    return this._el.nativeElement.classList.contains('active');
  }

  private getActiveIndex(): number {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].classList.contains('active')) {
        return i;
      }
    }
    // If no active item found, default to 0
    return 0;
  }

  addActiveClass() {
     
    this._renderer.addClass(this._el.nativeElement.classList, 'active');
  }

  removeActiveClass() {
    this._renderer.removeClass(this._el.nativeElement.classList, 'active');
  }

  getNextIndex(): number | null {
    const activeIndex = this.getActiveIndex();
    if (activeIndex !== null) {
      const elements = document.querySelectorAll('.option');
      const nextIndex = (activeIndex + 1) % elements.length; // Calculate the index of the next element
      return nextIndex;
    }
    return null;
  }
}
