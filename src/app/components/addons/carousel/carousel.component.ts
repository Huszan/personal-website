import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {ICarouselElement} from "../../../interfaces/ICarouselElement";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CarouselComponent implements AfterContentInit, AfterViewInit {

  @ViewChild('carousel') carouselRef!: ElementRef;

  @Input() data!: ICarouselElement[];

  current!: { element: ICarouselElement, index: number };

  ngAfterContentInit() {
    this._initialize();
    setTimeout(() => {
      this._gatherNativeElements();
      this.setupCurrentElement();
    }, 0);
  }

  ngAfterViewInit() {

  }

  private _initialize() {
    this.current = { element: this.data[0], index: 0 };
  }

  private _gatherNativeElements() {
    let elements = this.carouselRef.nativeElement.getElementsByClassName('element');
    let i = 0;
    for (let el of elements) {
      this.data[i].nativeEl = el;
      i++;
    }
  }

  get isLast() { return this.current.index + 1 >= this.data.length; }

  get isFirst() { return this.current.index <= 0 }

  nextElement() {
    if (this.isLast) return;
    this.current = {
      element: this.data[this.current.index+1],
      index: this.current.index+1,
    }
    this.setupCurrentElement(
      this.data[this.current.index - 1].nativeEl
    );
  }

  previousElement() {
    if (this.isFirst) return;
    this.current = {
      element: this.data[this.current.index-1],
      index: this.current.index-1,
    }
    this.setupCurrentElement(
      this.data[this.current.index + 1].nativeEl
    );
  }

  goToCurrentElement() {
    this.carouselRef.nativeElement.style.transform = `translateX(-${this.current.index * 50}vw)`;
  }

  setupCurrentElement(previous?: HTMLElement) {
    if (previous) previous.classList.remove('active');
    this.current.element.nativeEl?.classList.add('active');
    this.goToCurrentElement();
  }

}
