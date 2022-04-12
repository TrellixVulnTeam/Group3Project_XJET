import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FAQsComponent } from './faqs/faqs.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { TermsComponent } from './terms/terms.component';
import { PersonalacctComponent } from './personalacct/personalacct.component';
import { BusinessacctComponent } from './businessacct/businessacct.component';
import { Chefsignup1Component } from './chefsignup1/chefsignup1.component';
import { ChefemailcompleteComponent } from './chefemailcomplete/chefemailcomplete.component';
import { ChefloginsetupComponent } from './chefloginsetup/chefloginsetup.component';
import { ChefprofilesetupComponent } from './chefprofilesetup/chefprofilesetup.component';
import { CreatemenuComponent } from './createmenu/createmenu.component';
import { ChefviewprofileComponent } from './chefviewprofile/chefviewprofile.component';
import { ChefeditprofileComponent } from './chefeditprofile/chefeditprofile.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { CustomerprofileComponent } from './customerprofile/customerprofile.component';
import { HomecookedfoodComponent } from './homecookedfood/homecookedfood.component';
import { EnterZipCodeComponent } from './enter-zip-code/enter-zip-code.component';
import { SelectCuisineComponent } from './select-cuisine/select-cuisine.component';
import { ThankYouForOrderComponent } from './thank-you-for-order/thank-you-for-order.component';
import { CancelOrderComponent } from './cancel-order/cancel-order.component';
import { OrderCancelledComponent } from './order-cancelled/order-cancelled.component';
import { FindChefComponent } from './find-chef/find-chef.component';
import { SelectMenuComponent } from './select-menu/select-menu.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { PersonalsignComponent } from './personalsign/personalsign.component';
import { CustomerviewchefpageComponent } from './customerviewchefpage/customerviewchefpage.component';
import { CustomerwitechefreviewComponent } from './customerwitechefreview/customerwitechefreview.component';
import { CustomerreviewsuccessComponent } from './customerreviewsuccess/customerreviewsuccess.component';
import { ChefSignupDataService } from 'src/network/dataServices/ChefSignupDataService';
import { FooterComponent } from './footer/footer.component';
import { AuthGuard } from './auth/auth.gaurd';
import { ChefAuthGuard } from './auth/chefAuth.gaurd';
import { LoaderInterceptor } from './loader.interceptor';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    FAQsComponent,
    PrivacypolicyComponent,
    TermsComponent,
    PersonalacctComponent,
    BusinessacctComponent,
    Chefsignup1Component,
    ChefemailcompleteComponent,
    ChefloginsetupComponent,
    ChefprofilesetupComponent,
    CreatemenuComponent,
    ChefviewprofileComponent,
    ChefeditprofileComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    CustomerprofileComponent,
    HomecookedfoodComponent,
    EnterZipCodeComponent,
    SelectCuisineComponent,
    ThankYouForOrderComponent,
    CancelOrderComponent,
    OrderCancelledComponent,
    FindChefComponent,
    SelectMenuComponent,
    OrderSummaryComponent,
    PersonalsignComponent,
    CustomerviewchefpageComponent,
    CustomerwitechefreviewComponent,
    CustomerreviewsuccessComponent,
    FooterComponent,
    LoaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [ChefSignupDataService,AuthGuard,ChefAuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
