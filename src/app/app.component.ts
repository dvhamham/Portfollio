import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { HeaderComponent } from './components/header/header.component';
import { DividerComponent } from './components/divider/divider.component';
import { SkilsComponent } from './components/skils/skils.component';
import { WorksComponent } from './components/works/works.component';
import { PlatformsComponent } from './components/platforms/platforms.component';
import { FooterComponent } from './components/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { HostListener } from '@angular/core';
import { PricingComponent } from './components/pricing/pricing.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslateModule, ToolbarComponent, HeaderComponent, DividerComponent, SkilsComponent, WorksComponent,
    PricingComponent, PlatformsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})



export class AppComponent implements OnInit {
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D | null;
  private shapes: any[] = [];
  private colors: string[] = [
    'rgba(248, 177, 149, 0.3)',
    'rgba(246, 114, 128, 0.3)',
    'rgba(192, 108, 132, 0.3)',
    'rgba(108, 91, 123, 0.3)',
    'rgba(53, 92, 125, 0.3)'
  ];

  ngOnInit() {
    this.initializeCanvas();
    this.animate();
  }

  private initializeCanvas(): void {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');

    // Style the canvas
    this.canvas.style.position = 'fixed';
    this.canvas.style.top = '0';
    this.canvas.style.left = '0';
    this.canvas.style.zIndex = '9999';
    this.canvas.style.pointerEvents = 'none';

    document.body.appendChild(this.canvas);

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  private random(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  private createShape(): void {
    if (this.shapes.length >= 8) return; // Limit the number of shapes to 8

    const shapeTypes = ['circle', 'square', 'triangle', 'star'];
    const shape = {
      x: this.random(0, this.canvas.width),
      y: this.canvas.height + this.random(50, 150),
      size: this.random(20, 40),
      color: this.colors[Math.floor(Math.random() * this.colors.length)],
      speedY: this.random(0.5, 1.5),
      speedX: this.random(-1, 1),
      rotation: this.random(0, Math.PI * 2),
      rotationSpeed: this.random(-0.05, 0.05),
      type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
    };
    this.shapes.push(shape);
  }

  private drawShape(shape: any): void {
    if (!this.ctx) return;

    this.ctx.save();
    this.ctx.translate(shape.x, shape.y);
    this.ctx.rotate(shape.rotation);
    this.ctx.fillStyle = shape.color;
    this.ctx.beginPath();
    if (shape.type === 'circle') {
      this.ctx.arc(0, 0, shape.size, 0, Math.PI * 2);
    } else if (shape.type === 'square') {
      this.ctx.rect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
    } else if (shape.type === 'triangle') {
      this.ctx.moveTo(0, -shape.size / 2);
      this.ctx.lineTo(shape.size / 2, shape.size / 2);
      this.ctx.lineTo(-shape.size / 2, shape.size / 2);
      this.ctx.closePath();
    } else if (shape.type === 'star') {
      for (let i = 0; i < 5; i++) {
        this.ctx.lineTo(0, -shape.size / 2);
        this.ctx.rotate((Math.PI * 2) / 10);
        this.ctx.lineTo(0, -shape.size / 4);
        this.ctx.rotate((Math.PI * 2) / 10);
      }
      this.ctx.closePath();
    }
    this.ctx.fill();
    this.ctx.restore();
  }

  private updateShapes(): void {
    for (let i = this.shapes.length - 1; i >= 0; i--) {
      const shape = this.shapes[i];
      shape.y -= shape.speedY;
      shape.x += shape.speedX;
      shape.rotation += shape.rotationSpeed;

      // Remove shapes that move out of the screen
      if (
        shape.y + shape.size < 0 ||
        shape.x + shape.size < 0 ||
        shape.x - shape.size > this.canvas.width
      ) {
        this.shapes.splice(i, 1);
      }
    }
  }

  private animate(): void {
    if (!this.ctx) return;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.createShape();
    this.shapes.forEach((shape) => this.drawShape(shape));
    this.updateShapes();

    requestAnimationFrame(() => this.animate());
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
}


