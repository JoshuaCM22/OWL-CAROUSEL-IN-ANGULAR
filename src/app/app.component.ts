import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "owl-carousel";

  mySlideImages = [
    "../assets/images/PIC1.jpg",
    "../assets/images/PIC2.jpg",
    "../assets/images/PIC3.jpg",
  ];
  myCarouselImages = [
    "../assets/images/PIC1.jpg",
    "../assets/images/PIC2.jpg",
    "../assets/images/PIC3.jpg",
  ];

  mySlideOptions = { items: 1, dots: true, nav: true };
  myCarouselOptions = { items: 3, dots: true, nav: true };
}
