import {Directive, ElementRef, Input, OnInit} from '@angular/core';

const SlideInAnimation = [
  { opacity: 0, transform: 'translateY(25px)' },
  { opacity: 100, transform: 'translateY(0px)' },
]
const SlideFromRightAnimation = [
  { transform: `translateX(calc(${screen.width}px))` },
  { transform: `translateX(0)` },
]
const FadeInAnimation = [
  { opacity: 0 },
  { opacity: 100 },
]
const ScaleUpAnimation = [
  { scale: 0, transform: 'translateX(-100%) translateY(100%)' },
  { scale: 1, transform: 'translateX(0) translateY(0)' },
]

export const prefabAnimations = {
  fadeIn: FadeInAnimation,
  slideIn: SlideInAnimation,
  slideFromRight: SlideFromRightAnimation,
  scaleUp: ScaleUpAnimation,
}

@Directive({
  selector: '[appInitAnimation]'
})
export class InitAnimationDirective implements OnInit {
  @Input() animation!: any;
  // When should animation fire after being seen on screen in ms.
  @Input() delay: number = 0;
  // How long animation should play in ms.
  @Input() duration: number = 250;
  @Input() intersection?: any;

  private _observer!: IntersectionObserver;
  static played = false;

  private get _currElement() {
    return this.intersection
      ? this.intersection
      : this.elementRef.nativeElement
  }

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    if (InitAnimationDirective.played) return;
    this.elementRef.nativeElement.style.opacity = 0;
    this._observer = new IntersectionObserver(this.callback, { threshold: 0.25 });
    this._observer.observe(this._currElement);
  }

  private callback: ConstructorParameters<typeof IntersectionObserver>[0] = (entries) =>
    entries
      .filter((entry) => entry.isIntersecting)
      .forEach((_entry) => {
        this.playAnimation();
        this._observer.unobserve(this._currElement);
      });

  playAnimation() {
    setTimeout(() => {
      this.elementRef.nativeElement.style.opacity = 100;
      this.elementRef.nativeElement.animate(this.animation, {
        duration: this.duration
      });
      InitAnimationDirective.played = true;
    }, this.delay);
  }

}
