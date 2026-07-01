import {
  Component, OnInit, OnDestroy, HostListener, ChangeDetectionStrategy, ChangeDetectorRef
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface NavLink {
  label: string;
  path: string;
  icon: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `

    




<!-- ================= NAVBAR ================= -->








 
      <nav  class="navbar-sky" [class.scrolled]="isScrolled" [class.nav-open]="menuOpen">
        <div class="top-bar">
  <div class="container">
    <div class="top-bar-inner">

      <div>


      </div>

      <div class="top-right">

<a routerLink="/contact" fragment="consultation-form"  class="top-btn">
  Command Upgrade
</a>

<a  routerLink="/contact" fragment="consultation-form" class="top-btn">
  Airline Interview
</a>

   <a routerLink="/contact" fragment="consultation-form" class="top-btn consultation">
  Free Consultation
</a>
      </div>

    </div>
  </div>
</div>

        <div class="container">
       
          <div class="nav-inner">

          
          

            <!-- Brand -->
            <a routerLink="/" class="nav-brand" (click)="closeMenu()">
              <div class="brand-logo">
                
              </div>
            <div class="brand-text">
            <a routerLink="/" class="nav-brand" (click)="closeMenu()">
    <img
      src="assets/images/ace_aviator_logo-removebg-preview.png"
      class="logo-img"
      alt="Ace Aviator Logo">
  </a>
    </div>
            

            </a>

            <!-- Desktop Nav Links -->
            <ul class="nav-links" [class.open]="menuOpen">
              <li *ngFor="let link of navLinks">
                <a [routerLink]="link.path"
                  routerLinkActive="active"
                  [routerLinkActiveOptions]="{exact: link.path === '/'}"
                  class="nav-link"
                  (click)="closeMenu()">
                  {{link.label}}
                </a>
              </li>
              <!-- <li class="nav-cta-mobile">
                <a routerLink="/contact" class="btn-gold" (click)="closeMenu()">
                  Free Consultation
                </a>
              </li> -->
            </ul>

            <!-- Desktop CTA -->
            <!-- <div class="nav-actions">
            <a href="tel:+919833797999" class="btn-gold nav-cta-btn">
    <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.5 9.7 19.79 19.79 0 011.45 1.1 2 2 0 013.43.01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0121.99 14l-.07 2.92z"/>
    </svg>
    Free Consultation
  </a> -->
 <div class="search-box form-control w-100">

  <input
    type="text"
    placeholder="Search..."
    [(ngModel)]="searchQuery"
    (input)="searchContent()"
    (keydown)="handleKeyDown($event)">

  <!-- Search Icon -->
  <div class="search-icon">
    <svg width="18" height="18" fill="none"
         stroke="currentColor"
         stroke-width="2"
         viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8"></circle>
      <path d="M21 21l-4.35-4.35"></path>
    </svg>
  </div>

  <div class="search-results" *ngIf="filteredResults.length">

    <div
      class="search-item"
      *ngFor="let item of filteredResults; let i = index"
      (click)="goToPage(item)"
      [class.active]="i === selectedIndex">

      {{item.title}}

    </div>

  </div>

</div>

  
  

              <!-- Hamburger -->
              <button class="hamburger" (click)="toggleMenu()" [class.active]="menuOpen" aria-label="Toggle menu">
                <span></span><span></span><span></span>
              </button>
            </div>
          </div>
        <!-- </div>   -->

        <!-- Mobile Overlay -->
        <div class="mobile-overlay" [class.show]="menuOpen" (click)="closeMenu()"></div>
      </nav>
    `,
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit, OnDestroy {


  constructor(
    private cdr: ChangeDetectorRef,
    private router: Router
  ) { }



  searchContent(): void {

    const query = this.searchQuery.toLowerCase().trim();

    if (!query) {
      this.filteredResults = [];
      this.selectedIndex = -1;
      return;
    }

    this.filteredResults = this.searchData
      .filter(item =>
        item.keyword.toLowerCase().startsWith(query)
      )
      .slice(0, 8);

    this.selectedIndex = -1;
  }
  handleKeyDown(event: KeyboardEvent): void {

    if (!this.filteredResults.length) return;

    if (event.key === 'ArrowDown') {

      event.preventDefault();

      this.selectedIndex =
        (this.selectedIndex + 1) % this.filteredResults.length;
    }

    else if (event.key === 'ArrowUp') {

      event.preventDefault();

      this.selectedIndex =
        (this.selectedIndex - 1 + this.filteredResults.length)
        % this.filteredResults.length;
    }

    else if (event.key === 'Tab') {

      if (this.selectedIndex === -1) {
        this.selectedIndex = 0;
      } else {
        event.preventDefault();

        this.selectedIndex =
          (this.selectedIndex + 1) % this.filteredResults.length;
      }
    }

    else if (event.key === 'Enter') {

      event.preventDefault();

      if (this.selectedIndex >= 0) {
        this.goToPage(this.filteredResults[this.selectedIndex]);
      }
    }

  }









  isScrolled = false;
  menuOpen = false;


  searchQuery: string = '';

  filteredResults: any[] = [];
  selectedIndex = -1;

  searchData = [

    // =========================================================================
    // HOME PAGE (Matches exact fragments with every text section from image_d56fc2.jpg)
    // =========================================================================


    { keyword: 'our-founder', page: '/', fragment: 'our-founder', title: 'Our Founder' },
    // { keyword: 'ground study', page: '/', fragment: 'ground-study', title: 'Ground Study' },
    { keyword: 'Ground School & Weather Delays', page: '/', fragment: 'Ground-School-Weather-Delays', title: ' Ground School & Weather Delays' },
    { keyword: 'Flight Training & Instructor Availability', page: '/', fragment: '3-6', title: 'Flight Training & Instructor Availability' },
    { keyword: 'Flying Hours & Aircraft Maintenance', page: '/', fragment: '6-12', title: ' Flying Hours & Aircraft Maintenance' },
    // { keyword: 'pilot programs', page: '/', fragment: 'pilot-programs', title: 'Cadet Pilot Programs' },
    { keyword: 'DGCA Exams & CPL Completion', page: '/', fragment: '04', title: 'DGCA Exams & CPL Completion' },



    // Home Page sections
    { keyword: 'student success', page: '/', fragment: 'success-stories', title: 'Student Success' },
    // { keyword: 'ground study', page: '/', fragment: 'ground-study', title: 'Ground Study' },
    { keyword: 'Book Sloat', page: '/', fragment: 'BOOK-SLOAT', title: 'Book Sloat' },
    { keyword: 'why', page: '/', fragment: 'why', title: 'Why Chose Us' },
    { keyword: 'FAQ', page: '/', fragment: 'cpl-completion', title: 'FAQ' },
    // { keyword: 'pilot programs', page: '/', fragment: 'pilot-programs', title: 'Cadet Pilot Programs' },
    { keyword: 'Student Reviews', page: '/', fragment: 'review', title: 'Student Reviews' },
    { keyword: 'Reality-Check', page: '/', fragment: 'Reality-Check', title: 'Reality-Check' },
    { keyword: 'Cadget Program', page: '/', fragment: 'cadget-program', title: 'Cadget-Program' },

    // Become a Pilot
    { keyword: 'eligibility', page: '/become-a-pilot', fragment: 'eligibility', title: 'Eligibility' },
    { keyword: 'pilot journey timeline', page: '/become-a-pilot', fragment: 'timeline', title: 'Pilot Journey Timeline' },
    { keyword: 'pilot sallary', page: '/become-a-pilot', fragment: 'pilot-salary', title: 'pilot sallary' },
    // { keyword: 'pilot salary', page: '/become-a-pilot', fragment: 'pilot-salary', title: 'Pilot Salary' },
    // { keyword: 'junior first officer', page: '/become-a-pilot', fragment: 'salary-structure', title: 'Junior First Officer Salary' },
    { keyword: 'cpl calculator', page: '/become-a-pilot', fragment: 'cpl-calculator', title: 'CPL Cost Calculator' },
    { keyword: 'aviation loan', page: '/become-a-pilot', fragment: 'aviation-loan', title: 'Aviation Loan' },
    { keyword: 'emi calculator', page: '/become-a-pilot', fragment: 'emi-calculator', title: 'EMI Calculator' },
    { keyword: 'scholarship', page: '/become-a-pilot', fragment: 'scholarships', title: 'Scholarships & Grants' },

    { keyword: 'Calculate Your Aviation Loan EMI', page: '/become-a-pilot', fragment: 'Calculate', title: 'Calculate Your Aviation Loan EMI' },
    { keyword: 'JRD Tata Scholarship', page: '/become-a-pilot', fragment: 'jrd', title: 'JRD Tata Scholarship' },
    // Contents of become a piloet

    { keyword: 'Government Schemes', page: '/become-a-pilot', fragment: 'gs', title: 'Government Schemes' },
    { keyword: 'State Aviation Grants', page: '/become-a-pilot', fragment: 'sag', title: 'State Aviation Grants' },

    { keyword: ' Senior Commander Sallary', page: '/become-a-pilot', fragment: 'senior-commander', title: ' Senior Commander' },
    { keyword: 'Captain Sallary', page: '/become-a-pilot', fragment: 'Captain', title: 'Captain' },


    { keyword: 'Senior First Officer Sallary', page: '/become-a-pilot', fragment: ' First-Officer', title: 'Senior First Officer' },
    { keyword: 'DGCA Expert Guidance', page: '/become-a-pilot', fragment: 'Expert', title: 'DGCA Expert Guidance' },
    { keyword: 'Personalized Roadmap', page: '/become-a-pilot', fragment: 'Personalized', title: ' Personalized Roadmap' },
    { keyword: 'Airline Career Support', page: '/become-a-pilot', fragment: 'careersprt', title: ' Airline Career Support' },
    { keyword: 'India & Abroad Options', page: '/become-a-pilot', fragment: 'Abroad', title: ' India & Abroad Options' },



    // DGCA Page
    { keyword: 'ground study', page: '/dgca', fragment: 'ground-study', title: 'Ground Study' },
    { keyword: 'dgca', page: '/dgca', fragment: 'dgca-guide', title: 'DGCA Guide' },
    { keyword: 'Official DGCA Links', page: '/dgca', fragment: 'links', title: 'Official DGCA Links' },
    { keyword: 'Class 2 Medical Examiners ', page: '/dgca', fragment: 'class2-medical', title: 'Class 2 Medical Examiners' },
    { keyword: 'Class 1 Medical Examiners', page: '/dgca', fragment: 'class1-medical', title: 'Class 1 Medical Examinars' },
    { keyword: 'medical assessment', page: '/dgca', fragment: 'medical-assessment', title: 'Medical Assessment' },
    { keyword: 'Pilot Lifestyle', page: '/dgca', fragment: 'Pilot-Lifestyle', title: 'Pilot Lifestyle' },
    { keyword: 'flight training', page: '/dgca', fragment: 'flight-training', title: 'Flight Training' },
    // { keyword: '200 flight hours', page: '/dgca', fragment: '200-hours', title: '200 Flight Hours' },
    { keyword: 'aviation regulations', page: '/dgca', fragment: 'aviation-regulations', title: 'Aviation Regulations' },
    { keyword: 'Training School Directory', page: '/dgca', fragment: 'training-schools', title: 'Training School Directory' },
    // { keyword: 'approved examiners', page: '/dgca', fragment: 'approved-examiners', title: 'Approved Examiners' },
    { keyword: 'download center', page: '/dgca', fragment: 'download-center', title: 'Download Center' },
    { keyword: 'notifications', page: '/dgca', fragment: 'notifications', title: 'DGCA Notifications' },
    { keyword: 'aviation glossary', page: '/dgca', fragment: 'aviation-glossary', title: 'Aviation Glossary' },

    // contents

    { keyword: 'Air Navigation', page: '/dgca', fragment: 'air-navigation', title: 'Air Navigation' },
    { keyword: 'Aviation Meteorology', page: '/dgca', fragment: 'Aviation-Meteorology', title: 'Aviation Meteorology' },
    { keyword: 'Air Regulations', page: '/dgca', fragment: 'Air-Regulations', title: 'Air-Regulations' },



    { keyword: 'Technical General', page: '/dgca', fragment: 'Technical-General', title: 'Technical General' },
    { keyword: 'Technical Specific', page: '/dgca', fragment: 'Technical-Specifics', title: 'Technical Specific' },
    { keyword: ' RTR Preparation', page: '/dgca', fragment: ' RTR-Preparation', title: ' RTR Preparation' },
    { keyword: 'DGCA Exam Preparation', page: '/dgca', fragment: ' RTR-Preparation', title: 'DGCA Exam Preparation' },


    { keyword: 'Class 1 Medical', page: '/dgca', fragment: 'Class-1-Medical', title: 'Class 1 Medical' },

    { keyword: 'Class 2 Medical', page: '/dgca', fragment: 'Class-2-Medical', title: 'Class 2 Medical' },
    { keyword: ' Important Student Advisory', page: '/dgca', fragment: 'Important-Student-Advisory', title: 'Important Student Advisory' },
    { keyword: 'Aircraft Systems ', page: '/dgca', fragment: 'download-c', title: 'DGCA CPL Theory Syllabus' },
    { keyword: 'Air Regulations CAR Series ', page: '/dgca', fragment: 'download-c', title: 'Aircraft Systems' },
    { keyword: 'DGCA CPL Theory Syllabus ', page: '/dgca', fragment: 'download-c', title: 'Air Regulations CAR Series' },
    { keyword: 'Navigation Study Guide ', page: '/dgca', fragment: 'download-c', title: 'Navigation Study Guide' },
    { keyword: 'Meteorology for Pilots ', page: '/dgca', fragment: 'download-c', title: 'Meteorology for Pilots  ' },
    { keyword: 'pilots reference material', page: '/dgca', fragment: 'download-c', title: 'pilots reference material' },

    { keyword: 'DGCA pdated CPL Examination Guidelines', page: '/dgca', fragment: 'n1', title: 'DGCA pdated CPL Examination Guideliness' },
    { keyword: 'Class 1 Medical Process Simplified', page: '/dgca', fragment: 'n1', title: 'Class 1 Medical Process Simplified' },
    { keyword: 'New DGCA Approved Flight Training Schools', page: '/dgca', fragment: 'n1', title: 'New DGCA Approved Flight Training Schools  ' },


    // { keyword: 'Air Traffic Control', page: '/dgca', fragment: 'n1', title: 'Air Traffic Control' },
    // { keyword: 'Commercial Pilot License', page: '/dgca', fragment: 'n1', title: 'Commercial Pilot License' },
    // { keyword: 'Flight Training Organization', page: '/dgca', fragment: 'n1', title: 'Flight Training Organization'},

    // { keyword: 'Pilot in Command', page: '/dgca', fragment: 'n1', title: 'Pilot in Command'},



    { keyword: 'Air Traffic Control', page: '/dgca', fragment: 'atc', title: 'Air Traffic Control' },
    { keyword: 'Commercial Pilot License', page: '/dgca', fragment: 'atc', title: 'Commercial Pilot License' },
    { keyword: 'Flight Training Organization', page: '/dgca', fragment: 'atc', title: 'Flight Training Organization' },

    { keyword: 'Pilot in Command', page: '/dgca', fragment: 'atc', title: 'Pilot in Command' },


    { keyword: 'Career Opportunities', page: '/blog', fragment: 'airline-recruitment', title: 'Career Opportunities' },
    // { keyword: 'IndiGo Airlines', page: '/blog', fragment: 'IndiGo-Airlines', title: 'IndiGo Airlines' },
    // { keyword: 'Air India', page: '/blog', fragment: 'Air-India', title: 'Air India' },
    // { keyword: 'Akasa Air', page: '/blog', fragment: 'Akasa-Air', title: 'Akasa Air'},


    // Blog & News
    // { keyword: 'blog', page: '/blog-news', fragment: '/blog', title: 'Blog & News' },
    { keyword: 'aviation news', page: '/blog', fragment: 'news', title: 'Aviation News' },
    // { keyword: 'Featured Article', page: '/blog', fragment: 'dgca-updates', title: 'Featured Article' },
    // { keyword: 'cadet programs', page: '/blog', fragment: 'cadet-programs', title: 'Cadet Programs' },
    { keyword: 'Latest Articles', page: '/blog', fragment: 'Latest-Articles', title: 'Latest Articles' },
    // { keyword: 'medicals', page: '/blog', fragment: 'medicals', title: 'Medicals' },
    { keyword: 'Aviation Insight', page: '/blog', fragment: 'airline-hiring', title: 'Aviation Insight' },
    // { keyword: 'scholarships', page: '/blog', fragment: 'scholarships', title: 'Scholarships' },
    // { keyword: 'aviation tech', page: '/blog', fragment: 'aviation-tech', title: 'Aviation Tech' },
    // { keyword: 'career guidance', page: '/blog', fragment: 'career-guidance', title: 'Career Guidance' },
    { keyword: 'aviation videos', page: '/blog', fragment: 'aviation-videos', title: 'Aviation Videos' },
    { keyword: 'Airline Recruitment', page: '/blog', fragment: 'airline-recruitment', title: 'Airline Recruitment' },
    // { keyword: 'indigo hiring', page: '/blog', fragment: 'indigo-hiring', title: 'IndiGo Hiring' },
    // { keyword: 'air india hiring', page: '/blog', fragment: 'air-india-hiring', title: 'Air India Hiring' },
    // { keyword: 'akasa air', page: '/blog', fragment: 'akasa-air', title: 'Akasa Air Recruitment' },
    { keyword: 'Industry Insight', page: '/blog', fragment: 'pilot-shortage', title: 'Industry Insight' },

    // Contact
    { keyword: 'Contact Us', page: '/contact', fragment: 'media', title: 'Contact Us' },
    { keyword: 'Media', page: '/contact', fragment: 'follow', title: 'Media' }

  ];

  //   searchData = [
  //   { keyword: 'pilot salary', url: '/become-a-pilot#pilot-salary' },
  //   { keyword: 'eligibility', url: '/become-a-pilot#eligibility' },
  //   { keyword: 'cpl', url: '/become-a-pilot#cpl-training' },
  //   { keyword: 'class 2 medical', url: '/dgca#class2-medical' },
  //   { keyword: 'rtr', url: '/dgca#rtr-exam' },
  //   { keyword: 'contact', url: '/contact' }
  // ];
  goToPage(item: any): void {

    // Clear search
    this.filteredResults = [];
    this.searchQuery = '';
    this.selectedIndex = -1;

    // Navigate to page with fragment
    this.router.navigate(
      [item.page],
      {
        fragment: item.fragment
      }
    ).then(() => {

      setTimeout(() => {

        const element = document.getElementById(item.fragment);

        if (element) {

          // Increase this value to leave more space above heading
          const offset = 150;

          const y =
            element.getBoundingClientRect().top +
            window.pageYOffset -
            offset;

          window.scrollTo({
            top: y,
            behavior: 'smooth'
          });

        }

      }, 300);

    });

  }

  navLinks: NavLink[] = [
    { label: 'Home', path: '/', icon: 'home' },
    { label: 'Become a Pilot', path: '/become-a-pilot', icon: 'plane' },
    { label: 'DGCA', path: '/dgca', icon: 'shield' },
    { label: 'Blog & News', path: '/blog', icon: 'newspaper' },
    { label: 'Contact', path: '/contact', icon: 'phone' },
  ];

  // constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void { }
  ngOnDestroy(): void { }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 60;
    this.cdr.markForCheck();
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    document.body.style.overflow = this.menuOpen ? 'hidden' : '';
    this.cdr.markForCheck();
  }

  closeMenu(): void {
    this.menuOpen = false;
    document.body.style.overflow = '';
    this.cdr.markForCheck();
  }

}













