import { afterNextRender, Component, DestroyRef, inject, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  /**
   * Enlaces en color primario sobre fondos claros (About #DAC6B8 y Servicios #DAC6B8).
   * En hero, Barros y CTA final se mantiene el estilo claro sobre fondo oscuro/imagen.
   */
  readonly navDarkLinks = signal(false);

  /** Fondo difuminado al salir del tope de la página (scroll). */
  readonly navElevated = signal(false);

  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const update = () => {
        const probeY = 96;
        const order = ['inicio', 'nosotros', 'servicios', 'experiencia', 'reserva'] as const;
        let hit: (typeof order)[number] | null = null;

        for (const id of order) {
          const el = document.getElementById(id);
          if (!el) {
            continue;
          }
          const r = el.getBoundingClientRect();
          if (probeY >= r.top && probeY < r.bottom) {
            hit = id;
            break;
          }
        }

        const dark = hit === 'nosotros' || hit === 'servicios';
        if (dark !== this.navDarkLinks()) {
          this.navDarkLinks.set(dark);
        }

        const elevated = window.scrollY > 8;
        if (elevated !== this.navElevated()) {
          this.navElevated.set(elevated);
        }
      };

      update();
      window.addEventListener('scroll', update, { passive: true });
      window.addEventListener('resize', update, { passive: true });

      this.destroyRef.onDestroy(() => {
        window.removeEventListener('scroll', update);
        window.removeEventListener('resize', update);
      });
    });
  }
}
