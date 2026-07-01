//   // import { Component } from '@angular/core';
//   // import { CommonModule } from '@angular/common';
//   // import { FormsModule } from '@angular/forms';
//   // import { HttpClient, HttpClientModule } from '@angular/common/http';
//   // import emailjs from '@emailjs/browser';

//   // @Component({
//   //   selector: 'app-contact',
//   //   standalone: true,
//   //   imports: [CommonModule, FormsModule, HttpClientModule],
//   //   templateUrl: './contact.component.html',
//   //   styleUrls: ['./contact.component.scss']
//   // })
//   // export class ContactComponent {
//   //   constructor(private http: HttpClient) {}
//   // openLink(url: string): void {
//   //   window.open(url, '_blank');
//   // }

//   //   form = {
//   //     name: '',
//   //     email: '',
//   //     phone: '',
//   //     interest: '',
//   //     education: '',
//   //     message: ''
//   //   };

//   //   submitted = false;
//   //   loading = false;
//   //   googleScriptUrl = 'https://script.google.com/macros/s/KfycbxSPU03-meGmoEDk9V0WQl-Ig8YAFmjMKidcjJoK_eQOiPWu1n4bswanNz1j8FsOdLTAKfycbxCXk4vhiEFPHLXs3c1XziRoEyUQyXJ8UsICdvKnuMuCCaFxiGvJn7rqGsKzfMZFtz1/exec';

//   //   interests = ['CPL Training Guidance', 'DGCA Exam Help', 'School Selection', 'Flight Abroad', 'Financial Planning', 'Career Counseling', 'Other'];

//   //   contactItems = [
//   //     {
//   //       icon: '📞',
//   //       title: 'Call Us',
//   //       value: '+91  7796240277',
//   //       sub: 'Mon–Sat, 9 AM – 7 PM IST',
//   //       link: 'tel:+77962402779'
//   //     },
//   //     {
//   //       icon: '📧',
//   //       title: 'Email',
//   //       value: 'admin@theaceaviator.com',
//   //       sub: 'Reply within 24 hours',
//   //       link: 'mailto:admin@theaceaviator.com'
//   //     },
//   //     {
//   //       icon: '📍',
//   //       title: 'Visit Us',
//   //       value: 'Mumbai, Dadar 400014',
//   //       sub: 'By appointment only',
//   //       link: '#map'
//   //     },
//   //     {
//   //     icon: '💬',
//   //     title: 'WhatsApp',
//   //     value: '+91 7796240277',
//   //     sub: 'Fastest Response',
//   // link: 'https://wa.me/7796240277?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20pilot%20training.'
//   //   }
//   //   ];

  

//   //   faqs = [
//   //     { q: 'How long does the free consultation take?', a: 'Our free consultation sessions are typically 30–45 minutes long, conducted via video call or phone, with one of our ATPL-certified mentors.', open: false },
//   //     { q: 'Is the consultation truly free?', a: 'Yes, 100% free. No hidden charges, no sales pressure. Our goal is to genuinely help you plan your pilot career.', open: false },
//   //     { q: 'Do you offer group counseling sessions?', a: 'Yes! We conduct monthly group webinars on pilot career topics. Subscribe to our newsletter to get invites.', open: false },
//   //     { q: 'Can I book a consultation for a family member?', a: 'Absolutely. Parents and guardians are encouraged to join too. We regularly counsel families together on aviation career planning.', open: false },
//   //   ];


//   //   saveToGoogleSheet(): void {

//   //   const formData = {
//   //     name: this.form.name,
//   //     email: this.form.email,
//   //     phone: this.form.phone,
//   //     education: this.form.education,
//   //     interest: this.form.interest,
//   //     message: this.form.message
//   //   };

//   //   this.http.post(
//   //     'https://script.google.com/home/projects/14KVgn_ZlHnggr8pgnTzK-nK77Ref9ARu5cxfN8nF8NxfM43grizOyIwL/edit',
//   //     formData
//   //   ).subscribe({
//   //     next: (res) => {
//   //       console.log('Saved to Google Sheet', res);
//   //     },
//   //     error: (err) => {
//   //       console.error('Google Sheet Error:', err);
//   //     }
//   //   });
    

//   // }

//   // // submitForm(): void {

//   // // if (
//   // // !this.form.name ||
//   // // !this.form.email ||
//   // // !this.form.phone ||
//   // // !this.form.education ||
//   // // !this.form.interest ||
//   // // !this.form.message
//   // // ) {
//   // // alert('Please fill all required fields');
//   // // return;
//   // // }

//   // // this.loading = true;

//   // // const leadData = {
//   // // name: this.form.name,
//   // // email: this.form.email,
//   // // phone: this.form.phone,
//   // // education: this.form.education,
//   // // interest: this.form.interest,
//   // // message: this.form.message
//   // // };

//   // // this.http.post(
//   // // this.googleScriptUrl,
//   // // JSON.stringify(leadData),
//   // // {
//   // // headers: {
//   // // 'Content-Type': 'application/json'
//   // // }
//   // // }

//   // // ).subscribe({
//   // // next: (response) => {
//   // //   console.log('Lead Saved', response);

//   // //   this.loading = false;
//   // //   this.submitted = true;

//   // //   alert('Thank you! Your enquiry has been submitted.');

//   // //   this.resetForm();
//   // // },
//   // // error: (error) => {
//   // //   console.error(error);

//   // //   this.loading = false;

//   // //   alert('Submission failed. Please try again.');
//   // // }
//   // // });

//   // // }






//   // // submitForm() {

//   // //   this.http.post(
//   // //     this.apiUrl,
//   // //     this.form
//   // //   ).subscribe({
//   // //     next: (res) => {

//   // //       alert('Form submitted successfully');

//   // //     },
//   // //     error: (err) => {

//   // //       alert('Error');

//   // //     }
//   // //   });

//   // // }
//   // // apiUrl = 'http://localhost:3000/api/enquiry';

//   // // submitted = false;
//   // // loading = false;

//   // apiUrl = 'http://localhost:3000/api/enquiry';

//   // submitForm() {

    
//   //   this.loading = true;

//   //   this.http.post(this.apiUrl, this.form).subscribe({

//   //     next: (res) => {

//   //       this.loading = false;

//   //       // Hide form and show success message
//   //       this.submitted = true;

//   //     },

//   //     error: (err) => {

//   //       this.loading = false;

//   //       alert('Something went wrong. Please try again.');

//   //     }

//   //   });

//   // }

//   // resetForm(): void {

//   //   this.form = {
//   //     name: '',
//   //     email: '',
//   //     phone: '',
//   //     interest: '',
//   //     education: '',
//   //     message: ''
//   //   };

//   //   this.submitted = false;

//   // }
//   // // submitForm(): void {

//   // //   if (
//   // //     !this.form.name ||
//   // //     !this.form.email ||
//   // //     !this.form.phone ||
//   // //     !this.form.education ||
//   // //     !this.form.interest ||
//   // //     !this.form.message
//   // //   ) {
//   // //     alert('Please fill all required fields');
//   // //     return;
//   // //   }

//   // //   this.loading = true;

//   // //   emailjs.send(
//   // //     'service_m3kqppq',
//   // //     'template_34h9wff',
//   // //     {
//   // //       name: this.form.name,
//   // //       email: this.form.email,
//   // //       phone: this.form.phone,
//   // //       education: this.form.education,
//   // //       interest: this.form.interest,
//   // //       message: this.form.message
//   // //     },
//   // //     'Bu6CSxHm7MCX8DEnr'
//   // //   )
//   // //   .then(() => {

//   // //     this.loading = false;
//   // //     this.submitted = true;

//   // //     alert('Enquiry submitted successfully!');

//   // //     this.resetForm();

//   // //   })
//   // //   .catch((error) => {

//   // //     console.error(error);

//   // //     this.loading = false;

//   // //     alert('Email sending failed.');

//   // //   });

//   // // }







//   // // submitForm(): void {

//   // //   if (
//   // //     !this.form.name ||
//   // //     !this.form.email ||
//   // //     !this.form.phone ||
//   // //     !this.form.education ||
//   // //     !this.form.interest ||
//   // //     !this.form.message
//   // //   ) {
//   // //     alert('Please fill all required fields');
//   // //     return;
//   // //   }

//   // //   this.loading = true;

//   // //   emailjs.send(
//   // //     'service_m3kqppq',
//   // //     'template_34h9wff',
//   // //     {
//   // //       name: this.form.name,
//   // //       email: this.form.email,
//   // //       phone: this.form.phone,
//   // //       education: this.form.education,
//   // //       interest: this.form.interest,
//   // //       message: this.form.message
//   // //     },
//   // //     'Bu6CSxHm7MCX8DEnr'
//   // //   )
//   // //   .then((response) => {

//   // //     console.log('SUCCESS!', response);

//   // //     this.loading = false;
//   // //     this.submitted = true;

//   // //   })
//   // //   .catch((error) => {

//   // //     console.error('FAILED...', error);

//   // //     this.loading = false;

//   // //     alert('Email sending failed. Check console for details.');

//   // //   });

//   // // }


//   //  toggleFaq(index: number): void {

//   //   this.faqs.forEach((faq, i) => {

//   //     if (i === index) {
//   //       faq.open = !faq.open; // Toggle clicked FAQ
//   //     } else {
//   //       faq.open = false; // Close all others
//   //     }

//   //   });

//   // }


    
//   import { Component } from '@angular/core';
//   import { CommonModule } from '@angular/common';
//   import { FormsModule, NgForm } from '@angular/forms';
//   import { HttpClient, HttpClientModule } from '@angular/common/http';
//   import emailjs from '@emailjs/browser';




//   @Component({
//     selector: 'app-contact',
//     standalone: true,
//     imports: [CommonModule, FormsModule, HttpClientModule,],
//     templateUrl: './contact.component.html',
//     styleUrls: ['./contact.component.scss']
//   })
//   export class ContactComponent {
//     constructor(private http: HttpClient) {}
//   openLink(url: string): void {
//     window.open(url, '_blank');
//   }

//       form = {
//         name: '',
//         email: '',
//         phone: '',
//       interest: [] as string[],
//         education: '',
//         message: ''
//       };

//     submitted = false;
//     loading = false;
//     googleScriptUrl = 'https://script.google.com/macros/s/KfycbxSPU03-meGmoEDk9V0WQl-Ig8YAFmjMKidcjJoK_eQOiPWu1n4bswanNz1j8FsOdLTAKfycbxCXk4vhiEFPHLXs3c1XziRoEyUQyXJ8UsICdvKnuMuCCaFxiGvJn7rqGsKzfMZFtz1/exec';

//     interests = ['CPL Training Guidance', 'DGCA Exam Help', 'School Selection', 'Flight Abroad', 'Financial Planning', 'Career Counseling', 'Other'];

//     contactItems = [
//       {
//         icon: '📞',
//         title: 'Call Us',
//         value: '+91  7796240277',
//         sub: 'Mon–Sat, 9 AM – 7 PM IST',
//         link: 'tel:+77962402779'
//       },
//       {
//         icon: '📧',
//         title: 'Email',
//         value: 'admin@theaceaviator.com',
//         sub: 'Reply within 24 hours',
//         link: 'mailto:admin@theaceaviator.com'
//       },
//       {
//         icon: '📍',
//         title: 'Visit Us',
//         value: 'Mumbai, Dadar 400014',
//         sub: 'By appointment only',
//         link: '#map'
//       },

//   { icon: '💬', title: 'WhatsApp', value: '+91 7796240277', sub: 'Fastest Response', link: 'https://wa.me/917796240277?text=Hello!%20I%20am%20interested%20in%20pilot%20training.%0A%0ATo%20help%20you%20better,%20please%20find%20my%20details%20below:%0A%0A1.%20Full%20Name:%20%0A2.%20Age:%20%0A3.%20Current%20Education%20Qualification:%20%0A4.%20Science%20or%20Non-Science%20Background:%20%0A5.%20City%20and%20State:%20%0A6.%20Preferred%20Career%20Path%20(CPL/ATPL/Cabin%20Crew,%20etc.):%20%0A7.%20When%20would%20you%20like%20to%20start%20your%20training?' }
//     ];

//     socialLinks = [
//       { icon: '📺', platform: 'YouTube', handle: '@Theaceaviator', url: '#', color: '#FF0000' },
//       { icon: '📸', platform: 'Instagram', handle: '@acepilot_india', url: '#', color: '#E1306C' },
//       { icon: '💼', platform: 'LinkedIn', handle: '@theaceaviator', url: '#', color: '#0A66C2' },
//       { icon: '🐦', platform: 'Twitter/X', handle: '@Theaceaviator', url: '#', color: '#1DA1F2' },
//     ];

//     faqs = [
//       { q: 'How long does the free consultation take?', a: 'Our free consultation sessions are typically 30–45 minutes long, conducted via video call or phone, with one of our ATPL-certified mentors.', open: false },
//       { q: 'Is the consultation truly free?', a: 'Yes, 100% free. No hidden charges, no sales pressure. Our goal is to genuinely help you plan your pilot career.', open: false },
//       { q: 'Do you offer group counseling sessions?', a: 'Yes! We conduct monthly group webinars on pilot career topics. Subscribe to our newsletter to get invites.', open: false },
//       { q: 'Can I book a consultation for a family member?', a: 'Absolutely. Parents and guardians are encouraged to join too. We regularly counsel families together on aviation career planning.', open: false },
//     ];


//     saveToGoogleSheet(): void {

//     const formData = {
//       name: this.form.name,
//       email: this.form.email,
//       phone: this.form.phone,
//       education: this.form.education,
//       interest: this.form.interest,
//       message: this.form.message
//     };

//     this.http.post(
//       'https://script.google.com/home/projects/14KVgn_ZlHnggr8pgnTzK-nK77Ref9ARu5cxfN8nF8NxfM43grizOyIwL/edit',
//       formData
//     ).subscribe({
//       next: (res) => {
//        console.log('FORM DATA:', this.form);
//       },
//       error: (err) => {
//         console.log(err.error);
//       }
//     });
    
    

//   }

//   // submitForm(): void {

//   // if (
//   // !this.form.name ||
//   // !this.form.email ||
//   // !this.form.phone ||
//   // !this.form.education ||
//   // !this.form.interest ||
//   // !this.form.message
//   // ) {
//   // alert('Please fill all required fields');
//   // return;
//   // }

//   // this.loading = true;

//   // const leadData = {
//   // name: this.form.name,
//   // email: this.form.email,
//   // phone: this.form.phone,
//   // education: this.form.education,
//   // interest: this.form.interest,
//   // message: this.form.message
//   // };

//   // this.http.post(
//   // this.googleScriptUrl,
//   // JSON.stringify(leadData),
//   // {
//   // headers: {
//   // 'Content-Type': 'application/json'
//   // }
//   // }

//   // ).subscribe({
//   // next: (response) => {
//   //   console.log('Lead Saved', response);

//   //   this.loading = false;
//   //   this.submitted = true;

//   //   alert('Thank you! Your enquiry has been submitted.');

//   //   this.resetForm();
//   // },
//   // error: (error) => {
//   //   console.error(error);

//   //   this.loading = false;

//   //   alert('Submission failed. Please try again.');
//   // }
//   // });

//   // }






//   // submitForm() {

//   //   this.http.post(
//   //     this.apiUrl,
//   //     this.form
//   //   ).subscribe({
//   //     next: (res) => {

//   //       alert('Form submitted successfully');

//   //     },
//   //     error: (err) => {

//   //       alert('Error');

//   //     }
//   //   });

//   // }
//   // apiUrl = 'http://localhost:3000/api/enquiry';

//   // submitted = false;
//   // loading = false;
//   apiUrl =
// 'http://localhost/THE%20ACE%20AVIATOR/backend/Connection/server.php';

// submitForm() {

//   console.log('FORM DATA:', this.form);

//     this.http.post<any>(this.apiUrl, this.form).subscribe({

//       next: (res) => {

//         console.log('SUCCESS RESPONSE:', res);

//         if (res.success) {

//           alert('Form Submitted Successfully');

//           this.resetForm();

//         } else {

//           alert(res.message);

//         }

//       },

//     error: (err) => {

//       console.log('FULL ERROR:', err);

//       console.log('STATUS:', err.status);

//       console.log('ERROR BODY:', err.error);

//     }

//   });

// }

// resetForm() {

//   this.form = {
//     name: '',
//     email: '',
//     phone: '',
//     education: '',
//     interest: [],
//     message: ''
//   };

// }
//   // submitForm(): void {

//   //   if (
//   //     !this.form.name ||
//   //     !this.form.email ||
//   //     !this.form.phone ||
//   //     !this.form.education ||
//   //     !this.form.interest ||
//   //     !this.form.message
//   //   ) {
//   //     alert('Please fill all required fields');
//   //     return;
//   //   }

//   //   this.loading = true;

//   //   emailjs.send(
//   //     'service_m3kqppq',
//   //     'template_34h9wff',
//   //     {
//   //       name: this.form.name,
//   //       email: this.form.email,
//   //       phone: this.form.phone,
//   //       education: this.form.education,
//   //       interest: this.form.interest,
//   //       message: this.form.message
//   //     },
//   //     'Bu6CSxHm7MCX8DEnr'
//   //   )
//   //   .then(() => {

//   //     this.loading = false;
//   //     this.submitted = true;

//   //     alert('Enquiry submitted successfully!');

//   //     this.resetForm();

//   //   })
//   //   .catch((error) => {

//   //     console.error(error);

//   //     this.loading = false;

//   //     alert('Email sending failed.');

//   //   });

//   // }







//   // submitForm(): void {

//   //   if (
//   //     !this.form.name ||
//   //     !this.form.email ||
//   //     !this.form.phone ||
//   //     !this.form.education ||
//   //     !this.form.interest ||
//   //     !this.form.message
//   //   ) {
//   //     alert('Please fill all required fields');
//   //     return;
//   //   }

//   //   this.loading = true;

//   //   emailjs.send(
//   //     'service_m3kqppq',
//   //     'template_34h9wff',
//   //     {
//   //       name: this.form.name,
//   //       email: this.form.email,
//   //       phone: this.form.phone,
//   //       education: this.form.education,
//   //       interest: this.form.interest,
//   //       message: this.form.message
//   //     },
//   //     'Bu6CSxHm7MCX8DEnr'
//   //   )
//   //   .then((response) => {

//   //     console.log('SUCCESS!', response);

//   //     this.loading = false;
//   //     this.submitted = true;

//   //   })
//   //   .catch((error) => {

//   //     console.error('FAILED...', error);

//   //     this.loading = false;

//   //     alert('Email sending failed. Check console for details.');

//   //   });

//   // }


//   toggleFaq(index: number): void {

//     this.faqs.forEach((faq, i) => {

//       if (i === index) {
//         faq.open = !faq.open; // Toggle clicked FAQ
//       } else {
//         faq.open = false; // Close all others
//       }

//     });

//   }
 
// toggleInterest(opt: string): void {

//   const index = this.form.interest.indexOf(opt);

//   if (index > -1) {
//     this.form.interest.splice(index, 1);
//   } else {
//     this.form.interest.push(opt);
//   }

// }





    
//   }






//   // }




import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent {
  
apiUrl = 'http://127.0.0.1/THE ACE AVIATOR/backend/Connection/server.php';
  
  submitted = false;
  loading = false;

  form = {
    name: '',
    email: '',
    phone: '',
    interest: [] as string[],
    education: '',
    message: ''
  };

  interests = [
    'CPL Training Guidance', 'DGCA Exam Help', 'School Selection', 
    'Flight Abroad', 'Financial Planning', 'Career Counseling', 'Other'
  ];

  contactItems = [
    { icon: '📞', title: 'Call Us', value: '+91 7796240277', sub: 'Mon–Sat, 9 AM – 7 PM IST', link: 'tel:+77962402779' },
    { icon: '📧', title: 'Email', value: 'admin@theaceaviator.com', sub: 'Reply within 24 hours', link: 'mailto:admin@theaceaviator.com' },
    { icon: '📍', title: 'Visit Us', value: 'Mumbai, Dadar 400014', sub: 'By appointment only', link: '#map' },
    { icon: '💬', title: 'WhatsApp', value: '+91 7796240277', sub: 'Fastest Response', link: 'https://wa.me/917796240277?text=Hello!%20I%20am%20interested%20in%20pilot%20training.%0A%0ATo%20help%20you%20better,%20please%20find%20my%20details%20below:%0A%0A1.%20Full%20Name:%20%0A2.%20Age:%20%0A3.%20Current%20Education%20Qualification:%20%0A4.%20Science%20or%20Non-Science%20Background:%20%0A5.%20City%20and%20State:%20%0A6.%20Preferred%20Career%20Path%20(CPL/ATPL/Cabin%20Crew,%20etc.):%20%0A7.%20When%20would%20you%20like%20to%20start%20your%20training?' }
  ];

  // socialLinks = [
  //   { icon: '📺', platform: 'YouTube', handle: '@Theaceaviator', url: '#', color: '#FF0000' },
  //   { icon: '📸', platform: 'Instagram', handle: '@acepilot_india', url: '#', color: '#E1306C' },
  //   { icon: '💼', platform: 'LinkedIn', handle: '@theaceaviator', url: '#', color: '#0A66C2' },
  //   { icon: '🐦', platform: 'Twitter/X', handle: '@Theaceaviator', url: '#', color: '#1DA1F2' }
  // ];

  faqs = [
    { q: 'How long does the free consultation take?', a: 'Our free consultation sessions are typically 30–45 minutes long, conducted via video call or phone, with one of our ATPL-certified mentors.', open: false },
    { q: 'Is the consultation truly free?', a: 'Yes, 100% free. No hidden charges, no sales pressure. Our goal is to genuinely help you plan your pilot career.', open: false },
    { q: 'Do you offer group counseling sessions?', a: 'Yes! We conduct monthly group webinars on pilot career topics. Subscribe to our newsletter to get invites.', open: false },
    { q: 'Can I book a consultation for a family member?', a: 'Absolutely. Parents and guardians are encouraged to join too. We regularly counsel families together on aviation career planning.', open: false }
  ];
  

  // constructor(private http: HttpClient) {}
  constructor(
  private http: HttpClient,
  private route: ActivatedRoute
) {}
  
socialLinks = [
    {
      icon: '📺',
      platform: 'YouTube',
      handle: '@Theaceaviator',
      url: 'https://www.youtube.com/@Aviator_vinay',
      color: '#FF0000'
    },
    {
      icon: '📸',
      platform: 'Instagram',
      handle: '@acepilot_india',
      url: 'https://www.instagram.com/theaceaviator?igsh=MW5oanRmM3IzNzkyMg==',
      color: '#E1306C'
    },
    {
      icon: '💼',
      platform: 'LinkedIn',
      handle: '@theaceaviator',
      url: '',
      color: '#0A66C2'
    },
    {
      icon: '🐦',
      platform: 'Twitter/X',
      handle: '@Theaceaviator',
      url: '',
      color: '#1DA1F2'
    }
  ];


  openLink(url: string): void {
    window.open(url, '_blank');
  }

 submitForm() {
    this.loading = true;
    console.log('FORM DATA:', this.form);

    this.http.post(this.apiUrl, this.form, { responseType: 'text' }).subscribe({
      next: (res) => {
        this.loading = false;
        console.log('RAW RESPONSE:', res);
        try {
          const data = JSON.parse(res);
          console.log('JSON RESPONSE:', data);
          
          if (data.success) {
            // This triggers your HTML glass-card to show up on the page
            this.submitted = true; 
            
            // Clear out form inputs for the next submission without closing the success window
            this.form = {
              name: '',
              email: '',
              phone: '',
              education: '',
              interest: [],
              message: ''
            };
          } else {
            alert(data.message || 'Required fields missing');
          }
        } catch (e) {
          console.log('INVALID JSON RESPONSE:', res);
          alert('Server error occurred. Please try again.');
        }
      },
      error: (err) => {
        this.loading = false;
        console.log('FULL ERROR:', err);
        alert('Submission Failed. Check console.');
      }
    });
  this.submitted = true;

setTimeout(() => {
  const scrollOffset = window.innerWidth <= 768 ? -1350 : -450;

  window.scrollBy({
    top: scrollOffset,
    behavior: 'smooth'
  });
}, 500);

  }
  resetForm() {
    // Completely clear out inputs and reset visibility flags back to default
    this.form = {
      name: '',
      email: '',
      phone: '',
      education: '',
      interest: [],
      message: ''
    };
    this.submitted = false; // Hides the success card and displays the original form inputs again
  }
  

  toggleFaq(index: number): void {
    this.faqs.forEach((faq, i) => {
      if (i === index) {
        faq.open = !faq.open; 
      } else {
        faq.open = false; 
      }
    });
  }
  

  toggleInterest(opt: string): void {
    const index = this.form.interest.indexOf(opt);
    if (index > -1) {
      this.form.interest.splice(index, 1);
    } else {
      this.form.interest.push(opt);
    }
  }
  // constructor(private route: ActivatedRoute) {}
 ngAfterViewInit() {
  this.route.fragment.subscribe(fragment => {
    if (fragment === 'consultation-form') {

      setTimeout(() => {
        const element = document.getElementById('consultation-form');

        if (element) {

          const extraOffset = window.innerWidth <= 768 ? +800 : -50;

          const y =
            element.getBoundingClientRect().top +
            window.pageYOffset +
            extraOffset;

          window.scrollTo({
            top: y,
            behavior: 'smooth'
          });
        }
      }, 800);

    }
  });
}

}


