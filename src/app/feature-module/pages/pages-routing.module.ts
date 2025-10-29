import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  { path: '', component: PagesComponent },
  {
    path: 'terms-condition',
    loadChildren: () =>
      import('./terms-condition/terms-condition.module').then(
        (m) => m.TermsConditionModule
      ),
  },
  {
    path: 'maintenance',
    loadChildren: () =>
      import('./maintenance/maintenance.module').then(
        (m) => m.MaintenanceModule
      ),
  },
  {
    path: 'coming-soon',
    loadChildren: () =>
      import('./coming-soon/coming-soon.module').then(
        (m) => m.ComingSoonModule
      ),
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('./contact-us/contact-us.module').then((m) => m.ContactUsModule),
  },
  {
    path: 'testimonial',
    loadChildren: () =>
      import('./testimonial/testimonial.module').then(
        (m) => m.TestimonialModule
      ),
  },
  {
    path: 'gallery',
    loadChildren: () =>
      import('./gallery/gallery.module').then((m) => m.GalleryModule),
  },
  {
    path: 'privacy-policy',
    loadChildren: () =>
      import('./privacy-policy/privacy-policy.module').then(
        (m) => m.PrivacyPolicyModule
      ),
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('./about-us/about-us.module').then((m) => m.AboutUsModule),
  },
  {
    path: 'pricing',
    loadChildren: () =>
      import('./pricing/pricing.module').then((m) => m.PricingModule),
  },
  {
    path: 'user-profile',
    loadChildren: () =>
      import('./our-team/our-team.module').then((m) => m.OurTeamModule),
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then((m) => m.FaqModule),
  },
  {
    path: 'B2B',
    loadChildren: () => import('./b2b/b2b.module').then((m) => m.B2bModule),
  },
  {
    path: 'B2B-section',
    loadChildren: () => import('./b2b-section/b2b-section.module').then((m) => m.B2bSectionModule),
  },
  {
    path: 'beauty-book',
    loadChildren: () => import('./beauty-book/beauty-book.module').then((m) => m.BeautyBookModule),
  },
   {
    path: 'all-brands',
    loadChildren: () => import('./all-brands/all-brands.module').then((m) => m.AllBrandsModule),
  },
   {
    path: 'global-stores',
    loadChildren: () => import('./global-store/global-store.module').then((m) => m.GlobalStoreModule),
  },



  {
    path: 'toas',
    loadChildren: () => import('./toas/toas.module').then((m) => m.ToasModule),
  },

  {
    path: 'lalachuu',
    loadChildren: () => import('./lalachuu/lalachuu.module').then((m) => m.LalachuuModule),
  },

  {
    path: 'glossys',
    loadChildren: () => import('./glossys/glossys.module').then((m) => m.GlossysModule),
  },

  {
    path: 'dr-blue',
    loadChildren: () => import('./dr-blue/dr-blue.module').then((m) => m.DrBlueModule),
  },

  {
    path: 'estilo',
    loadChildren: () => import('./estilo/estilo.module').then((m) => m.EstiloModule),
  },

  {
    path: 'medicell',
    loadChildren: () => import('./medicell/medicell.module').then((m) => m.MedicellModule),
  },

  {
    path: 'oseque',
    loadChildren: () => import('./oseque/oseque.module').then((m) => m.OsequeModule),
  },

   {
    path: 'ones',
    loadChildren: () => import('./ones/ones.module').then((m) => m.OnesModule),
  },

   {
    path: 'v21',
    loadChildren: () => import('./oseque/oseque.module').then((m) => m.OsequeModule),
  },


  {
    path: 'rataplan',
    loadChildren: () => import('./rataplan/rataplan.module').then((m) => m.RataplanModule),
  },

   {
    path: 'fabyou',
    loadChildren: () => import('./fabyou/fabyou.module').then((m) => m.FabyouModule),
  },

   {
    path: 'pureSkin',
    loadChildren: () => import('./pure-skin/pure-skin.module').then((m) => m.PureSkinModule),
  },

   {
    path: 'wolgoo',
    loadChildren: () => import('./wolgoo/wolgoo.module').then((m) => m.WolgooModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
